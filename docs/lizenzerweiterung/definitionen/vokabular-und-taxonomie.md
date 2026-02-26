# Schulconnex ODRL: Vokabular und Taxonomie

## Einleitung

Dieses Dokument ist die Referenz für Begriffe, Taxonomie und qualifizierte Namen (QNames) der Schulconnex-Spezifikation im ODRL-Kontext.

Normative Profilregeln, Konformitätskriterien und vollständige Beispiel-Policies sind im Dokument [application-profile.md](application-profile.md) definiert.

## 1. Kontrolliertes Vokabular

Das Vokabular umfasst zentrale fachliche Begriffe für Nutzungsrechte im Bildungsbereich.

- **Schularten**: Grundschule, Hauptschule, Realschule, Gymnasium
- **Fächer**: Mathematik, Deutsch, Biologie, Chemie
- **Rollen**: teacher, student, parent, schoolAuthority

Diese Begriffe dienen als kontrollierte Wertebereiche für Operanden in ODRL-Constraints.

## 2. Taxonomie

Die Taxonomie stellt fachliche Begriffe in einer hierarchischen Struktur bereit, die für konsistente ODRL-Policies genutzt wird.

### Typische Struktur
- **Bildung**
  - **Schulwesen**
  - **Schularten**
- **Fächer**
  - **Naturwissenschaften**
  - **Biologie, Chemie**

## 3. Constraints: Left-hand- und Right-hand-Operanden

### 3.1 Left-hand-Operanden

| Bezeichnung | Beschreibung |
| --- | --- |
| `dateTime` | Datum und Uhrzeit für zeitliche Einschränkungen |
| `spatial` | Räumliche Einschränkungen für geografische Bedingungen |
| `concurrentUses` | Anzahl gleichzeitig erlaubter Nutzungen |
| `urn:schulconnex:de:personenkontext:organisation:kennung` | Kennung einer Organisation |
| `urn:schulconnex:de:personenkontext:rolle` | Rolle einer Person im Kontext |

### 3.2 Right-hand-Operanden (Beispielwerte)

| Bezeichnung | Beschreibung |
| --- | --- |
| `2023-08-01T00:00+0200` | Beispielwert für zeitliche Einschränkung |
| `https://www.wikidata.org/wiki/Q5956` | Beispielwert für räumliche Einschränkung |
| `school-001` | Beispielhafter Organisations-Identifier |
| `teacher` | Beispielhafter Rollenwert |

## 4. Registry qualifizierter Namen (QNames)

Die folgende Liste ist als Registry qualifizierter Namen zu verstehen. Die Einträge liegen derzeit als vollqualifizierte URNs vor und können in Implementierungen über Namespace-Prefixe als QNames abgekürzt werden.

Beispiel: `urn:schulconnex:de:personenkontext:rolle` → `schx:personenkontext:rolle`

Im Rahmen der Schulconnex-Spezifikation sind folgende QNames/URNs relevant:

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

- **Right-hand-Operanden (Wertebereiche)**:
  - Werte gemäß den Codelisten der Spezifikation Schulconnex.
