---
title: Herstellereigene Attribute
---

# Erweiterung der API um herstellereigene Attribute

Für Hersteller von Serverimplementierungen besteht die Möglichkeit, Schulconnex um eigene, anwendungsfallspezifische Attribute (Vendor Extensions) zu erweitern.

Herstellereigene Attribute werden innerhalb eines herstellerspezifischen Objekts gekapselt.

Der Name eines herstellereigenen Attributs muss ein gültiger Uniform Resource Name (URN) (nach [RFC 3986][1]) sein.

[1]: https://datatracker.ietf.org/doc/html/rfc3986

Der Wert eines herstellereigenen Attributes kann ein primitiver Typ, ein Array von primitiven Typen, ein komplexes Objekt oder ein Array von Objekten sein. Es besteht nicht die Notwendigkeit, für Attributnamen innerhalb von herstellereigenen Objekten URNs zu nutzen.

Betreiber von Schulconnex-Servern, die herstellereigene Attribute verwenden, müssen definieren, ob und nach welchen Kriterien solche Attribute auch an Dienste ausgeliefert werden und wie viele Elemente die Antwort enthalten kann oder muss. Hierzu sind das angepasstes Datenmodell für Diensteanbieter, wo benötigt, um diese Attribute zu erweitern und, analog zu den standardisierten Attributen, die auszuliefernde Anzahl und die Notwendigkeit einer Freigabe zu spezifizieren.

## Beispiel: Erweiterung von Person um eine Personalnummer

Im folgenden Beispiel wird der Datensatz einer Person um das herstellereigene Attribut `personalnummer` dieser Person bei der Stammorganisation erweitert. `schulsystemix` ist hierbei der Name eines fiktionalen Herstellers.

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

* Anbieter von herstellereigenen Attributen sollen die geltenden IT-Sicherheitsrichtlinien und Datenschutzrichtlinien beachten. Die Verantwortung dafür liegt beim Betreiber des jeweiligen Schulconnex-Servers.
* Inhalte von herstellereigenen Attributen sollen sich nicht mit Inhalten von regulären Schulconnex-Attributen überlappen.
* Schnittstellen-Clients, welche herstellereigene Attribute nicht verarbeiten, müssen diese beim Update von Datenbankobjekten unverändert mitliefern. Die Regeln für `PUT`-Operationen gelten auch für herstellereigene Attribute.
* Löscht eine Anwendung ein Datenobjekt oder einen Teil davon, so werden dabei ggf. auch darin enthaltene herstellereigene Attribute gelöscht. Clients können davon ausgehen, dass solche Attribute nur im Zusammenhang mit den übergeordneten Objekten oder Attributen sinnvoll sind. Wird beispielsweise das Attribut `geburt` einer Person entfernt, so kann eine Anwendung davon ausgehen, dass ggf. darin enthaltene herstellereigene Attribute ohne die Standardattribute (`datum` und `geburtsort`) nicht weiter relevant sind.
* Es liegt in der Verantwortung der Anwendung, welche ein herstellereigenes Attribut einfügt, dass dieses Attribut konsistent mit anderen Angaben ist, falls sich diese ändern. Würde in dem Beispiel die Personalnummer bei einer Stammorganisation angegeben, so kann es geschehen, dass eine andere Anwendung, ohne Kenntnis des Attributs, die Stammorganisation einer Person ändert und dabei in Unkenntnis der Semantik den damit ungültig gewordenen Wert von `urn:schulsystemix:params:schulconnex:schemas:core:2.0:personerweiterung.personalnummer` unverändert beibehält.
