---
tags:
- Verbindlich
---
# Bewertungslistendatensatz

Datenmodell eines Bewertungslistendatensatzes: Der Bewertungslistendatensatz ist als Daten-Container (WrapperObject) zu verstehen.
Über den Bewertungslistendatensatz werden Bewertungslisten (Attribut `bewertungslistendatensatz.bewertungsliste`) sowie
die Bewertungen (Attribut `bewertungslistendatensatz.bewertungen`) zusammengeführt

Attribut | Typ | Anzahl | Bemerkung
--- | --- | --- | ---
bewertungsliste | Bewertungsliste | 1 | Bewertungsliste (siehe *Bewertungsliste*).
bewertungen | Bewertungen | 0..n  | Liste (Array) von Bewertungen (siehe *Bewertung*).
