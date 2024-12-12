---
title: Name
---

# Angepasstes Datenmodell Name

Datenmodell des Namens einer [Person](person).

Attribut | Typ | Anzahl | Freigabe erforderlich | Bemerkung
--- | --- | --- | --- | ---
familienname | String (DIN 91379.A) | 0/1 | ja | Familienname(n) der Person. Mehrere Familiennamen werden durch Leerzeichen separiert.
vorname | String (DIN 91379.A) | 0/1 | ja | Mehrere Vornamen werden durch Leerzeichen separiert.
initialenfamilienname | String (DIN 91379.A) | 0/0..1 | ja | Initial oder Initialen des Familiennamens.
initialenvorname | String (DIN 91379.A) | 0/0..1 | ja | Initial oder Initialen des Vornamens.
rufname | String (32) (DIN 91379.A) | 0/0..1 | ja | Bei mehreren Vornamen wird der täglich im Gebrauch genutzte Vorname geführt, maximal 32 Zeichen.
