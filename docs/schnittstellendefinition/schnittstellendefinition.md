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
`POST` wird oft bei Formularen benutzt, um mehrere Daten gleichzeitig zu senden
beziehungsweise Entitäten zu erstellen.

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

##	Erfolgreiche Ausführung

### `200` (Erfolgreiche Ausführung)

Die angeforderten Daten werden mit der HTTP-Response übermittelt, beispielsweise werden
die Daten einer Person im JSON-Datenformat übergeben.

### `201` (Erstellt)

Eine neue Ressource wurde erstellt.

## Daten unverändert

### `304` (Not Modified)

Die angeforderten Daten wurden seit dem letzten Zugriff nicht verändert und nicht erneut
ausgeliefert. Dieser Rückgabewert erfolgt nur dann, wenn beim vorhergehenden Zugriff auf
den Datensatz ein ETag geliefert wurde und beim erneuten Zugriff If-None-Match mit dem ETag
im HTTP-Anfrage-Header benutzt wurde sowie der aktuelle ETag des Servers und der ETag
im HTTP-Anfrage-Header übereinstimmen.
