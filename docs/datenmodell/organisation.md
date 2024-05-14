# Organisation

Eine Organisation stellt eine Schule oder sonstige relevante Organisation im Kontext eines
Schulconnex-Services dar. Personen werden diesen Organisationen über ihre Personenkontexte mit
entsprechenden Rollen zugeordnet. Aktuell ist für Datensätze des Datentyps Organisation die Erstellung,
Löschung und Modifikation nur durch einen organisatorischen Prozess außerhalb der API vorgesehen.

Attribut | Typ | Anzahl | Bemerkung
--- | --- | --- | ---
id | String (UTF-8) | 1 | ID der Organisation. Wird vom Schulconnex-Server vergeben und ist eindeutig. Dieses Attribut ist unveränderbar (immutable).
kennung | String (UTF-8) | 0..1 | Die optionale Kennung (Identifikations-ID) einer Organisation muss innerhalb eines Organisationstyps eindeutig sein. Dies kann beispielsweise die offizielle Schulnummer sein.
name | String (DIN 91379.B) | 0..1 | Offizieller Name einer Organisation.
namensergaenzung | String (DIN 91379.B) | 0..1 | Ergänzender Name einer Organisation.
kuerzel | String (64) (DIN 91379.B) | 0..1 | Kurzname einer Organisation, maximal 64 Zeichen.
anschrift | Anschrift | 0..1 | Anschrift der Organisation.
typ | String (Code) | 0..1 | Typ der Organisation, Referenz auf einen Code der Codeliste *Organisationstyp*.
traegerschaft | String (Code) | 0..1 | Art der Trägerschaft der bei Schul-Organisationen,  Referenz auf einen Code der Codeliste *Trägerschaft*.

## Beispiel JSON des Datentyps Organisation

```json
{
  "id": "b0d7b0dd-3477-4122-a38d-095ec242e786",
  "kennung": "NI_12345",
  "name": "Heinrich-Heine-Gymnasium",
  "namensergaenzung": "vorher Heinrich-Heine-Gesamtschule",
  "kuerzel": "Heine-Gym",
  "typ": "SCHULE",
  "traegerschaft": "02"
}
```
