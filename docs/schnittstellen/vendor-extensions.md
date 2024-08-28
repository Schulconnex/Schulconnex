---
title: Anbieterspezifische Erweiterungen
---

# Erweiterung der API um anbieterspezifische Attribute

Schulconnex ermöglicht es Herstellern eigene anwendungsfallspezifische Erweiterungen von Attributen vorzunehmen.

Der dafür genutzte Mechanismus basiert auf SCIM (System for Cross-domain Identity Management [RFC 7643][1],  [RFC 7644][2]) und der Nutzung eines `schemas` Attributes.

[1]: https://github.com/SchulConneX/v1/files/14406057/rfc7643.pdf
[2]: https://github.com/SchulConneX/v1/files/14406057/rfc7643.pdf

Bei jedem in Schulconnex spezifizierten Datenmodell kann beim Erstellen oder Schreiben eines Datensatzes als erstes Attribut ein `schemas` Attribut angegeben werden.

Fehlt dieses Attribut, so gilt das Datenmodell wie in der Spezifikation beschrieben.

Wird ein Schema mitgegeben, so müssen die in diesem Schema beschriebenen Attribute auch angegeben werden.

Namen von herstellerspezifischen Attributen unterliegen einem festen Format und müssen mit der Buchstabenfolge `urn:` beginnnen, gefolgt von einem eindeutigen Hersteller- oder Anwendungsnamen, gefolgt von `:params:schulconnex:schemas:core:1.0:`, gefolgt vom Attributnamen. Es ist nur Kleinschreibung erlaubt und es sind keine Sonderzeichen, Umlaute oder Leerzeichen im Namen zulässig.

Die Attributwerte eine Schema-Erweiterung werden dann in einem Objekt mit dem angegebenen Schema-Namen gehalten. Die in diesem Objekt gelistetet Attribute und deren Bedeutung sind herstellerspezifisch.

## Beispiel einer erweiterten Addresse

```json
{
    "schemas": [
       "urn:schulsystemix:params:schulconnex:schemas:core:1.0:adresserweiterung"
  ],
  "postleitzahl": "80469",
  "ort": "München",
  "ortsteil": "Ludwigsvorstadt-Isarvorstadt",
  "urn:schulsystemix:params:schulconnex:schemas:core:1.0:adresserweiterung" {
            "strassenbelag": "kopfstein",
            "stockwerk": "7",
  }

}
```


