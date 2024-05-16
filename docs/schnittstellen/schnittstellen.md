# Schnittstellen für Quellsysteme und Dienste

Die von Schulconnex-Servern bereitgestellten Endpunkte sind als REST-API realisiert. Die spezifischen
Funktionen der einzelnen Endpunkte werden unter „[API-Endpunkte für Dienstanbieter](./api-dienste)“ und
„[API-Endpunkte für Quellsysteme](./api-qs)“ beschrieben.

Allgemein erfolgen Zugriffe auf Ressourcen über die Endpunkte mit Hilfen von CRUD-Operationen
(CREATE, READ, UPDATE und DELETE). Welche Zugriffe jeweils erlaubt sind und welche
HTTP(S)-Methode dabei genutzt werden dürfen, ist bei den Endpunktbeschreibungen im Detail
aufgeführt. Dort werden auch die zu verwendenen JSON-Strukturen beschrieben.

## API-Versionierung

Die URL der Schnittstelle besteht aus einer Base-URL sowie dem eigentlichen Endpunkt.

> **`https://subdomain.domain.org/subpaths/endpunkt`**

Es wird empfohlen, unterschiedliche Versionen der Schnittstelle über unterschiedliche Endpunkte
anzubieten. Die API-Versionierung ermöglicht es den Entwicklern eines Schulconnex-Servers,
Anpassungen an der API zu implementieren und gleichzeitig zu gewährleisten, dass Clients mit
aktiver API-Anbindung weiterhin fehlerfrei funktionieren. Zusätzlich wird gewährleistet, dass
Clients genug Zeit zur Implementierung einer neuen Version der API erhalten.

Die Versionierung der API befindet sich in der URL zur REST-API. Dabei wird die Versionsnummer
der API in der URL als Pfad am Ende der Base-URL mit angegeben.

Beispiel: `base-url/v1/...`, wobei hier „v1“ für die API-Versionsnummer 1.0 steht. Eine
mögliche API-Version 1.1 oder 2.0 wird wie folgt aufgerufen: `base-url/v1-1/...` bzw. `base-url/v2/...`.

Im Folgenden ist ein Beispiel einer Schnittstellen-URL dargestellt.

> **`https://subdomain.domain.org/subpath/v1/organisation-info`**

Die konkrete URL für die Schnittstelle erhalten Sie von dem Betreiber des Schulconnex-Servers.

## Registrierung

Gemäß der Spezifikation OAuth muss ein Dienst oder ein Quellsystem (Client-Anwendung) gegenüber
Schulconnex bekannt sein — diesbezüglich wird die Client-Anwendung über einen organisatorischen
Prozess registriert.

Durch die Registrierung wird dem Quellsystem eine Client-ID und das dazugehörige Client Secret
zur Verfügung gestellt.

## Vorbedingungen der Schnittstelle

Generell gilt für alle Anfragen an die API folgende Vorbedingung:

Jede API Request muss einen Authorization-Header haben. Der Authorization-Header setzt sich aus
`token_type` und dem eigentlichen `access_token` zusammen. Im Kontext der Spezifikation „[OpenID Connect][1]“
muss das Attribut `token_type` den Wert „Bearer” führen.

> Format: `Authorization: {token_type} {access_token}`

> Beispiel: `Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpJ9.e...`

Es wird empfohlen, den zu erwartenden Content-Type explizit als `application/json` anzugeben.
Wird kein Content-Type gesetzt, wird automatisch `application/json` angenommen.

> `Accept: application/json`

[1]: https://openid.net/specs/openid-connect-core-1_0.html
