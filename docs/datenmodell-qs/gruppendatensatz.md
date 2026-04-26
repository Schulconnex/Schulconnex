---
tags:
- Verbindlich
---
# Gruppendatensatz

Datenmodell eines Gruppendatensatzes: Der Gruppendatensatz ist als Daten-Container (WrapperObject) zu verstehen.
Über den Gruppendatensatz werden Gruppe (Attribut `gruppendatensatz.gruppe`) sowie
die Gruppenzugehörigkeiten (Attribut `gruppendatensatz.gruppenzugehoerigkeit`) zusammengeführt

Attribut | Typ | Anzahl | Bemerkung | Qualifizierter Name
--- | --- | --- | --- | ---
gruppe | Gruppe | 1 | Gruppe (siehe *Gruppe*). | `urn:schulconnex:de:gruppendatensatz:gruppe`
gruppenzugehoerigkeiten | Gruppenzugehörigkeit | 0..n  | Liste (Array) von Gruppenzugehörigkeiten (siehe *Gruppenzugehörigkeit*). | `urn:schulconnex:de:gruppendatensatz:gruppenzugehoerigkeiten`

