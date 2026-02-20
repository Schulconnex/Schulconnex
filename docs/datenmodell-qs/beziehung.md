---
tags:
- Verbindlich
---
# Beziehung

Das Datenmodell Beziehung beschreibt die Beziehung zweier Personen. Die Beziehungen werden zwischen
Personenkontexten der beiden Personen erstellt. Beziehungen werden immer in der Form "hat_als" dargestellt.
Wenn aus einem Personenkontext von Person A eine Beziehung `"SchB"` (Schulbegleiter oder Schulbegleiterin)
zu einem Personenkontext (`ktid`) von Person B besteht, so **hat** A die Person B **als** Schulbegleiter oder
Schulbegleiterin und Person A ist schulbegleitet **von** Person B.

Attribut | Typ | Anzahl | Bemerkung
--- | --- | --- | ---
id | String (UTF-8) | 1 | ID der Beziehung.
mandant | String (UTF-8) | 1 | ID des Mandanten, dem die Beziehung zugeordnet ist. Wird vom Schulconnex-Server vergeben und ist eindeutig. Dieses Attribut ist unveränderbar (immutable).
ktid | String (UTF-8) | 1 | ID des Personenkontexts, zu dem eine Beziehung besteht.
beziehung | String (UTF-8) | 1 | Beziehung aus Codeliste *Beziehungen*.
revision | String (UTF-8) | 1 | Revision der Beziehung. Wird vom Schulconnex-Server mit der Erstellung des Datensatzes sowie Aktualisierung generiert. Dieser Wert kann nicht von Quellsystemen oder Diensten gesetzt werden.