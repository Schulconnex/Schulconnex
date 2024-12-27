# Person

Nachfolgend ist das Datenmodell einer Person dargestellt.

| Attribut         | Typ                        | Anzahl   | Bemerkung                                                                                                                                                                | Qualifizierter Name                              |
|------------------|----------------------------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------|
| id               | String (UTF-8)            | 1        | ID der Person. Wird vom Schulconnex-Server vergeben und ist eindeutig. Dieses Attribut ist unveränderbar (immutable).                                                  | `urn:schulconnex:de:person:id`                 |
| referrer         | String (UTF-8)            | 0..1     | Identifikations-ID einer Person. Wird vom Quellsystem vergeben und muss im Quellsystem eindeutig sein (z. B. eine einheitliche Personalnummer).                        | `urn:schulconnex:de:person:referrer`           |
| mandant          | String (UTF-8)            | 1        | ID des Mandanten, dem die Person zugeordnet ist. Wird vom Schulconnex-Server vergeben und ist eindeutig.                                                              | `urn:schulconnex:de:person:mandant`            |
| stammorganisation | String (UTF-8)            | 0..1     | ID der Stammorganisation. Personen können einer Organisation angehören, jedoch zeitweise an einer anderen Organisation tätig sein.                                     | `urn:schulconnex:de:person:stammorganisation`  |
| name             | *[Name](name)*            | 1        | Der Name der Person.                                                                                                                                                   | `urn:schulconnex:de:person:name`               |
| geburt           | *[Geburt](geburt)*        | 0..1     | Zur Geburt der Person.                                                                                                                                                 | `urn:schulconnex:de:person:geburt`             |
| geschlecht       | String (Code)             | 0..1     | Referenz auf einen Code der Codeliste *Geschlecht*.                                                                                                                    | `urn:schulconnex:de:person:geschlecht`         |
| lokalisierung    | String                    | 0..1     | Bevorzugte Lokalisierungseinstellung einer Person für Anwendungen. Wert basiert auf Definition in RFC 5646. Wenn nicht angegeben, wird „de“ angenommen.               | `urn:schulconnex:de:person:lokalisierung`      |
| vertrauensstufe  | String (Code)             | 1        | Gibt an, wie stark die Personendaten vom erfassenden Mandanten verifiziert wurden, Referenz auf einen Code der Codeliste *Vertrauensstufe*.                            | `urn:schulconnex:de:person:vertrauensstufe`    |
| auskunftssperre  | String (Code)             | 1        | Auskunftssperre über eine Person. Dienste erhalten nur einen uneingeschränkten Datensatz, wenn der Wert „nein” ist. Sofern nicht explizit „ja” eingeben wurde, ist der Default „nein”. Referenz auf einen Code der Codeliste *Boolean*. | `urn:schulconnex:de:person:auskunftssperre`    |
| revision         | String (UTF-8)            | 1        | Revision der Person. Wird vom Schulconnex-Server mit der Erstellung des Datensatzes sowie Aktualisierung generiert. Dieser Wert kann nicht von Quellsystemen oder Diensten gesetzt werden. | `urn:schulconnex:de:person:revision`           |


## Beispiel JSON des Datentyps Person

```json
{
  "id": "a6e1a860-8d44-4b2b-aef7-aa2c8bf5beb5",
  "referrer": "125",
  "mandant": "58f45270-8e54-40c6-a212-980307fc19be",
  "name": {
    "familienname": "von Musterfrau",
    "vorname": "Natalie Lisa",
    "initialenfamilienname": "M.",
    "initialenvorname ": "N.",
    "rufname": "Natalie",
    "titel": "Dr.",
    "anrede": [
      "Frau"
    ],
    "namenssuffix": [
      "jun."
    ],
    "sortierindex": "4"
  },
  "geburt": {
    "datum": "2005-05-01",
    "geburtsort": "Berlin, Deutschland"
  },
  "geschlecht": "w",
  "lokalisierung": "de",
  "vertrauensstufe": "Voll",
  "auskunftssperre": "Nein",
  "revision": "1"
}
```
