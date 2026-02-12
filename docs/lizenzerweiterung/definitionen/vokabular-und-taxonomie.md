# Vokabular und Taxonomie

## Einleitung

Vokabular und Taxonomie sind zentrale Bestandteile der Informationsorganisation und -verwaltung. Sie ermöglichen eine strukturierte Klassifizierung und Beschreibung von Informationen, was besonders im Bildungsbereich von großer Bedeutung ist. Im Kontext des Open Digital Rights Language (ODRL) wird diese Struktur verwendet, um Nutzungsrechte präzise und maschinenlesbar darzustellen.

## Vokabular

Das Vokabular umfasst alle Begriffe und Ausdrücke, die in einem bestimmten Kontext verwendet werden. Im Bildungsbereich sind dies:

- **Schularten**: Grundschule, Hauptschule, Realschule, Gymnasium
- **Fächer**: Mathematik, Deutsch, Biologie, Chemie
- **Rollen**: Lehrer, Schüler, Eltern, Schulträger

Diese Begriffe bilden die Grundlage für die Definition von Attributen und Bedingungen in ODRL, die die Nutzung von Bildungsressourcen regeln.

### Beispiel in ODRL

```json
{
    "uid": "https://example.com/v1/policies-info/12345",
    "target": {
        "uid": "urn:issuer:medium:123456789",
        "partOf": "urn:issuer:catalogue"
    },
    "permission": [
        {
            "action": ["execute"],
            "assignee": {
                "refinement": [
                    {
                        "leftOperand": "urn:schulconnex:de:personenkontext:rolle",
                        "operator": "eq",
                        "rightOperand": "lehr"
                    }
                ]
            }
        }
    ]
}
```

## Taxonomie

Die Taxonomie ist ein System zur Klassifizierung von Informationen, das eine hierarchische Struktur bereitstellt. In der ODRL-Spezifikation unterstützt die Taxonomie die Definition von Attributen wie `target`, `permission` und `assignee`, die miteinander verknüpft sind.

### Typische Strukturen einer Taxonomie im ODRL:
- **Oberkategorie**: Bildung
  - **Unterkategorie**: Schulwesen
    - **Unterunterkategorie**: Schularten
- **Oberkategorie**: Fächer
  - **Unterkategorie**: Naturwissenschaften
    - **Unterunterkategorie**: Biologie, Chemie

Diese Struktur hilft, die verschiedenen Rollen, Fächer und Schularten in ODRL zu definieren und zu organisieren.

### Beispiel für eine strukturierte ODRL-Policy

```json
{
    "uid": "https://example.com/v1/policies-info/67890",
    "target": {
        "uid": "urn:issuer:medium:987654321",
        "partOf": "urn:issuer:catalogue"
    },
    "permission": [
        {
            "action": ["view", "print"],
            "assignee": {
                "partOf": {
                    "refinement": [
                        {
                            "leftOperand": "urn:schulconnex:de:personenkontext:organisation:kennung",
                            "operator": "eq",
                            "rightOperand": "NI_12345"
                        }
                    ]
                }
            }
        }
    ]
}
```

## Attribute in ODRL

In der ODRL-Spezifikation sind Attribute grundlegende Elemente, die spezifische Eigenschaften von Nutzungsrechten definieren. Diese Attribute sind eng mit dem Vokabular und der Taxonomie verbunden.

### Wichtige Attribute:

| **Attribut** | **Beschreibung**                                              |
|--------------|--------------------------------------------------------------|
| `uid`        | Eindeutige Kennung des ODRL-Objekts.                        |
| `target`     | Das Ziel-Medienobjekt, auf das sich die Regeln beziehen.    |
| `permission` | Berechtigungen, die den Zielobjekten gewährt werden.        |
| `assignee`   | Die Partei oder Parteien, die die Berechtigung erhalten.     |
| `constraint` | Bedingungen, die erfüllt sein müssen, damit die Berechtigung gültig ist. |
| `duty`       | Verpflichtungen, die erfüllt werden müssen, wenn die Berechtigung ausgeübt wird. |

### Beispiel für die Verwendung von Attributen in ODRL

```json
{
    "uid": "https://example.com/v1/policies-info/112233",
    "target": {
        "uid": "urn:issuer:medium:654321",
        "partOf": "urn:issuer:catalogue"
    },
    "permission": [
        {
            "action": ["stream"],
            "constraint": [
                {
                    "leftOperand": "dateTime",
                    "operator": "gteq",
                    "rightOperand": "2023-08-01T00:00+0200"
                }
            ]
        }
    ]
}
```

## Left-hand- und Right-hand-Operanden

In ODRL sind Left-hand- und Right-hand-Operanden Teil der Bedingungen, die in `constraint`-Attributen verwendet werden, um spezifische Regeln zu definieren. Sie sind entscheidend für die Implementierung von Nutzungsrechten auf Basis der definierten Taxonomie und des Vokabulars.

### Left-hand-Operanden

Left-hand-Operanden sind die Eigenschaften oder Attribute, die in einer Bedingung überprüft werden:

| **Bezeichnung**                                              | **Beschreibung**                                                                                          |
|-------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| `dateTime`                                                  | Datum und Uhrzeit für zeitliche Einschränkungen.                                                       |
| `spatial`                                                   | Räumliche Einschränkungen für geografische Bedingungen.                                                 |
| `concurrentUses`                                           | Anzahl der gleichzeitig erlaubten Nutzungen des Zielobjekts.                                           |
| `urn:schulconnex:de:personenkontext:organisation:kennung` | Kennung einer Organisation (z.B. Schule).                                                               |
| `urn:schulconnex:de:personenkontext:rolle`                | Rolle einer Person im Kontext (z.B. lehr für Lehrer).                                                  |

### Right-hand-Operanden

Right-hand-Operanden sind die Werte, mit denen die Left-hand-Operanden verglichen werden:

| **Bezeichnung**                                              | **Beschreibung**                                                                                          |
|-------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| `2023-08-01T00:00+0200`                                    | Ein spezifisches Datum und Uhrzeit für zeitliche Einschränkungen.                                       |
| `https://www.wikidata.org/wiki/Q5956`                     | Ein spezifischer räumlicher Identifier (z.B. Landkreis Diepholz).                                       |
| `NI_12345`                                                 | Ein spezifischer Wert zur Identifizierung einer Organisation (z.B. Schulnummer).                        |
| `lehr`                                                     | Ein spezifischer Wert, der eine Rolle angibt (z.B. Lehrer).                                            |

## Fazit

Vokabular, Taxonomie und ODRL-Attribute sind unverzichtbare Werkzeuge zur Organisation und Verwaltung von Informationen im Bildungsbereich und darüber hinaus. Sie fördern ein besseres Verständnis, erleichtern die Kommunikation und helfen, Wissen effektiv zu strukturieren, insbesondere durch die klare Definition von Nutzungsrechten und -bedingungen.

## Vokabular für das ODRL Application-Profile für Nutzungsrechte in Schulconnex

Im Rahmen des ODRL Application-Profiles für Nutzungsrechte in Schulconnex sind folgende Vokabeln und Codes von Bedeutung:

- **Attribute**:
  - `uid`
  - `target`
  - `permission`
  - `assignee`
  - `constraint`
  - `duty`

- **Freie Left-hand-Operanden**: 
  - `urn:schulconnex:de:nutzungsrecht:zeit`
  - `urn:schulconnex:de:nutzungsrecht:raum`
  - `urn:schulconnex:de:nutzungsrecht:gleichzeitigeNutzungen`

- **Datenmodell Anschrift als Left-hand-Operanden**:
  - Postleitzahl: `urn:schulconnex:de:anschrift:postleitzahl`
  - Ort: `urn:schulconnex:de:anschrift:ort`
  - Ortsteil: `urn:schulconnex:de:anschrift:ortsteil`
- **Datenmodell Beziehung als Left-hand-Operanden**:
  - Personenkontext ID (ktid): `urn:schulconnex:de:beziehung:ktid`
  - Beziehung: `urn:schulconnex:de:beziehung:beziehung`
- **Datenmodell Geburt als Left-hand-Operanden**:
  - Geburtsdatum: `urn:schulconnex:de:geburt:datum`
  - Volljährig: `urn:schulconnex:de:geburt:volljaehrig`
  - Geburtsort: `urn:schulconnex:de:geburt:geburtsort`
- **Datenmodell Gruppe als Left-hand-Operanden**:
  - ID der Gruppe: `urn:schulconnex:de:gruppe:id`
  - ID der Organisation (orgid): `urn:schulconnex:de:gruppe:orgid`
  - Bezeichnung der Gruppe: `urn:schulconnex:de:gruppe:bezeichnung`
  - Thema der Gruppe: `urn:schulconnex:de:gruppe:thema`
  - Beschreibung der Gruppe: `urn:schulconnex:de:gruppe:beschreibung`
  - Typ der Gruppe: `urn:schulconnex:de:gruppe:typ`
  - Bereich der Gruppe: `urn:schulconnex:de:gruppe:bereich`
  - Optionen der Gruppe: `urn:schulconnex:de:gruppe:optionen`
  - Differenzierung: `urn:schulconnex:de:gruppe:differenzierung`
  - Bildungsziele: `urn:schulconnex:de:gruppe:bildungsziele`
  - Jahrgangsstufen: `urn:schulconnex:de:gruppe:jahrgangsstufen`
  - Fächer: `urn:schulconnex:de:gruppe:faecher`
  - Laufzeit: `urn:schulconnex:de:gruppe:laufzeit`
- **Datenmodell Gruppendatensatz als Left-hand-Operanden**:
  - Gruppe: `urn:schulconnex:de:gruppendatensatz:gruppe`
  - Gruppenzugehörigkeit: `urn:schulconnex:de:gruppendatensatz:gruppenzugehoerigkeit`
  - Sonstige Gruppenzugehörige: `urn:schulconnex:de:gruppendatensatz:sonstige_gruppenzugehoerige`
- **Datenmodell Gruppenzugehörigkeit als Left-hand-Operanden**:
  - Personenkontext ID (ktid): `urn:schulconnex:de:gruppenzugehoerigkeit:ktid`
  - Rollen: `urn:schulconnex:de:gruppenzugehoerigkeit:rollen`
  - Von: `urn:schulconnex:de:gruppenzugehoerigkeit:von`
  - Bis: `urn:schulconnex:de:gruppenzugehoerigkeit:bis`
- **Datenmodell Laufzeit als Left-hand-Operanden**:
  - Von: `urn:schulconnex:de:laufzeit:von`
  - Von Lernperiode: `urn:schulconnex:de:laufzeit:vonlernperiode`
  - Bis: `urn:schulconnex:de:laufzeit:bis`
  - Bis Lernperiode: `urn:schulconnex:de:laufzeit:bislernperiode`
- **Datenmodell Name als Left-hand-Operanden**:
  - Familienname: `urn:schulconnex:de:name:familienname`
  - Vorname: `urn:schulconnex:de:name:vorname`
  - Initialen Familienname: `urn:schulconnex:de:name:initialenfamilienname`
  - Initialen Vorname: `urn:schulconnex:de:name:initialenvorname`
  - Rufname: `urn:schulconnex:de:name:rufname`
- **Datenmodell Organisation als Left-hand-Operanden**:
  - ID der Organisation: `urn:schulconnex:de:organisation:id`
  - Kennung: `urn:schulconnex:de:organisation:kennung`
  - Name: `urn:schulconnex:de:organisation:name`
  - Anschrift: `urn:schulconnex:de:organisation:anschrift`
  - Typ: `urn:schulconnex:de:organisation:typ`
- **Datenmodell Organisationsbeziehung als Left-hand-Operanden**:
  - ID der Organisation (orgid): `urn:schulconnex:de:organisationsbeziehung:orgid`
  - Organisationsbeziehung: `urn:schulconnex:de:organisationsbeziehung:organisationsbeziehung`
- **Datenmodell Person als Left-hand-Operanden**:
  - Stammorganisation: `urn:schulconnex:de:person:stammorganisation`
  - Name: `urn:schulconnex:de:person:name`
  - Geburt: `urn:schulconnex:de:person:geburt`
  - Geschlecht: `urn:schulconnex:de:person:geschlecht`
  - Lokalisierung: `urn:schulconnex:de:person:lokalisierung`
  - Vertrauensstufe: `urn:schulconnex:de:person:vertrauensstufe`
- **Datenmodell Personendatensatz als Left-hand-Operanden**:
  - Person: `urn:schulconnex:de:personendatensatz:person`
  - Personenkontexte: `urn:schulconnex:de:personendatensatz:personenkontexte`
- **Datenmodell Personenkontext als Left-hand-Operanden**:
  - ID des Personenkontexts: `urn:schulconnex:de:personenkontext:id`
  - Organisation: `urn:schulconnex:de:personenkontext:organisation`
  - Rolle: `urn:schulconnex:de:personenkontext:rolle`
  - Erreichbarkeiten: `urn:schulconnex:de:personenkontext:erreichbarkeiten`
  - Personenstatus: `urn:schulconnex:de:personenkontext:personenstatus`
  - Gruppen: `urn:schulconnex:de:personenkontext:gruppen`
  - Beziehungen: `urn:schulconnex:de:personenkontext:beziehungen`
  - Löschung: `urn:schulconnex:de:personenkontext:loeschung`
- **Datenmodell Sichtfreigabe als Left-hand-Operanden**:
  - ID der Sichtfreigabe: `urn:schulconnex:de:sichtfreigabe:id`
  - ID der Organisation (orgid): `urn:schulconnex:de:sichtfreigabe:orgid`
  - Von: `urn:schulconnex:de:sichtfreigabe:von`
  - Bis: `urn:schulconnex:de:sichtfreigabe:bis`
- **Datenmodell Erreichbarkeit als Left-hand-Operanden**:
  - Typ der Erreichbarkeit: `urn:schulconnex:de:erreichbarkeit:typ`
  - Kennung: `urn:schulconnex:de:erreichbarkeit:kennung`
- **Datenmodell Fach als Left-hand-Operanden**:
  - Kennung: `urn:schulconnex:de:fach:kennung`
  - Bezeichnung: `urn:schulconnex:de:fach:bezeichnung`
- **Datenmodell Lernperiode als Left-hand-Operanden**:
  - Code der Lernperiode: `urn:schulconnex:de:lernperiode:code`
  - Bezeichnung der Lernperiode: `urn:schulconnex:de:lernperiode:bezeichnung`
  - Typ der Lernperiode: `urn:schulconnex:de:lernperiode:typ`
  - Beginn: `urn:schulconnex:de:lernperiode:beginn`
  - Ende: `urn:schulconnex:de:lernperiode:ende`
- **Datenmodell Referenzgruppe als Left-hand-Operanden**:
  - ID der Referenzgruppe: `urn:schulconnex:de:referenzgruppe:grupid`
  - Gruppenrollen: `urn:schulconnex:de:referenzgruppe:rollen`

- **Right-hand-Operanden als Left-hand-Operanden**: 
  - Werte gemäß der Codeliste der Spezifikation Schulconnex.
