# Gruppenzugehörigkeit
Die Gruppenzugehörigkeit repräsentiert eine Verknüpfung zwischen einem [Personenkontext](./personenkontext.md) und einer [Gruppe](./gruppe.md). Hierin werden zusätzlich zu der Rolle im Personenkontext, welcher sich auf die Rolle innerhalb einer [Organisation](./organisation.md) bezieht, gruppenspezifische Rollen angegeben. So kann beispielsweise eine [Person](./person.md) in einer Organisation die allgemeine Rolle `Lern` (Lernender oder Lernende) haben, in einer Gruppe zusätzlich noch Funktionen wie Klassensprecher oder Klassensprecherin ausüben.

Attribut | Typ | Anzahl | Bemerkung
--- | --- | --- | ---
id | String (UTF-8) | 1 | ID der Gruppenzugehörigkeit.
mandant | String (UTF-8) | 1 | ID des Mandanten, dem die Gruppenzugehörigkeit zugeordnet ist. Wird vom Schulconnex-Server vergeben und ist eindeutig. Dieses Attribut ist unveränderbar (immutable).
referrer | String (UTF-8) | 0..1 | ID der Gruppenzugehörigkeit im Quellsystem. Wird vom Quellsystem vergeben und muss im Quellsystem eindeutig sein.
ktid | String (UTF-8) | 1 | ID des [Personenkontexts](./personenkontext.md), welcher der Gruppe zugeordnet ist.
rollen | String (Code) | 1..n | Liste der Rollen der [Person](./person.md) innerhalb der Gruppe. Rolle ist jeweils eine Referenz auf einen Code der Codeliste *Gruppenrolle*.
von | [Datum](./datumsformat.md) | 0..1 | Beginn der Gruppenzugehörigkeit. Dieses Datum kann auch in der Zukunft liegen. Ist `von` nicht angegeben, besteht die  Gruppenzugehörigkeit für jeden Zeitpunkt vor dem Enddatum.
bis | [Datum](./datumsformat.md) | 0..1 | Ende der Gruppenzugehörigkeit. Laufzeiten schliessen den ersten und letzten Tag immer mit ein. Ist als `bis` der 31. Oktober 2025 angegeben, so endet die Gruppenzugehörigkeit am 01.11.2025 um 00:00. Ist `bis` nicht angegeben, so besteht die Gruppenzugehörigkeit für jedes Datum nach dem Startdatum.
revision | String (UTF-8) | 1 | Revision der Gruppenzugehörigkeit. Wird vom Schulconnex-Server mit der Erstellung des Datensatzes sowie Aktualisierung generiert. Dieser Wert kann nicht von Quellsystemen oder Diensten gesetzt werden.
