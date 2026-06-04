---
tags:
- Verbindlich
---
# Gruppe

Eine Gruppe erlaubt es, mehrere Personen in einer Gruppe zusammenzufassen. Typischerweise handelt es sich
bei einer Gruppe um eine Schulklasse oder eine ähnliche Struktur in einer Schule oder anderen Organisation.
Die Zugehörigkeit einer Person zu einer Gruppe wird durch das Datenmodell Gruppenzugehörigkeit beziehungsweise
zusammen mit der Gruppen-Information im Gruppendatensatz abgebildet.

Attribut | Typ | Anzahl | Bemerkung | Qualifizierter Name
--- | --- | --- | --- | ---
id | String (UTF-8) | 1 | ID der Gruppe. Wird vom Schulconnex-Server vergeben und ist eindeutig. Dieses Attribut ist unveränderbar (immutable). |
mandant | String (UTF-8) | 1 | ID des Mandanten, dem die Gruppe zugeordnet ist. Wird vom Schulconnex-Server vergeben und ist eindeutig. Dieses Attribut ist unveränderbar (immutable).
organisation | String (UTF-8) | 0..1 | ID der Organisation, welcher die Gruppe zugeordnet ist. Oft identisch mit Mandanten, kann aber in Einzelfällen davon abweichen. |
referrer | String (UTF-8) | 0..1 | ID der Gruppe im Quellsystem. Wird vom Quellsystem vergeben und muss im Quellsystem eindeutig sein.
bezeichnung | String (UTF-8) | 1 | Bezeichnung der Gruppe, beispielsweise „Englisch, 2. Klasse". | `urn:schulconnex:de:kern:gruppe:bezeichnung`
thema | String (UTF-8) | 0..1 | Thema der Gruppe in Kurzform, idealerweise weniger als 35 Zeichen. | `urn:schulconnex:de:kern:gruppe:thema`
beschreibung | String (1024) (UTF-8) | 0..1 | Zusätzliche optionale Beschreibung der Gruppe. | `urn:schulconnex:de:kern:gruppe:beschreibung`
typ | String (Code) | 1 | Typ der Gruppe (Klasse, Kurs). Referenz auf Code der Codeliste *Gruppentyp*. | `urn:schulconnex:de:kern:gruppe:typ`
bereich | String (Code) | 0..1 | Art der Gruppe (Pflicht, Wahl, Grundkurs, Leistungskurs…). Referenz auf Code der Codeliste *Gruppenbereich*. | `urn:schulconnex:de:kern:gruppe:bereich`
optionen | String (Code) | 0..n | Zusätzliche Optionen zur Gruppe, meistens sprachbezogen (bilingual, herkunftssprachlich). Referenz auf Code der Codeliste *Gruppenoption*. | `urn:schulconnex:de:kern:gruppe:optionen`
differenzierung | String (Code) | 0..1 | Differenzierung bei integriertem Unterricht oder in der gymnasialen Oberstufe (Erweiterungsebene, Grundebene). Referenz auf Code der Codeliste *Gruppendifferenzierung*. | `urn:schulconnex:de:kern:gruppe:differenzierung`
bildungsziele | String (Code) | 0..n | Bildungsziel (Realschule, Hauptschule, Gymnasium, …). Referenz auf Code der Codeliste *Bildungsziel*. | `urn:schulconnex:de:kern:gruppe:bildungsziele`
jahrgangsstufen | String (Code) | 0..n | Jahrgangsstufe (Jahrgangsstufe 1 bis Jahrgangsstufe 13). Referenz auf Code der Codeliste *Jahrgangsstufe*. | `urn:schulconnex:de:kern:gruppe:jahrgangsstufen`
faecher | *Array[[Fach](fach)]* | 0..n | Liste (Array) der in der Gruppe behandelten Fächer. | `urn:schulconnex:de:kern:gruppe:faecher`
referenzgruppen | *Array[[Referenzgruppe](referenzgruppe)]* | 0..n | Liste (Array) von Referenzgruppen zu dieser Gruppe. | `urn:schulconnex:de:kern:gruppe:referenzgruppen`
laufzeit | *[Laufzeit](laufzeit)* | 0..1 | Die Laufzeit einer Gruppe. | `urn:schulconnex:de:kern:gruppe:laufzeit`
revision | String (UTF-8) | 1 | Revision der Gruppe. Wird vom Schulconnex-Server mit der Erstellung des Datensatzes sowie Aktualisierung generiert. Dieser Wert kann nicht von Quellsystemen oder Diensten gesetzt werden.
