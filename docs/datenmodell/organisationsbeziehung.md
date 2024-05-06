# Organisationsbeziehung

Das Datenmodell Organisationsbeziehung beschreibt die Beziehung zweier Organisationen.

Attribut | Typ | Anzahl | Bemerkung
--- | --- | --- | ---
orgid | String (UTF-8) | 1 | Id der Organisation, zu der die „hat_als“-Beziehung besteht.
organisationsbeziehung | String (UTF-8) | 1..n | Beziehung aus Codeliste *Organisationsbeziehungen*.

## Beispiel JSON einer Organisationsbeziehung

```json
{
   "orgid": "602a2034-bf6b-483c-bfa1-f3b02f67018f",
   "beziehung": "SchBeh"
}
```
