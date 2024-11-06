---
title: Anbieterspezifische Attribute
---

# Erweiterung der API um anbieterspezifische Attribute

Schulconnex ermöglicht es Herstellern, in Absprache mit dem jeweiligen Betreiber eines Schulconnex-Servers, eigene, anwendungsfallspezifische Attribute (Vendor Extensions) hinzuzufügen.

Solche Attribute werden innerhalb eines herstellerspezifischen Objektes gekapselt.

Der Name eines herstellerspezifischen Attributs muss ein gültiger Uniform Resource Name (URN) (nach [RFC 3986][1]) sein.

[1]: https://datatracker.ietf.org/doc/html/rfc3986

Innerhalb eines Attribut-Objektes können sowohl primitive Typen, wie auch Arrays oder hierarchische Objekte genutztet werden.

Es besteht nicht die Notwendigkeit für Attribute innerhalb eines Attribut-Objektes URNs zu nutzen.

Anbieterspezifische Attribute sind vor der Verwendung mit dem Betreiber des jeweiligen Schulconnex-Servers zu vereinbaren. Insbesondere ist dabei auch zu vereinbaren, ob und nach welchen Kriterien solche Attribute auch an Dienste ausgeliefert werden und wie viele Elemente die Antwort enthalten kann oder muss.

Hierzu sind das angepasste Datenmodell für Diensteanbieter, wo benötigt, um diese Attribute zu erweitern und, analog zu den standardisierten Attributen, die auszuliefernde Anzahl und die Notwendigkeit einer Freigabe zu spezifizieren.

## Beispiel der Erweiterung um eine Personalnummer

Im folgenden Beispiel wird der Datensatz einer Person um die Personalnummer dieser Person bei der Stammorganisation erweitert.
`schulsystemix` ist hierbei der Name eines fiktionalen Anbieters.

```json
{
    "person": {
        "id": "a6e1a860-8d44-4b2b-aef7-aa2c8bf5beb5",
        "mandant": "58f45270-8e54-40c6-a212-980307fc19be",
        "referrer": "125",
        "stammorganisation": "ad4a5d27-631d-49a3-bc0a-cc28614f8443",
        "urn:schulsystemix:params:schulconnex:schemas:core:2.0:personerweiterung" {
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

## Richtlinen für anbieterspezifische Attribute

* Anbieter von anbieterspezifische Attributen sollten dabei die geltenden IT-Sicherheitsrichtlinien und Datenschutzrichtlinien beachten. Die Verantwortung dafür liegt beim Betreiber des jeweiligen Schulconnex-Servers. 
* Inhalte von anbieterspezifische Attributen sollen sich nicht mit Inhalten von reguläeren Schulconnex-Attributen überlappen.
* Schnittstellen-Clients, welche anbieterspezifische Attribute nicht verarbeiten, müssen diese beim Update von Datenbankobjekten unverändert mitliefern. Die Regeln für PUT-Operationen gelten auch für anbieterspezifische Attribute.
* Löscht eine Anwendung ein Datenobjekt oder ein Teil davon, so werden dabei auch anbieterspezifische Attribute darin gelöscht. Anwendungen können davon ausgehen, dass solche Attribute nur im Zusammenhang mit den übergeordneten Objekten oder Attributen sinnvoll sind. Wird beispielsweise das Attribut `Geburt` einer Person entfernt, so kann eine Anwendung davon ausgehen, dass darin enthaltene anbieterspezifische Attribute ohne die Standardattribute (`datum` und `geburtsort`) nicht weiter relevant sind.
* Es liegt in der Verantwortung der Anwendung, welche ein anbieterspezifisches Attribut einfügt, dass dieses Attribut konsistent mit anderen Angaben ist, falls sich diese ändern. Wird beispielsweise, wie im Beispiel, eine Personalnummer bei einer Stammorganisation angegeben, so kann es geschehen, dass eine andere Anwendung, ohne Kenntnis des Attributes, die Stammorganisation einer Person ändert und dabei in Unkenntnis der Semantik, das Attribut `urn:schulsystemix:params:schulconnex:schemas:core:2.0:personerweiterung / personalnummer` unverändert beibehält.
