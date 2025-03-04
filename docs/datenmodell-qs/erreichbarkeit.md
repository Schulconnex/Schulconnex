# Erreichbarkeit

Erreichbarkeit für einen Personenkontext.

Ein Personenkontext kann mehrere Erreichbarkeits-Datensätze in einem Array haben. Die Reihenfolge der Erreichbarkeits-Datensätze in diesem Array ist nicht spezifiziert und auch nicht notwendigerweise bei jedem Lesen der Erreichbarkeits-Daten gleich. Der erste Erreichbarkeits-Datensatz ist nicht
unbedingt die bevorzugte Art der Erreichbarkeit.

Attribut | Typ | Anzahl | Bemerkung
--- | --- | --- | ---
typ | String (Code) | 1 | Typ der Erreichbarkeit. Referenz auf Liste von Codes der Codeliste *Erreichbarkeitstyp*.
kennung | String (UTF-8) | 1 | Konkrete Angabe der zum Erreichen der Person oder Organisation notwendigen Information. Derzeit ist nur die Erreichbarkeit über  eine E-Mail- Adresse vorgesehen.
