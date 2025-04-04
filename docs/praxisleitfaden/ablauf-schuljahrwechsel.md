---
title: Ablauf Schuljahrwechsel
---

# Ablauf des Schuljahreswechsels für Quellsysteme

Im Zusammenhang mit dem Schuljahreswechsel (zum Teil auch mit dem Schulhalbjahreswechsel) muss im Allgemeinen
ein großer Teil der Daten im Schulconnex-Service aktualisiert werden.

Betroffen sind beispielsweise:

- abgehende Schülerinnen und Schüler
- abgehende Lehrkräfte
- neu aufgenommene Schülerinnen und Schüler
- neu aufgenommene Lehrkräfte
- abgehende und neue Schulklassen
- Versetzung der Klassen in das neue Schuljahr
- neue Unterrichte oder Kurse des Schuljahres

Der primäre Einsatzzweck des Schulconnex-Services ist die Bereitstellung und Übermittlung von Daten
an angebundene Dienste. Dazu müssen nur die Daten der aktuellen Lernperiode vorgehalten werden;
das Vorhalten von „historischen“ Daten aus vergangenen Lernperioden und Planungsdaten für
zukünftige Lernperioden ist nicht notwendig.

Für Quellsysteme sind keine besonderen Funktionen oder API-Endpunkte für den Wechsel der Lernperioden
vorgesehen. Findet eine Datensynchronisation allerdings im Zusammenhang oder direkt nach einem Wechsel
der Lernperiode statt, müssen einige Besonderheiten berücksichtigt werden. Grundsätzlich sollte der Ablauf
der Datensynchronisation der gleiche wie bei einer unterjährigen Synchronisation sein. So ist unter anderem
auch sichergestellt, dass nachträgliche Änderungen beispielsweise am Stundenplan und bei Lerngruppen
im Zusammenhang mit der Regelsynchronisation wie bei einem Lernperiodenwechsel übernommen werden.

## Besonderheiten bei der Aktualisierung der Personen und Personenkontexte

Daten zu Personen und Personenkontexte, welche weiterhin bei der Organisation verbleiben, sollten
nicht gelöscht werden. Sie müssen im Schulconnex-Service mit der gleichen UUID weitergeführt werden.
Das Löschen eines Personenkontexts kann sonst in allen verbundenen Diensten zum Löschen
des Benutzerkontos und damit zum Datenverlust führen.

Für Personen, die das Schulsystem des Landes verlassen oder die Organisation wechseln, sind die Anforderung
zur Löschung von Personen und Personenkontexten sowie die zum Schulwechsel zu beachten. Für Personen,
die zum neuen Schuljahr an die aktuelle Schule wechseln, sind ebenfalls die Anforderungen
zum Schulwechsel zu beachten.

Bei Lernenden (Schülerinnen und Schülern) muss meist das Feld `personenkontext.jahrgangsstufe`
aktualisiert werden.

## Besonderheiten beim Aktualisieren von Gruppen

Gruppen, die über den Schuljahreswechsel hinweg fortbestehen, sollen auf keinen Fall gelöscht werden.
Sie sollen im Schulconnex-Service mit der gleichen UUID weitergeführt werden. Auch das Löschen von Gruppen
kann bei verbundenen Diensten zu Datenverlust oder zu Dateninkonsistenzen führen. So können
in einem Lernmanagementsystem an einen mehrjährigen Kurs Unterrichtsmaterialien oder Aufgaben gebunden sein,
auf die auch im Folgeschuljahr noch zurückgegriffen werden können muss.

Demzufolge muss das Quellsystem bei der Aktualisierung von Gruppen zwischen fortgeführten
und beendeten Gruppen unterscheiden.

### Fortgeführte Gruppen

Bei fortgeführten Gruppen werden die Attribute der Gruppe und auch gegebenenfalls
die Gruppenzugehörigkeiten aktualisiert. Die Gruppe wird im Schulconnex-Service nicht gelöscht
und nicht neu angelegt. Die bestehende UUID bleibt erhalten.

- Bei Schulklassen, Kursen und Unterrichten muss meist das Attribut `bezeichnung` aktualisiert werden.
  Die Regeln der Aktualisierung hängen von der Datenhaltung des Quellsystems und
  dem Benennungsschema der Schule ab.
- Bei Schulklassen, Kursen und Unterrichten muss meist das Attribut `jahrgangsstufen` aktualisiert werden.
- Die Attributstruktur `laufzeit` muss überprüft und eventuell angepasst werden.

Beispiel:

Gruppentyp | Bezeichnung im abgeschlossenen Schuljahr | Aktualisierte Bezeichnung
--- | --- | ---
Schulklasse | „Klasse 7a“ | „Klasse 8a“
Schulklasse | „Qualifikationsphase 1“ | „Qualifikationsphase 2“
Kurs / Unterricht | „LK Mathematik Q1“ | „LK Mathematik Q1“
Kurs / Unterricht | „LK Mathematik Abitur 2024“ | nicht aktualisiert
Kurs / Unterricht | „Deutsch 7a“ | „Deutsch 8a“
Kurs / Unterricht | „Spanisch 9 I“ | „Spanisch 10 I“
Kurs / Unterricht | „AG Basketball“ | nicht aktualisiert
Sonstige Gruppe | „Kollegium“ | nicht aktualisiert
Sonstige Gruppe | „Arbeitsgruppe Schulentwicklung“ | nicht aktualisiert

### Beendete Gruppen

Für Gruppen, die am Ende einer Lernperiode nicht fortgeführt werden, gibt es zwei Möglichkeiten:

1. Sofortiges Löschen im Schulconnex-Service
1. Aktualisierung der Attributstruktur `laufzeit` und Löschung nach einer bestimmten Zeit
   (beispielsweise 30 Tage). Dies hat den Vorteil, dass die verbundenen Dienste über
   die Beendigung der Gruppe noch informiert werden. Lehrkräfte können dann noch für den
   vorgegebenen Zeitraum auf Ergebnisse des vergangenen Schuljahres zurückgreifen.

Es gibt keinen klassischen Schuljahreswechsel im Schulconnex-Service, bei dem ein neues
„leeres“ Schuljahr angelegt wird. Alle bestehenden Gruppen müssen explizit aktualisiert oder
gelöscht werden. Es gibt keinen automatischen Löschvorgang beim Schuljahreswechsel.

Beispiele:

Gruppentyp | Bezeichnung im abgeschlossenen Schuljahr | Erläuterung
--- | --- | ---
Schulklasse | „Qualifikationsphase 2“ | Klasse ist abgegangen
Kurs / Unterricht | „LK Mathematik Q2“ | Kurs ist beendet
Kurs / Unterricht | „Deutsch 8a“ | Bei Wechsel der Lehrkraft wird „Deutsch 9a“ mit neuer UUID neu angelegt.
Kurs / Unterricht | „Physik 7a“ | kein Physikunterricht im 8. Jahrgang
Kurs / Unterricht | „AG Fußball“ | wenn die Schule AGs grundsätzlich nicht als „fortgeführt“ ansieht

Die Beispiele zeigen, dass es nicht in allen Fällen verbindliche Angaben darüber geben kann,
wann und ob eine Gruppe als fortgeführt oder beendet gilt. So kann „Deutsch 7a“ als fortgeführt
in „Deutsch 8a“ angesehen werden. In diesem Fall bleiben die UUID und damit alle in verbundenen Diensten
vorhandenen Daten dieser Gruppe erhalten. Im zweiten Beispiel würde „Deutsch 8a“ gelöscht
(oder es würde zunächst das Laufzeitende auf das Ende des abgeschlossenen Schuljahres gesetzt werden).
Danach würde eine neue Gruppe „Deutsch 9a“ angelegt werden. Dies kann erwünscht sein, wenn alle Daten
der Gruppe im verbundenen Lernmanagementsystem (Dateien, Aufgaben, Abgaben) gelöscht werden sollen,
beispielsweise beim Wechsel der Lehrkraft.

Orientierung:

- Klassen sollen fortgeführt werden.
- Oberstufenkurse sollen fortgeführt werden.
- Kurse und Unterrichte sollen fortgeführt werden, wenn
  - sich die Gruppenzusammensetzung nicht oder nur unwesentlich ändert,
  - das Fach im Folgeschuljahr unterrichtet wird
  - und sich die Lehrkraft nicht ändert.

Das Quellsystem sollte der Schule per allgemeiner Konfiguration oder bei jedem Aufruf
der Synchronisationsfunktion Optionen zur Fortführung geben, beispielsweise in der Form:

- Klassen fortführen
  - Kurse und Unterrichte (Oberstufe) fortführen
    - immer
    - bei gleicher Lehrkraft
  - Kurse und Unterrichte (SEK I) fortführen
    - immer
    - bei gleicher Lehrkraft
- beendete Gruppen erst nach 30 Tagen löschen

Ein Quellsystem sollte beim Synchronisationsvorgang zwischen den Schritten
„Abgleich der Gruppen-Datensätze mit dem Schulconnex-Service“ und „Aktualisieren,
Löschen oder Neuanlegen der Gruppen-Datensätze“ immer einen Dialog zeigen, in dem
die zu synchronisierenden Gruppen aufgelistet werden und die geplante Gruppenzuordnung
noch einmal bestätigt werden muss oder manuell einzeln geändert werden kann. Auch die
oben erwähnte Löschfrist sollte einzeln änderbar sein.
