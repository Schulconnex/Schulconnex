# Anschrift

Die Anschrift erlaubt es, einen Ort zu beschreiben, an dem, beispielsweise, eine Organisation ansässig ist.

| Attribut     | Typ             | Anzahl | Bemerkung                           | Qualifizierter Name                           |
|--------------|-----------------|--------|-------------------------------------|-----------------------------------------------|
| postleitzahl | String (UTF-8)  | 0..1   | Postleitzahl.                       | `urn:schulconnex:de:organisation:anschrift:postleitzahl` |
| ort          | String (UTF-8)  | 0..1   | Amtlicher Gemeindename.             | `urn:schulconnex:de:organisation:anschrift:ort`          |
| ortsteil     | String (UTF-8)  | 0..1   | Teil eines Orts, falls genauere Untergliederung gewünscht. | `urn:schulconnex:de:organisation:anschrift:ortsteil`     |

## Beispiel JSON einer Anschrift

```json
{
  "postleitzahl": "80469",
  "ort": "München",
  "ortsteil": "Ludwigsvorstadt-Isarvorstadt"
}
```