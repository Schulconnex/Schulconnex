---
title: Schnittstellendefinition
---

# Schnittstellendefinition

## Allgemeine Festlegungen

###	Standard-Anfragen (Default Requests)

Der Webserver bietet Webclients die Möglichkeit, durch standardisierte HTTP-Methoden gespeicherte Ressourcen beziehungsweise Entitäten abzurufen und/oder zu bearbeiten.

#### GET

`GET` ruft eine oder mehrere Entitäten/Ressourcen vollständig oder teilweise ab. Der `GET`-Anfrage können zusätzliche Informationen mitgegeben werden, die der Webserver verarbeiten soll. Diese URL-Parameter werden an die URL angehängt.

#### POST

Per `POST` können große Datenmengen zum Webserver gesendet werden. Dabei werden die Parameter nicht in die URL, sondern in den HTTP-Body geschrieben. `POST` wird oft bei Formularen benutzt, um mehrere Daten gleichzeitig zu senden beziehungsweise Entitäten zu erstellen.

#### PUT

PUT funktioniert ähnlich wie `POST` und dient dazu, Dateien auf dem Webserver abzulegen beziehungsweise bereits existierende Entitäten zu verändern.

###	Standard-Rückgaben (Default Responses)

Nachdem der Webserver eine Anfrage erhalten und interpretiert hat, wird mit einer HTTP-Response geantwortet. Eine HTTP-Response besitzt einen HTTP-Status-Code. Die erste Ziffer des Status-Codes gibt die Kategorie der HTTP-Response an:

- `1xx`: Informative Antworten
- `2xx`: Erfolg
- `3xx`: Weiterleitung
- `4xx`: Client-Fehler
- `5xx`: Server-Fehler

##	Erfolgreiche Ausführung

### `200` (Erfolgreiche Ausführung)

Die angeforderten Daten werden mit der HTTP-Response übermittelt, beispielsweise werden die Daten einer Person im JSON-Datenformat übergeben.

## Daten unverändert

### `304` (Not Modified)

Die angeforderten Daten wurden seit dem letzten Zugriff nicht verändert und nicht erneut ausgeliefert. Dieser Rückgabewert erfolgt nur dann, wenn beim vorhergehenden Zugriff auf den Datensatz ein ETag geliefert wurde und beim erneuten Zugriff If-None-Match mit dem ETag im HTTP-Anfrage-Header benutzt wurde sowie der aktuelle ETag des Servers und der ETag im HTTP-Anfrage-Header übereinstimmen.

## Teilweise Fehlerhafte Verarbeitung

Bei einer Anfrage an den Webserver werden für die angeforderte Antwort vom Webserver Informationen intern und / oder von registrierten Diensten angefordert und verarbeitet. Unter Umständen kann es zu dem Zustand kommen, dass eines der für die Antwort benötigten Informationen Fehlerhaft oder nicht Erreichbar ist. Standardmäßig werden nur die Informationen für die Antwort verarbeitet, welche erfolgreich angefordert werden konnten.

Sofern die Schnittstelle es ermöglicht, kann bei der Anfrage das Ausliefern der Fehlerinformationen angefordert werden. Diesbezüglich muss es in der Antwort-Nutzlast signalisiert werden.

Nachfolgend werden die Möglichkeiten der Signalisierung, dass die Nutzdaten der Antwort Entitäten enthalten, die vom erwarteten Datenmodell abweichen gelistet.

<!-- ### `218` (Das ist in Ordnung)

HTTP-Antwortstatuscode 218 This is fine ist eine inoffizielle HTTP-Antwort, die vom Apache-Webserver verwendet wird. Ähnlich wie beim Apache-Webserver wird er als Fehlerbedingung verwendet, um zu signalisieren, dass die Nutzdaten der Antwort Entitäten enthalten, die vom erwarteten Datenmodell abweichen. [[218 on HTTP.dev]](https://http.dev/218) [[218 on Wikipedia]](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#218) -->

<!-- ### `422` (Nicht verarbeitbare Entität)

Mit dem Statuscode 422 Unprocessable Entity wird darauf hingewiesen, dass die Anfrage zwar syntaktisch korrekt war, aber inhaltliche Fehler vorliegen, die eine vollständige Verarbeitung verhindern. Kontextuell ähnlich wird für eine Abtwort-Nutzlast darauf hingewiesen, dass die Nutzdaten der Antwort Entitäten enthalten, die vom erwarteten Datenmodell abweichen. [[422 on IETF HTTP Working Group]](https://httpwg.org/specs/rfc9110.html#status.422) [[422 on mdn]](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422) -->

### Custom-Header `Content-Partial-Error` (Nicht verarbeitbare Entität)

Mit dem Custom-Header Content-Partial-Error wird in der Antwort-Nutzlast mit dem Wert `TRUE` darauf hingewiesen, dass die Anfrage zwar syntaktisch korrekt war, aber inhaltliche Fehler vorliegen, die eine vollständige Verarbeitung verhindern. Kontextuell ähnlich wird für eine Abtwort-Nutzlast darauf hingewiesen, dass die Nutzdaten der Antwort Entitäten enthalten, die vom erwarteten Datenmodell abweichen. [[5]](https://www.rfc-editor.org/rfc/rfc6648)
