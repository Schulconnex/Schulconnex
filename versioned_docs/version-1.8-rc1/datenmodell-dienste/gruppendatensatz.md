---
title: Gruppendatensatz
---

# Datenmodell Gruppendatensatz für Dienste

Datenmodell eines Gruppendatensatzes: Der Gruppendatensatz ist als Daten-Container (WrapperObject) zu verstehen.
Über den Gruppendatensatz werden Gruppe (Attribut `gruppe`) sowie die Gruppenzugehörigkeiten (Attribut
`gruppenzugehoerigkeit`) zusammengeführt.

Attribut | Typ | Anzahl | Freigabe erforderlich | Bemerkung
--- | --- | --- | --- | ---
gruppe | *[Gruppe](gruppe)* | 0/1 | ja | Attribute einer einzelnen Gruppe entsprechend Datenmodell *Gruppe*.
gruppenzugehoerigkeit | *[Gruppenzugehörigkeit](gruppenzugehörigkeit)* | 0/1 | ja | Entsprechend dem Datemodell *Gruppenzugehörigkeit*.
sonstige_gruppenzugehoerige | *Array[[Gruppenzugehörigkeit](gruppenzugehörigkeit)]* | 0/0..n | ja | Liste (Array) von weiteren Zugehörigen zu der Gruppe.
