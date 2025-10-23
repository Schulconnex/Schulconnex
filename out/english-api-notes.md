# Terminology Report

## docs/english-api-notes/code-lists.md

- 'Personenstatus' — Beschreibt den aktuellen Aktivitätsstatus eines Datensatzes für eine Person, z. B. aktiv oder inaktiv.
- 'Geschlecht' — Bezeichnet die Optionen für das biologische oder soziale Geschlecht einer Person, wie männlich, weiblich, divers oder nicht angegeben.
- 'Rolle' — Bezeichnet die Funktion oder Position einer Person innerhalb einer Organisation, z. B. Schüler, Lehrer oder Administrator.
- 'Vertrauensstufe' — Gibt die Verifizierungsstufe eines digitalen Zugangsschlüssels an, von untrusted bis vollständig vertrauenswürdig.
- 'Organisationstyp' — Bezeichnet die Art einer Organisation, z. B. Schule oder externer Anbieter von Bildungsinhalten.
- 'Jahrgangsstufe' — Beschreibt die Klassenstufe oder das Niveau eines Schülers, für das ein Kurs geeignet ist.
- 'Boolean' — Definiert die Begriffe für boolesche Werte, z. B. „ja” für wahr und „nein” für falsch.
- 'Trägerschaft' — Bezeichnet die Eigentumsform einer Organisation, z. B. staatlich, kirchlich oder privat.
- 'Lokalisierung' — Gibt Informationen zur Sprach- und Regionseinstellung an, z. B. „de-DE” für deutschsprachige Inhalte.
- 'Gruppenbereich' — Kennzeichnet, ob die Teilnahme an einer Gruppe für Mitglieder optional („Wahl”), verpflichtend („Pflicht”) oder gemischt ist.
- 'Gruppendifferenzierung' — Spezifiziert das Niveau eines Kurses, ähnlich wie die Unterscheidung zwischen „A-Level” und „O-Level” im britischen Bildungssystem.
- 'Gruppentyp' — Klassifiziert eine Gruppe als „Klasse”, „Kurs” oder „Sonstiges”, wobei Klassen meist verpflichtend und Kurse oft optional sind.
- 'Gruppenrolle' — Bezeichnet Rollen innerhalb einer Gruppe, die sich von Organisationsrollen unterscheiden, z. B. Gruppenleiter.
- 'Lernperiode' — Bezeichnet eine Unterrichtsperiode, z. B. ein Jahr oder ein Semester.
- 'Lernperiodentyp' — Gibt die Art oder Länge einer Unterrichtsperiode an, z. B. Jahr oder Halbjahr.
- 'Fächerkanon' — Bezeichnet die Fächer, die in einer Klasse oder einem Kurs unterrichtet werden können, z. B. Biologie oder Französisch.
- 'Bildungsziel' — Bezeichnet die Art der Schule basierend auf dem voraussichtlichen Abschlussniveau.
- 'Erreichbarkeitstyp' — Bezeichnet die Art eines Kommunikationskanals, über den eine Person oder Organisation kontaktiert werden kann.
- 'Beziehungen' — Bezeichnet die Beziehungen zwischen zwei Personen, z. B. gesetzlicher Vormund oder Betreuer.
- 'Organisationsbeziehungen' — Bezeichnet die Beziehungen zwischen Organisationen, z. B. zwischen einer Schule und ihrer Aufsichtsbehörde.

## docs/english-api-notes/data-models.md

- 'Organisationstyp' — Bezeichnet die Art einer Organisation im Bildungsbereich, wie z. B. Schule oder andere relevante Einrichtungen. Siehe Code-Liste Organisationstyp.
- 'Trägerschaft' — Bezeichnet die Eigentümerstruktur einer Organisation, z. B. staatlich oder privat. Siehe Code-Liste Trägerschaft.
- 'Personenkontext' — Kontext einer Person innerhalb einer Organisation, der ihre Rolle und Beziehung zu dieser Organisation beschreibt.
- 'Geschlecht' — Bezeichnet das biologische oder soziale Geschlecht einer Person. Siehe Code-Liste Geschlecht.
- 'Vertrauensstufe' — Beschreibt das Vertrauen in die Richtigkeit der bereitgestellten Daten. Siehe Code-Liste Vertrauensstufe.
- 'Auskunftssperre' — Kennzeichnet, ob der Zugriff auf Informationen einer Person blockiert ist. Siehe Code-Liste Boolean.
- 'Jahrgangsstufe' — Bezeichnet die Schulklasse oder den Jahrgang, dem eine Person zugeordnet ist. Siehe Code-Liste Jahrgangsstufe.
- 'Gruppentyp' — Bezeichnet die Art einer Gruppe, z. B. Klasse oder Kurs. Siehe Code-Liste Gruppentyp.
- 'Gruppenbereich' — Zusätzliche Qualifizierung einer Gruppe, z. B. obligatorisch oder freiwillig. Siehe Code-Liste Gruppenbereich.
- 'Gruppenoption' — Zusätzliche Optionen einer Gruppe, z. B. bilingual oder muttersprachlich. Siehe Code-Liste Gruppenoption.
- 'Gruppendifferenzierung' — Spezifische Differenzierung einer Gruppe in bestimmten Bildungszweigen. Siehe Code-Liste Gruppendifferenzierung.
- 'Bildungsziel' — Bezeichnet den Bildungszweig, dem eine Gruppe zugeordnet ist. Siehe Code-Liste Bildungsziel.
- 'Fächerkanon' — Bezeichnet die Liste der Themen oder Fächer, die in einer Gruppe behandelt werden. Siehe Code-Liste Fächerkanon.
- 'Lernperiode' — Bezeichnet einen Zeitraum, in dem Organisationen Gruppen anbieten können, z. B. Schuljahr oder Semester. Siehe Code-Liste Lernperiodentyp.
- 'Gruppenrolle' — Bezeichnet die Rolle einer Person innerhalb einer Gruppe, z. B. Lehrkraft oder Schüler/-in. Siehe Code-Liste Gruppenrolle.
- 'Beziehungen' — Bezeichnet die Art der Beziehung zwischen zwei Personen, z. B. gesetzliche Vertretung oder Schulbegleitung. Siehe Code-Liste Beziehungen.
- 'Organisationsbeziehung' — Bezeichnet die Beziehung zwischen zwei Organisationen, z. B. Kooperation oder Unterordnung.
- 'Sichtfreigabe' — Erlaubt Organisationen, Informationen über einen Personenkontext für andere Organisationen lesend verfügbar zu machen.
- 'DSGVO Art. 4 Nr. 7' — Bezieht sich auf die Datenschutz-Grundverordnung und definiert die verantwortliche Stelle für die Verarbeitung personenbezogener Daten.
- 'RFC5646' — Standard zur Kodierung von Sprach- und Lokalisierungsinformationen.

## docs/english-api-notes/english-api-notes.md

- 'API' — Steht für Application Programming Interface und bezeichnet eine Schnittstelle, die es ermöglicht, dass Softwarekomponenten miteinander kommunizieren. Im Kontext der Schulconnex-Dokumentation ist dies ein zentraler Begriff für die technische Interaktion.
- 'Attribute' — Im Sinne der Schnittstelle sind Attribute spezifische Eigenschaften oder Merkmale eines Datenmodells, die dessen Struktur und Inhalte definieren.
- 'Implementierung' — Bezeichnet die praktische Umsetzung oder Realisierung einer Schnittstelle oder eines Datenmodells in einer Software. Im Kontext der API-Dokumentation ist dies ein zentraler technischer Prozess.
- 'Übersetzung' — Im Sinne der API-Dokumentation ist die Übersetzung die Übertragung von Attributnamen und Beschreibungen in eine andere Sprache, um die internationale Nutzbarkeit zu gewährleisten.

