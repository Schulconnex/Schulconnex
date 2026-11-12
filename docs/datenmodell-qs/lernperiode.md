---
tags:
- Verbindlich
---
# Lernperiode

Eine Lernperiode beschreibt einen Zeitraum, in dem Gruppen von Organisationen angeboten werden können.
Meist handelt es sich bei solchen Zeiträumen um gesetzlich vorgegebene Schuljahre oder Schulhalbjahre.

Bis einschließlich Version 1.8 wurden Lernperioden über die lokale Codeliste *Lernperiode* bereitgestellt,
die für jedes neue Schuljahr erweitert werden musste. Ab Version 1.9 werden Lernperioden als eigener
Datentyp abgebildet und können über die Schnittstelle `/lernperioden` abgerufen werden. Die Umstellung
ist rückwärtskompatibel: `laufzeit.vonlernperiode` und `laufzeit.bislernperiode` referenzieren weiterhin
den `code` einer Lernperiode, und die Codes der bisherigen Codeliste behalten ihre Bedeutung.

Attribut | Typ | Anzahl | Bemerkung
--- | --- | --- | ---
code | String (UTF-8) | 1 | Code (ID) der Lernperiode.
bezeichnung | String (UTF-8) | 1 | Bezeichnung der Lernperiode, beispielsweise „Schuljahr 2023/2024”.
typ | String (UTF-8) | 1 | Typ der Lernperiode. Referenz auf einen Code der Codeliste *Lernperiodentyp*.
beginn | Datum (siehe Abschnitt Datumsformat) | 1 | Datum, an dem die Lernperiode beginnt.
ende | Datum (siehe Abschnitt Datumsformat) | 1 | Datum, an dem die Lernperiode endet.

## Aufbau der Codes

Server, die die Schnittstelle `/lernperioden` nicht anbieten, verwenden Codes nach dem Schema der bisherigen
Codeliste. `JJJJ` steht dabei für das Kalenderjahr, in dem das Schuljahr beginnt.

Code | Bezeichnung | Beginn | Ende | Typ
--- | --- | --- | --- | ---
`JJJJ` | Schuljahr JJ/JJ+1 | JJJJ-08-01 | (JJJJ+1)-07-31 | SJ
`JJJJ-1` | 1. Halbj. JJ/JJ+1 | JJJJ-08-01 | (JJJJ+1)-01-31 | HJ
`JJJJ-2` | 2. Halbj. JJ/JJ+1 | (JJJJ+1)-02-01 | (JJJJ+1)-07-31 | HJ

Beispiel für das Schuljahr 2023/24:

Code | Bezeichnung | Beginn | Ende | Typ
--- | --- | --- | --- | ---
2023 | Schuljahr 2023/24 | 2023-08-01 | 2024-07-31 | SJ
2023-1 | 1. Halbj. 23/24 | 2023-08-01 | 2024-01-31 | HJ
2023-2 | 2. Halbj. 23/24 | 2024-02-01 | 2024-07-31 | HJ
