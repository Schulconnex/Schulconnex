# Schnelleinstieg Dienste

Schulconnex definiert zwei unterschiedliche APIs zur Verfügung. Eine API für Dienste und eine API für Quellsysteme.

Die Quellsystem-API dient der Bereitstellung, dem Austausch und der Synchronisation von Identitäten und Kontextdaten zwischen schulischen Identitätsmanagementsystemen. Die Quellsystem-API erlaubt lesenden und schreibenden Zugriff auf Informationen.

Die Dienste-API dient primär der Bereitstellung von Anmeldeinformationen der Bereitstellung von zur Anmeldung von Nutzern an externe Dienste. Die Dienste API stellt nur einen lesenden Zugriff auf Information bereit.

Dieser Teil der Spezifikation beschreibt die **Dienste-API**.

Der Abschnitt Datenmodelle spezifiziert dabei die von Diensten nutzbaren Datenmodelle.

Dabei sind die Datenmodelle als Beschreibung der maximal verfügbaren Informationen zu sehen. Im Einzelfall vereinbart jeder Dienstanbieter mit dem Betreiber eines Schulconnex-Servers vertraglich welche der definierten Attribute für den Betrieb des Dienstes notwendig sind. Zur Wahrung des Grundsatzes der Datensparsamkeit werden dann nur die vereinbarten Attribute und Werte an der Schnittstelle bereitgestellt.

Der Abschnitt API-Autorisierung und Authentifikation bei Dienstanbietern beschreibt die Nutzung der REST-API zum Zugriff auf die Informationen, sowie die Möglichkeit Anmeldeinformationen teilweise auch in OIDC Claims zu liefern.

Viele der verwendeten Attribute können nur Werte aus fest definierten Codelisten annehmen. Diese sind im Kapitel Codelisten spezifiziert.

Das Kapitel „English API Notes“ stellt eine Beschreibung der Attribute und Codelisten in englischer Sprache bereit. Diese Kapitel stellt keine englische Übersetzung der Spezifikation dar, sondern soll dazu dienen, Entwicklern, deren Muttersprache nicht Deutsch ist, das Verständnis von Begriffen zu erleichtern, welche bei automatischer Übersetzung leicht fehlübersetzt werden.

Die eigentliche REST-API für Dienste ist im OpenAPI Format spezifiziert und steht sowohl als Webseiten als auch als herunterladbare Spezifikation im YAML-Format zur Verfügung.

