---
title: Anbieterspezifische Erweiterungen
---

# Erweiterung der API um anbieterspezifische Attribute

Schulconnex ermöglicht es Herstellern, in Absprache mit dem jeweiligen Betreiber eines Schulconnex-Serveres, eigene, anwendungsfallspezifische, Attribute hinzuzufügen.

Solche Attribute werden innerhalb eines herstellerspezifischen Objektes gekapselt.

Das herstellerspezifische Objekt wird durch einen Uniform Resource Name (URN) (nach [RFC 3986][1]) gekennzeichnet.

[1]: https://datatracker.ietf.org/doc/html/rfc3986

URNs für Zusatz-Attribute müssen das folgende Format haben:
`urn:<anbieterkennung>:params:schulconnex:schemas:core:1.0:<attributsobjektname>`

Nur `<anbieterkennung>` und `<attributsobjektname>`  können vom Anbieter bestimmt werden. Der Rest der URN ist direkt zu übernehmen.

Anbieterkennung, Attributsobjektname und die Namen der zusätzlichen Attribute müssen den Regeln für Attributsnamen in Schulconnex folgen. Es ist nur Kleinschreibung erlaubt und es sind keine Sonderzeichen, Umlaute oder Leerzeichen im Namen zulässig.

`<anbieterkennung>` muss dabei eine einzigartige, vom Anbieter vergebenen Kennung sein. Hierbei sollte allgemein der Herstellername oder eine Variante davon genommen werden. In Ausnahmefällen, wenn mehre Produkte eines Herstellers Attribute benötigen, bei denen die Zuordenbarkeit zu einem spezifischen Produkt notwendig ist, kann es sich auch um einen Produktnamen handeln.

`<attributsobjektname>` ist der Name des spezifischen Attribut-Objektes. Der Name sollte die Funktion der in dem Objekt enthaltenen Attribute beschreiben.

Innerhalb eines Attribut-Objektes können auch mehrere Attribute, hierarchische Attribute, Arrays von Attributen und Attribute unterschiedlicher Typen aufgeführt werden.

Es besteht nicht die Notwendigkeit für Attribute innerhalb eines Attribut-Objektes URNs zu nutzen.


Anbieterspezifische Attribute sind vor der Verwendung mit dem Betreiber des jeweiligen Schulconnex-Servers zu vereinbaren. Insbesondere ist dabei auch zu vereinbaren, ob und nach welchen Kriterien solche Attribute auch an Dienste ausgeliefert werden.

## Beispiel einer erweiterten Adresse

```json
{
  "postleitzahl": "80469",
  "ort": "München",
  "ortsteil": "Ludwigsvorstadt-Isarvorstadt",
  "urn:schulsystemix:params:schulconnex:schemas:core:1.0:adresserweiterung" {
            "strasse": "Walterweg",
            "hausnummer": "5",
            "strassenbelag": "kopfstein",
            "stockwerk": "7",
  }
}
```

## Richtlinen für anbieterspezifische Attribute

* Anbieter von anbieterspezifische Attributen sind dazu verpflichtet die geltenden IT-Sicherheitsrichtlinien zu beachten. So ist es beispielsweise unzulässig ein Attribut `passwortklartext` zu nutzen.
* Anbieter von anbieterspezifische Attributen sind dazu verpflichtet die geltenden Datenschutzrichtlinien zu beachten. So sind beispielsweise Attribute wie `linkpersonalausweiskopie` zu vermeiden.
* Inhalte anbieterspezifische Attributen sollen nicht mit Inhalten von Schulconnex Attributen überlappen. Wird beispielsweise bei einer Adresse noch der Strassenname gewünscht, so sollte dieser als Attribut ergänzt werden. Ein Attribut wie `vollstaendigeanschrift` mit „Walterweg 5,  80469 München“ ist zu vermeiden, da Ort und Postleitzahl bereits Teil des Adress-Objektes sind.
  * Ausnahmen sind möglich, wenn Attribute dazu dienen, Inkonsistenzen durch Änderungen zu identifizieren.
  * Beispielsweise kann es sinnvoll sein innerhalb des `urn:schulsystemix:params:schulconnex:schemas:core:1.0:adresserweiterung` Attributes die Attribute `postleitzahl`, `ort` und `ortsteil` als Kopie zu nutzen, um Änderungen der Adresse durch andere Anwendungen erkennen und darauf reagieren zu können.
  * Wird ein existierendes Standard-Attribute kopiert, so darf dieses nur zur Erkennung von Inkonsistenzen geschehen. Inhaltlich sind immer die Werte der Standard-Attribute zu nutzen.
* Anwendungen, welche anbieterspezifische Attribute nicht kennen, müssen diese beim Update von Datennobjekten unverändert mit angeben.
* Löscht eine Anwendung ein Datenobjekt oder entfernt in zusammengesetztes Attribut in einem Datenobjekt, so werden dabei auch anbieterspezifische Attribute darin gelöscht. Anwendungen können davon ausgehen, dass solche Attribute nur im Zusammenhang mit den übergeordneten Objekten oder Attributen sinnvoll sind. Wird beispielsweise das Attribut `Geburt` einer Person entfernt, so kann eine Anwendung davon ausgehen, dass darin enthaltene anbieterspezifische Attribute ohne die Standardattribute (`datum` und `geburtsort`) nicht weiter relevant sind.
* Es liegt in der Verantwortung der Anwendung, welche ein anbieterspezifisches Attribut einfügt, dass dieses Attribut konsistent mit anderen Angaben ist, fall sich diese ändern. Wird beispielsweise ein Zusatzattribut zur Adresse angegeben (wie `Stockwerk` im Beispiel oben), so kann es geschehen, dass eine andere Anwendung, ohne Kenntnis des Attributes, den Ort ändert, aber, in Unkenntnis der Semantik, das Attribut `urn:schulsystemix:params:schulconnex:schemas:core:1.0:adresserweiterung / stockwerk` unverändert beibehält.


