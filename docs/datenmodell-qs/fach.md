# Fach

Ein behandeltes Fach.

| Attribut     | Typ            | Anzahl   | Bemerkung                                                                                                                                                                   | Qualifizierter Name                     |
|--------------|----------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------|
| kennung      | String (Code)  | 0..1     | Behandeltes Fach. Referenz auf Code der Codeliste *Fächerkanon*.                                                                                                          | `urn:schulconnex:de:fach:kennung`        |
| bezeichnung  | String         | 0/0..1   | Bezeichnung eines Faches, welches nicht in der Codeliste *Fächerkanon* enthalten ist. Das Attribut `kennung` sollte nicht gesetzt werden, wenn `bezeichnung` gesetzt ist. Sind beide Attribute vorhanden, so muss die Bezeichnung identisch mit der Bezeichnung des Faches in der Codeliste *Fächerkanon* für den Code in `kennung` sein. | `urn:schulconnex:de:fach:bezeichnung`    |

