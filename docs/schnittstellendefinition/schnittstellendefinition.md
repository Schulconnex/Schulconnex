---
tags:
- Verbindlich
---
# Schnittstellendefinition

## Allgemeine Festlegungen

###	Standard-Anfragen (Default Requests)

Der Webserver bietet Webclients die Möglichkeit, durch standardisierte HTTP-Methoden
gespeicherte Ressourcen beziehungsweise Entitäten abzurufen und/oder zu bearbeiten.

#### GET

`GET` ruft eine oder mehrere Entitäten/Ressourcen vollständig oder teilweise ab.
Der `GET`-Anfrage können zusätzliche Informationen mitgegeben werden, die der Webserver
verarbeiten soll. Diese URL-Parameter werden an die URL angehängt.

#### POST

Per `POST` können große Datenmengen zum Webserver gesendet werden. Dabei werden
die Parameter nicht in die URL, sondern in den HTTP-Body geschrieben.
`POST` wird oft benutzt, um mehrere Daten gleichzeitig zu senden oder um
Entitäten zu erstellen.

#### PUT

PUT funktioniert ähnlich wie `POST` und dient dazu, Dateien auf dem Webserver abzulegen
beziehungsweise bereits existierende Entitäten zu verändern.

###	Standard-Rückgaben (Default Responses)

Nachdem der Webserver eine Anfrage erhalten und interpretiert hat, wird mit einer
HTTP-Response geantwortet. Eine HTTP-Response besitzt einen HTTP-Status-Code.
Die erste Ziffer des Status-Codes gibt die Kategorie der HTTP-Response an:

- `1xx`: Informative Antworten
- `2xx`: Erfolg
- `3xx`: Weiterleitung
- `4xx`: Client-Fehler
- `5xx`: Server-Fehler
