---
title: Schnittstellen
---

# Schnittstellen

Die bereitgestellten Endpunkte sind als REST-API realisiert. Die spezifischen
Funktionen der einzelnen Endpunkte werden unter „[API-Endpunkte für Nutzungsrechte als Policies](./api-policies-info)“ und
„[API-Endpunkte für Zugriffsrechte als Access-Rights](./api-access-rights-info)“ beschrieben.

## Registrierung

Gemäß der Spezifikation OAuth muss ein Dienst (Client-Anwendung) gegenüber SchulConneX bekannt sein — diesbezüglich wird die Client-Anwendung über einen organisatorischen Prozess registriert.

Durch die Registrierung wird der Client-Anwendung eine Client-ID und das dazugehörige Client Secret zur Verfügung gestellt.

## Vorbedingungen der Schnittstelle

Generell gilt für alle Anfragen an die API folgende Vorbedingung:

Jede API Request muss einen Authorization-Header haben. Der Authorization-Header setzt sich aus `token_type` und dem eigentlichen `access_token` zusammen. Im Kontext der Spezifikation „[OpenID Connect][1]“ muss das Attribut `token_type` den Wert „Bearer” führen.

> Format: `Authorization: {token_type} {access_token}`

> Beispiel: `Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpJ9.e...`

Es wird empfohlen, den zu erwartenden Content-Type explizit als `application/json` anzugeben. Wird kein Content-Type gesetzt, wird automatisch `application/json` angenommen.

> `Accept: application/json`

Abweichend bei Schnittstellen, welche Client-side Content-negotiation anbieten. Hier kann die Client-Anwendung den Content-Type entsprechend setzen, um das bevorzugte Datenmodell zu erhalten.

[1]: https://openid.net/specs/openid-connect-core-1_0.html