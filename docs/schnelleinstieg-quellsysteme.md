# Schnelleinstieg Quellsysteme

Schulconnex definiert zwei unterschiedliche APIs zur Verfügung. Eine API für Dienste und eine API für Quellsysteme.

Die Quellsystem-API dient der Bereitstellung, dem Austausch und der Synchronisation von Identitäten und Kontextdaten zwischen schulischen Identitätsmanagementsystemen. Die Quellsystem-API erlaubt lesenden und schreibenden Zugriff auf Informationen.

Die Dienste-API dient primär der Bereitstellung von Anmeldeinformationen der Bereitstellung von zur Anmeldung von Nutzern an externe Dienste. Die Dienste API stellt nur einen lesenden Zugriff auf Information bereit.

Dieser Teil der Spezifikation beschreibt die **Quellsystem-API**.

Der Abschnitt Datenmodelle spezifiziert dabei die für Quellsystemen verfügbare Datenmodelle.

Darauffolgend werden die Rückgabecodes der REST-API, insbesondere die Schulconnex-spezifischen Fehlercodes und der Validierungsprozess bei Anfragen an die REST-API, sowie der Autorisierungsvorgang an einen Schulconnex-Server beschrieben.

Viele der in den Datenmodellen verwendeten Attribute können nur Werte aus fest definierten Codelisten annehmen. Diese sind im Kapitel Codelisten spezifiziert.

Das Kapitel „English API Notes“ stellt eine Beschreibung der Attribute und Codelisten in englischer Sprache bereit. Diese Kapitel stellt keine englische Übersetzung der Spezifikation dar, sondern soll dazu dienen, Entwicklern, deren Muttersprache nicht Deutsch ist, das Verständnis von Begriffen zu erleichtern, welche bei automatischer Übersetzung leicht fehlübersetzt werden.

Ein nicht-normativer Praxisleitfaden für die Implementierung beschreibt exemplarisch empfohlene Vorgehensweise einiger typischer Abläufe, wie ein Schuljahreswechsel oder das Löschen von Personenkontexten und Personen.

Die eigentliche REST-API für Quellsysteme ist im OpenAPI Format spezifiziert und steht sowohl in der Form von Webseiten als auch als herunterladbare Spezifikation im YAML-Format zur Verfügung.


