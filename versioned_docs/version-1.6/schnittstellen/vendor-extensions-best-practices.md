---
title: Empfehlungen für anbieterspezifische Attribute
tags:
- Informativ
---

* Anbieter von anbieterspezifischen Attributen sollten die geltenden IT-Sicherheitsrichtlinien und Datenschutzrichtlinien beachten. Die Verantwortung dafür liegt beim Betreiber des jeweiligen Schulconnex-Servers.
* Inhalte von anbieterspezifischen Attributen sollen sich nicht mit Inhalten von reguläeren Schulconnex-Attributen überlappen.
* Schnittstellen-Clients, welche anbieterspezifische Attribute nicht verarbeiten, müssen diese beim Update von Datenbankobjekten unverändert mitliefern. Die Regeln für PUT-Operationen gelten auch für anbieterspezifische Attribute.
* Löscht eine Anwendung ein Datenobjekt oder ein Teil davon, so werden dabei auch anbieterspezifische Attribute darin gelöscht. Anwendungen können davon ausgehen, dass solche Attribute nur im Zusammenhang mit den übergeordneten Objekten oder Attributen sinnvoll sind. Wird beispielsweise das Attribut `geburt` einer Person entfernt, so kann eine Anwendung davon ausgehen, dass darin enthaltene anbieterspezifische Attribute ohne die Standardattribute (`datum` und `geburtsort`) nicht weiter relevant sind.
* Es liegt in der Verantwortung der Anwendung, welche ein anbieterspezifisches Attribut einfügt, dass dieses Attribut konsistent mit anderen Angaben ist, falls sich diese ändern. Wird beispielsweise, wie im Beispiel, eine Personalnummer bei einer Stammorganisation angegeben, so kann es geschehen, dass eine andere Anwendung, ohne Kenntnis des Attributs, die Stammorganisation einer Person ändert und dabei in Unkenntnis der Semantik, das Attribut `urn:schulsystemix:params:schulconnex:schemas:core:2.0:personerweiterung / personalnummer` unverändert beibehält.
