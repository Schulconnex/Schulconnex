# Terminology Report

## docs/lizenzerweiterung/einleitung.md

- 'Schulconnex-Nutzungsrechte-API' — Ist eine spezifische REST-Schnittstelle im Schulconnex-Kontext, die Informationen zu Nutzungsrechten an digitalen Medienobjekten bereitstellt.
- 'REST' — Steht für Representational State Transfer und beschreibt ein Architekturprinzip für zustandslose Datenübertragung zwischen Client und Server.
- 'Lizenzschlüssel' — Ist ein spezifischer Begriff für Zugangsdaten, die zur Aktivierung oder Nutzung von lizenzierten digitalen Medien oder Anwendungen erforderlich sind.

## docs/lizenzerweiterung/praxisleitfaden/odrl-beispiele.mdx

- 'ODRL' — ODRL steht für Open Digital Rights Language und ist ein Standard zur Modellierung und Verwaltung von Nutzungsrechten für digitale Inhalte. Im Kontext des Schulconnex-Dokuments wird ODRL verwendet, um Lizenzvereinbarungen maschinenlesbar darzustellen.
- 'JSON-LD' — JSON-LD ist eine Erweiterung von JSON, die semantische Informationen durch Kontexte hinzufügt. Im Sinne der Schnittstelle wird JSON-LD genutzt, um ODRL-Objekte mit maschinenlesbaren Metadaten zu versehen.
- 'IRI' — IRI steht für Internationalized Resource Identifier und ist eine Erweiterung des URI-Standards, die internationale Zeichen unterstützt. Im Kontext des Dokuments wird IRI verwendet, um eindeutige Kennungen für ODRL-Objekte zu definieren.
- 'URN' — URN steht für Uniform Resource Name und dient der eindeutigen Identifikation von Ressourcen ohne deren physische Adresse. Im Dokument wird URN verwendet, um Medienobjekte und Kataloge im ODRL-Format zu kennzeichnen.
- 'execute' — Die ODRL-Aktion 'execute' beschreibt die Berechtigung zur Ausführung von Software oder internetbasierten Anwendungen. Im Kontext des Dokuments wird sie verwendet, um Nutzungsrechte für digitale Bildungsanwendungen zu definieren.
- '@context' — Die Eigenschaft '@context' ist ein zentraler Bestandteil von JSON-LD und definiert die semantischen Kontexte für die Interpretation von Daten. Im Dokument wird sie genutzt, um ODRL-Objekte eindeutig der ODRL-Spezifikation zuzuordnen.
- '@type' — Die Eigenschaft '@type' ist ein JSON-LD-Element, das den Typ eines Objekts angibt. Im Dokument wird sie verwendet, um ODRL-Objekte als Vereinbarungen, Richtlinien oder Angebote zu klassifizieren.
- 'assignee' — Das Attribut 'assignee' in ODRL definiert die Partei oder Person, der eine Berechtigung gewährt wird. Im Dokument wird es verwendet, um die Zuweisung von Nutzungsrechten an spezifische Gruppen oder Organisationen zu modellieren.
- 'refinement' — Das Attribut 'refinement' in ODRL ermöglicht die präzise Definition von Bedingungen für Berechtigungen. Im Dokument wird es genutzt, um die Zugehörigkeit zu Organisationen oder Rollen zu spezifizieren.
- 'constraint' — Das Attribut 'constraint' in ODRL definiert Bedingungen, die erfüllt sein müssen, damit eine Berechtigung gültig ist. Im Dokument wird es verwendet, um zeitliche und räumliche Einschränkungen für Nutzungsrechte festzulegen.
- 'spatial' — Das Attribut 'spatial' in ODRL beschreibt räumliche Einschränkungen für Berechtigungen. Im Dokument wird es verwendet, um die Gültigkeit von Nutzungsrechten auf bestimmte geografische Gebiete zu beschränken.
- 'concurrentUses' — Das Attribut 'concurrentUses' in ODRL beschreibt die maximale Anzahl gleichzeitiger Nutzungen eines Zielobjekts. Im Dokument wird es verwendet, um mengenmäßige Beschränkungen für digitale Bildungsanwendungen zu definieren.
- 'ShareAlike' — Die ODRL-Aktion 'ShareAlike' beschreibt die Verpflichtung, bearbeitete Inhalte unter denselben Lizenzbedingungen weiterzugeben. Im Dokument wird sie verwendet, um Pflichten bei der Modifikation von Arbeitsblättern zu definieren.
- 'Attribution' — Die ODRL-Aktion 'Attribution' beschreibt die Pflicht zur Namensnennung der Urheber bei der Nutzung oder Weitergabe von Inhalten. Im Dokument wird sie verwendet, um Pflichten bei der Modifikation von Arbeitsblättern zu definieren.

## docs/lizenzerweiterung/schnittstellendefinition/http-statuscodes.md

- 'HTTP' — Das Hypertext Transfer Protocol ist ein Übertragungsprotokoll für Daten und wird häufig in der Webkommunikation verwendet.
- 'HTTPS' — HTTPS steht für Hypertext Transfer Protocol Secure und bietet eine verschlüsselte Kommunikation zwischen Client und Server, wobei der Webserver durch ein Zertifikat authentifiziert wird.

