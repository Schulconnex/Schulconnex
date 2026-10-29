---
tags:
- Verbindlich
---
# Lernperiode

Eine Lernperiode beschreibt einen Zeitraum, in dem Gruppen von Organisationen angeboten werden können.
Meist handelt es sich bei solchen Zeiträumen um gesetzlich vorgegebene Schuljahre oder Schulhalbjahre.

Attribut | Typ | Anzahl | Bemerkung
--- | --- | --- | ---
code | String (UTF-8) | 1 | Code (ID) der Lernperiode.
bezeichnung | String (UTF-8) | 1 | Bezeichnung der Lernperiode, beispielsweise „Schuljahr 2023/2024”.
typ | String (UTF-8) | 1 | Typ der Lernperiode. Referenz auf einen Code der Codeliste *Lernperiodentyp*.
beginn | Datum (siehe Abschnitt Datumsformat) | 1 | Datum, an dem die Lernperiode beginnt.
ende | Datum (siehe Abschnitt Datumsformat) | 1 | Datum, an dem die Lernperiode endet.
