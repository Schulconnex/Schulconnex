# Terminology Report

## docs/schnittstellendefinition/http-statuscodes-dienste.md

- 'HTTP' — Das Hypertext Transfer Protocol ist ein Übertragungsprotokoll für Daten und wird im Kontext der Schnittstellendefinition verwendet.
- 'HTTPS' — HTTPS steht für Hypertext Transfer Protocol Secure und bietet eine verschlüsselte Kommunikation zwischen Client und Server, was im Kontext der Schnittstelle relevant ist.

## docs/schnittstellendefinition/http-statuscodes-qs.md

- 'HTTP' — Das Hypertext Transfer Protocol ist ein Protokoll zur Übertragung von Daten im Internet und wird häufig in technischen Schnittstellen verwendet.
- 'HTTPS' — HTTPS steht für Hypertext Transfer Protocol Secure und ist eine verschlüsselte Version des HTTP-Protokolls, die in sicheren Schnittstellen eingesetzt wird.

## docs/schnittstellendefinition/http-statuscodes.md

- 'HTTP-Statuscodes' — HTTP-Statuscodes sind standardisierte numerische Codes, die von Webservern verwendet werden, um den Status einer HTTP-Anfrage zu kommunizieren.
- 'JSON' — JSON ist die Abkürzung für JavaScript Object Notation und wird als kompaktes Datenformat für strukturierte Daten eingesetzt.
- 'ETag' — ETag ist ein HTTP-Header, der eine Version eines Ressourceninhalts eindeutig identifiziert und zur Optimierung von Datenübertragungen verwendet wird.
- 'If-None-Match' — If-None-Match ist ein HTTP-Header, der verwendet wird, um zu prüfen, ob die angeforderte Ressource seit dem letzten Zugriff geändert wurde.
- 'Error Payload' — Ein Error Payload ist eine strukturierte Datenantwort, die zusätzliche Informationen über einen Fehler in einer HTTP-Response enthält.
- 'Access Token' — Ein Access Token ist ein Sicherheits-Token, das zur Authentifizierung und Autorisierung von API-Anfragen verwendet wird.
- 'Authorization: Bearer' — Authorization: Bearer ist eine spezifische Methode zur Übertragung eines Access Tokens im HTTP-Header für die Authentifizierung.
- 'Personenkontext' — Ein Personenkontext beschreibt die Beziehung einer Person zu einer Organisation und ihre Rolle innerhalb dieser Organisation, insbesondere im Schulconnex-Kontext.
- 'Zyklische Referenzgruppe' — Eine zyklische Referenzgruppe beschreibt eine Gruppe von Referenzen, die sich gegenseitig zirkulär verweisen, was in Datenmodellen problematisch ist.
- 'Laufzeitangabe' — Eine Laufzeitangabe bezieht sich auf die zeitliche Definition von Start- und Endpunkten, insbesondere bei Lernperioden im Schulconnex-Kontext.

## docs/schnittstellendefinition/schnittstellendefinition.md

- 'HTTP' — Das Hypertext Transfer Protocol ist ein Übertragungsprotokoll für Daten und wird im Kontext der Schnittstelle zur Kommunikation zwischen Webserver und Webclient verwendet.
- 'GET' — GET ist eine HTTP-Methode, die im Kontext der Schnittstelle zum Abrufen von Ressourcen oder Entitäten verwendet wird.
- 'POST' — POST ist eine HTTP-Methode, die im Kontext der Schnittstelle zum Senden von Daten oder Erstellen von Entitäten verwendet wird.
- 'PUT' — PUT ist eine HTTP-Methode, die im Kontext der Schnittstelle zum Verändern oder Ablegen von Dateien auf dem Webserver verwendet wird.
- 'HTTP-Response' — Eine HTTP-Response ist die Antwort des Webservers auf eine HTTP-Anfrage und enthält unter anderem einen Status-Code.
- 'HTTP-Status-Code' — Ein HTTP-Status-Code gibt die Kategorie der Antwort des Webservers auf eine HTTP-Anfrage an und ist ein zentraler Bestandteil der Schnittstellenkommunikation.
- '1xx' — 1xx ist eine Kategorie von HTTP-Status-Codes, die informative Antworten des Webservers kennzeichnet.
- '2xx' — 2xx ist eine Kategorie von HTTP-Status-Codes, die erfolgreiche Antworten des Webservers kennzeichnet.
- '3xx' — 3xx ist eine Kategorie von HTTP-Status-Codes, die Weiterleitungen des Webservers kennzeichnet.
- '4xx' — 4xx ist eine Kategorie von HTTP-Status-Codes, die Client-Fehler kennzeichnet.
- '5xx' — 5xx ist eine Kategorie von HTTP-Status-Codes, die Server-Fehler kennzeichnet.
- 'URL-Parameter' — URL-Parameter sind zusätzliche Informationen, die an die URL einer HTTP-Anfrage angehängt werden und vom Webserver verarbeitet werden können.
- 'HTTP-Body' — Der HTTP-Body ist der Teil einer HTTP-Anfrage, in dem Daten wie Parameter oder Inhalte übertragen werden, insbesondere bei der POST-Methode.

## docs/schnittstellendefinition/validierung.md

- '401 Unauthorized' — HTTP-Statuscode, der eine fehlende oder ungültige Authentifizierung signalisiert. Im Kontext der Schnittstelle wird er bei fehlender Zugriffsberechtigung zurückgegeben.
- '400 Bad Request' — HTTP-Statuscode, der auf fehlerhafte oder unzulässige Anfragen hinweist. Im Kontext der Schnittstelle wird er bei Validierungsfehlern verwendet.
- 'Subcode 03 – „Validierungsfehler“' — Ein spezifischer Subcode innerhalb des HTTP-Statuscodes 400, der Validierungsfehler in der Anfrage kennzeichnet. Im Sinne der Schnittstelle dient er der präzisen Fehlerbeschreibung.
- 'PUT' — HTTP-Methode, die für das Erstellen oder Aktualisieren von Ressourcen verwendet wird. Im Kontext der Schnittstelle werden PUT-Anfragen validiert.
- 'POST' — HTTP-Methode, die für das Erstellen von Ressourcen oder das Auslösen von Prozessen verwendet wird. Im Kontext der Schnittstelle werden POST-Anfragen validiert.
- 'Query-Parameter' — Parameter, die in der URL einer HTTP-Anfrage enthalten sind und zusätzliche Informationen zur Anfrage liefern. Im Kontext der Schnittstelle werden sie dekodiert und validiert.
- 'URL-kodiert' — Ein Kodierungsverfahren für Zeichen in URLs, bei dem bestimmte Zeichen durch Prozentzeichen und ihre ASCII-Werte ersetzt werden. Im Kontext der Schnittstelle werden Query-Parameter nur in dieser Form akzeptiert.

