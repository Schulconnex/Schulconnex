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

Die Resultate der API-Aufrufe werden dann vom Server in einem Batch-Response-Objekt zurückgeliefert.

Es ist dem Betreiber eines Schulconnex-Servers freigestellt, ob ein API-Endpunkt `$batch` bereitgestellt wird. 

Ein solcher API-Endpunkt erfordert, anders als HTTP/2 oder HTTP/3 Multiplexing, mehr Aufwand in der Bereitstellung. Er ermöglicht dem Schulconnex-Server jedoch weitere Optimierungen, zusätzlich zur Einsparung beim Verbindungsaufbau, beispielsweise durch die interne Zusammenfassung mehrerer Personenkontexte in einem einzelnen Datenbankaufruf.

## Strukturierung mehrerer Anfragen

Weder HTTP Multiplexing noch JSON-Batching erlaubt die direkte Nutzung von Rückgabewerten vorheriger Aufrufe. Daher kann beispielsweise nicht in einem Aufruf ein Personendatensatz und ein dazu gehörender Personenkontext erstellt werden, da die ID des Personendatensatz benötigt wird, um den Personenkontext zu erstellen.

Beispielsweise sollten in einem Aufruf erst alle Personendatensätze für eine Schule angelegt werden, die resultierenden IDs gesammelt und anschließend in einem zweiten Aufruf alle Personenkontexte erstellt werden.“

Entsprechend sollte auch mit Gruppen und Gruppenzugehörigkeiten verfahren werden.




