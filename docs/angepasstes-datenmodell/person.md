---
title: Person
---

# Angepasstes Datenmodell Person für Diensteanbieter

Nachfolgend ist das Datenmodell einer Person dargestellt.

Attribut | Typ | Anzahl | Freigabe erforderlich | Bemerkung
--- | --- | --- | --- | ---
stammorganisation | String (UTF-8) | 0/0..1 | ja | Personen können einer Organisation angehören, jedoch zeitweise an einer anderen Organisation tätig sein. Die erste Organisation ist die Stammorganisation. Sie ist unabhängig vom Personenkontext.
stammorganisation.id | String (UTF-8) | 0/1 | ja | ID der Stammorganisation. wird vom Schulconnex-Server vergeben und ist eindeutig. Dieses Attribut ist unveränderbar (immutable).
stammorganisation.kennung | String (UTF-8) | 0/0..1 | ja | Die optionale Kennung (Identifikations-ID) der Stammorganisation ist innerhalb eines Organisationstyps eindeutig.
stammorganisation.name | String (DIN 91379.B) | 0/0..1 | ja | Offizieller Name der Stammorganisation.
stammorganisation.anschrift | Anschrift | 0/0..1 | ja | Anschrift der Stammorganisation nach Datenmodell *Anschrift*.
stammorganisation.typ | String (Code) | 0/1 | ja | Typ der Stammorganisation. Referenz auf einen Code der Codeliste *Organisationstyp*.
name | *Struktur* | 0/1 | ja |
name.familienname | String (DIN 91379.A) | 0/1 | ja | Familienname(n) der Person. Mehrere Familiennamen werden durch Leerzeichen separiert.
name.vorname | String (DIN 91379.A) | 0/1 | ja | Mehrere Vornamen werden durch Leerzeichen separiert.
name.initialenfamilienname | String (DIN 91379.A) | 0/0..1 | ja | Initial oder Initialen des Familiennamens.
name.initialenvorname | String (DIN 91379.A) | 0/0..1 | ja | Initial oder Initialen des Vornamens.
geburt | *Struktur* | 0/0..1 | ja |
geburt.datum | Datum (siehe Abschnitt *Datumsformat*) | 0/0..1 | ja | Geburtsdatum einer Person
geburt.volljaehrig | String (Code) | 0/0..1 | ja | Gibt an, ob eine Person volljährig ist, ohne weitere Information über Geburtsdatum oder Alter zu vermitteln. Referenz auf einen Code der Codeliste *Boolean*.
geburt.geburtsort | String (DIN 91379.C) | 0/0..1 | ja | Geburtsort einer Person, bestehend aus Ortsname und Land, beispielsweise „Eindhoven, Niederlande“. Wird kein Land angegeben, so wird als Land „Deutschland“ angenommen, d.h. der Geburtsort „Erfurt“ ist wie „Erfurt, Deutschland“ zu behandeln.
geschlecht | String (Code) | 0/0..1 | ja | Referenz auf einen Code der Codeliste *Geschlecht*.
lokalisierung | String (Code) | 0/0..1 | ja | Gibt an, wie stark die Personendaten vom erfassenden Mandanten verifiziert wurden, Referenz auf einen Code der Codeliste *Vertrauensstufe*.
