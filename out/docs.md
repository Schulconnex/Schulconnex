# Terminology Report

## docs/allgemeines-dienste.md

- 'Schulconnex-Dienste-API' — Die Schulconnex-Dienste-API ist eine spezifische Schnittstelle, die von Diensten genutzt wird, um Nutzer- und Kontextdaten im Schulconnex-System abzurufen.
- 'Sicherheitskontext' — Der Sicherheitskontext bezeichnet die spezifischen Zugriffsrechte und -ebenen, unter denen eine Person oder ein Dienst auf die Schulconnex-Dienste-API zugreifen kann.
- 'Personenkontext' — Der Personenkontext beschreibt den spezifischen Kontext einer Person, einschließlich ihrer Rolle und Organisation, in dem ein Dienst genutzt wird.
- 'Access-Token' — Ein Access-Token ist ein Sicherheitsmerkmal, das von einem Authentifizierungs- und Autorisierungsserver ausgestellt wird, um den Zugriff auf die Schulconnex-Dienste-API zu ermöglichen.
- 'REST-API' — Die REST-API ist eine zustandslose Schnittstelle, die den Zugriff auf Daten im Schulconnex-System ermöglicht und auf den Prinzipien des Representational State Transfer basiert.
- 'Authentifizierungsserver' — Ein Authentifizierungsserver ist eine Komponente, die die Identität einer nutzenden Person oder eines Dienstes überprüft und Access-Tokens ausstellt.
- 'Autorisierungsserver' — Ein Autorisierungsserver ist eine Komponente, die die Berechtigungen einer nutzenden Person oder eines Dienstes überprüft und Access-Tokens ausstellt.
- 'Schulconnex-Service' — Ein Schulconnex-Service ist ein Service, der den Vorgaben der Schulconnex-Spezifikation folgt und Daten für Dienste bereitstellt.

## docs/allgemeines-qs.md

- 'Schulconnex-Service' — Ein Service, der den Vorgaben der Schulconnex-Spezifikation folgt und spezifisch für die Schulconnex-Domäne entwickelt wurde.
- 'HTTP-GET' — Eine spezifische HTTP-Methode, die in der Schulconnex-API zur Abfrage von Daten verwendet wird.
- 'HTTP-HEAD' — Eine HTTP-Methode, die in der Schulconnex-API zur Abfrage von Metadaten ohne den eigentlichen Inhalt verwendet wird.
- '405/01' — Ein spezifischer Fehlercode, der in der Schulconnex-API bei der Nutzung nicht erlaubter HTTP-Methoden ausgegeben wird.
- 'Mandanten-ID' — Ein Attribut, das in der Schulconnex-API zur Identifikation eines Mandanten verwendet wird und nicht verändert werden darf.
- 'UPDATE-Operation' — Eine spezifische Operation in der Schulconnex-API, die zur Aktualisierung von Datensätzen dient.

## docs/allgemeines.md

- 'Single Sign-on' — Single Sign-on ist ein Authentifizierungsverfahren, das es ermöglicht, sich einmalig anzumelden und Zugriff auf mehrere Dienste zu erhalten. Im Kontext der Schulconnex-API ist es ein zentraler Anwendungsfall.
- 'Schulconnex-Service' — Ein Schulconnex-Service ist ein Dienst, der APIs gemäß der Schulconnex-Spezifikation bereitstellt. Er ist ein zentraler Bestandteil der Schulconnex-Architektur.
- 'REST-API' — REST-API steht für Representational State Transfer und beschreibt eine standardisierte Schnittstelle für den Datenaustausch zwischen Client und Server. Im Schulconnex-Kontext wird sie für die Kommunikation zwischen Diensten genutzt.
- 'Access-Token' — Ein Access-Token ist ein Authentifizierungs- und Autorisierungsmechanismus, der den Zugriff auf geschützte Endpunkte der Schulconnex-API ermöglicht. Es wird vom zentralen Authentifizierungsserver ausgestellt.
- 'Client-ID' — Die Client-ID ist eine eindeutige Kennung, die Quellsysteme und Dienste bei der Registrierung für die Nutzung der Schulconnex-API erhalten. Sie dient der Identifikation des Clients.
- 'Quellsystem' — Ein Quellsystem ist ein Schulverwaltungssystem, das Nutzer- und Kontextdaten bereitstellt und mit der Schulconnex-API synchronisiert wird.
- 'Authentifizierungs- und Autorisierungsserver' — Ein zentraler Authentifizierungs- und Autorisierungsserver sichert den Zugriff auf die Endpunkte der Schulconnex-API und stellt Access-Tokens aus.

## docs/codelisten.md

- 'Codelisten' — Codelisten sind vordefinierte Listen von möglichen Werten für bestimmte Attribute, die in der Schulconnex-Spezifikation verwendet werden.
- 'URI-basierte Codelisten' — URI-basierte Codelisten verwenden eindeutige URIs zur Identifikation von Ressourcen und fördern Interoperabilität und Standardisierung in der Schulconnex-Spezifikation.
- 'World Wide Web Consortium (W3C)' — Das W3C ist eine internationale Organisation, die Standards für das Web entwickelt, einschließlich Empfehlungen zur Nutzung von URI-basierten Codelisten und RDF.
- 'Resource Description Framework (RDF)' — RDF ist ein Standard des W3C zur Beschreibung und Vernetzung von Ressourcen im Web, der in der Schulconnex-Spezifikation für URI-basierte Codelisten empfohlen wird.
- 'OASIS Genericode' — OASIS Genericode ist ein technisches Format zur Definition und Nutzung von Codelisten, das in der Schulconnex-Spezifikation vorgesehen ist.
- 'XÖV-Codelisten' — XÖV-Codelisten sind standardisierte Codelisten, die in Deutschland für den Datenaustausch im öffentlichen Sektor verwendet werden und in der Schulconnex-Spezifikation integriert werden können.
- 'XSchule' — XSchule ist ein schulbezogenes Fachmodul der XBildung-Spezifikation, das schulspezifische Elemente ergänzt und in der Schulconnex-Spezifikation referenziert wird.
- 'RFC 5322' — RFC 5322 ist ein Internet-Standard, der das Format von E-Mail-Adressen definiert und in der Schulconnex-Spezifikation für die Validierung von Kommunikationskanälen verwendet wird.
- 'RFC 5646' — RFC 5646 ist ein Standard zur Definition von Sprachcodes, der in der Schulconnex-Spezifikation für die Lokalisierung verwendet wird.
- 'Schulconnex' — Schulconnex ist eine Spezifikation für die digitale Vernetzung und den Datenaustausch im Bildungsbereich, die spezifische Codelisten und Standards definiert.
- 'Gruppenbereich' — Gruppenbereich ist eine domänenspezifische Codeliste in der Schulconnex-Spezifikation, die Unterrichtsarten wie Pflicht-, Wahl- und Wahlpflichtunterricht beschreibt.
- 'Fächerkanon' — Fächerkanon ist eine domänenspezifische Codeliste in der Schulconnex-Spezifikation, die die Fächer einer Schule definiert und länderspezifisch angepasst werden kann.
- 'Jahrgangsstufe' — Jahrgangsstufe ist eine domänenspezifische Codeliste in der Schulconnex-Spezifikation, die die Klassenstufen einer Schule beschreibt.
- 'Lernperiodentyp' — Lernperiodentyp ist eine domänenspezifische Codeliste in der Schulconnex-Spezifikation, die Zeiträume wie Schuljahre und Halbjahre beschreibt.
- 'Organisationsbeziehungen' — Organisationsbeziehungen sind domänenspezifische Beziehungen zwischen Organisationen, wie Schulträger und Schulbehörde, die in der Schulconnex-Spezifikation definiert sind.
- 'Organisationstyp' — Organisationstyp ist eine domänenspezifische Codeliste in der Schulconnex-Spezifikation, die verschiedene Typen von Organisationen wie Schulen und Behörden beschreibt.
- 'Trägerschaft' — Trägerschaft ist eine domänenspezifische Codeliste in der Schulconnex-Spezifikation, die die rechtliche Verantwortung für eine Schule oder Organisation beschreibt.
- 'Vertrauensstufe' — Vertrauensstufe ist eine domänenspezifische Codeliste in der Schulconnex-Spezifikation, die die Vertrauenswürdigkeit eines Schlüsselbesitzers beschreibt.

## docs/einleitung.md

- 'Schulconnex' — Schulconnex ist der spezifizierte Schnittstellenstandard für den Austausch und die Synchronisation von Identitäten und Kontextdaten im schulischen Bereich.
- 'Identitätsmanagementsysteme' — Identitätsmanagementsysteme sind Systeme zur Verwaltung von digitalen Identitäten, die im Kontext von Schulconnex für den Austausch und die Synchronisation von Identitätsdaten verwendet werden.
- 'Kultusministerkonferenz' — Die Kultusministerkonferenz ist eine zentrale Organisation, die die Strategie 'Bildung in der digitalen Welt' zur Einrichtung landesweiter ID-Management-Systeme im schulischen Bereich entwickelt hat.
- 'Datensparsamkeit' — Datensparsamkeit ist ein Prinzip, das im Kontext von Schulconnex die Bereitstellung nur der für einen Dienst notwendigen Daten sicherstellt.
- 'Schnittstellenspezifikation' — Die Schnittstellenspezifikation beschreibt die technischen und semantischen Vorgaben für die Schulconnex-Schnittstellen.
- 'Versionsnummer' — Die Versionsnummer kennzeichnet die Iterationen der Schulconnex-Schnittstellenspezifikation und dient der Kompatibilitätsprüfung zwischen verschiedenen Versionen.

## docs/glossar.md

- 'Benutzerkonto (Identität)' — Steht für die eindeutige digitale Identität einer natürlichen Person, die sich in einem Anwendungssystem authentifiziert.
- 'Dienstanbieter' — Im Sinne der Schnittstelle Anbieter von digitalen Diensten im Bildungsbereich, wie Lernplattformen oder Bildungsmedien.
- 'DIN 91379' — Diese Norm definiert Subsets von Unicodes für die elektronische Verarbeitung von Namen und den Datenaustausch in Europa.
- 'DIN 91379.A' — Umfasst Zeichen für Namen natürlicher Personen, einschließlich lateinischer Schriftzeichen, Umlaute und Akzentzeichen.
- 'DIN 91379.B' — Umfasst Zeichen für Orts- und Straßennamen, einschließlich der Zeichen von DIN 91379.A sowie zusätzlicher Zeichen wie Zahlen und mathematische Symbole.
- 'DIN 91379.C' — Erweitert DIN 91379.B um Zeichen für juristische Personen und nicht druckbare Zeichen wie Line Feed und Tab.
- 'HTTP' — Das Hypertext Transfer Protocol ist ein Standardprotokoll für die Übertragung von Daten im Internet.
- 'HTTPS' — Steht für Hypertext Transfer Protocol Secure und ermöglicht eine verschlüsselte Kommunikation zwischen Client und Server.
- 'JSON' — Abkürzung für JavaScript Object Notation, ein kompaktes Datenformat für strukturierte Daten.
- 'JSON Web Token' — Ein auf JSON basierender Access-Token, der Authentifizierungsinformationen enthält und Sessions ohne Server-Speicherung ermöglicht.
- 'JWT' — Siehe: JSON Web Token.
- 'Mandantschaft (Mandant)' — Bezeichnet die für bestimmte Daten verantwortliche Stelle im datenschutzrechtlichen Sinne, z. B. Art. 4 DSGVO.
- 'OAuth' — Ein offenes Sicherheitsprotokoll für die Token-basierte Autorisierung und Authentifizierung im Internet.
- 'Personenkontext' — Bezeichnet den Kontext einer Person, in dem ein Dienst genutzt wird, einschließlich Organisation und Rolle.
- 'REST' — Steht für Representational State Transfer und beschreibt das zustandslose Übertragen von Daten zwischen Client und Server.
- 'Schulconnex-Service' — Ein Service, der den Vorgaben der Schulconnex-Spezifikation folgt.
- 'Sichtfreigabe' — Bezeichnet die Freigabe von Datensätzen für andere Organisationen mit ausschließlich lesendem Zugriff.
- 'XBildung' — Ein Spezifikationsdokument zur Interoperabilität im Bildungswesen, veröffentlicht vom Bundesministerium für Bildung und Forschung.
- 'XSchule' — Ein schulbezogenes Fachmodul der XBildung-Spezifikation, das schulspezifische Elemente ergänzt.

## docs/intro.md

- 'Node.js' — Node.js ist eine plattformübergreifende JavaScript-Laufzeitumgebung, die häufig für serverseitige Anwendungen verwendet wird. Im Kontext der technischen Dokumentation ist es ein spezifischer Fachbegriff.
- 'npm' — npm steht für Node Package Manager und ist ein Paketmanager für JavaScript, der häufig in der Webentwicklung verwendet wird. Es ist ein spezialisierter Ausdruck im Kontext der Softwareentwicklung.
- 'localhost' — localhost bezeichnet die lokale Adresse eines Computers, die häufig für die Entwicklung und das Testen von Webanwendungen verwendet wird. Es ist ein domänenspezifischer Begriff in der Webentwicklung.
- 'development server' — Ein development server ist ein Server, der speziell für die lokale Entwicklung und das Testen von Anwendungen eingerichtet ist. Im Kontext der Dokumentation ist dies ein spezialisierter Ausdruck.
- 'classic template' — Das classic template ist eine spezifische Vorlage innerhalb des Docusaurus-Frameworks, die für die Erstellung von Websites verwendet wird. Es ist ein domänenspezifischer Begriff im Kontext von Docusaurus.

## docs/schnelleinstieg-dienste.md

- 'Dienste-API' — Im Sinne der Schnittstelle bezeichnet die Dienste-API die REST-API, die für den Zugriff auf Informationen und die Interaktion mit Diensten im Schulconnex-System genutzt wird.
- 'Schulconnex-Server' — Der Schulconnex-Server ist die zentrale technische Plattform, die die Datenhaltung und Verarbeitung im Schulconnex-System ermöglicht.
- 'REST-API' — REST-API steht für Representational State Transfer Application Programming Interface und beschreibt eine zustandslose Schnittstelle für den Datenaustausch zwischen Client und Server.
- 'OIDC Claims' — OIDC Claims sind standardisierte Attribute, die im Rahmen von OpenID Connect zur Übermittlung von Anmeldeinformationen und Identitätsdaten verwendet werden.

## docs/schnelleinstieg-qs.md

- 'Quellsystem-API' — Im Sinne der Schnittstelle bezeichnet die Quellsystem-API die Programmierschnittstelle, über die Daten aus einem Quellsystem abgerufen und verarbeitet werden können.
- 'REST-API' — REST-API steht für Representational State Transfer Application Programming Interface und beschreibt eine zustandslose Schnittstelle zur Kommunikation zwischen Client und Server.
- 'Schulconnex-Server' — Der Schulconnex-Server ist eine zentrale Instanz innerhalb des Schulconnex-Systems, die für die Verarbeitung und Speicherung von Daten sowie die Autorisierung von Anfragen zuständig ist.
- 'Schulconnex-spezifische Fehlercodes' — Schulconnex-spezifische Fehlercodes sind eindeutige Codes, die im Schulconnex-System verwendet werden, um Fehler bei der Nutzung der Schnittstellen zu identifizieren und zu klassifizieren.
- 'Personenkontext' — Im Sinne der Schnittstelle bezeichnet der Personenkontext die spezifische Rolle und Organisation einer Person innerhalb des Schulconnex-Systems.
- 'Person' — Im Sinne der Schnittstelle ist eine Person ein Mensch, der eine Beziehung zu einer oder mehreren Schulen oder Organisationen hat und dort Träger von Rechten und Pflichten ist.

## docs/schnelleinstieg.md

- 'Schulconnex' — Schulconnex ist eine spezifizierte Schnittstelle für schulisches Identitätsmanagement und Kontextdaten, die APIs und Datenmodelle definiert.
- 'Quellsystem-API' — Die Quellsystem-API ist eine spezifizierte Schnittstelle zur Synchronisation von Identitäten und Kontextdaten zwischen schulischen Identitätsmanagementsystemen.
- 'Dienste-API' — Die Dienste-API ist eine spezifizierte Schnittstelle zur Bereitstellung von Kontextinformationen für die Anmeldung an externe Dienste.
- 'Codelisten' — Codelisten sind fest definierte Wertebereiche für Attribute, die in der Schulconnex-Spezifikation verwendet werden.
- 'OpenAPI' — OpenAPI ist ein Standardformat zur Spezifikation von REST-APIs, das in der Schulconnex-Dokumentation verwendet wird.
- 'OpenAPI-YAML' — OpenAPI-YAML ist ein Format zur Darstellung von OpenAPI-Spezifikationen, das in der Schulconnex-Dokumentation bereitgestellt wird.
- 'REST-API' — REST-API steht für Representational State Transfer und beschreibt eine zustandslose Schnittstelle für den Datenaustausch, die in Schulconnex spezifiziert ist.

## docs/versionshistorie.md

- 'Schulconnex' — Schulconnex ist der Name des spezifischen Systems, das in der Dokumentation beschrieben wird und eine zentrale Rolle in der Domäne Bildungstechnologie spielt.
- 'API Sichtfreigabe' — Die API Sichtfreigabe ist eine spezifische Schnittstellenfunktion innerhalb des Schulconnex-Systems, die den Zugriff auf Daten regelt.
- 'API Organisationen' — Die API Organisationen ist eine spezifische Schnittstellenfunktion im Schulconnex-System, die Informationen über Organisationen für Dienstanbieter bereitstellt.
- 'HTTP POST' — HTTP POST ist ein spezifisches Protokollverfahren, das im Kontext der Schulconnex-Schnittstelle für die Datenübertragung verwendet wird.
- 'Codeliste Rollen' — Die Codeliste Rollen ist eine spezifische Liste innerhalb des Schulconnex-Systems, die Rollen wie Schulbegleiter/-in und Nichtlehrendes Personal definiert.
- 'Codeliste Gruppenrollen' — Die Codeliste Gruppenrollen ist eine spezifische Liste innerhalb des Schulconnex-Systems, die Rollen wie Vertretungslehrkraft definiert.
- 'Codeliste Gruppenoptionen' — Die Codeliste Gruppenoptionen ist eine spezifische Liste innerhalb des Schulconnex-Systems, die derzeit keine Werte enthält.
- 'mandant' — Das Filterattribut 'mandant' ist ein spezifischer Begriff im Schulconnex-Datenmodell, der Quellsysteme definiert.
- 'rufname' — Das Attribut 'rufname' ist ein spezifischer Begriff im Schulconnex-Datenmodell, das im Kontext der Personendaten für Dienstanbieter verwendet wird.
- 'gruppenzugehoerigkeit.von' — Das Attribut 'gruppenzugehoerigkeit.von' ist ein spezifischer Begriff im Schulconnex-Datenmodell, das den Beginn einer Gruppenzugehörigkeit angibt.
- 'gruppenzugehoerigkeit.bis' — Das Attribut 'gruppenzugehoerigkeit.bis' ist ein spezifischer Begriff im Schulconnex-Datenmodell, das das Ende einer Gruppenzugehörigkeit angibt.
- '201' — Der HTTP-Statuscode '201' ist ein spezifischer Begriff, der im Schulconnex-System verwendet wird, um erfolgreiche POST-Anfragen zu quittieren.
- 'SchB' — SchB ist eine Abkürzung für Schulbegleiter/-in und wird als Rolle in der Codeliste Rollen des Schulconnex-Systems definiert.
- 'NLehr' — NLehr ist eine Abkürzung für Nichtlehrendes Personal und wird als Rolle in der Codeliste Rollen des Schulconnex-Systems definiert.
- 'VLehr' — VLehr ist eine Abkürzung für Vertretungslehrkraft und wird als Rolle in der Codeliste Gruppenrollen des Schulconnex-Systems definiert.

