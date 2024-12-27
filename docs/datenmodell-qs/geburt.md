# Geburt

Datenmodell der Geburt einer [Person](person).

| Attribut   | Typ                                | Anzahl   | Bemerkung                                                                                                                                                              | Qualifizierter Name                        |
|------------|------------------------------------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------|
| datum      | Datum (siehe Abschnitt *Datumsformat*) | 0..1     | Geburtsdatum einer Person.                                                                                                                                           | `urn:schulconnex:de:person:geburt:datum`  |
| geburtsort | String (DIN 91379.C)              | 0..1     | Geburtsort einer Person, bestehend aus Ortsname und Land, beispielsweise „Eindhoven, Niederlande“. Wird kein Land angegeben, so wird als Land „Deutschland“ angenommen, d.h. der Geburtsort „Erfurt“ ist wie „Erfurt, Deutschland“ zu behandeln. | `urn:schulconnex:de:person:geburt:geburtsort` |
