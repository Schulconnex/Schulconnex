# Sichtfreigabe

Datenmodell einer Sichtfreigabe.

| Attribut  | Typ                              | Anzahl   | Bemerkung                                                                                                                                                                         | Qualifizierter Name                               |
|-----------|----------------------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------|
| id        | String (UTF-8)                  | 1        | ID der Sichtfreigabe.                                                                                                                                                            | `urn:schulconnex:de:sichtfreigabe:id`           |
| orgid     | String (UTF-8)                  | 1        | ID der Organisation, für welche die Sichtfreigabe erteilt wurde.                                                                                                                 | `urn:schulconnex:de:sichtfreigabe:orgid`        |
| von       | Datum (siehe Abschnitt *Datumsformat*) | 0..1     | Beginn der Sichtfreigabeperiode. Eine Sichtfreigabe beginnt immer um 00:00 des angegebenen Tages, bzw. sofort, wenn das aktuelle Datum beim Erstellen angegeben wurde. Der Beginn einer Freigabe darf nicht vor dem aktuellen Datum liegen. | `urn:schulconnex:de:sichtfreigabe:von`          |
| bis       | Datum (siehe Abschnitt *Datumsformat*) | 0..1     | Ende der Sichtfreigabeperiode. Das Ende einer Freigabe darf nicht vor dem Datum der Erstellung der Freigabe liegen. Eine Sichtfreigabe ist immer einschließlich des `bis` Datums. | `urn:schulconnex:de:sichtfreigabe:bis`          |
| revision  | String (UTF-8)                  | 1        | Revision der Freigabe. Wird vom Schulconnex-Server mit der Erstellung des Datensatzes sowie Aktualisierung generiert. Dieser Wert kann nicht von Quellsystemen oder Diensten gesetzt werden. | `urn:schulconnex:de:sichtfreigabe:revision`     |


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
