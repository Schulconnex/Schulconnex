---
title: Zugriffsinfo
---

# Zugriffsinfo

TODO: TEXT

## ZugriffsinfoContainer

> Antwort-Nutzlast als JSON-Objekt mit Diskriminator

Nachfolgend ist das Datenmodell einer Antwort-Nutzlast als JSON-Objekt mit Diskriminator dargestellt - dem ZugriffsinfoContainer.

### Datenmodell ZugriffsinfoContainer

Attribut | Typ | Anzahl | Freigabe erforderlich | Bemerkung
--- | --- | --- | --- | ---
access_control | String (UTF-8) | 0/0..n | nein | ID der Zugriffsinfo. Wird vom Server vergeben und ist eindeutig. Dieses Attribut ist unveränderbar (immutable).
access_control[].@type | String (UTF-8) | 1 | nein | Attribut `@type` wird als Diskriminator genutzt und gibt das Datenmodell für das Attribut `access_control[].value` vor.
access_control[].value | AccessControlValue | 1 | nein | Datenobjekt nach dem variablen Datenmodell `Zugriffsinfo`. Dieses ist abhängig vom Wert des Diskriminator `access_control[].@type`.

## Zugriffsinfo

Nachfolgend sind die Datenmodelle einer Zugriffsinfo je nach Typ dargestellt.

### Datenmodell Zugriffsinfo zum Typ "urn:scx:lizenz:zugriffsinfo:licensekey"

Attribut | Typ | Anzahl | Freigabe erforderlich | Bemerkung
--- | --- | --- | --- | ---
licenseKey | String (UTF-8) | 1 | nein | Der Lizenz-Schlüssel.

#### Beispiel JSON des Datentyps ZugriffsinfoContainer mit Zugriffsinfo vom Typ "urn:scx:lizenz:zugriffsinfo:licensekey"

```json
{
    "access_control": [
        {
            "@type": "urn:scx:lizenz:zugriffsinfo:licensekey",
            "value": {
                "licenseKey": "5f49ff7f-76a6-4d8b-ae40-e1aba0d57f21"
            }
        }
    ]
}
```

### Datenmodell Zugriffsinfo zum Typ "urn:scx:lizenz:zugriffsinfo:temporaryurl"

Attribut | Typ | Anzahl | Freigabe erforderlich | Bemerkung
--- | --- | --- | --- | ---
temporaryURL | String (UTF-8) | 1 | nein | Die temporäre URL.
gueltigkeit_von | String (datetime) | 1 | nein | Datum und Uhrzeit des Beginn der Gültigkeit. Das Format von Gültigkeiten ist YYYY-MM-DD'T'hh:mm'Z' als UTC-Zeitpunkt.
gueltigkeit_bis | String (datetime) | 1 | nein | Datum und Uhrzeit des Ende der Gültigkeit. Das Format von Gültigkeiten ist YYYY-MM-DD'T'hh:mm'Z' als UTC-Zeitpunkt.

#### Beispiel JSON des Datentyps ZugriffsinfoContainer mit Zugriffsinfo vom Typ "urn:scx:lizenz:zugriffsinfo:temporaryurl"

```json
{
    "access_control": [
        {
            "@type": "urn:scx:lizenz:zugriffsinfo:temporaryurl",
            "value": {
                "temporaryURL": "https://exampleprovider.tld/tmp/330dccf5-c8e0-4b3c-80e3-5d2b0c9ab6a5",
                "gueltigkeit_von": "2024-04-01",
                "gueltigkeit_bis": "2024-04-30"
            }
        }
    ]
}
```
