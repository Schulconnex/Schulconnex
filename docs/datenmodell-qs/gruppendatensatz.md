# Gruppendatensatz

Datenmodell eines Gruppendatensatzes: Der Gruppendatensatz ist als Daten-Container (WrapperObject) zu verstehen.
Über den Gruppendatensatz werden Gruppe (Attribut `gruppendatensatz.gruppe`) sowie
die Gruppenzugehörigkeiten (Attribut `gruppendatensatz.gruppenzugehoerigkeit`) zusammengeführt

Attribut | Typ | Anzahl | Bemerkung
--- | --- | --- | ---
gruppe | Gruppe | 1 | Gruppe (siehe *Gruppe*).
gruppenzugehoerigkeiten | Gruppenzugehörigkeit | 0..n  | Liste (Array) von Gruppenzugehörigkeiten (siehe *Gruppenzugehörigkeit*).

