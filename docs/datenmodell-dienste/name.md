---
title: Name
---

# Datenmodell Name für Dienste

Datenmodell des Namens einer [Person](person).

| Attribut             | Typ                        | Anzahl   | Freigabe erforderlich | Bemerkung                                                                                     | Qualifizierter Name                              |
|----------------------|----------------------------|----------|------------------------|---------------------------------------------------------------------------------------------|-------------------------------------------------|
| familienname         | String (DIN 91379.A)      | 0/1      | ja                     | Familienname(n) der Person. Mehrere Familiennamen werden durch Leerzeichen separiert.        | `urn:schulconnex:de:person:name:familienname`   |
| vorname              | String (DIN 91379.A)      | 0/1      | ja                     | Mehrere Vornamen werden durch Leerzeichen separiert.                                         | `urn:schulconnex:de:person:name:vorname`        |
| initialenfamilienname | String (DIN 91379.A)      | 0/0..1   | ja                     | Initial oder Initialen des Familiennamens.                                                  | `urn:schulconnex:de:person:name:initialenfamilienname` |
| initialenvorname     | String (DIN 91379.A)      | 0/0..1   | ja                     | Initial oder Initialen des Vornamens.                                                       | `urn:schulconnex:de:person:name:initialenvorname` |
| rufname              | String (32) (DIN 91379.A) | 0/0..1   | ja                     | Bei mehreren Vornamen wird der täglich im Gebrauch genutzte Vorname geführt, maximal 32 Zeichen. | `urn:schulconnex:de:person:name:rufname`        |
