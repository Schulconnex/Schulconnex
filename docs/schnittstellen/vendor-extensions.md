---
title: Anbieterspezifische Erweiterungen
---

# Erweiterung der API um anbieterspezifische Attribute

Schulconnex ermöglicht es Herstellern, in Absprache mit dem jeweiligen Betreiber eines Schulconnex-Serveres, eigene, anwendungsfallspezifische, Attribute hinzuzufügen.

Solche Attribute werden innerhalb eines herstellerspezifischen Objektes gekapselt.

Das herstellerspezifische Objekt wird durch einen Uniform Resource Name (URN) (nach [RFC 3986][1]) gekennzeichnet.

[1]: https://datatracker.ietf.org/doc/html/rfc3986

Innerhalb eines Attribut-Objektes können auch mehrere Attribute, hierarchische Attribute, Arrays von Attributen und Attribute unterschiedlicher Typen aufgeführt werden.

Es besteht nicht die Notwendigkeit für Attribute innerhalb eines Attribut-Objektes URNs zu nutzen.

Anbieterspezifische Attribute sind vor der Verwendung mit dem Betreiber des jeweiligen Schulconnex-Servers zu vereinbaren. Insbesondere ist dabei auch zu vereinbaren, ob und nach welchen Kriterien solche Attribute auch an Dienste ausgeliefert werden.

Hierzu sind die angepasstes Datenmodelle für Diensteanbieter, wo benötigt, um diese Attribute zu erweitern und, analog zu den standardisierten Attributen, die aue auszuliefernde Anzahl und die Notwendigkeit einer Freigabe zu spezifizieren. Diese Angaben sind mit dem  Betreiber des jeweiligen Schulconnex-Servers abzusprechen.

## Beispiel der Erweiterung um eine Personalnummer

Im folgenden Beispiel wird der Datensatz einer Person um die Personalnummer dieser Person bei der Stammorganisation erweitert.
`schulsystemix` ist hierbei der Name eines fiktionalen Anbieters.

```json
{
    "person": {
        "id": "a6e1a860-8d44-4b2b-aef7-aa2c8bf5beb5",
        "mandant": "58f45270-8e54-40c6-a212-980307fc19be",
        "referrer": "125",
        "stammorganisation": "string",
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

* Anbieter von anbieterspezifische Attributen sind dazu verpflichtet die geltenden IT-Sicherheitsrichtlinien und Datenschutzrichtlinien zu beachten. 
* Inhalte anbieterspezifische Attributen sollen nicht mit Inhalten von Schulconnex Attributen überlappen.
* Anwendungen, welche anbieterspezifische Attribute nicht kennen, müssen diese beim Update von Datennobjekten unverändert mit angeben.
* Löscht eine Anwendung ein Datenobjekt oder entfernt in zusammengesetztes Attribut in einem Datenobjekt, so werden dabei auch anbieterspezifische Attribute darin gelöscht. Anwendungen können davon ausgehen, dass solche Attribute nur im Zusammenhang mit den übergeordneten Objekten oder Attributen sinnvoll sind. Wird beispielsweise das Attribut `Geburt` einer Person entfernt, so kann eine Anwendung davon ausgehen, dass darin enthaltene anbieterspezifische Attribute ohne die Standardattribute (`datum` und `geburtsort`) nicht weiter relevant sind.
* Es liegt in der Verantwortung der Anwendung, welche ein anbieterspezifisches Attribut einfügt, dass dieses Attribut konsistent mit anderen Angaben ist, fall sich diese ändern. Wird beispielsweise, wie im Beispiel, eine Personalnummer bei einer Stammorganisation angegeben, so kann es geschehen, dass eine andere Anwendung, ohne Kenntnis des Attributes, die Stammorganisation einer Person ändert und dabei in Unkenntnis der Semantik, das Attribut `urn:schulsystemix:params:schulconnex:schemas:core:2.0:personerweiterung / personalnummer` unverändert beibehält.
