# Sichtfreigabe

Datenmodell einer Sichtfreigabe.

Attribut | Typ | Anzahl | Bemerkung
--- | --- | --- | ---
id | String (UTF-8) | 1 | ID der Sichtfreigabe.
orgid | String (UTF-8) | 1 | ID der Organisation für welche die Sichtfreigabe erteilt wurde.
von | Datum (siehe Abschnitt *Datumsformat*) | 0..1 | Beginn der Sichtfreigabeperiode. Eine Sichtfreigabe beginnt immer um 00:00 des angegebenen Tages, bzw. sofort, wenn das aktuelle Datum beim Erstellen angegeben wurde. Der Beginn einer Freigabe darf nicht vor dem aktuellen Datum liegen.
bis | Datum (siehe Abschnitt *Datumsformat*) | 0..1 | Ende der Sichtfreigabeperiode. Das Ende einer Freigabe darf nicht vor dem Datum der Erstellung der Freigabe liegen. Eine Sichtfreigabe ist immer einschliesslich des `bis` Datums. Ist `bis` auf den 31.12.2028 gesetzt, so endet die Freigabe am 01.01.2029 um 00:00. Muss eine Sichtfreigabe unverzüglich beendet werden, so ist dafür die DELETE API für Sichtfreigabe zu nutzen.
revision | String (UTF-8) | 1 | Revision der Freigabe. Wird vom Schulconnex-Server mit der Erstellung des Datensatzes sowie Aktualisierung generiert. Dieser Wert kann nicht von Quellsystemen oder Diensten gesetzt werden.
