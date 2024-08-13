# Sichtfreigabe

Datenmodell einer Sichtfreigabe.

Attribut | Typ | Anzahl | Bemerkung
--- | --- | --- | ---
id | String (UTF-8) | 1 | ID der Sichtfreigabe.
orgid | String (UTF-8) | 1 | ID der Organisation für welche die Sichtfreigabe erteilt wurde.
von | Datum (siehe Abschnitt *Datumsformat*) | 0..1 | Beginn der Sichtfreigabeperiode.
bis | Datum (siehe Abschnitt *Datumsformat*) | 0..1 | Ende der Sichtfreigabeperiode. Das Ende einer Freigabe darf nicht vor dem aktuellen Datum liegen. Das Ende einer Freigabe darf nicht vor deren Anfang liegen.
revision | String (UTF-8) | 1 | Revision der Freigabe. Wird vom Schulconnex-Server mit der Erstellung des Datensatzes sowie Aktualisierung generiert. Dieser Wert kann nicht von Quellsystemen oder Diensten gesetzt werden.

## Beispiel-JSON des Datentyps Sichtfreigabe

```json
{
    "id": "b639120f-4b04-40dc-aa4f-8f7c34935d41",
    "orgid": "4d8505bf-3aba-4e80-a636-ee21f1ff38a8",
    "von": "2023-01-01",
    "bis": "2023-12-31",
    "revision": "1"
}
```
