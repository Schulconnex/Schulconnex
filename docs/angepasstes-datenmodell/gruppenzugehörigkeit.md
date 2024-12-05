---
title: Gruppenzugehörigkeit
---

# Angepasstes Datenmodell Gruppenzugehörigkeit

Die Gruppenzugehörigkeit repräsentiert eine Verknüpfung zwischen einem Personenkontext und einer Gruppe.
Hierin werden zusätzlich zu der Rolle im Personenkontext, welcher sich auf die Rolle innerhalb einer
Organisation bezieht, gruppenspezifische Rollen angegeben. So kann beispielsweise eine Person in einer
Organisation die allgemeine Rolle `Lern` (Lernender oder Lernende) haben, in einer Gruppe zusätzlich
noch Funktionen wie Klassensprecher oder Klassensprecherin ausüben.

Attribut | Typ | Anzahl | Freigabe erforderlich | Bemerkung
--- | --- | --- | ---
ktid | String (Code) | 0/1 | ja | Pseudonymisierte ID des Personenkontexts.
rollen | String (Code) | 0/1..n | ja | Rollen der Person innerhalb der Gruppe. Liste von Rollen nach Codeliste *Gruppenrolle*.
von | String (Code) | 0/1..n | ja | Beginn der Gruppenzugehörigkeit. Dieser Zeitpunkt kann auch in der Zukunft liegen.
bis | String (Code) | 0/1..n | ja | Ende der Gruppenzugehörigkeit.
