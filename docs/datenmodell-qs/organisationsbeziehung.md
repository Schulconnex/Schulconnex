# Organisationsbeziehung

Das Datenmodell Organisationsbeziehung beschreibt die Beziehung zweier Organisationen.

Das Attribut `organisationsbeziehung` ist in der Form „hat_als“ zu verstehen. Ist eine
Organisation A mit Organisationsbeziehung `"SchBeh"` zur `orgid` einer Organisation B
angegeben, so **hat** Organisation A die Organisation B als Schulbehörde.

| Attribut               | Typ              | Anzahl   | Bemerkung                                                           | Qualifizierter Name                                 |
|------------------------|------------------|----------|----------------------------------------------------------------------|----------------------------------------------------|
| orgid                 | String (UTF-8)  | 1        | ID der Organisation, zu der die „hat_als“-Beziehung besteht.         | `urn:schulconnex:de:organisation:beziehung:orgid` |
| organisationsbeziehung | String (UTF-8)  | 1..n     | Beziehung aus Codeliste *Organisationsbeziehungen*.                  | `urn:schulconnex:de:organisation:beziehung:organisationsbeziehung` |

## Beispiel JSON einer Organisationsbeziehung

```json
{
   "orgid": "602a2034-bf6b-483c-bfa1-f3b02f67018f",
   "organisationsbeziehung": "SchBeh"
}
```
