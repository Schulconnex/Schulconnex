---
title: Beziehung
---

# Angepasstes Datenmodell Beziehung

Das Datenmodell Beziehung beschreibt die Beziehung zweier Personen. Die Beziehungen werden zwischen
Personenkontexten der beiden Personen erstellt. Beziehungen werden immer in der Form "hat_als" dargestellt.
Wenn aus einem Personenkontext von Person A eine Beziehung `"SchB"` (Schulbegleiter oder Schulbegleiterin)
zu einem Personenkontext (`ktid`) von Person B besteht, so **hat** A die Person B **als** Schulbegleiter oder
Schulbegleiterin und Person A ist schulbegleitet **von** Person B.

Attribut | Typ | Anzahl | Freigabe erforderlich | Bemerkung
--- | --- | --- | --- | ---
ktid | String (UTF-8) | 0/1 | ja | Pseudonymisierte ID des Personenkontexts.
beziehung | String (Code) | 0/1 | ja | Art der Beziehung aus Codeliste *Beziehungen*.
