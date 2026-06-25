---
title: ''
---

Schulconnex definiert und spezifiziert zwei unterschiedliche APIs, eine [Dienste-API](allgemeines-dienste) und
eine [Quellsysteme-API](allgemeines-qs).

Die Quellsystem-API dient der Bereitstellung, dem Austausch und der Synchronisation von Identitäten und
Kontextdaten zwischen schulischen Identitätsmanagementsystemen. Die Quellsystem-API erlaubt lesenden und
schreibenden Zugriff auf Informationen.

Die Dienste-API dient primär der Bereitstellung von Kontextinformationen zur Anmeldung von Nutzern an externe
Dienste. Die Dienste API stellt nur einen lesenden Zugriff auf Information bereit.

Das Kapitel Datenmodelle spezifiziert dabei sämtliche verfügbare Datenmodelle zur Nutzung der jeweiligen API.

Viele der verwendeten Attribute können nur Werte aus fest definierten [Codelisten](codelisten) annehmen. Diese
sind im Kapitel Codelisten spezifiziert.

Das Kapitel „[English API Notes](english-api-notes)“ stellt eine Beschreibung der Attribute und Codelisten in
englischer Sprache bereit. Diese Kapitel stellt keine englische Übersetzung der Spezifikation dar, sondern
soll dazu dienen, Entwicklern, deren Muttersprache nicht Deutsch ist, das Verständnis von Begriffen zu
erleichtern, welche bei automatischer Übersetzung leicht fehlübersetzt werden.

Die eigentliche REST-API ist jeweils für Dienste und Quellsysteme im OpenAPI-Format spezifiziert und steht
sowohl als Webseite als auch zum Herunterladen im OpenAPI-YAML-Format zur Verfügung.
