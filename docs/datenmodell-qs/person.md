# Person

Nachfolgend ist das Datenmodell einer Person dargestellt.

Attribut | Typ | Anzahl | Bemerkung
--- | --- | --- | ---
id | String (UTF-8) | 1 | ID der Person. Wird vom Schulconnex-Server vergeben und ist eindeutig. Dieses Attribut ist unveränderbar (immutable).
referrer | String (UTF-8) | 0..1 | Identifikations-ID einer Person. Wird vom Quellsystem vergeben und muss im Quellsystem eindeutig sein (z. B. eine einheitliche Personalnummer).
mandant | String (UTF-8) | 1 | ID des Mandanten, dem die Personen zugeordnet ist. Wird vom Schulconnex-Server vergeben und ist eindeutig.
stammorganisation | String (UTF-8) | 0..1 | ID der Stammorganisation. Personen können einer Organisation angehören, jedoch zeitweise an einer anderen Organisation tätig sein. Der häufigste Anwendungsfall ist die Abordnung eines Lehrenden an eine andere Dienststelle. Die Stammorganisation ist unabhängig vom Personenkontext.
name | *[Name](name)* | 1 | Der Name der Person.
geburt | *[Geburt](geburt)* | 0..1 | Information zu Geburtsdatum und Geburtsort der Person.
geschlecht | String (Code) | 0..1 | Referenz auf einen Code der Codeliste *Geschlecht*.
lokalisierung | String | 0..1 | Bevorzugte Lokalisierungseinstellung einer Person für Anwendungen. Wert basiert auf Definition in RFC 5646. Wenn nicht angegeben, wird „de“ angenommen.
vertrauensstufe | String (Code) | 1 | Gibt an, wie stark die Personendaten vom erfassenden Mandanten verifiziert wurden, Referenz auf einen Code der Codeliste *Vertrauensstufe*.
auskunftssperre | String (Code) | 1 | Auskunftssperre über eine Person. Dienste erhalten nur einen uneingeschränkten Datensatz, wenn der Wert „nein” ist. Sofern nicht explizit „ja” eingeben wurde, ist der Default „nein”. Referenz auf einen Code der Codeliste *Boolean*.
reduziertedatenverarbeitung | String (Code) | 1 |  „Einschränkung der Verarbeitung“ nach Art 4 Nr. 3 DSGVO. Fordert eine betroffene Person die Einschränkung der Verarbeitung ihrer Daten nach Art 18, so wird dieses Attribut auf "ja" gesetzt. Sofern nicht explizit „ja” eingeben wurde, ist der Default „nein”. Referenz auf einen Code der Codeliste *Boolean*.
revision | String (UTF-8) | 1 | Revision der Person. Wird vom Schulconnex-Server mit der Erstellung des Datensatzes sowie Aktualisierung generiert. Dieser Wert kann nicht von Quellsystemen oder Diensten gesetzt werden.

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
  "reduziertedatenverarbeitung": "Nein",
  "revision": "1"
}
```
