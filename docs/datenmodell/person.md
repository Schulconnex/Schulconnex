# Person

Nachfolgend ist das Datenmodell einer Person dargestellt.

Attribut | Typ | Anzahl | Bemerkung
--- | --- | --- | ---
id | String (UTF-8) | 1 | ID der Person. Wird vom Schulconnex-Server vergeben, ist eindeutig. Dieses Attribut ist unveränderbar (immutable).
referrer | String (UTF-8) | 0..1 | Die optionale Identifikations-ID einer Person muss innerhalb eines Quellsystems eindeutig sein (z. B. eine einheitliche Personalnummer).
mandant | String (UTF-8) | 1 | ID des Mandanten, dem die Personen zugeordnet ist. Wird vom Schulconnex-Server vergeben und ist eindeutig.
stammorganisation | String (UTF-8) | 0..1 | Personen können einer Organisation angehören, jedoch zeitweise an einer anderen Organisation tätig sein.
name | *Struktur* | 1 |
name.familienname | String (DIN 91379.A) | 1 | Familienname(n) der Person. Mehrere Familiennamen werden durch Leerzeichen separiert.
name.vorname | String (DIN 91379.A) | 1 | Mehrere Vornamen werden durch Leerzeichen separiert.
name.initialenfamilienname | String (8) (DIN 91379.A) | 0..1 | Initial oder Initialen des Familiennamens, maximal acht Zeichen
name.initialenvorname | String (8) (DIN 91379.A) | 0..1 | Initial oder Initialen des Vornamens, maximal acht Zeichen
name.rufname | String (32) (DIN 91379.A) | 0..1 | Bei mehreren Vornamen wird der täglich im Gebrauch genutzte Vorname geführt, maximal 32 Zeichen.
name.titel | String (128) (DIN 91379.B) | 0..1 | Titel der Person (bspw. ein akademischer Grad, Dienst- und Amtsbezeichnungen oder militärische Ränge), maximal 128 Zeichen
name.anrede | String (64/512) (DIN 91379.B) | 0..n | Liste (Array) von Namenszusätzen bei der Anrede. Jeder einzelne Namenszusatz hat eine Maximallänge von 64 Zeichen, die Maximallänge für alle Namenszusätze liegt bei 512 Zeichen.
name.namenssuffix | String (64/1024) (DIN 91379.A) | 0..n | Liste (Array) von Namenssuffixen. Jeder einzelne Namenssuffix hat eine Maximallänge von 64 Zeichen, die Maximallänge für alle Namenssuffixe liegt bei 1024 Zeichen.
name.sortierindex | String (Nummer) | 0..1 | Index des Buchstabens des Nachnamens, nach dem sortiert werden soll. Der Index ist Null-basiert, d. h. ein Wert von „4“ zeigt an, dass die ersten vier Buchstaben ignoriert und ab dem fünften Buchstaben des Nachnamens sortiert werden soll. Ist kein Sortierindex angegeben, so ist der Nachname entsprechend dem ersten Buchstaben in Listen einzusortieren, äquivalent zum Sortierindex „0“.
geburt | *Struktur* | 0..1 |
geburt.datum | Datum (siehe Abschnitt *Datumsformat*) | 0..1 | Geburtsdatum einer Person
geburt.geburtsort | String (DIN 91379.C) | 0..1 | Geburtsort einer Person, bestehend aus Ortsname und Land, beispielsweise „Eindhoven, Niederlande“. Wird kein Land angegeben, so wird als Land „Deutschland“ angenommen, d.h. der Geburtsort „Erfurt“ ist wie „Erfurt, Deutschland“ zu behandeln.
geschlecht | String (Code) | 0..1 | Referenz auf einen Code der Codeliste *Geschlecht*.
lokalisierung | String (Code) | 0..1 | Bevorzugte Lokalisierungseinstellung einer Person für Anwendungen gemäß RFC5646. Wenn nicht angegeben, wird „de“ angenommen. Referenz auf einen Code der Codeliste *Lokalisierung*.
vertrauensstufe | String (Code) | 0..1 | Gibt an, wie stark die Personendaten vom erfassenden Mandanten verifiziert wurden, Referenz auf einen Code der Codeliste *Vertrauensstufe*.
auskunftssperre | String (Code) | 1 | Auskunftssperre über eine Person. Dienste erhalten nur einen uneingeschränkten Datensatz, wenn der Wert „nein” ist. Sofern nicht explizit „ja” eingeben wurde, ist der Default „nein”. Referenz auf einen Code der Codeliste *Boolean*.
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
  "lokalisierung": “de”,
  "vertrauensstufe": "VOLL",
  "auskunftssperre": "nein",
  "revision": "1"
}
```
