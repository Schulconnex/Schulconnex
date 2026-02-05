---
tags:
- Verbindlich
---
# Geburt

Datenmodell der Geburt einer [Person](person).

Attribut | Typ | Anzahl | Bemerkung
--- | --- | --- | ---
datum | Datum (siehe Abschnitt *Datumsformat*) | 0..1 | Geburtsdatum einer Person.
geburtsort | String (DIN 91379.C) | 0..1 | Geburtsort einer Person, bestehend aus Ortsname und Land, beispielsweise „Eindhoven, Niederlande“. Wird kein Land angegeben, so wird als Land „Deutschland“ angenommen, d.h. der Geburtsort „Erfurt“ ist wie „Erfurt, Deutschland“ zu behandeln.
