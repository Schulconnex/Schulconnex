---
tags:
- Verbindlich
---
# Organisationsbeziehung

Das Datenmodell Organisationsbeziehung beschreibt die Beziehung zweier Organisationen.

Das Attribut `organisationsbeziehung` ist in der Form „hat_als“ zu verstehen. Ist eine
Organisation A mit Organisationsbeziehung `"SchBeh"` zur `orgid` einer Organisation B
angegeben, so **hat** Organisation A die Organisation B als Schulbehörde.

Attribut | Typ | Anzahl | Bemerkung
--- | --- | --- | ---
id | String (UTF-8) | 0..1 | ID der Organisationsbeziehung. Wird vom Schulconnex-Server vergeben und ist eindeutig. Dieses Attribut ist unveränderbar (immutable).
mandant | String (UTF-8) | 0..1 | ID des Mandanten, dem die Organisationsbeziehung zugeordnet ist. Wird vom Schulconnex-Server vergeben und ist eindeutig. Dieses Attribut ist unveränderbar (immutable).
orgid | String (UTF-8) | 1 | Id der Organisation, zu der die „hat_als“-Beziehung besteht.
organisationsbeziehung | String (UTF-8) | 1..n | Beziehung aus Codeliste *Organisationsbeziehungen*.
revision | String (UTF-8) | 0..1 | Revision der Organisationsbeziehung. Wird vom Schulconnex-Server mit der Erstellung des Datensatzes sowie Aktualisierung generiert. Dieser Wert kann nicht von Quellsystemen oder Diensten gesetzt werden.

Organisationsbeziehungen können derzeit nur erstellt und gelöscht, aber nicht verändert werden. Das Attribut
`revision` wird dennoch geführt, damit zukünftig zusätzliche Attribute sowie Aktualisierungen per HTTP-PUT
oder HTTP-PATCH ergänzt werden können.

Die Attribute `id`, `mandant` und `revision` sind übergangsweise optional, da Organisationsbeziehungen bisher
ohne diese Attribute ausgeliefert wurden. Aus Gründen der Rückwärtskompatibilität bleiben sie bis zur
Version 2.0 optional.
