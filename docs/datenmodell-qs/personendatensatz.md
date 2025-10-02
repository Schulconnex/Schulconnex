# Personendatensatz

Datenmodell eines Personendatensatzes: Personendatensatz ist als Daten-Container (WrapperObject) zu verstehen.
Über Personendatensatz werden Person (Attribut `personendatensatz.person`) sowie die Personenkontexte
(Attribut `personendatensatz.personenkontexte`) zusammengeführt.

Attribut | Typ | Anzahl | Bemerkung
--- | --- | --- | ---
person | Person | 1 | Person (siehe Datenmodell *Person*).
personenkontexte | Personenkontext | 0..n | Liste (Array) von Personenkontexten (siehe Datenmodell *Personenkontext*).

## Beispiel JSON des Datentyps Personendatensatz

```json
{
  "person": {
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
  },
  "personenkontexte": [
    {
      "id": "4d0f579c-0b9a-4d3a-b484-87b3bee8a2ad",
      "referrer": "NI_12345_123",
      "mandant": "58f45270-8e54-40c6-a212-980307fc19be",
      "organisation": {
        "id": "b0d7b0dd-3477-4122-a38d-095ec242e786",
        "kennung": "NI_12345",
        "name": "Heinrich-Heine-Gymnasium",
        "namensergaenzung": "vorher Heinrich-Heine-Gesamtschule",
        "kuerzel": "Heine-Gym",
        "anschrift" : {
          "postleitzahl": "30519",
          "ort": "Hannover",
          "ortsteil": "Döhren"
        },
        "typ": "Schule",
        "traegerschaft": "02"
      },
      "rolle": "Lern",
      "erreichbarkeiten": [
        {
          "typ": "E-Mail",
          "kennung": "Musterfrau@Heinrich-Heine-Gymnasium.de",
        }
      ],
      "personenstatus": "Aktiv",
      "jahrgangsstufe": "01",
      "revision": "1"
    }
  ]
}
```
