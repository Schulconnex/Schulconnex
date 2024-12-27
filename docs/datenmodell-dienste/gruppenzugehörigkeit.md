---
title: Gruppenzugehörigkeit
---

# Datenmodell Gruppenzugehörigkeit für Dienste

Die Gruppenzugehörigkeit repräsentiert eine Verknüpfung zwischen einem Personenkontext und einer Gruppe.
Hierin werden zusätzlich zu der Rolle im Personenkontext, welcher sich auf die Rolle innerhalb einer
Organisation bezieht, gruppenspezifische Rollen angegeben. So kann beispielsweise eine Person in einer
Organisation die allgemeine Rolle `Lern` (Lernender oder Lernende) haben, in einer Gruppe zusätzlich
noch Funktionen wie Klassensprecher oder Klassensprecherin ausüben.

| Attribut | Typ            | Anzahl   | Freigabe erforderlich | Bemerkung                                                                               | Qualifizierter Name                              |
|----------|----------------|----------|------------------------|---------------------------------------------------------------------------------------|-------------------------------------------------|
| ktid     | String (Code)  | 0/1      | ja                     | Pseudonymisierte ID des Personenkontexts.                                             | `urn:schulconnex:de:gruppenzugehoerigkeit:ktid` |
| rollen   | String (Code)  | 0/1..n   | ja                     | Rollen der Person innerhalb der Gruppe. Liste von Rollen nach Codeliste *Gruppenrolle*. | `urn:schulconnex:de:gruppenzugehoerigkeit:rollen` |
| von      | String (Code)  | 0/1..n   | ja                     | Beginn der Gruppenzugehörigkeit. Dieser Zeitpunkt kann auch in der Zukunft liegen.    | `urn:schulconnex:de:gruppenzugehoerigkeit:von`  |
| bis      | String (Code)  | 0/1..n   | ja                     | Ende der Gruppenzugehörigkeit.                                                        | `urn:schulconnex:de:gruppenzugehoerigkeit:bis`  |

