# Terminology Report

## docs/datenmodell-dienste/beziehung.md

- 'Personenkontext' — Im Sinne der Schnittstelle beschreibt der Personenkontext den Kontext einer Person, in dem ein Dienst genutzt wird. Er umfasst eine Organisation und die Rolle der Person in Bezug auf diese Organisation.
- 'ktid' — Steht für die pseudonymisierte ID eines Personenkontexts. Sie wird verwendet, um Personen in einem datenschutzkonformen Kontext eindeutig zu identifizieren.
- 'SchB' — Abkürzung für Schulbegleiter oder Schulbegleiterin, eine spezifische Rolle im Kontext des Schulconnex-Datenmodells.
- 'Beziehung' — Im Sinne des Schulconnex-Datenmodells beschreibt eine Beziehung die Verbindung zwischen zwei Personenkontexten, die durch eine spezifische Art der Beziehung definiert wird.

## docs/datenmodell-dienste/datenmodell.md

- 'Schulconnex-Service' — Ein Service, der den Vorgaben der Schulconnex-Spezifikation folgt.
- 'pseudonymisierte ID' — Eine ID, die zur Referenzierung von Daten einer spezifischen Person oder von Personenkontexten genutzt wird und aus Sicht der Dienste konstant und eindeutig ist.
- 'pid' — Abkürzung für pseudonymisierte ID, die im Kontext der Schulconnex-Dienste verwendet wird.
- 'GET' — HTTP-Methode für lesende Abrufe, die im Kontext der Schulconnex-Dienste verwendet wird.
- '0/1' — Notation zur Angabe der Anzahl eines Attributs, die entweder nicht vorhanden oder einmal vorhanden sein kann.
- '0/0..1' — Notation zur Angabe der Anzahl eines Attributs, die entweder nicht vorhanden oder maximal einmal vorhanden sein kann.
- '0/0..n' — Notation zur Angabe der Anzahl eines Attributs, die entweder nicht vorhanden oder als Array von Werten vorliegen kann.
- 'Gruppe' — Im Datenmodell eine Klasse, die Organisationen und Lernperioden assoziiert und spezifische Attribute wie Bezeichnung und Typ enthält.
- 'Lernperiode' — Eine Klasse im Datenmodell, die Zeiträume mit spezifischen Attributen wie Beginn und Ende beschreibt.
- 'Personenkontext' — Kontext der Person, in dem ein Dienst genutzt wird, umfasst Organisation und Rolle der Person.
- 'Organisation' — Eine Klasse im Datenmodell, die spezifische Attribute wie ID, Kennung und Anschrift enthält.
- 'Anschrift' — Eine Klasse im Datenmodell, die Adressinformationen wie Postleitzahl und Ort enthält.

## docs/datenmodell-dienste/datumsformat.md

- 'Datumsformat' — Im Sinne der Schnittstelle bezeichnet Datumsformat die spezifische Darstellung und Strukturierung von Datumsangaben, die für die Verarbeitung und den Austausch von Daten erforderlich ist.

## docs/datenmodell-dienste/geburt.md

- 'DIN 91379.C' — DIN 91379.C umfasst alle Zeichen von DIN 91379.B und darüber hinaus zusätzliche Zeichen, die zur Schreibung juristischer Personen notwendig sind, sowie nicht druckbare Zeichen wie Line Feed und geschütztes Leerzeichen.
- 'Boolean' — Boolean ist eine Codeliste, die im Kontext der Schnittstelle verwendet wird, um binäre Werte wie 'wahr' oder 'falsch' zu repräsentieren.

## docs/datenmodell-dienste/gruppe.md

- 'Gruppenzugehörigkeit' — Im Sinne der Schnittstelle bezeichnet dies die Beziehung einer Person zu einer Gruppe, die durch das Datenmodell abgebildet wird.
- 'Gruppendatensatz' — Ein spezifischer Datensatz, der Informationen zu einer Gruppe im Datenmodell enthält.
- 'Gruppentyp' — Referenz auf eine Codeliste, die den Typ einer Gruppe (z. B. Klasse, Kurs) definiert.
- 'Gruppenbereich' — Referenz auf eine Codeliste, die die Art einer Gruppe (z. B. Pflicht, Wahl, Grundkurs, Leistungskurs) beschreibt.
- 'Gruppenoption' — Referenz auf eine Codeliste, die zusätzliche Optionen einer Gruppe, wie sprachbezogene Merkmale, definiert.
- 'Gruppendifferenzierung' — Referenz auf eine Codeliste, die Differenzierungen innerhalb einer Gruppe, z. B. für integrierten Unterricht oder gymnasiale Oberstufe, beschreibt.
- 'Bildungsziel' — Referenz auf eine Codeliste, die das Bildungsziel einer Gruppe (z. B. Realschule, Hauptschule, Gymnasium) definiert.
- 'Jahrgangsstufe' — Referenz auf eine Codeliste, die die Jahrgangsstufe einer Gruppe (z. B. Jahrgangsstufe 1 bis 13) beschreibt.
- 'Fach' — Ein Element des Datenmodells, das die in einer Gruppe behandelten Fächer beschreibt.
- 'Laufzeit' — Ein Element des Datenmodells, das die zeitliche Dauer einer Gruppe beschreibt.

## docs/datenmodell-dienste/gruppendatensatz.md

- 'Gruppendatensatz' — Ein spezifischer Begriff im Schulconnex-Datenmodell, der als Daten-Container für die Verwaltung von Gruppen und deren Zugehörigkeiten dient.
- 'WrapperObject' — Ein technischer Fachbegriff, der im Kontext des Datenmodells verwendet wird, um die Funktion des Gruppendatensatzes als Container zu beschreiben.
- 'Gruppe' — Ein zentraler Begriff im Schulconnex-Datenmodell, der eine einzelne Gruppe repräsentiert und spezifische Attribute gemäß dem Datenmodell enthält.
- 'Gruppenzugehörigkeit' — Ein Fachbegriff im Schulconnex-Datenmodell, der die Beziehung zwischen einer Person und einer Gruppe beschreibt.
- 'sonstige_gruppenzugehoerige' — Ein spezifisches Attribut im Schulconnex-Datenmodell, das eine Liste von weiteren Zugehörigen zu einer Gruppe beschreibt.
- 'Array' — Ein technischer Begriff, der im Kontext des Datenmodells verwendet wird, um eine strukturierte Liste von Elementen zu beschreiben.

## docs/datenmodell-dienste/gruppenzugehörigkeit.md

- 'Gruppenzugehörigkeit' — Im Sinne der Schnittstelle bezeichnet die Gruppenzugehörigkeit die Verbindung einer Person mit einer Gruppe, einschließlich spezifischer Rollen innerhalb dieser Gruppe.
- 'Personenkontext' — Der Personenkontext umfasst die Organisation und die Rolle einer Person in Bezug auf diese Organisation, beispielsweise Schulleitung einer Schule.
- 'Gruppenrolle' — Gruppenrolle bezeichnet die spezifische Funktion oder Aufgabe einer Person innerhalb einer Gruppe, die über die allgemeine Rolle in einer Organisation hinausgeht.
- 'ktid' — Steht für eine pseudonymisierte ID des Personenkontexts, die zur Identifikation einer Person in einem bestimmten Kontext verwendet wird.

## docs/datenmodell-dienste/lernperiode.md

- 'lernperiode' — Im Sinne der Schulconnex-Spezifikation bezeichnet 'Lernperiode' einen definierten Zeitraum, in dem Lernaktivitäten stattfinden und dokumentiert werden können.

## docs/datenmodell-dienste/name.md

- 'DIN 91379.A' — DIN 91379.A umfasst die Zeichen, welche für Namen natürlicher Personen benötigt werden, einschließlich lateinischer Schriftzeichen, Umlaute, Akzentzeichen und bestimmter Nicht-Buchstaben. Es ist eine spezifische Norm für die elektronische Verarbeitung von Personennamen.
- 'Person' — Im Sinne der Schnittstelle ist eine Person ein Mensch, welcher eine Beziehung zu einer oder mehreren Schulen oder außerschulischen Organisationen hat und dort Träger von Rechten und Pflichten ist.

## docs/datenmodell-dienste/organisation.md

- 'Stammorganisation' — Bezeichnet die primäre Organisation, der eine Person zugeordnet ist, unabhängig von temporären Tätigkeiten in anderen Organisationen. Im Schulconnex-Kontext ist dies ein spezifischer Begriff zur Organisationseinordnung.
- 'Dienststelle' — Im Kontext der Schulconnex-Dokumentation bezeichnet dies eine spezifische Organisationseinheit, an die Personen zeitweise abgeordnet werden können.
- 'Schulconnex-Server' — Bezeichnet die zentrale technische Plattform, die für die Verwaltung und Verarbeitung von Daten im Schulconnex-System zuständig ist.
- 'String (UTF-8)' — Spezifiziert den Datentyp für Attribute im Schulconnex-Datenmodell, wobei UTF-8 als Zeichencodierung verwendet wird.
- 'DIN 91379.B' — Bezieht sich auf eine spezifische Norm für die elektronische Verarbeitung von Orts- und Straßennamen, die im Schulconnex-Datenmodell verwendet wird.
- 'Organisationstyp' — Bezeichnet eine Codeliste, die verschiedene Typen von Organisationen im Schulconnex-Datenmodell definiert.
- 'Freigabe erforderlich' — Bezieht sich auf die Konfigurierbarkeit von Attributen im Schulconnex-Datenmodell, die durch Absprache mit dem Server-Betreiber geregelt wird.

## docs/datenmodell-dienste/person.md

- 'stammorganisation' — Bezeichnet die primäre Organisation, der eine Person zugeordnet ist, unabhängig von ihrem aktuellen Tätigkeitsort. Im Schulconnex-Kontext ist dies relevant für die Zuordnung von Personen zu Organisationen.
- 'lokalisierung' — Im Sinne der Schnittstelle bezeichnet dies die bevorzugte Spracheinstellung einer Person für Anwendungen, basierend auf RFC 5646.
- 'vertrauensstufe' — Gibt an, wie stark die Personendaten vom erfassenden Mandanten verifiziert wurden. Im Schulconnex-Kontext ist dies ein spezifischer Code aus der Codeliste *Vertrauensstufe*.
- 'RFC 5646' — Ein Standard, der die Syntax für Sprachkennzeichnungen definiert. Im Schulconnex-Kontext wird er für die Lokalisierungseinstellungen verwendet.
- 'Codeliste Geschlecht' — Bezeichnet eine spezifische Liste von Codes zur Angabe des Geschlechts einer Person. Im Schulconnex-Datenmodell ist dies eine standardisierte Referenz.
- 'Codeliste Vertrauensstufe' — Bezeichnet eine spezifische Liste von Codes zur Angabe der Verifizierungsstufe von Personendaten. Im Schulconnex-Datenmodell ist dies eine standardisierte Referenz.

## docs/datenmodell-dienste/personenkontext.md

- 'Personenkontext' — Kontext der Person, in dem ein Dienst genutzt wird. Ein Personenkontext umfasst eine Organisation und eine Rolle der nutzenden Person in Bezug auf diese Organisation.
- 'Schulconnex-Server' — Server, der den Vorgaben der Schulconnex-Spezifikation folgt und für die Datenhaltung und Verarbeitung im Schulconnex-Kontext zuständig ist.
- 'Organisation' — Im Sinne des Datenmodells eine Einheit, die mit einer Person in einem Personenkontext verbunden ist, z. B. eine Schule oder außerschulische Einrichtung.
- 'Rolle' — Eine temporäre Funktion, die eine Person innerhalb eines fachlichen Kontexts ausübt, verbunden mit Aufgaben, Befugnissen und Verantwortungen.
- 'Personenstatus' — Status, den eine Person in einer Organisation in Bezug auf eine bestimmte Rolle hat, referenziert durch Codes aus der Codeliste *Personenstatus*.
- 'Gruppendatensatz' — Ein Datensatz, der Gruppen und Gruppenzugehörigkeiten einer Person im Personenkontext beschreibt.
- 'Beziehung' — Im Datenmodell eine Verbindung zwischen Personenkontexten, die durch Attribute wie `hat_als` und `ist_von` beschrieben wird.
- 'Löschung' — Im Datenmodell ein Prozess, bei dem ein Personenkontext entfernt wird, mit Attributen wie dem Zeitpunkt der Löschung.
- 'String (UTF-8)' — Ein Datentyp, der Zeichenketten im UTF-8-Format beschreibt und im Datenmodell für Attribute wie ID verwendet wird.
- 'String (Code)' — Ein Datentyp, der Codes beschreibt, die in Codelisten wie *Rolle* oder *Personenstatus* referenziert werden.
- 'Array' — Ein Datentyp, der Listen von Elementen beschreibt, z. B. Erreichbarkeiten oder Gruppenzugehörigkeiten im Personenkontext.
- 'datetime' — Ein Datentyp, der Datum und Uhrzeit beschreibt, z. B. für den Zeitpunkt der Löschung eines Personenkontexts.
- 'UTC' — Koordinierte Weltzeit, die als Zeitformat für Attribute wie den Löschzeitpunkt im Datenmodell verwendet wird.

## docs/datenmodell-dienste/sichtfreigabe.md

- 'Sichtfreigabe' — Organisationen können individuelle Datensätze für andere Organisationen freigeben. Bei einer Sichtfreigabe ist für die andere Organisation nur der lesende Zugriff auf die Daten möglich. Der Schulconnex-Service unterstützt derzeit als Freigaben nur Sichtfreigaben.
- 'Schulconnex-Service' — Ein Service, der den Vorgaben der Schulconnex-Spezifikation folgt.

