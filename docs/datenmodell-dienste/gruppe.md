---
title: Gruppe
---

# Datenmodell Gruppe für Dienste

Eine Gruppe erlaubt es, mehrere Personen in einer Gruppe zusammenzufassen. Typischerweise handelt es sich
bei einer Gruppe um eine Schulklasse oder eine ähnliche Struktur in einer Schule oder anderen Organisation.
Die Zugehörigkeit einer Person zu einer Gruppe wird durch das Datenmodell *Gruppenzugehörigkeit* beziehungsweise
zusammen mit der Gruppen-Information im *Gruppendatensatz* abgebildet.

Attribut | Typ | Anzahl | Freigabe erforderlich | Bemerkung
--- | --- | --- | --- | ---
id | String (UTF-8) | 1 | nein | ID der Gruppe. Wird vom Schulconnex-Server vergeben und ist eindeutig. Dieses Attribut ist unveränderbar (immutable).
orgid | String (UTF-8) | 0/0..1 | ja | ID der Organisation, welcher die Gruppe zugeordnet ist.
bezeichnung | String (UTF-8) | 0/1 | ja | Bezeichnung der Gruppe, beispielsweise „Englisch, 2. Klasse“.
thema | String (UTF-8) | 0/0..1 | ja | Thema der Gruppe in Kurzform, idealerweise weniger als 35 Zeichen.
beschreibung | String (1024) (UTF-8) | 0..1 | ja | Zusätzliche optionale Beschreibung der Gruppe.
typ | String (Code) | 0/1 | ja | Typ der Gruppe (Klasse, Kurs). Referenz auf Code der Codeliste *Gruppentyp*.
bereich | String (Code) | 0/0..1 | ja | Art der Gruppe (Pflicht, Wahl, Grundkurs, Leistungskurs…). Referenz auf Code der Codeliste *Gruppenbereich*.
optionen | String (Code) | 0/0..n | ja | Zusätzliche Optionen zur Gruppe, meistens sprachbezogen (bilingual, herkunftssprachlich). Referenz auf Code der Codeliste *Gruppenoption*.
differenzierung | String (Code) | 0/0..1 | ja | Differenzierung bei integriertem Unterricht oder in der gymnasialen Oberstufe (Erweiterungsebene, Grundebene). Referenz auf Code der Codeliste *Gruppendifferenzierung*.
bildungsziele | String (Code) | 0/0..n | ja | Bildungsziel (Realschule, Hauptschule, Gymnasium, …). Referenz auf Code der Codeliste *Bildungsziel*.
jahrgangsstufen | String (Code) | 0/0..n | ja | Jahrgangsstufe (Jahrgangsstufe 1 bis Jahrgangsstufe 13). Referenz auf Code der Codeliste *Jahrgangsstufe*.
faecher | *Array[Fach]* | 0/0..n | ja | Liste (Array) der in der Gruppe behandelten Fächer vom Typ *Fach*.
laufzeit | *Laufzeit* | 0/0..1 | ja | Die Laufzeit einer Gruppe.
