---
tags:
- Verbindlich
---
# Sichtfreigabe

Sichtfreigaben für einen Personenkontext können nur durch die Organisation erstellt, aufgelistet oder gelöscht werden, welcher der Personenkontext zugeordnet ist (Attribut `personenkontext.organisation`). 

Diese Organisation kann einer anderen Organisation (spezifiziert durch das Attribut `orgid`) eine Sichtfreigabe erteilen, welche der zweiten Organisation ermöglicht lesend auf diesen Personenkontext und den dazugehörigen Datensatz `person` zuzugreifen.

Ein solcher Zugriff kann über die Attribute `von` und `bis` zeitlich begrenzt werden. 

Unabhängig von dieser zeitlichen Begrenzung kann eine Sichtfreigabe jederzeit durch die DELETE API für Sichtfreigabe gelöscht werden. Dabei sind sowohl die Organisation, welche die Sichtfreigabe erteilt hat, als auch die zweite Organisation, für welche die Sichtfreigabe erteilt wurde, berechtigt diese Sichtfreigabe zu löschen.

Attribut | Typ | Anzahl | Bemerkung
--- | --- | --- | ---
id | String (UTF-8) | 1 | ID der Sichtfreigabe.
orgid | String (UTF-8) | 1 | ID der Organisation für welche die Sichtfreigabe erteilt wurde.
von | Datum (siehe Abschnitt *Datumsformat*) | 0..1 | Beginn der Sichtfreigabeperiode. Eine Sichtfreigabe beginnt immer um 00:00 des angegebenen Tages, bzw. sofort, wenn das aktuelle Datum beim Erstellen angegeben wurde. Der Beginn einer Freigabe darf nicht vor dem aktuellen Datum liegen.
bis | Datum (siehe Abschnitt *Datumsformat*) | 0..1 | Ende der Sichtfreigabeperiode. Das Ende einer Freigabe darf nicht vor dem Datum der Erstellung der Freigabe liegen. Eine Sichtfreigabe ist immer einschließlich des `bis` Datums. Ist `bis` auf den 31.12.2028 gesetzt, so endet die Freigabe am 01.01.2029 um 00:00. Muss eine Sichtfreigabe unverzüglich beendet werden, so ist dafür die DELETE API für Sichtfreigabe zu nutzen.
revision | String (UTF-8) | 1 | Revision der Freigabe. Wird vom Schulconnex-Server mit der Erstellung des Datensatzes sowie Aktualisierung generiert. Dieser Wert kann nicht von Quellsystemen oder Diensten gesetzt werden.
