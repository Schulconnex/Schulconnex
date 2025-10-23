# Terminology Report

## docs/schnittstellen/autorisierung-dienste.md

- 'OAuth' — Bei OAuth handelt es sich um ein offenes Sicherheitsprotokoll für die Token-basierte Autorisierung und Authentifizierung im Internet. Es wird im Kontext der Schnittstelle zur Autorisierung und Authentifikation verwendet.
- 'OAuth 2.0 Authorization Framework' — Das OAuth 2.0 Authorization Framework ist ein Standard, der die Token-basierte Autorisierung und Authentifizierung regelt. Es wird in der Schnittstelle für die Autorisierung von Diensten und Personen verwendet.
- 'OpenID Connect' — OpenID Connect ist eine Authentifikationsschicht, die auf OAuth 2.0 aufbaut und im Kontext der Schnittstelle für die Authentifikation von Personen verwendet wird.
- 'Access Token' — Ein Access Token ist eine Zugriffsberechtigung in Form einer Zeichenkette, die von Client-Anwendungen bei HTTP-Anfragen gegen die REST-API verwendet wird.
- 'ID Token' — Ein ID Token ist ein JSON Web Token, das Informationen über die Authentifizierung einer nutzenden Person enthält und im Sicherheitskontext der Schnittstelle verwendet wird.
- 'JSON Web Token (JWT)' — Ein JSON Web Token ist ein auf JSON basierender Access-Token, der Authentifizierungsinformationen enthält und im Kontext der Schnittstelle verwendet wird.
- 'Bearer Token' — Ein Bearer Token ist ein Token-Typ, der im Authorization Header verwendet wird und gemäß der OAuth 2.0 Spezifikation definiert ist.
- 'OAuth 2.0 Token Exchange' — Der OAuth 2.0 Token Exchange ist ein Prozess, bei dem ein Token gegen ein anderes ausgetauscht wird, und wird in der Schnittstelle für die Autorisierung verwendet.
- 'OIDC Claims' — OIDC Claims sind Attribute, die im Rahmen von OpenID Connect verwendet werden, um zusätzliche Informationen über eine nutzende Person zu übermitteln.
- 'Client Credentials Grant' — Der Client Credentials Grant ist ein Berechtigungstyp im OAuth 2.0 Framework, der es einem Dienst ermöglicht, ein Access Token außerhalb des Sicherheitskontexts einer nutzenden Person anzufordern.
- 'Authorization Header' — Der Authorization Header ist ein HTTP-Header, der zur Übermittlung von Access Tokens bei API-Anfragen verwendet wird.
- 'token_type' — Das Attribut token_type gibt an, wie ein Access Token verwendet werden kann, und ist im Kontext der OAuth 2.0 Spezifikation relevant.
- 'subject identifier' — Der subject identifier ist ein Attribut im ID Token, das eine pseudonymisierte ID der nutzenden Person im Sicherheitskontext darstellt.
- 'pairwise identifier' — Ein pairwise identifier ist ein Typ des subject identifiers, der gemäß der OpenID Connect Spezifikation verwendet wird, um eine nutzende Person pseudonymisiert zu identifizieren.
- 'nonce' — Das Attribut nonce wird im ID Token verwendet, um Replay-Attacken zu verhindern und die Sicherheit zu erhöhen.
- 'acr' — Das Attribut acr (Authentication Context Class Reference) referenziert die URI der Benutzerauthentifizierungsmethode, die erfüllt wurde.
- 'amr' — Das Attribut amr (Authentication Method Reference) gibt die Methode der Benutzerauthentifizierung an, die verwendet wurde.
- 'azp' — Das Attribut azp (Authorized Party) führt die Client-ID der autorisierten Anwendung, die den ID Token angefordert hat.

## docs/schnittstellen/autorisierung-qs.md

- 'OAuth 2.0 Client Credentials Flow' — Ein spezifischer Autorisierungsprozess innerhalb des OAuth 2.0 Frameworks, bei dem eine Client-Anwendung ihre Zugangsdaten verwendet, um einen Access Token zu erhalten. Im Kontext der Schnittstelle relevant für die Authentifizierung von Quellsystemen.
- 'OAuth 2.0 RFC 6749' — Ein Standarddokument, das das OAuth 2.0 Authorization Framework definiert. Abschnitt 4.4 beschreibt den Client Credentials Flow, der für die Schnittstelle verwendet wird.
- 'Client-ID' — Eine eindeutige Kennung, die eine Client-Anwendung im OAuth 2.0 Framework identifiziert. Im Sinne der Schnittstelle notwendig für die Authentifizierung von Quellsystemen.
- 'Client Secret' — Ein geheimer Schlüssel, der zusammen mit der Client-ID verwendet wird, um eine Client-Anwendung im OAuth 2.0 Framework zu authentifizieren. Im Kontext der Schnittstelle relevant für die Sicherheit.
- 'Access Token' — Eine Zeichenkette, die von einer Client-Anwendung verwendet wird, um autorisierte Anfragen an eine API zu stellen. Im Sinne der Schnittstelle notwendig für die Kommunikation mit der REST-API.
- 'Authorization-Header' — Ein HTTP-Header, der verwendet wird, um den Access Token bei API-Anfragen zu übermitteln. Im Kontext der Schnittstelle relevant für die Autorisierung von Quellsystemen.
- 'REST-API' — Eine API, die auf dem Representational State Transfer Prinzip basiert und für die Kommunikation zwischen Client und Server genutzt wird. Im Sinne der Schnittstelle dient sie der Interaktion mit Quellsystemen.
- 'HTTP' — Das Hypertext Transfer Protocol, das als Basisprotokoll für die Kommunikation zwischen Client und Server dient. Im Kontext der Schnittstelle relevant für die Übertragung von API-Anfragen.

## docs/schnittstellen/oidc-claims.md

- 'OIDC' — Steht für OpenID Connect, ein Authentifizierungsprotokoll, das auf OAuth 2.0 basiert und häufig in der technischen Dokumentation von Schnittstellen verwendet wird.
- 'OIDC-Claims' — Bezeichnet spezifische Datenfelder innerhalb eines OIDC-ID-Tokens, die Informationen über die authentifizierte Person enthalten.
- 'REST' — Steht für Representational State Transfer, ein Architekturprinzip für zustandslose Webservices, das in der Schnittstellenkommunikation verwendet wird.
- 'API' — Steht für Application Programming Interface und bezeichnet eine definierte Schnittstelle zur Interaktion mit einem Software-System.
- 'ID-Token' — Ein Token, das im Rahmen von OIDC verwendet wird, um die Identität einer authentifizierten Person zu repräsentieren.
- 'Scope Request' — Bezeichnet eine Anfrage, die spezifische Berechtigungen oder Datenzugriffsbereiche innerhalb eines Authentifizierungsprotokolls wie OIDC definiert.
- 'URN' — Steht für Uniform Resource Name und wird hier verwendet, um Schulconnex-spezifische Claims eindeutig zu benennen.
- 'Schulconnex-Server' — Bezeichnet die zentrale Server-Infrastruktur, die die Schulconnex-Spezifikation implementiert und konfigurierbare Schnittstellen bereitstellt.
- 'Standard-Claims' — Bezeichnet vordefinierte Datenfelder in OIDC, die allgemeine Informationen wie Vorname oder Nachname enthalten.
- 'pseudonymisierte Personen-ID' — Bezeichnet eine anonymisierte Identifikationsnummer, die einer Person zugeordnet ist und in OIDC-Claims verwendet wird.

## docs/schnittstellen/schnittstellen.md

- 'REST-API' — REST-API steht für Representational State Transfer Application Programming Interface und beschreibt eine Schnittstelle, die auf den Prinzipien des REST-Architekturstils basiert.
- 'CRUD-Operationen' — CRUD-Operationen stehen für die grundlegenden Datenbankoperationen Create, Read, Update und Delete, die im Kontext der REST-API zur Manipulation von Ressourcen verwendet werden.
- 'HTTP(S)-Methoden' — HTTP(S)-Methoden sind standardisierte Protokollmethoden wie GET, POST, PUT und DELETE, die für den Zugriff auf Ressourcen in einer REST-API verwendet werden.
- 'JSON-Strukturen' — JSON-Strukturen sind spezifische Datenformate, die in der REST-API zur Übertragung strukturierter Daten zwischen Client und Server verwendet werden.
- 'API-Versionierung' — API-Versionierung bezeichnet die Praxis, unterschiedliche Versionen einer Schnittstelle anzubieten, um Kompatibilität und Weiterentwicklung zu gewährleisten.
- 'OAuth' — OAuth ist ein offenes Sicherheitsprotokoll für die Token-basierte Autorisierung und Authentifizierung im Internet.
- 'Client-ID' — Die Client-ID ist eine eindeutige Kennung, die einem registrierten Quellsystem im Rahmen des OAuth-Protokolls zugewiesen wird.
- 'Client Secret' — Das Client Secret ist ein geheimer Schlüssel, der zusammen mit der Client-ID zur Authentifizierung eines Quellsystems im OAuth-Protokoll verwendet wird.
- 'Authorization-Header' — Der Authorization-Header ist ein HTTP-Header, der Authentifizierungsinformationen wie Token-Typ und Access-Token enthält.
- 'token_type' — Das Attribut token_type gibt den Typ des verwendeten Tokens an, z. B. 'Bearer', im Kontext der OpenID Connect-Spezifikation.
- 'access_token' — Das access_token ist ein Authentifizierungstoken, das im Authorization-Header verwendet wird, um Zugriff auf geschützte Ressourcen zu ermöglichen.
- 'OpenID Connect' — OpenID Connect ist eine Identitäts- und Authentifizierungsschicht, die auf dem OAuth-Protokoll basiert und für die sichere Authentifizierung von Nutzern verwendet wird.
- 'Content-Type' — Content-Type ist ein HTTP-Header, der den Typ der übertragenen Daten angibt, z. B. 'application/json', und für die korrekte Verarbeitung durch den Server erforderlich ist.
- 'application/json' — application/json ist ein MIME-Typ, der angibt, dass die übertragenen Daten im JSON-Format vorliegen.

## docs/schnittstellen/vendor-extensions-best-practices.md

- 'Schulconnex-Server' — Bezeichnet die technische Plattform, die für die Verarbeitung und Speicherung von Daten im Schulconnex-System verantwortlich ist.
- 'Schulconnex-Attribute' — Im Sinne der Schnittstelle sind dies standardisierte Attribute, die im Schulconnex-Datenmodell definiert sind und nicht mit anbieterspezifischen Attributen überlappen sollen.
- 'PUT-Operationen' — Bezeichnet eine HTTP-Methode, die in REST-Schnittstellen verwendet wird, um Datenobjekte zu aktualisieren. Im Kontext der Schulconnex-Schnittstelle gelten spezifische Regeln für diese Operation.
- 'urn:schulsystemix:params:schulconnex:schemas:core:2.0:personerweiterung / personalnummer' — Eine spezifische URN, die ein anbieterspezifisches Attribut im Schulconnex-Datenmodell beschreibt. Sie dient der eindeutigen Identifikation und Erweiterung von Personendaten.
- 'Standardattribute' — Im Kontext der Schulconnex-Schnittstelle sind dies vordefinierte Attribute, die für die Datenmodellierung und -verarbeitung verwendet werden.

## docs/schnittstellen/vendor-extensions.md

- 'Schulconnex' — Schulconnex ist eine spezifische Schnittstellen-Spezifikation für den Bildungsbereich, die Interoperabilität zwischen verschiedenen Diensten und Organisationen ermöglicht.
- 'Vendor Extensions' — Vendor Extensions sind anbieterspezifische Erweiterungen der Schulconnex-Schnittstelle, die es ermöglichen, zusätzliche Attribute zu definieren und zu nutzen.
- 'Uniform Resource Name (URN)' — URN ist ein standardisierter Namensraum gemäß RFC 3986, der zur eindeutigen Identifikation von Ressourcen verwendet wird.
- 'RFC 3986' — RFC 3986 ist ein Standard, der die Syntax und Semantik von URIs und URNs definiert.
- 'Personalnummer' — Die Personalnummer ist ein spezifisches Attribut, das in der Schulconnex-Schnittstelle als Beispiel für eine anbieterspezifische Erweiterung verwendet wird.
- 'Stammorganisation' — Die Stammorganisation bezeichnet in der Schulconnex-Schnittstelle die primäre Organisation, der eine Person zugeordnet ist.
- 'Mandant' — Mandant ist ein Begriff aus der Schulconnex-Schnittstelle, der eine abgegrenzte Datenhaltungs- und Verarbeitungseinheit beschreibt.

