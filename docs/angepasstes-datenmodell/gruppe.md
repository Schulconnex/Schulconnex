---
title: Gruppe
---

# Angepasstes Datenmodell Gruppe für Diensteanbieter

Eine Gruppe erlaubt es, mehrere [Personen](./person.md) in einer Gruppe zusammenzufassen. Typischerweise handelt es sich
bei einer Gruppe um eine Schulklasse oder eine ähnliche Struktur in einer Schule oder anderen Organisation.
Die Zugehörigkeit einer Person zu einer Gruppe wird durch das Datenmodell [Gruppenzugehörigkeit](../datenmodell/gruppenzugehörigkeit.md) beziehungsweise
zusammen mit der Gruppen-Information im Gruppendatensatz abgebildet.

Attribut | Typ | Anzahl | Freigabe erforderlich | Bemerkung
--- | --- | --- | --- | ---
id | String (UTF-8) | 1 | nein | ID der Gruppe. Wird vom Schulconnex-Server vergeben und ist eindeutig. Dieses Attribut ist unveränderbar (immutable).
orgid | String (UTF-8) | 0/0..1 | ja | ID der Organisation, welcher die Gruppe zugeordnet ist.
bezeichnung | String (UTF-8) | 0/1 | ja | Beschreibt die Bezeichnung der Gruppe, beispielsweise „Englisch, 2. Klasse“.
thema | String (UTF-8) | 0/0..1 | ja | Thema der Gruppe in Kurzform, idealerweise weniger als 35 Zeichen.
beschreibung | String (1024) (UTF-8) | 0..1 | ja | Zusätzliche optionale Beschreibung der Gruppe.
typ | String (Code) | 0/1 | ja | Typ der Gruppe (Klasse, Kurs). Referenz auf Code der Codeliste *Gruppentyp*.
bereich | String (Code) | 0/0..1 | ja | Art der Gruppe (Pflicht, Wahl, Grundkurs, Leistungskurs…). Referenz auf Code der Codeliste *Gruppenbereich*.
optionen | String (Code) | 0/0..n | ja | Zusätzliche Optionen zur Gruppe, meistens sprachbezogen (bilingual, herkunftssprachlich). Referenz auf Code der Codeliste *Gruppenoption*.
differenzierung | String (Code) | 0/0..1 | ja | Differenzierung bei integriertem Unterricht oder in der gymnasialen Oberstufe (Erweiterungsebene, Grundebene). Referenz auf Code der Codeliste *Gruppendifferenzierung*.
bildungsziele | String (Code) | 0/0..n | ja | Bildungsziel (Realschule, Hauptschule, Gymnasium, …). Referenz auf Code der Codeliste *Bildungsziel*.
jahrgangsstufen | String (Code) | 0/0..n | ja | Jahrgangsstufe (Jahrgangsstufe 1 bis Jahrgangsstufe 13). Referenz auf Code der Codeliste *Jahrgangsstufe*.
faecher | *Array* | 0/0..n | ja | Array (Liste) der in der Gruppe behandelten Fächer.
faecher[].kennung | String (Code) | 0/0..1 | ja | Behandeltes Fach. Referenz auf Code der Codeliste *Fächerkanon*.
laufzeit | *Struktur* | 0/0..1 | ja | Die Laufzeiten von Gruppen können entweder direkt durch Datumsangaben festgelegt werden (`von`/`bis`) oder durch Referenzen auf Lernperioden (`vonlernperiode`/`bislernperiode`). Wird eine Lernperiode referenziert, so steht `vonlernperiode` für das Anfangsdatum der Lernperiode (also das Attribut Beginn) und `bislernperiode` für das Enddatum der Lernperiode. Eine Mischung der Angaben, beispielsweise eine Lernperiode als Startzeitpunkt und eine Kalenderdatum als Endzeitpunkt ist zulässig. Mehrere Start- oder Endangaben ( `vonlernperiode` und  `von` , beziehungsweise  `bislernperiode` und  `bis` ) jedoch nicht. Es werden immer nur aktuell gültige Gruppen geliefert.
laufzeit.von | [Datum](../datenmodell/datumsformat.md) | 0/0..1 | ja | Anfang des Gültigkeitszeitraumes der Gruppe. Dieser Zeitpunkt kann auch in der Zukunft liegen.
laufzeit.vonlernperiode | String (Code) | 0/0..1 | ja | Code der zu einer Gruppe gehörenden Lernperiode. Referenz auf Code der Codeliste *Lernperiode*.
laufzeit.bis | [Datum](../datenmodell/datumsformat.md) | 0/0..1 | ja | Ende des Gültigkeitszeitraumes der Gruppe. Laufzeiten schliessen den ersten und letzten Tag immer mit ein. Ist als `laufzeit.bis` der 31.Oktober 2025 angegeben, so endet die Laufzeit der Gruppe am 01.11.2025 um 00:00.
laufzeit.bislernperiode | String (Code) | 0/0..1 | ja |  Code der zu einer Gruppe gehörenden Lernperiode. Referenz auf Code der Codeliste *Lernperiode*.