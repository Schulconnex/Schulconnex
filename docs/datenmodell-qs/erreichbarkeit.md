---
tags:
- Verbindlich
---
# Erreichbarkeit

Erreichbarkeit für einen Personenkontext.

Ein Personenkontext kann mehrere Erreichbarkeits-Datensätze in einem Array enthalten. Die Reihenfolge dieser Datensätze ist nicht spezifiziert und kann sich bei jedem API-Aufruf unterscheiden. Es darf nicht angenommen werden, dass der erste Datensatz die bevorzugte Erreichbarkeitsart repräsentiert.

Attribut | Typ | Anzahl | Bemerkung
--- | --- | --- | ---
typ | String (Code) | 1 | Typ der Erreichbarkeit. Referenz auf Liste von Codes der Codeliste *Erreichbarkeitstyp*.
kennung | String (UTF-8) | 1 | Konkrete Angabe der zum Erreichen der Person oder Organisation notwendigen Information. Derzeit ist nur die Erreichbarkeit über  eine E-Mail- Adresse vorgesehen.
