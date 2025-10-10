---
title: Anbieterspezifische Attribute
tags:
- Verbindlich
---

# Erweiterung der API um anbieterspezifische Attribute

Für Anbieter von Serverimplementierungen besteht die Möglichkeit, Schulconnex um eigene, anbieterspezifische Attribute (Vendor Extensions) zu erweitern.

Anbieterspezifische Attribute werden innerhalb eines anbieterspezifischen Objekts gekapselt.

Der Name eines anbieterspezifischen Attributs muss ein gültiger Uniform Resource Name (URN) (nach [RFC 3986][1]) sein.

[1]: https://datatracker.ietf.org/doc/html/rfc3986

Der Wert eines anbieterspezifischen Attributs kann ein primitiver Typ, ein Array von primitiven Typen, ein komplexes Objekt oder ein Array von Objekten sein. Es besteht nicht die Notwendigkeit, für Attributnamen innerhalb von anbieterspezifischen Objekten URNs zu nutzen.

Betreiber von Schulconnex-Servern, die anbieterspezifische Attribute verwenden, müssen definieren, ob und nach welchen Kriterien solche Attribute auch an Dienste ausgeliefert werden und wie viele Elemente die Antwort enthalten kann oder muss. Hierzu sind das Datenmodell für Diensteanbieter, wo benötigt, um diese Attribute zu erweitern und, analog zu den standardisierten Attributen, die auszuliefernde Anzahl und die Notwendigkeit einer Freigabe zu spezifizieren.

## Beispiel der Erweiterung um eine Personalnummer

Im folgenden Beispiel wird der Datensatz einer Person um die Personalnummer dieser Person bei der Stammorganisation erweitert.
`schulsystemix` ist hierbei der Name eines fikitven Anbieters.

```json
{
    "person": {
        "id": "a6e1a860-8d44-4b2b-aef7-aa2c8bf5beb5",
        "mandant": "58f45270-8e54-40c6-a212-980307fc19be",
        "referrer": "125",
        "stammorganisation": "ad4a5d27-631d-49a3-bc0a-cc28614f8443",
        "urn:schulsystemix:params:schulconnex:schemas:core:2.0:personerweiterung": {
            "personalnummer": "NM 1356"
        },
        "name": {
            "familienname": "von Musterfrau",
            "vorname": "Natalie"
        },
        "vertrauensstufe": "Voll",
        "auskunftssperre": "Nein",
        "revision": "1"
    }
}
```
