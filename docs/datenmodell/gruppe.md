# Gruppe

Eine Gruppe erlaubt es, mehrere Personen in einer Gruppe zusammenzufassen. Typischerweise handelt es sich
bei einer Gruppe um eine Schulklasse oder eine ähnliche Struktur in einer Schule oder anderen Organisation.
Die Zugehörigkeit einer Person zu einer Gruppe wird durch das Datenmodell Gruppenzugehörigkeit beziehungsweise
zusammen mit der Gruppen-Information im Gruppendatensatz abgebildet.

Attribut | Typ | Anzahl | Bemerkung
--- | --- | --- | ---
id | String (UTF-8) | 1 | ID der Gruppe. Wird vom Schulconnex-Server vergeben und ist eindeutig. Dieses Attribut ist unveränderbar (immutable).
mandant | String (UTF-8) | 1 | ID des Mandanten, dem die Gruppe zugeordnet ist. Wird vom Schulconnex-Server vergeben und ist eindeutig. Dieses Attribut ist unveränderbar (immutable).
orgid | String (UTF-8) | 0..1 | ID der Organisation, welcher die Gruppe zugeordnet ist. Oft identisch mit Mandanten, kann aber in Einzelfällen davon abweichen.
referrer | String (UTF-8) | 0..1 | ID der Gruppe im Quellsystem. Wird vom Quellsystem vergeben und muss im Quellsystem eindeutig sein.
bezeichnung | String (UTF-8) | 1 | Bezeichnung der Gruppe, beispielsweise „Englisch, 2. Klasse“.
thema | String (UTF-8) | 0..1 | Thema der Gruppe in Kurzform, idealerweise weniger als 35 Zeichen.
beschreibung | String (1024) (UTF-8) | 0..1 | Zusätzliche optionale Beschreibung der Gruppe.
typ | String (Code) | 1 | Typ der Gruppe (Klasse, Kurs). Referenz auf Code der Codeliste *Gruppentyp*.
bereich | String (Code) | 0..1 | Art der Gruppe (Pflicht, Wahl, Grundkurs, Leistungskurs…). Referenz auf Code der Codeliste *Gruppenbereich*.
optionen | String (Code) | 0..n | Zusätzliche Optionen zur Gruppe, meistens sprachbezogen (bilingual, herkunftssprachlich). Referenz auf Code der Codeliste *Gruppenoption*.
differenzierung | String (Code) | 0..1 | Differenzierung bei integriertem Unterricht oder in der gymnasialen Oberstufe (Erweiterungsebene, Grundebene). Referenz auf Code der Codeliste *Gruppendifferenzierung*.
bildungsziele | String (Code) | 0..n | Bildungsziel (Realschule, Hauptschule, Gymnasium, …). Referenz auf Code der Codeliste *Bildungsziel*.
jahrgangsstufen | String (Code) | 0..n | Jahrgangsstufe (Jahrgangsstufe 1 bis Jahrgangsstufe 13). Referenz auf Code der Codeliste *Jahrgangsstufe*.
faecher | *Array* | 0..n | Liste (Array) der in der Gruppe behandelten Fächer.
faecher[].kennung | String (Code) | 0..1 | Behandeltes Fach. Referenz auf Code der Codeliste *Fächerkanon*.
referenzgruppen | *Struktur* | 0..n | Array von Referenzgruppen zu dieser Gruppe. Bei Referenzgruppen handelt es sich um Gruppen, deren Gruppenzugehörige vollständig oder teilweise der Hauptgruppe zugeordnet werden. Referenzgruppen erlauben die einfachere Verwaltung von Gruppen von Personen, da hierdurch beispielsweise eine oder mehrere Klassen als Einheit einem Kurs als Teilnehmer zugeordnet werden können. Gruppenzugehörige aus Referenzgruppen werden automatisch in die aktuelle Gruppe übernommen und behalten dabei ihre Rollen aus der Gruppenzugehörigkeit der Referenzgruppe.  Die automatische Übernahme kann auf bestimmte Rollen beschränkt werden. Referenzgruppen müssen zur selben Organisation wie die Hauptgruppe gehören (Gruppe und Referenzgruppe müssen eine identische `orgid` haben). Referenzgruppen dürfen hierarchisch sein, d. h. Referenzgruppen von Referenzgruppen einer Gruppe werden behandelt wie Referenzgruppen der Gruppe. Zyklische Verweise sind jedoch untersagt und führen zu einer Fehlermeldung.
referenzgruppen.grupid | String (UTF-8) | 1 | ID der Referenzgruppe.
referenzgruppen.rollen | String (Code) | 0..n | Gruppenrollen aus der Gruppenzugehörigkeit von Personenkontexten, welche in die Referenzgruppe übernommen werden. Hinweis:  Werden hier keine Gruppenrollen aufgeführt, so werden alle Personenkontexte der Referenzgruppe übernommen.
laufzeit | *Struktur* | 1 | Die Laufzeiten von Gruppen können entweder direkt durch Datumsangaben festgelegt werden (`von`/`bis`) oder durch Referenzen auf Lernperioden (`vonlernperiode`/`bislernperiode`). Wird eine Lernperiode referenziert, so steht `vonlernperiode` für das Anfangsdatum der Lernperiode (also das Attribut Beginn) und `bislernperiode` für das Enddatum der Lernperiode. Eine Mischung von Datum- und Perioden-Angaben ist zulässig. So kann beispielsweise eine Gruppe mit Anfang einer Lernperiode aktiv werden, aber mit Ablauf des Kalenderjahres enden. In diesem Fall ist für den Anfangszeitpunkt `laufzeit.vonlernperiode` zu nutzen und für den Endzeitpunkt `laufzeit.bis`. Es darf jedoch nur jeweils ein Anfangs- und Endzeitpunkt angegeben werden. So dürfen `bislernperiode` und `bis` nicht gleichzeitig belegt sein und auch `vonlernperiode` und `von` dürfen nicht gleichzeitig belegt sein. Ist ein Startzeitpunkt durch `vonlernperiode` oder `von` angegeben, so darf der Endzeitpunkt nicht davor liegen. Ist kein Startzeitunkt angegeben, so ist die Gruppe für jedes Datum in der Vergangenheit gültig. Ist kein Endzeitunkt angegeben, so ist die Gruppe für jedes Datum in der Zukunft gültig
laufzeit.von | Datum (siehe Abschnitt Datumsformat) | 0..1 | Anfang des Gültigkeitszeitraumes der Gruppe. Dieser Zeitpunkt kann auch in der Zukunft liegen.
laufzeit.vonlernperiode | String (Code) | 0..1 | Code der zu einer Gruppe gehörenden Lernperiode. Referenz auf Code der Codeliste *Lernperiode*.
laufzeit.bis | Datum (siehe Abschnitt Datumsformat) | 0..1 | Ende des Gültigkeitszeitraumes der Gruppe. Ende der Gruppenzugehörigkeit. Laufzeiten schliessen den ersten und letzten Tag immer mit ein. Ist als  `laufzeit.bis` der 31.Oktober 2025 angegeben, so endet die Laufzeit der Gruppe am 01.11.2025 um 00:00.
laufzeit.bislernperiode | String (Code) | 0..1 |  Code der zu einer Gruppe gehörenden Lernperiode. Referenz auf Code der Codeliste *Lernperiode*.
sichtfreigabe | String (Code) | 0..1 | Gibt an, ob diese Gruppe aufgrund der Freigabe durch eine andere Organisation sichtbar ist. Ist `sichtfreigabe` nicht gesetzt, so entspricht das dem Wert `nein`. Der Wert von Sichtfreigabe ist Boolean nach Codetabelle *Boolean*.
revision | String (UTF-8) | 1 | Revision der Gruppe. Wird vom Schulconnex-Server mit der Erstellung des Datensatzes sowie Aktualisierung generiert. Dieser Wert kann nicht von Quellsystemen oder Diensten gesetzt werden.
