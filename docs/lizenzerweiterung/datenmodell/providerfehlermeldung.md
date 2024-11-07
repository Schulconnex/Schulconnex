---
title: Provider-Fehlermeldung
---

# Provider-Fehlermeldung

TODO: TEXT

Nachfolgend ist das Datenmodell einer Provider-Fehlermeldung dargestellt.

## Datenmodell Nutzungsrecht

Attribut | Typ | Anzahl | Freigabe erforderlich | Bemerkung
--- | --- | --- | --- | ---
@context | String (UTF-8) | 1/1..n | nein | Dieses Attribut führt Auflistung an JSON-LD Kontext-Informationen.
@type | String (UTF-8) | 1 | nein | Dieses Attribut definiert den schema.org Typ einer Provider-Fehlermeldung als "https://schema.org/DiscoverAction".
provider | Object | 1 | ja | .
provider.@type | String (UTF-8) | 1 | nein | .
provider.identifier | String (UTF-8) | 1 | ja |.
startTime | String (datetime) | 1 | ja | .
actionStatus | String (UTF-8) | 1 | ja | .
error | Object | 1 | ja | .
error.@type | String (UTF-8) | 1 | nein | .
error.description | String (UTF-8) | 1 | nein | .
error.url | String (UTF-8) | 1 | nein | .
error.additionalType | String (UTF-8) | 0..1 | nein | Dieses Attribut definiert den schema.org Typ einer Erweiterten-Fehlermeldung als "https://schulconnex.de/policies-info/ns/1/RFC7807/ErrorDetails" oder "https://example.com/RFC7807/ErrorDetails".
error.additionalProperty | Array | 0..n | nein | .
error.additionalProperty[].@type | String (UTF-8) | 1 | nein | Dieses Attribut definiert den schema.org Typ einer zusätzlichen Attributs einer Erweiterten-Fehlermeldung als "https://schema.org/PropertyValue".
error.additionalProperty[].@propertyID | String (UTF-8) | 1 | nein | Dieses Attribut definiert das Attribut (key) des zusätzlichen Attributs einer Erweiterten-Fehlermeldung.
error.additionalProperty[].value | String (UTF-8) | 1 | nein | Dieses Attribut definiert den Wert (value) des zusätzlichen Attributs einer Erweiterten-Fehlermeldung.

## Beispiel JSON-LD des Datentyps Provider-Fehlermeldung

```json
{
  "@context": [
    "https://schema.org"
  ],
  "@type": "https://schema.org/DiscoverAction",
  "provider": {
    "@type": "Organization",
    "identifier": "https://exampleprovider.tld"
  },
  "startTime": "2024-08-02T09:00:00Z",
  "actionStatus": "FailedActionStatus",
  "error": {
    "@type": "Thing",
    "description": "404 - Not Found",
    "url": "https://exampleprovider.tld/api/policies",
    "additionalType": "https://schulconnex.de/policies-info/ns/1/RFC7807/ErrorDetails",
    "additionalProperty": [
      {
        "@type": "https://schema.org/PropertyValue",
        "propertyID": "status",
        "value": "404"
      },
      {
        "@type": "https://schema.org/PropertyValue",
        "propertyID": "title",
        "value": "Not Found"
      },
      {
        "@type": "https://schema.org/PropertyValue",
        "propertyID": "detail",
        "value": "The requested resource could not be found."
      }
    ]
  }
}
```

## Beispiel JSON des Datentyps Provider-Fehlermeldung

```json
{
    "provider": {
      "identifier": "https://exampleprovider.tld"
    },
    "startTime": "2024-08-02T09:00:00Z",
    "actionStatus": "FailedActionStatus",
    "error": {
      "description": "404 - Not Found",
      "url": "https://exampleprovider.tld/api/policies",
      "status": "404",
      "title": "Not Found",
      "detail": "The requested resource could not be found."
    }
  }
```
