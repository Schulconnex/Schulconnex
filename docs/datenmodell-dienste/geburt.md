---
title: Geburt
---

# Datenmodell Geburt für Dienste

Datenmodell der Geburt einer [Person](person).

| Attribut     | Typ                                | Anzahl   | Freigabe erforderlich | Bemerkung                                                                                                                                                             | Qualifizierter Name                              |
|--------------|------------------------------------|----------|------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------|
| datum        | Datum (siehe Abschnitt *Datumsformat*) | 0/0..1   | ja                     | Geburtsdatum einer Person.                                                                                                                                          | `urn:schulconnex:de:person:geburt:datum`         |
| volljaehrig  | String (Code)                     | 0/0..1   | ja                     | Gibt an, ob eine Person volljährig ist, ohne weitere Informationen über Geburtsdatum oder Alter zu vermitteln. Referenz auf einen Code der Codeliste *Boolean*.     | `urn:schulconnex:de:person:geburt:volljaehrig`   |
| geburtsort   | String (DIN 91379.C)              | 0/0..1   | ja                     | Geburtsort einer Person, bestehend aus Ortsname und Land, beispielsweise „Eindhoven, Niederlande“. Wird kein Land angegeben, so wird als Land „Deutschland“ angenommen, d.h. der Geburtsort „Erfurt“ ist wie „Erfurt, Deutschland“ zu behandeln. | `urn:schulconnex:de:person:geburt:geburtsort`    |