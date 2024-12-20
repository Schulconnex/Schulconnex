import Text from './schnelleinstieg.md';

# Schnelleinstieg Dienste

<Text />

## Dienste-API

Das Kapitel zu [Datenmodellen](datenmodell-dienste/datenmodell) ist als Beschreibung der maximal verfügbaren Informationen
zu sehen. Im Einzelfall vereinbart jeder Dienstanbieter mit dem Betreiber eines Schulconnex-Servers
vertraglich welche der definierten Attribute für den Betrieb des Dienstes notwendig sind. Zur Wahrung des
Grundsatzes der Datensparsamkeit werden dann nur die vereinbarten Attribute und Werte an der Schnittstelle bereitgestellt.

Das Kapitel [API-Autorisierung und Authentifikation](schnittstellen/autorisierung-dienste) für Dienstanbieter
beschreibt die Nutzung der REST-API zum Zugriff auf die Informationen, sowie die Möglichkeit, Anmeldeinformationen
teilweise auch in [OIDC Claims](schnittstellen/oidc-claims) zu liefern.
