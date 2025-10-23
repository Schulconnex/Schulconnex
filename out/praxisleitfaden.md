# Terminology Report

## docs/praxisleitfaden/ablauf-löschen.md

- 'Schulconnex-Server' — Der Schulconnex-Server ist ein zentraler Bestandteil des Schulconnex-Systems und dient als Datenübermittler zwischen Schulverwaltung und angebundenen Anwendungen. Im Sinne der Schnittstelle ist dies ein spezifischer Begriff.
- 'Personenkontext' — Ein Personenkontext bezeichnet den spezifischen Kontext einer Person innerhalb einer Organisation, einschließlich ihrer Rolle. Im Schulconnex-System ist dies ein zentraler Begriff zur Datenstrukturierung.
- 'DSGVO' — Die Datenschutz-Grundverordnung (DSGVO) ist eine europäische Verordnung, die den Umgang mit personenbezogenen Daten regelt. Sie ist im Kontext des Schulconnex-Systems relevant für die gesetzliche Grundlage der Datenlöschung.
- 'Art. 17 DSGVO' — Artikel 17 der DSGVO regelt das Recht auf Löschung bzw. das Recht auf Vergessenwerden und ist eine zentrale gesetzliche Grundlage für die Datenlöschung im Schulconnex-System.
- 'HTTP-DELETE' — HTTP-DELETE ist eine Methode des HTTP-Protokolls, die im Schulconnex-System für die Löschung von Personenkontexten und Personen verwendet wird. Es ist ein spezifischer Schnittstellenbegriff.
- 'API' — API steht für Application Programming Interface und bezeichnet die Schnittstelle, über die Dienste mit dem Schulconnex-System kommunizieren. Im Kontext des Schulconnex-Systems ist dies ein zentraler technischer Begriff.
- '/personenkontexte/{id}' — Dieser API-Endpunkt wird im Schulconnex-System verwendet, um spezifische Personenkontexte zu löschen. Es handelt sich um einen spezifischen Schnittstellenbegriff.
- '/personen/{id}' — Dieser API-Endpunkt wird im Schulconnex-System verwendet, um spezifische Personen zu löschen. Es handelt sich um einen spezifischen Schnittstellenbegriff.
- '/personen-info' — Dieser API-Endpunkt liefert Informationen zu aktiven Personenkontexten und geplanten Löschzeitpunkten im Schulconnex-System. Es handelt sich um einen spezifischen Schnittstellenbegriff.
- 'Fehlercode 400/13' — Der Fehlercode 400/13 wird im Schulconnex-System zurückgegeben, wenn eine direkte Löschung von Personenkontexten nicht möglich ist. Es handelt sich um einen spezifischen Schnittstellenbegriff.

## docs/praxisleitfaden/ablauf-schuljahrwechsel.md

- 'Schulconnex-Service' — Ein Service, der den Vorgaben der Schulconnex-Spezifikation folgt und für die Bereitstellung und Übermittlung von Daten an angebundene Dienste genutzt wird.
- 'UUID' — Steht für Universally Unique Identifier und wird im Schulconnex-Service zur eindeutigen Identifikation von Personen und Gruppen verwendet.
- 'Personenkontext' — Kontext der Person, in dem ein Dienst genutzt wird, umfasst eine Organisation und eine Rolle der Person in Bezug auf diese Organisation.
- 'laufzeit' — Ein Attribut, das die zeitliche Gültigkeit einer Gruppe im Schulconnex-Service beschreibt und bei Aktualisierungen angepasst werden muss.
- 'jahrgangsstufe' — Ein Feld im Personenkontext, das die aktuelle Jahrgangsstufe einer lernenden Person angibt und beim Schuljahreswechsel aktualisiert werden muss.
- 'Regelsynchronisation' — Bezeichnet die standardisierte Synchronisation von Daten zwischen Quellsystemen und dem Schulconnex-Service, unabhängig von Lernperiodenwechseln.
- 'Lernperiode' — Bezeichnet einen zeitlichen Abschnitt im Schulbetrieb, wie Schuljahr oder Schulhalbjahr, der für die Datenhaltung im Schulconnex-Service relevant ist.
- 'Quellsystem' — System, das Daten an den Schulconnex-Service übermittelt und für die Synchronisation und Aktualisierung der Daten verantwortlich ist.
- 'Synchronisationsfunktion' — Eine Funktion im Quellsystem, die den Abgleich und die Aktualisierung von Daten mit dem Schulconnex-Service ermöglicht.

## docs/praxisleitfaden/ablauf-synchronisation.md

- 'Schulconnex-Service' — Ein Service, der den Vorgaben der Schulconnex-Spezifikation folgt und spezifisch für die Synchronisation von Daten im Schulbereich konzipiert ist.
- 'Quellsystem' — Bezeichnet im Kontext der Synchronisation das primäre System, das Stammdaten verwaltet und mit dem Schulconnex-Service interagiert.
- 'REST-API' — Steht für Representational State Transfer Application Programming Interface und beschreibt die Schnittstelle zur Kommunikation zwischen dem Quellsystem und dem Schulconnex-Service.
- 'OAuth2' — Ein Sicherheitsprotokoll für die Token-basierte Autorisierung und Authentifizierung, das im Kontext der Schulconnex-Synchronisation verwendet wird.
- 'Password Credentials Grant' — Ein spezifischer Flow des OAuth2-Protokolls, der für die Authentifizierung des Quellsystems bei der REST-API des Schulconnex-Services genutzt wird.
- 'Access Token' — Ein Token, das nach erfolgreicher Authentifizierung des Quellsystems über OAuth2 generiert wird und den Zugriff auf die REST-API des Schulconnex-Services ermöglicht.
- 'Client Secret' — Ein sicherheitsrelevantes Element, das zur Authentifizierung des Quellsystems bei der REST-API des Schulconnex-Services verwendet wird.
- 'Mandant' — Bezeichnet eine abgeschlossene und klar abgegrenzte Datenhaltungs- und Verarbeitungseinheit im Schulconnex-Service, die einer Organisation zugeordnet ist.
- 'Personenkontext' — Kontext einer Person, der eine Organisation und eine Rolle der Person in Bezug auf diese Organisation umfasst, wie z. B. Schulleitung einer Schule.
- 'UUID' — Steht für Universally Unique Identifier und wird im Schulconnex-Service als eindeutiger Schlüssel zur Identifikation von Datensätzen verwendet.
- 'Fremdschlüssel' — Ein Schlüssel, der in einem Quellsystem gespeichert wird, um Datensätze eindeutig mit dem Schulconnex-Service zu verknüpfen.
- '/personen' — Ein Endpunkt der REST-API des Schulconnex-Services, über den Datensätze von Personen abgerufen werden können.
- '/personenkontexte' — Ein Endpunkt der REST-API des Schulconnex-Services, über den Datensätze von Personenkontexten abgerufen werden können.
- '/gruppen' — Ein Endpunkt der REST-API des Schulconnex-Services, über den Datensätze von Gruppen abgerufen werden können.
- '/gruppenzugehoerigkeiten' — Ein Endpunkt der REST-API des Schulconnex-Services, über den Datensätze von Gruppenzugehörigkeiten abgerufen werden können.
- 'PUT' — Eine HTTP-Methode, die in der REST-API des Schulconnex-Services für die Aktualisierung von Datensätzen verwendet wird.
- 'POST' — Eine HTTP-Methode, die in der REST-API des Schulconnex-Services für das Anlegen neuer Datensätze verwendet wird.
- 'DELETE' — Eine HTTP-Methode, die in der REST-API des Schulconnex-Services für das Löschen von Datensätzen verwendet wird.
- 'Revision' — Ein Attribut, das bei der Aktualisierung von Datensätzen über die REST-API des Schulconnex-Services mitgegeben werden muss, um die Version des Datensatzes zu kennzeichnen.

## docs/praxisleitfaden/praxisleitfaden.md

- 'Quellsysteme-API' — Die Quellsysteme-API ist eine spezifische Schnittstelle des Schulconnex-Servers, die es Quellsystemen ermöglicht, Daten mit einem Schulconnex-Service zu synchronisieren.
- 'Schulconnex-Server' — Der Schulconnex-Server ist eine zentrale technische Komponente des Schulconnex-Systems, die für die Datenverarbeitung und -synchronisation zwischen Diensten und Quellsystemen zuständig ist.
- 'Schulconnex-Service' — Ein Schulconnex-Service ist ein Dienst, der den Vorgaben der Schulconnex-Spezifikation folgt und mit dem Schulconnex-Server interagiert.

## docs/praxisleitfaden/rolle-in-organisation.md

- 'Personenkontext' — Kontext der Person, in dem ein Dienst genutzt wird. Ein Personenkontext umfasst eine Organisation und eine Rolle der nutzenden Person in Bezug auf diese Organisation, also beispielsweise Schulleitung des Heinrich-Heine-Gymnasiums.
- 'API-Schnittstelle' — Bezeichnet eine Programmierschnittstelle, die es ermöglicht, Daten und Funktionen zwischen verschiedenen Softwareanwendungen auszutauschen. Im Kontext der Schulconnex-Dokumentation ist dies ein zentraler technischer Begriff.
- 'Personenkontext-ID' — Eindeutige Kennung eines Personenkontexts, die zur Identifikation und Verarbeitung in der Schnittstelle verwendet wird.
- 'Administratorrolle' — Bezeichnet eine Rolle mit erweiterten Berechtigungen, die typischerweise für administrative Aufgaben innerhalb einer Organisation zuständig ist.

