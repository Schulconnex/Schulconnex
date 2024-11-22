---
title: Nutzungsrecht
---

# Nutzungsrecht

Ein Nutzungsrecht gibt an, welches Medium eine Nutzende Person in Anspruch nehmen darf. Ein Nutzungsrecht umfasst neben einem eindeutigem Identifikator eines Mediums auch die Auflistung der Nutzungsarten.

Eine Person kann über keine oder mehrere Nutzungsrechte verfügen. In einem Nutzungsrecht wird immer das Nutzungsrecht auf ein Medium angegeben; dieses kann ein spezifisches Medium aus einem Katalog sein, auch der Katalog selbst oder ein spezifischer Auszug aus einem Medium.

Nachfolgend ist das Datenmodell eines Nutzungsrecht dargestellt.

## Datenmodell Nutzungsrecht

Attribut | Typ | Anzahl | Freigabe erforderlich | Bemerkung
--- | --- | --- | --- | ---
@context | String (UTF-8) | 1/1..n | nein | Dieses Attribut führt Auflistung an JSON-LD Kontext-Informationen.
@type | String (UTF-8) | 1 | nein | Dieses Attribut definiert des ODRL-Policy Type.
uid | String (UTF-8) | 1 | nein | ID des Nutzungsrecht. Wird vom Server vergeben und ist eindeutig (Unique ID). Dieses Attribut ist unveränderbar (immutable).
target | Object | 1 | nein | Dieses Attribut führt alle relevanten Informationen über die Resource (Lernobjekt).
target.uid | String (UTF-8) | 1 | nein | Dieses Attribut führt den eindeutigen Identifier der Resource (Lernobjekt).
target.partOf | String (UTF-8) | 0..1 | nein | Dieses Attribut führt den eindeutigen Identifier des Katalogs der Resource (Lernobjekt).
permission | Array | 1 | nein | Dieses Attribut führt alle relevanten Informationen über die Nutzungsrechte / den Zugriff auf die Resource (Lernobjekt).
permission[].action | String (UTF-8) | 1/1..n | nein | Dieses Attribut führt die Informationen über erlaubten Arten auf die Resource (Lernobjekt) zuzugreifen.

## Beispiel JSON des Datentyps Nutzungsrecht

```json
{
    "@context": [
        "http://www.w3.org/ns/odrl.jsonld"
    ],
    "@type": "Set",
    "uid": "https://api-dienste.moin.schule/v1/lizenz-info/9230294b-68da-4f4f-aa63-ad9040122aa7",
    "target": {
        "uid": "urn:schule:medium:123456789",
        "partOf": "https://www.schule-test.de/api/external/univention/media"
    },
    "permission": [
        {
            "action": [
                "execute"
            ]
        }
    ]
}
```