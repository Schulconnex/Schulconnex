# Gruppendatensatz

Datenmodell eines Gruppendatensatzes: Der Gruppendatensatz ist als Daten-Container (WrapperObject) zu verstehen.
Über den Gruppendatensatz werden Gruppe (Attribut `gruppendatensatz.gruppe`) sowie
die Gruppenzugehörigkeiten (Attribut `gruppendatensatz.gruppenzugehoerigkeit`) zusammengeführt

Attribut | Typ | Anzahl | Bemerkung
--- | --- | --- | ---
gruppe | Gruppe | 1 | Gruppe (siehe *Gruppe*).
gruppenzugehoerigkeiten | Gruppenzugehörigkeit | 0..n  | Liste (Array) von Gruppenzugehörigkeiten (siehe *Gruppenzugehörigkeit*).

## Beispiel JSON des Datentyps Gruppendatensatz

```json
{
  "gruppe": {
    "id": "b3201d00-f21f-4986-a39d-02a09c8da26c",
    "mandant": "9b3f36ad-9d15-49f9-9660-6cf9746ba446",
    "orgid": "9b3f36ad-9d15-49f9-9660-6cf9746ba446",
    "referrer": "HHG-1281b688-d639",
    "bezeichnung": "Englisch 6b",
    "typ": "Kurs",
    "bereich": "Pflicht",
    "optionen": [
      ""
    ],
    "differenzierung": "E",
    "bildungsziele": [
      "RS"
    ],
    "jahrgangsstufen": [
      "06"
    ],
    "faecher": [{
      "kennung": "EN"
    }],
    "laufzeit": {
      "von": "2022-08-01",
      "bis": "2023-07-31"
    },
    "revision": "1"
  },
  "gruppenzugehoerigkeiten": [{
      "id": "8722b058-8747-4646-8da0-d523a9f619b8",
      "mandant": "cb4b7ee1-8651-40a8-b29d-b1bde7f6d21a",
      "referrer": "adf17dbe-7a72-45de-8c91-5b036fd080c8",
      "ktid": "42865c3f-2806-4488-9d46-dbaeb004bc8e",
      "rollen": ["Lern"],
      "von": "2022-08-01",
      "bis": "2023-07-31",
      "revision": "1"
    },
    {
      "id": " ed4a1432-6a58-4e99-b89e-e1d82b0052de",
      "mandant": "9b3f36ad-9d15-49f9-9660-6cf9746bb4559",
      "referrer": "adf17dbe-7a72-45de-8c91-5b036fd080c8",
      "ktid": "dc8bfbb0-a6ab-434a-a52c-bde200385d97",
      "rollen": ["Lern"],
      "von": "2022-08-01",
      "bis": "2023-07-31",
      "revision": "1"
    }
  ]
}
```
