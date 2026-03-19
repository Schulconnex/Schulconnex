---
tags:
- Verbindlich
---
# Personendatensatz

Datenmodell eines Personendatensatzes: Personendatensatz ist als Daten-Container (WrapperObject) zu verstehen.
Über Personendatensatz werden Person (Attribut `personendatensatz.person`) sowie die Personenkontexte
(Attribut `personendatensatz.personenkontexte`) zusammengeführt.

Attribut | Typ | Anzahl | Bemerkung | Qualifizierter Name
--- | --- | --- | --- | ---
person | Person | 1 | Person (siehe Datenmodell *Person*). | `urn:schulconnex:de:personendatensatz:person`
personenkontexte | Personenkontext | 0..n | Liste (Array) von Personenkontexten (siehe Datenmodell *Personenkontext*). | `urn:schulconnex:de:personendatensatz:personenkontexte`

