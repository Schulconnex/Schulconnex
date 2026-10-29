---
tags:
- Verbindlich
---
# Bewertung

Das Datenmodell Bewertung erlaubt die Beschreibung von Bewertungen (typischerweise Zeugnisnoten, aber auch Vermerke über erreichte Lernziele oder Zertifikate). Bewertungen werden in Bewertungslisten aufgeführt.

Attribut | Typ | Anzahl | Bemerkung | Qualifizierter Name
--- | --- | --- | --- | ---
id | String (UTF-8) | 1 | ID der Bewertung. |
ktid | String (UTF-8) | 1 | Referenziert den Personenkontext für den die Bewertung erfolgt. |
wert | String (UTF-8) | 1 | Die Bewertung (beispielsweise „2+“ oder „12 Punkte“). | 
datum |  Datum (siehe Abschnitt *Datumsformat*) | 1 | Tag an dem die Bewertung erteilt wurde. Dieses Datum darf nicht nach dem Tag liegen, an dem der Datensatz `Bewertung` erstellt wurde.