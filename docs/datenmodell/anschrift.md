# Anschrift

Die Anschrift erlaubt es, einen Ort zu beschreiben, an dem, beispielsweise, eine [Organisation](./organisation.md) ansässig ist.

Attribut | Typ | Anzahl | Bemerkung
--- | --- | --- | ---
postleitzahl | String (UTF-8) | 0..1 | Postleitzahl.
ort | String (UTF-8) | 0..1 | Amtlicher Gemeindename.
ortsteil | String (UTF-8) | 0..1 | Teil eines Ortes, falls genauere Untergliederung gewünscht.

## Beispiel JSON einer Anschrift

```json
{
  "postleitzahl": "80469",
  "ort": "München",
  "ortsteil": "Ludwigsvorstadt-Isarvorstadt",
}
```
