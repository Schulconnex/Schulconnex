---
title: Bündelung mehrerer API-Anfragen
tags: 
- Informativ
---
# Bündelung mehrerer API-Anfragen

Wenn ein Quellsystem eine große Zahl von API-Anfragen an den Server schickt, kann es zu Übertragungsengpässen kommen, da bei HTTP 1.x für jeden Aufruf eine eigene Verbindung aufgebaut wird, was einen hohen Organisationsoverhead verursacht.

Eine solche Situation kann beispielsweise auftreten, wenn am Anfang oder am Ende eines Schuljahres die Personen- und Personenkontextdaten aller Lehrenden und Lernenden einer großen Schule, sowie deren Zugehörigkeit zu Gruppen, synchronisiert werden sollen.

## HTTP/2 oder HTTP/3

Ein Betreiber eines Schulconnex-Servers kann statt oder zusätzlich zu HTTP/1.x als Protokoll auch HTTP/2 oder HTTP/3 anbieten. Beide Protokolle erlauben die Zusammenfassung (Multiplexing) mehrerer API Anfragen über dieselbe Verbindung, so dass der zusätzliche Zeitaufwand zum Verbindungsaufbau bei mehreren Anfragen entfällt.

Ob ein Schulconnex-Server die Protokolle HTTP/2 oder HTTP/3 mit Multiplexing unterstützt, ist beim jeweiligen Betreiber des Schulconnex-Servers nachzufragen.

## JSON-Batching

Eine weitere Möglichkeit für Betreiber eines Schulconnex-Servers eine große Menge von API-Aufrufen mit wenigen Anfragen zu ermöglichen, ist die Bereitstellung eines Batch-Endpunktes, wie er beispielsweise bei [Microsoft Graph](https://learn.microsoft.com/en-us/graph/json-batching) beschrieben ist.

Dieser API-Endpunkt hat den Namen `$batch`, also beispielsweise `https://schulconnex.test/v1/$batch` und erlaubt als HTTP-Methode nur POST. 

Der Body der Anfrage besteht aus dem JSON-Objekt `requests`, das eine Liste von API-Aufrufen enthält.

Jeder Aufruf in der Liste enthält eine ID, um den Aufruf zu identifizieren, die URL der aufgerufenen API ohne Server- und Versionsnamen (also beispielsweise `/personenkontext/123454/beziehungen` zum Zugriff auf Beziehungen zu Personenkontext 123454), die zu verwendende HTTP-Methode (in dem Beispiel `POST`, um eine Beziehung anzulegen, oder `GET`, um existierende Beziehungen auszulesen), gefolgt von einem JSON-Objekt mit dem Body des Requests bei `POST-` oder `DELETE-`Aufrufen.

<details> 
<summary>Beispiel JSON BATCH Request (einklappen/ausklappen)</summary>
```jsx
{
  "requests": [
    {
      "id": "1",
      "url": "/v1/personen",
      "method": "POST",
      "headers": {
        "Content-Type": "application/json"
      },
      "body": {
        "referrer": "125",
        "name": {
          "familienname": "von Musterfrau",
          "vorname": "Natalie",
          "initialenfamilienname": "M",
          "initialenvorname": "N",
          "rufname": "Nat",
          "sortierindex": "4"
        },
        "geburt": {
          "datum": "2018-05-01",
          "geburtsort": "Berlin, Deutschland"
        },
        "geschlecht": "w",
        "lokalisierung": "de",
        "vertrauensstufe": "Teil",
        "auskunftssperre": "Nein"
      }
    },
    {
      "id": "2",
      "url": "/v1/personen",
      "method": "POST",
      "headers": {
        "Content-Type": "application/json"
      },
      "body": {
        "referrer": "126",
        "name": {
          "familienname": "Naur",
          "vorname": "Sebastian ",
          "initialenfamilienname": "N",
          "initialenvorname": "S",
          "rufname": "Bastian",
          "sortierindex": "0"
        },
        "geburt": {
          "datum": "2018-02-04",
          "geburtsort": "Hamburh, Deutschland"
        },
        "geschlecht": "m",
        "lokalisierung": "de",
        "vertrauensstufe": "Teil",
        "auskunftssperre": "Nein"
      }
    },
    {
      "id": "3",
      "url": "/v1/personen",
      "method": "POST",
      "headers": {
        "Content-Type": "application/json"
      },
      "body": {
        "referrer": "127",
        "name": {
          "familienname": "Boschke",
          "vorname": "Susanne",
          "initialenfamilienname": "B",
          "initialenvorname": "S",
          "rufname": "Susi",
          "sortierindex": "0"
        },
        "geburt": {
          "datum": "2018-07-11",
          "geburtsort": "Berlin, Deutschland"
        },
        "geschlecht": "w",
        "lokalisierung": "de",
        "vertrauensstufe": "Teil",
        "auskunftssperre": "Nein"
      }
    }
  ]
}
```
</details>

Die Resultate der API-Aufrufe werden dann vom Server in einem Batch-Response-Objekt zurückgeliefert.


<details> 
<summary>Beispiel JSON BATCH Response (einklappen/ausklappen)</summary>
```jsx
{
  "responses": [
    {
      "id": "1",
      "status": 201,
      "headers": {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json;charset=utf-8"
      },
      "body": {
        "id": "b56a5848-4bcc-4936-b43c-56cf55fd7965",
        "mandant": "58f45270-8e54-40c6-a212-980307fc19be",
        "revision": "1",
        "referrer": "125",
        "name": {
          "familienname": "von Musterfrau",
          "vorname": "Natalie",
          "initialenfamilienname": "M",
          "initialenvorname": "N",
          "rufname": "Nat",
          "sortierindex": "4"
        },
        "geburt": {
          "datum": "2018-05-01",
          "geburtsort": "Berlin, Deutschland"
        },
        "geschlecht": "w",
        "lokalisierung": "de",
        "vertrauensstufe": "Teil",
        "auskunftssperre": "Nein"
      }
    },
    {
      "id": "2",
      "status": 201,
      "headers": {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json;charset=utf-8"
      },
      "body": {
        "id": "c59a96ce-2613-47b8-b365-08ff3eb3d0ee",
        "mandant": "58f45270-8e54-40c6-a212-980307fc19be",
        "revision": "1",
        "referrer": "126",
        "name": {
          "familienname": "Naur",
          "vorname": "Sebastian ",
          "initialenfamilienname": "N",
          "initialenvorname": "S",
          "rufname": "Bastian",
          "sortierindex": "0"
        },
        "geburt": {
          "datum": "2018-02-04",
          "geburtsort": "Hamburh, Deutschland"
        },
        "geschlecht": "m",
        "lokalisierung": "de",
        "vertrauensstufe": "Teil",
        "auskunftssperre": "Nein"
      }
    },
    {
      "id": "3",
      "status": 201,
      "headers": {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json;charset=utf-8"
      },
      "body": {
        "id": "4f799ba2-eb43-4230-ad64-083d72488caa",
        "mandant": "58f45270-8e54-40c6-a212-980307fc19be",
        "revision": "1",
        "referrer": "127",
        "name": {
          "familienname": "Boschke",
          "vorname": "Susanne",
          "initialenfamilienname": "B",
          "initialenvorname": "S",
          "rufname": "Susi",
          "sortierindex": "0"
        },
        "geburt": {
          "datum": "2018-07-11",
          "geburtsort": "Berlin, Deutschland"
        },
        "geschlecht": "w",
        "lokalisierung": "de",
        "vertrauensstufe": "Teil",
        "auskunftssperre": "Nein"
      }
    }
  ]
}
```
</details>

Es ist dem Betreiber eines Schulconnex-Servers freigestellt, ob ein API-Endpunkt `$batch` bereitgestellt wird. 

Ein solcher API-Endpunkt erfordert, anders als HTTP/2 oder HTTP/3 Multiplexing, mehr Aufwand in der Bereitstellung. Er ermöglicht dem Schulconnex-Server jedoch weitere Optimierungen, zusätzlich zur Einsparung beim Verbindungsaufbau, beispielsweise durch die interne Zusammenfassung mehrerer Personenkontexte in einem einzelnen Datenbankaufruf.

## Strukturierung mehrerer Anfragen

Weder HTTP Multiplexing noch JSON-Batching erlaubt die direkte Nutzung von Rückgabewerten vorheriger Aufrufe. Daher kann beispielsweise nicht in einem Aufruf ein Personendatensatz und ein dazu gehörender Personenkontext erstellt werden, da die ID des Personendatensatz benötigt wird, um den Personenkontext zu erstellen.

Beispielsweise sollten in einem Aufruf erst alle Personendatensätze für eine Schule angelegt werden, die resultierenden IDs gesammelt und anschließend in einem zweiten Aufruf alle Personenkontexte erstellt werden.“

Entsprechend sollte auch mit Gruppen und Gruppenzugehörigkeiten verfahren werden.




