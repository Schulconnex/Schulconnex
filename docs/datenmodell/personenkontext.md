# Personenkontext

Der Personenkontext gibt an, in welcher Rolle der Dienst von nutzenden Personen in Anspruch genommen wird.
Der Personenkontext umfasst neben der Rolle auch Informationen über die Organisation, an der
diese Rolle ausgeführt wird.

Eine Person kann einen oder mehrere Personenkontexte besitzen, indem sie beispielsweise an derselben
Schule sowohl die Rollen „Schulleiter“ als auch „Erziehungsberechtigter“ hat, oder an einer Schule
die Rolle „Lehrender“ und an einer weiteren Organisation „Lernender“ ist.

Es dürfen jedoch keine inhaltlich identischen Personenkontexte angelegt werden. Insbesondere ist es
unzulässig, dieselbe Kombination aus Organisation und Rolle einer Person in unterschiedlichen
Personenkontexten zuzuweisen.

Bei der Abfrage einer Person über die API können mehrere zur Person gehörenden Personenkontexte als
Liste mit zurückgegeben werden.

Nicht alle Kombinationen von Attributwerten sind sinnvoll. So ist beispielsweise die Kombination
einer Jahrgangsstufe mit einer anderen Rolle als `Lern` in der Regel nicht sinnvoll.

Attribut | Typ | Anzahl | Bemerkung
--- | --- | --- | ---
id | String (UTF-8) | 1 | ID des Personenkontexts. Wird vom Schulconnex-Server vergeben und ist eindeutig. Dieses Attribut ist unveränderbar (immutable).
referrer | String (UTF-8) | 0..1 | ID des Personenkontexts im Quellsystem. Wird vom Quellsystem vergeben und muss im Quellsystem eindeutig sein.
mandant | String (UTF-8) | 1 |  ID des Mandanten, dem der Personenkontext zugeordnet ist. Wird vom Schulconnex-Server vergeben und ist eindeutig.
organisation | Organisation | 1 | Organisation. (Siehe Datenmodell *Organisation*).
rolle | String (Code) | 1 | Rolle der Person innerhalb der Organisation. Referenz auf einen Code der Codeliste *Rolle*.
erreichbarkeiten | *Array* | 0..n | Liste (Array) von Attributpaaren aus Erreichsbarkeitstyp und Kennung.
erreichbarkeiten[].typ | String (Code) | 1 | Typ der Erreichbarkeit. Referenz auf Liste von Codes der Codeliste *Erreichbarkeitstyp*.
erreichbarkeiten[].kennung | String (UTF-8) | 1 | Konkrete Angabe der zum Erreichen der Person oder Organisation notwendigen Information. Derzeit ist nur die Erreichbarkeit über  eine E-Mail- Adresse vorgesehen.
personenstatus | String (Code) | 0..1 | Status, den eine Person in einer Organisation in Bezug auf eine bestimmte Rolle hat, Referenz auf einen Code der Codeliste *Personenstatus*.
jahrgangsstufe | String (Code) | 0..1 | Jahrgangsstufe, die eine Person in der Organisation in einer bestimmten Rolle besucht, Referenz auf Code der Codeliste *Jahrgangsstufe*.
sichtfreigabe | String (Code) | 0..1 | Attribut gibt an, ob dieser Personenkontext aufgrund der Freigabe durch eine andere Organisation sichtbar ist. Ist `sichtfreigabe` nicht gesetzt, so entspricht das dem Wert `nein`. Der Wert von Sichtfreigabe ist Boolean nach Codetabelle *Boolean*.
loeschung | *Struktur* | 0..1 | Aktuell gibt es zu Löschungen nur ein Attribut (Zeitpunkt), eventuell werden in späteren Versionen weitere Attribute hinzugefügt.
loeschung.zeitpunkt | String (datetime) | 1 | Datum und Uhrzeit der Löschung des Personenkontexts. Das Format des Löschzeitpunktes ist `YYYY-MM-DD'T'hh:mm'Z'` als UTC-Zeitpunkt. Solange ein Personenkontext nicht gelöscht wurde, kann das Attribut `loeschung.zeitpunkt` geändert oder gelöscht werden. Ist das Attribut `loeschung` vorhanden, so muss der Zeitpunkt gesetzt sein.
revision | String (UTF-8) | 1 | Revision des Personenkontext. Wird vom Schulconnex-Server mit der Erstellung des Datensatzes sowie Aktualisierung generiert. Dieser Wert kann nicht von Quellsystemen oder Diensten gesetzt werden.

## Beispiel JSON des Datentyps Personenkontext

```json
{
  "id": "4d0f579c-0b9a-4d3a-b484-87b3bee8a2ad",
  "referrer": "NI_12345_12554648",
  "mandant": "58f45270-8e54-40c6-a212-980307fc19be",
  "organisation": {
    "id": "b0d7b0dd-3477-4122-a38d-095ec242e786",
    "kennung": "NI_12345",
    "name": "Heinrich-Heine-Gymnasium",
    "namensergaenzung": "vorher Heinrich-Heine-Gesamtschule",
    "kuerzel": "Heine-Gym",
    "anschrift": {
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
      "kennung": "Petra.Muster@heine-gym-döhren.de"
    }
  ],
  "personenstatus": "Aktiv",
  "jahrgangsstufe": "05",
  "revision": "1"
}
```
