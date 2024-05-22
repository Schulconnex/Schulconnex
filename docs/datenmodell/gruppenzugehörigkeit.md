# Gruppenzugehörigkeit

Die Gruppenzugehörigkeit repräsentiert eine Verknüpfung zwischen einem Personenkontext und einer Gruppe.
Hierin werden zusätzlich zu der Rolle im Personenkontext, welcher sich auf die Rolle innerhalb einer
Organisation bezieht, gruppenspezifische Rollen angegeben. So kann beispielsweise eine Person in einer
Organisation die allgemeine Rolle `Lern` (Lernender oder Lernende) haben, in einer Gruppe zusätzlich
noch Funktionen wie Klassensprecher oder Klassensprecherin ausüben.

Attribut | Typ | Anzahl | Bemerkung
--- | --- | --- | ---
id | String (UTF-8) | 1 | ID der Gruppenzugehörigkeit.
mandant | String (UTF-8) | 1 | ID des Mandanten, dem die Gruppenzugehörigkeit zugeordnet ist. Wird vom Schulconnex-Server vergeben und ist eindeutig. Dieses Attribut ist unveränderbar (immutable).
referrer | String (UTF-8) | 0..1 | ID der Gruppenzugehörigkeit im Quellsystem. Wird vom Quellsystem vergeben und muss im Quellsystem eindeutig sein.
ktid | String (UTF-8) | 1 | ID des Personenkontexts, welchem die Gruppe zugeordnet ist.
rollen | String (Code) | 1..n | Liste der Rollen der Person innerhalb der Gruppe. Rolle ist jeweils eine Referenz auf einen Code der Codeliste *Gruppenrolle*.
von | Datum (siehe Abschnitt Datumsformat) | 0..1 | Beginn der Gruppenzugehörigkeit. Dieser Zeitpunkt kann auch in der Zukunft liegen.
bis | Datum (siehe Abschnitt Datumsformat) | 0..1 | Ende der Gruppenzugehörigkeit.
revision | String (UTF-8) | 1 | Revision der Gruppenzugehörigkeit. Wird vom Schulconnex-Server mit der Erstellung des Datensatzes sowie Aktualisierung generiert. Dieser Wert kann nicht von Quellsystemen oder Diensten gesetzt werden.
