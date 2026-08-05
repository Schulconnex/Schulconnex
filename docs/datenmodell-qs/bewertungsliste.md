---
tags:
- Verbindlich
---
# Bewertungsliste

Das Datenmodell Bewertungsliste erlaubt die Auflistung von Bewertungen (typischerweise Zeugnisnoten, aber auch Vermerke über erreichte Lernziele oder Zertifikate) für eine Gruppe oder eine Liste von Gruppen.

Attribut | Typ | Anzahl | Bemerkung | Qualifizierter Name
--- | --- | --- | --- | ---
id | String (UTF-8) | 1 | ID der Bewertungsliste. |
grids | String (UTF-8) | 0..n | Liste (Array) von Gruppen-IDs auf welche sich die Bewertungsliste bezieht. |
name | String (UTF-8) | 1 | Name der Bewertungsliste | 
typ | String (UTF-8) | 1 | Typ der Bewertungsliste | 
bewertungen | String (UTF-8) | 0..n | Liste (Array) von Bewertungen
revision | String (UTF-8) | 1 | Revision der Bewertungsliste. Wird vom Schulconnex-Server mit der Erstellung des Datensatzes sowie Aktualisierung generiert. Dieser Wert kann nicht von Quellsystemen oder Diensten gesetzt werden.