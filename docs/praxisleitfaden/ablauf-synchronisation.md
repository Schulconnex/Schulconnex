---
title: Synchronisation Quellsystem
---

# Ablaufbeschreibung: Synchronisation mit dem primären Quellsystem

Diese Sektion beschreibt den vorgeschlagenen grundsätzlichen Ablauf der Synchronisation
zwischen einem primären Quellsystem (Stammdatenverwaltung des Schulverwaltungssystems) und
einem Schulconnex-Service. Aus dem Vorschlag lassen sich die notwendigen Teile der
Schnittstellenimplementierung auf Seiten des Quellsystems ableiten.

## Konfiguration

Das Quellsystem muss sich für die Nutzung der REST-API des Schulconnex-Services authentifizieren.
Bei Verwendung des OAuth2-Flows wird dafür der Password Credentials Grant verwendet. Das Quellsystem
erhält durch die Authentifizierung einen Access Token, mit dem die Endpunkte der REST-API
aufgerufen werden können.

Das Quellsystem muss die Zugangsdaten (Kennung, Passwort, ggf. noch URLs) sicher speichern können.
Eine lokale Speicherung oder Zwischenspeicherung (Datei) ist nicht zulässig. Es muss sichergestellt
sein, dass nur berechtigte Nutzende Zugriff auf das Client Secret haben bzw. Funktionen aufrufen können,
die das Client Secret verwenden. Falls die Funktion von einem lokalen Rechner ausgelöst wird, ist
sicherzustellen, dass das Client Secret nicht von Unberechtigten ausgelesen werden kann.

Meistens haben Schulverwaltungssysteme ein Rechte- und Rollensystem zur Steuerung des Zugriffs auf
einzelne Funktionalitäten. Auch das Recht, den Synchronisationsvorgang auszulösen, sollte an eine
Rolle oder Benutzende gebunden sein. Diese Entscheidung liegt jedoch beim Betreiber oder
Hersteller des Schulverwaltungssystems.

> Anforderungen an das Quellsystem

- Implementierung eines Unterpunkts im Konfigurationsmenü zur Eingabe und zum Abspeichern
  der Zugangsdaten
- Implementierung eines Rechts „Synchronisation mit Schulconnex-Service“ und der Möglichkeit,
  dieses Recht an Rollen oder Benutzer oder Benutzerinnen zu vergeben.

## Synchronisation

Der Synchronisationsvorgang besteht aus mehreren Schritten.

- Schritt 1: Auslösen des Synchronisationsvorgangs
- Schritt 2: Auswahl der zu synchronisierenden Gruppen
- Schritt 3: Abruf der Personen des Mandanten des Quellsystems aus dem Schulconnex-Service
- Schritt 4: Abgleich der Datensätze
- Schritt 5: Aktualisieren oder Anlegen der jeweiligen Datensätze
- Schritt 6: Importieren bestätigter Datensätze in das Quellsystem
- Schritt 7: Abruf der Gruppen des Mandanten des Quellsystems aus dem Schulconnex-Service
- Schritt 8: Abgleich der Datensätze (Gruppen und Gruppenzugehörigkeiten)
- Schritt 9: Aktualisieren und Anlegen der Datensätze (Gruppen und Gruppenzugehörigkeiten)
- Schritt 10: Importieren bestätigter Datensätze (Gruppen und Gruppenzugehörigkeiten) in das Quellsystem
- Schritt 11: Rückmeldung an den Benutzer oder die Benutzerin

Diese Schritte, sowie teilweise die daraus resultierenden Anforderungen an ein Quellsystem,
werden in den folgenden Abschnitten genauer beschrieben.

### Schritt 1: Auslösen des Synchronisationsvorgangs

Benutzer oder Benutzerinnen mit entsprechenden Rechten können diese Funktion, beispielsweise
über eine Schaltfläche oder einen Menüeintrag, auslösen.

> Anforderungen an das Quellsystem

Implementierung eines UI-Elements zum Auslösen des Synchronisationsvorgangs, wie einen Button
oder eine Menü-Funktion.

### Schritt 2: Auswahl der zu synchronisierenden Gruppen

Meistens ist es nicht sinnvoll, sämtliche Personeneinträge der Datenbank des Quellsystems
ohne Vorauswahl zu synchronisieren. Daher sollte im 2. Schritt die Möglichkeit bestehen,
die zu synchronisierenden Gruppen auszuwählen. Es bietet sich ein modaler Dialog an, mit
der Möglichkeit Schulklassen oder andere einschlägige Personengruppen, wie Lehrkräfte,
auszuwählen.

> Anforderungen an das Quellsystem

Implementierung eines Dialogs zur Auswahl von Klassen sowie der Gruppe der Lehrkräfte.

### Schritt 3: Abruf der Personen des Mandanten des Quellsystems aus dem Schulconnex-Service

Das Quellsystem sollte vor dem Erstellen des Synchronisationsdatensatzes über den
Endpunkt `/personen` (oder alternativ über `/personenkontexte`) der REST-API zunächst den
vollständigen Datensatz an Personen und Personenkontexten des Mandanten abrufen. Die Definition
der Schnittstellen und ihre Rückgabewerte mit Beispielen sind aus der Schnittstellenspezifikation
für Quellsysteme ersichtlich.

:::note[Hinweis]

Eine Person kann in mehreren Rollen im landesweiten Schulsystem vertreten sein, beispielsweise
gleichzeitig als Lehrkraft und Erziehungsberechtigte oder als Schulleitung und Lehrkraft.
Daher können zu einer Person mehrere Personenkontexte gehören, wobei der Regelfall jedoch ein
Personenkontext pro Person ist.

:::

> Anforderungen an das Quellsystem

Implementierung der Abruffunktion des REST-Endpunkts `/personen`.

### Schritt 4: Abgleich der Datensätze

Der Abgleich der Datensätze erfolgt anhand der Schlüssel. Hier kann die UUID des Schulconnex-Services
verwendet werden. In diesem Fall muss das Quellsystem die UUID aus dem Schulconnex-Service als
Fremdschlüssel selbst speichern. Alternativ kann das Quellsystem seinen eigenen Schlüssel als
Fremdschlüssel („referrer“) im Schulconnex-Service ablegen und den Abgleich darüber durchführen.

Falls beide Möglichkeiten genutzt werden, sollte das Quellsystem eine Strategie festlegen, wie bei
Schlüsselkonflikten verfahren wird. Der Schulconnex-Service verwendet immer den eigenen Schlüssel.
Das Quellsystem muss eine Strategie festlegen, wie mit den Schlüsseln umgegangen wird, weil das
Quellsystem seinen eigenen Schlüssel hat und die UUID des Schulconnex-Services.

Fall | Beschreibung | Aktion
--- | --- | ---
1 | Der Datensatz im Schulconnex-Service kann einem Datensatz im Quellsystem über einen der beiden Schlüssel eindeutig zugeordnet werden. | Vormerken für automatische Aktualisierung
2 | Sowohl im Datensatz im Schulconnex-Service als auch im Datensatz des Quellsystems sind sämtliche Personenattribute (Familienname, Vorname, Geburt: Datum, Ort) vorhanden. Die Attributwerte stimmen sämtlich überein und eine Zuordnung ist daher auch ohne Schlüssel eindeutig möglich. | Vormerken für automatische Aktualisierung
3 | Im Datensatz Schulconnex-Service oder im Datensatz Quellsystem sind nur ein Teil der Personenattribute (Familienname, Vorname, Geburt: Datum, Ort) vorhanden. Die Attributwerte stimmen überein, aber die Zuordnung ist möglicherweise nicht eindeutig. | Vormerken für Aktualisierung nach Zuordnungs-Bestätigung
4 | Der Datensatz im Schulconnex-Service hat einen Fremdschlüssel (referrer) des Quellsystems, ist aber anhand des Schlüssels im Quellsystem nicht auffindbar. (Dieser Fall kann auftreten, wenn im Quellsystem ein Backup wiedereingespielt wurde, nachdem das Quellsystem bereits neue Personen im Schulconnex-Service hat.) | Vormerken für Import nach Import-Bestätigung
5 | Der Datensatz im Schulconnex-Service kann einem Datensatz im Quellsystem nicht zugeordnet werden. | Vormerken für Import nach Import-Bestätigung
6 | Nach Abgleichen der Fälle 1, 2, 3 und 4 kann ein Datensatz im Quellsystem nicht einem Datensatz im Schulconnex-Service zugeordnet werden. | Vormerken zum automatischen Anlegen eines neuen Datensatzes im Schulconnex-Service

> Anforderungen an das Quellsystem

- Implementierung der Geschäftslogik zum Abgleichen der Datensätze
- Implementierung eines Dialogs zum Auswählen (Bestätigen) im Fall 3
- Implementierung eines Dialogs zum Auswählen (Bestätigen) in den Fällen 4 und 5 (Import)

*Die Möglichkeit, unbekannte Datensätze aus dem Schulconnex-Service in das Quellsystem
zu importieren (Fälle 4 und 5) kann auch für eine spätere Ausbaustufe zurückgestellt werden.*

### Schritt 5: Aktualisieren und Anlegen der Datensätze

Das Quellsystem hat nach Abgleich der Datensätze und eventuell notwendigen Bestätigungen (Fälle 3, 4 und 5)
je eine Liste von Datensätzen zum Aktualisieren und zum Anlegen. Das Aktualisieren und Anlegen von Personen
und Personenkontexten geschieht über getrennte Endpunkte.

Aktion | Endpunkte | Hinweis
--- | --- |---
Aktualisieren | <ul><li>PUT `/personen/{id}`</li><li>PUT `/personenkontexte/{id}`</li></ul> | Die Revision muss als Attribut mitgegeben werden.
Anlegen | <ul><li>POST `/personen/`</li><li>POST `/personen/{id}/personenkontexte/`</li></ul> |

Eine PATCH-Operation ist nicht vorgesehen. Beim Aktualisieren über PUT muss der gesamte Datensatz
mitgegeben werden. Es ist darauf zu achten, dass das Quellsystem dabei nicht unbeabsichtigt Daten löscht.

### Schritt 6: Importieren bestätigter Datensätze in das Quellsystem

Wenn (in den Fällen 4 und 5) dem Import zugestimmt wurde und die Attribute im Schulconnex-Service
zum Anlegen eines neuen Datensatzes im Quellsystem ausreichen, kann der Import durchgeführt werden.

Die Möglichkeit, unbekannte Datensätze in das Quellsystem zu importieren (Fälle 4 und 5), kann auch
für eine spätere Ausbaustufe zurückgestellt werden.

### Schritt 7: Abruf der Gruppen des Mandanten des Quellsystems aus dem Schulconnex-Service

Das Quellsystem sollte vor dem Erstellen des Synchronisationsdatensatzes über den Endpunkt `/gruppen`
der REST-API zunächst den vollständigen Datensatz an Gruppen und Gruppenzugehörigkeiten des Mandanten
aus dem Schulconnex-Service abrufen. Die Definition der Schnittstellen und ihre Rückgabewerte mit
Beispielen sind aus der Schnittstellenspezifikation für Quellsysteme ersichtlich.

### Schritt 8: Abgleich der Datensätze (Gruppen und Gruppenzugehörigkeiten)

Der Abgleich der Datensätze für Gruppen und Gruppenzugehörigkeiten sollte analog zum Abgleich
der Datensätze für Personen und Personenkontexte in (4) erfolgen. Dieser Import ist optional.

Fall | Beschreibung | Aktion | Hinweis
--- | --- | --- | ---
1 | Der Datensatz aus dem Schulconnex-Service kann einem Datensatz im Quellsystem über einen der beiden Schlüssel eindeutig zugeordnet werden. | Vormerken für automatische Aktualisierung
2 | Der Datensatz aus dem Schulconnex-Service hat einen Fremdschlüssel (referrer) des Quellsystems, ist aber anhand des Schlüssels im Quellsystem nicht auffindbar. | Vormerken für Import nach Import-Bestätigung | Dieser Fall kann z. B. auftreten, wenn im Quellsystem ein Backup wiedereingespielt wurde, nachdem das Quellsystem bereits neue Gruppen im Schulconnex-Service angelegt hat.
3 | Der Datensatz aus dem Schulconnex-Service kann einem Datensatz im Quellsystem nicht zugeordnet werden. | Vormerken für Import nach Import-Bestätigung | Dieser Fall tritt auf, wenn Gruppen in der Administrationsoberfläche des Schulconnex-Services manuell oder durch Synchronisation mit einem sekundären Quellsystem angelegt wurden. Ersteres kann bei Arbeitsgruppen/Teams oder ähnlichen Fällen gegeben sein, letzteres, wenn die Unterrichte zu Klassen von einer Stundenplanverwaltung oder einer Oberstufenverwaltung angelegt wurden (sekundäre Quellsysteme). Der Rückimport dieser Gruppen (Unterrichte) in das primäre Quellsystem sollte nicht automatisch passieren, sondern nur nach Rückfrage bzw. entsprechend konfigurierbarer Parameter (z. B. nur Unterrichte und mit bekannten Referenzgruppen).
4 | Nach Abgleichen der Fälle 1, 2 und 3 kann ein Datensatz im Quellsystem nicht einem Datensatz aus dem Schulconnex-Service zugeordnet werden. | Vormerken zum automatischen Anlegen eines neuen Gruppen-Datensatzes im Schulconnex-Service

> Anforderungen an das Quellsystem

- Implementierung der Geschäftslogik zum Abgleichen der Datensätze
- Implementierung eines Dialogs zum Auswählen (Bestätigen) im Fall 2 und 3

Die Möglichkeit, unbekannte Datensätze in das Quellsystem zu importieren (Fälle 2 und 3), ist optional.

### Schritt 9: Aktualisieren und Anlegen der Datensätze (Gruppen und Gruppenzugehörigkeiten)

Das Quellsystem hat nach Abgleich der Datensätze und ggf. notwendigen Bestätigungen (Fälle 2 und 3)
je eine Liste von Datensätzen zum Aktualisieren und zum Anlegen von Gruppen. Das Aktualisieren
und Anlegen von Gruppen und Gruppenzugehörigkeiten geschieht über getrennte Endpunkte.

Aktion | Endpunkte | Hinweis
--- | --- |---
Aktualisieren | <ul><li>PUT `/gruppen/{uuid}`</li><li>PUT `/gruppenzugehoerigkeiten/{uuid}`</li></ul> | Die Revision muss als Attribut mitgegeben werden.
Anlegen | <ul><li>POST `/gruppen/`</li><li>POST `/gruppen/{uuid}/gruppenzugehoerigkeiten/`</li></ul> | Jede Gruppenzugehörigkeit muss einzeln angelegt werden.
Löschen | <ul><li>DELETE `/gruppen/`</li><li>DELETE `/gruppenzugehoerigkeiten/{uuid}`</li></ul> | Jede Gruppenzugehörigkeit muss einzeln gelöscht werden.

Eine PATCH-Operation ist nicht vorgesehen. Beim Aktualisieren über PUT muss der gesamte Datensatz
mitgegeben werden. Es ist darauf zu achten, dass das Quellsystem dabei nicht unbeabsichtigt Daten
löscht, insbesondere dürfen nicht Daten gelöscht werden, die von anderen Quellsystemen der Organisation
benötigt oder verwaltet werden.

Falls die Synchronisation im Zusammenhang oder direkt nach einem Schuljahres- oder
Schulhalbjahreswechsel stattfindet, müssen Anforderungen berücksichtigt werden, die in
[Ablauf des Schuljahreswechsels für Quellsysteme beschrieben sind](./ablauf-schuljahrwechsel.md).

### Schritt 10: Importieren bestätigter Datensätze (Gruppen und Gruppenzugehörigkeiten) in das Quellsystem

Wenn (in den Fällen 2 und 3) der oder die Nutzende dem Import zugestimmt hat und die Attribute
im Schulconnex-Service zum Anlegen eines neuen Datensatzes im Quellsystem ausreichen, kann
der Import durchgeführt werden. Dieser Import ist optional.

### Schritt 11: Rückmeldung an den Benutzer oder Benutzerin

Zum Abschluss der Synchronisation sollte eine Rückmeldung über Erfolg oder Misserfolg erfolgen,
beispielsweise als Dialog oder Statusmeldung.

Idealerweise sollte hier auch die Anzahl der aktualisierten und angelegten Datensätze angezeigt werden.
