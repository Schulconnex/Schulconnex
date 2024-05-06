# Lernperiode

Eine Lernperiode beschreibt einen Zeitraum, in denen Gruppen von Organisationen angeboten werden können.
Meist handelt es sich bei solchen Zeiträumen um gesetzlich vorgegebene Schuljahre oder Schulhalbjahre.

Beim Datentyp Lernperiode handelt es sich nicht um über API-Calls veränderbare Daten, sondern Lernperioden
werden über eine Codeliste bereitgestellt. Anders als die meisten anderen Codelisten handelt es sich bei
Lernperioden jedoch nicht um eine einfache Code-/Werte-Liste, sondern um einen komplexen Datentyp, dessen
Struktur in der folgenden Tabelle beschrieben ist.

Attribut | Typ | Anzahl | Bemerkung
--- | --- | --- | ---
code | String (UTF-8) | 1 | Code der Lernperiode.
bezeichnung | String (UTF-8) | 1 | Bezeichnung der Lernperiode, beispielsweise „Schuljahr 2023/2024”.
typ | String (UTF-8) | 1 | Typ der Lernperiode. Referenz auf Liste von Typen der Codeliste *Lernperiodentyp*.
beginn | Datum (siehe Abschnitt Datumsformat) | 1 | Datum, an dem die Lernperiode beginnt.
ende | Datum (siehe Abschnitt Datumsformat) | 1 | Datum, an dem die Lernperiode endet.
