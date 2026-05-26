# Codelisten

Codelisten legen mögliche Werte für bestimmte Attribute fest, beispielsweise für „Geschlecht“
oder „Organisationstyp“. Nachfolgend befinden sich alle Codelisten, die in der Spezifikation
referenziert werden.

Codes aus Codelisten werden generell als Strings zurückgegeben, d. h. die JSON-Form für das
weibliche Geschlecht ist als `"geschlecht": "w"` und nicht `"geschlecht": w` zu erwarten.

Alle Codes müssen als unabhängig von Groß-/Kleinschreibung interpretiert werden
(sind nicht Case-sensitiv). Die Organisationsarten `"SCHULE"`, `"schule"`, `"Schule"` oder
auch `"ScHuLe"` müssen als identisch angenommen werden.

## Codelisten Klassifizierung

Die Schulconnex-Spezifikation unterscheidet vier Arten von Codelisten.

### Schulconnex-eigene Codelisten

Diese Listen enthalten Werte, welche von Schulconnex-Servern auch intern genutzt werden. Daher werden diese Codelisten in der Schulconnex-Spezifikation verbindlich definiert und sind auf allen Schulconnex-Servern identisch.

Schulconnex-eigene Codelisten sind [Boolean](#boolean-schulconnex), [Gruppenrolle](#gruppenrolle-schulconnex), [Gruppentyp](#gruppentyp-schulconnex), [Organisationstyp](#organisationstyp-schulconnex), [Personenstatus](#personenstatus-schulconnex), [Rolle](#rolle-schulconnex) und  [Vertrauensstufe](#vertrauensstufe-schulconnex).

### Generische Codelisten

Generische Codelisten sind auf allen Schulconnex-Servern identisch. Die Wert innerhalb der Codelisten werden jedoch nicht durch die Schulconnex-Spezifikation festgelegt, sondern von einer externen Organisation. 

Generische Codelisten sind [Erreichbarkeitstyp](#erreichbarkeitstyp-generisch), [Geschlecht](#geschlecht-generisch), [Organisationsbeziehungen](#organisationsbeziehungen-generisch) und [Trägerschaft](#trägerschaft-generisch).

### Lokale Codelisten

Lokale Codelisten können von Bundesland zu Bundesland oder in unterschiedlichen Domänen voneinander abweichen. Welche konkreten Codewerte in einer lokalen Codeliste auf einem spezifischen Schulconnex-Server unterstützt werden ist mit dem Betreiber des Servers abzuklären.

Werden innerhalb dieser Schulconnex-Spezifikation konkrete Codewerte genannt, so sind diese als Beispiele zu verstehen und sind nicht verbindlich.

Länderspezifische Codelisten sind [Beziehungen](#beziehungen-lokal), [Bildungsziel](#bildungsziel-lokal), [Fächerkanon](#fächerkanon-lokal), [Gruppenbereich](#gruppenbereich-lokal), [Gruppendifferenzierung](#gruppendifferenzierung-lokal), [Gruppenoption](#gruppenoption-lokal), 
[Jahrgangsstufe](#jahrgangsstufe-lokal), [Lernperiode](#lernperiode-lokal) und [Lernperiodentyp](#lernperiodentyp-lokal).


## Zukünftige Nutzung URI-basierter Codelisten

Schulconnex plant ab der Version 2.0 URI-basierte Codelisten zu nutzen. Wir folgen damit der Empfehlung des World Wide Web Consortium (W3C), ein Resource Description Framework (RDF) zu verwenden. Dies ermöglicht langfristig die Bereitstellung und maschinenlesbare Vernetzung zusätzlicher Informationen.

URI-basierte Codelistenwerte bieten in diesem Kontext eine ganze Reihe von Vorteilen:

* __Eindeutige Identifikation__: Jede Ressource erhält eine eindeutige URI, die Verwechslungen und Missverständnisse verhindert.

* __Interoperabilität__: URIs sind universell und können problemlos zwischen unterschiedlichen Systemen und Plattformen ausgetauscht werden. Dies erleichtert die Integration und den Datenaustausch zwischen unterschiedlichen Systemen.

* __Wiederverwendbarkeit__: Einmal definierte URI-Codelistenwerte können in unterschiedlichen Kontexten und Anwendungen wiederverwendet werden, was die Konsistenz und Effizienz erhöht.

* __Erweiterbarkeit__: URI-basierte Codelisten können leicht erweitert werden, indem neue URI-Codelistenwerte hinzugefügt werden, ohne bestehende Systeme zu beeinträchtigen.

* __Lesbarkeit und Verständlichkeit__: URI-Codelistenwerte sind oft menschenlesbar und können leicht maschinell interpretiert werden, was die Dokumentation und das Debugging erleichtert.

* __Standardisierung__: Die Verwendung von URI-Codelistenwerten fördert die Einhaltung von Standards und Best-Practices, was die Qualität und Zuverlässigkeit der APIs verbessert.

## Unterstützte Codelisten

### Beziehungen <span class="tag tag-cl-lokal">Lokal</span>

Beziehungen ist eine Liste von Beziehungen, welche zwischen zwei Personen innerhalb von
Personenkontexten bestehen können. Häufig wird hierüber eine Beziehung zwischen Erziehungsberechtigten
und Lernenden hergestellt, aber auch Beziehungen wie Tutoren oder Tutorinnen zu Lernenden innerhalb
einer Schule können darüber abgebildet werden.

Code | Bezeichnung | Bemerkung
--- | --- | ---
SorgBer | Sorgeberechtigte/-r | Hat eine Person A im Personenkontext diese `hat_als` Beziehung zu einem Personenkontext der Person B, so hat A als Sorgeberechtigten oder Sorgeberechtigte die Person B.
SchB | Schulbegleiter/-in | Hat eine Person A im Personenkontext diese `hat_als` Beziehung zu einem Personenkontext der Person B, so hat A als Schulbegleiter oder Schulbegleiterin die Person B.

### Bildungsziel <span class="tag tag-cl-lokal">Lokal</span>

Das Bildungsziel gibt Informationen über die Art der einer Schule.

Hinweis: Diese Codeliste ist spezifisch für das Bundesland Niedersachsen. Bei Verwendung
dieser API in anderen Bundesländern kann gegebenenfalls eine andere Codeliste Verwendung finden.

Code | Bezeichnung
--- | ---
GS | Grundschule
HS | Hauptschule
RS | Realschule
GY-SEK-I | Gymnasium Sekundarstufe I
GY-SEK-II | Gymnasium Sekundarstufe II

### Boolean <span class="tag tag-cl-eigen">Schulconnex</span>

Die Codeliste „Boolean“ regelt das Mapping der deutschen Wörter „ja“ und „nein“ auf die
englischen Begriffe „true“ und „false“.

Code | Bezeichnung
--- | ---
Ja | True
Nein | False

### Erreichbarkeitstyp <span class="tag tag-cl-generisch">Generisch</span>

Erreichbarkeitstyp ist eine Liste von Kommunikationskanälen, über die eine Person oder
Organisation erreicht werden kann.

Code | Bezeichnung | Bemerkung
--- | --- | ---
E-Mail | E-Mail | E-Mail-Adressen müssen [RFC 5322][2] (Internet Message Format) erfüllen, um akzeptiert zu werden, anderenfalls wird ein 400/06 Fehler geliefert.

[2]: https://datatracker.ietf.org/doc/html/rfc5322

### Fächerkanon <span class="tag tag-cl-lokal">Lokal</span>

Diese Codeliste bildet die an Schulen verfügbaren Fächern ab.

Hinweis: Die folgende Codeliste ist spezifisch für das Bundesland Niedersachsen und dient für andere
Bundesländer nur als Beispiel, da der Fächerkanon abweichen kann. Der lokal gültige Fächerkanon
ist beim jeweiligen Betreiber des Schulconnex-Servers nachzufragen.

Code | Bezeichnung
--- | ---
BI | Biologie
CH | Chemie
CI | Chinesisch
DE | Deutsch
DS | Darstellendes Spiel
EK | Erdkunde
EN | Englisch
FR | Französisch
GR | Griechisch
NL | Niederländisch
IT | Italienisch
SN | Spanisch
KU | Kunst
LA | Latein
RS | Russisch
GE | Geschichte
PO | Politik
PW | Politik/Wirtschaft
RE | Evangelische Religion
RI | Islamische Religion
RK | Katholische Religion
SP | Sport
SU | Sachunterricht
TE | Technik
TG | Textiles Gestalten
WE | Gestaltendes Werken
WN | Werte und Normen
WS | Wirtschaft
DA | Deutsch als Zweitsprache
MA | Mathematik
HW | Hauswirtschaft
MU | Musik
PA | Pädagogik
PH | Physik
IF | Informatik
AW | Arbeit-Wirtschaft-Technik
GL | Gesellschaftslehre
PWI | Profil Wirtschaft
PTE | Profil Technik
PGUS | Profil Gesundheit und Soziales
NAT | Naturwissenschaften

### Geschlecht <span class="tag tag-cl-generisch">Generisch</span>

Diese Codeliste bildet das Geschlecht einer Person ab.

Code | Bezeichnung
--- | ---
m | männlich
w | weiblich
d | divers
x | keine Angabe

### Gruppenbereich <span class="tag tag-cl-lokal">Lokal</span>

Diese Codeliste bildet die Art einer Gruppe ab, insbesondere ob sie verpflichtend oder wählbar ist.

Hinweis: Diese Codeliste ist spezifisch für das Bundesland Niedersachsen. Bei Verwendung
dieser API in anderen Bundesländern kann gegebenenfalls eine andere Codeliste Verwendung
finden.

Code | Bezeichnung
--- | ---
Pflicht | Pflichtunterricht
Wahl | Wahlunterricht
Wahlpflicht | Wahlpflichtunterricht

### Gruppendifferenzierung <span class="tag tag-cl-lokal">Lokal</span>

Differenzierung bei integriertem Unterricht oder in der gymnasialen Oberstufe (Erweiterungsebene, Grundebene).

Hinweis: Diese Codeliste ist spezifisch für das Bundesland Niedersachsen. Bei Verwendung
dieser API in anderen Bundesländern kann gegebenenfalls eine andere Codeliste Verwendung finden.

Code | Bezeichnung
--- | ---
G | G-Kurs
E | E-Kurs
Z | Z-Kurs
gA | grundlegendes Anforderungsniveau
eA | erhöhtes Anforderungsniveau

### Gruppenoption <span class="tag tag-cl-lokal">Lokal</span>

Zusätzliche Optionen zur Gruppe, meistens sprachbezogen (bilingual, herkunftssprachlich).

Hinweis: In der aktuellen Version sind noch keine Werte vorhanden.
Hinweis: Diese Codeliste ist nicht länderübergreifend und potentiell von Bundesland zu Bundesland abweichend.

Code | Bezeichnung
--- | ---

### Gruppenrolle <span class="tag tag-cl-eigen">Schulconnex</span>

Rollen einer Person innerhalb einer Gruppe.

Code | Bezeichnung
--- | ---
Lern | Lernende/-r
Lehr | Lehrende/-r
KlLeit | Klassenleitung
Foerd | Förderlehrkraft
VLehr | Vertretungslehrkraft
SchB | Schulbegleitung
GMit | Gruppenmitglied
GLeit | Gruppenleitung

### Gruppentyp <span class="tag tag-cl-eigen">Schulconnex</span>

Typ der Gruppe (Klasse, Kurs). 

Code | Bezeichnung
--- | ---
Klasse | Schulklasse
Kurs | Kurs/Unterricht
Sonstig | Sonstige Gruppe

### Jahrgangsstufe <span class="tag tag-cl-lokal">Lokal</span>

Jahrgangsstufe (Jahrgangsstufe 1 bis Jahrgangsstufe 13)

Code | Bezeichnung
--- | ---
01 | Jahrgangsstufe 1
02 | Jahrgangsstufe 2
03 | Jahrgangsstufe 3
04 | Jahrgangsstufe 4
05 | Jahrgangsstufe 5
06 | Jahrgangsstufe 6
07 | Jahrgangsstufe 7
08 | Jahrgangsstufe 8
09 | Jahrgangsstufe 9
10 | Jahrgangsstufe 10
11 | Jahrgangsstufe 11
12 | Jahrgangsstufe 12
13 | Jahrgangsstufe 13

### Lernperiode <span class="tag tag-cl-lokal">Lokal</span>

Lernperioden dienen zur Festlegung des Beginns oder des Endes einer Kurslaufzeit.
Der Code einer Lernperiode legt sowohl Anfangsdatim, Enddatum, auch den Typ (Schuljahr oder Schulhalbjahr) fest.

Code | Bezeichnung | Beginn | Ende | Typ
--- | --- | --- | --- | ---
2022 | Schuljahr 2022/23 | 2022-08-01 | 2023-07-31 | SJ
2022-1 | 1. Halbj. 22/23 | 2022-08-01 | 2023-01-31 | HJ
2022-2 | 2. Halbj. 22/23 | 2023-02-01 | 2023-07-31 | HJ
2023 | Schuljahr 2023/24 | 2023-08-01 | 2024-07-31 | SJ
2023-1 | 1. Halbj. 23/24 | 2023-08-01 | 2024-01-31 | HJ
2023-2 | 2. Halbj. 23/24 | 2024-02-01 | 2024-07-31 | HJ
2024 | Schuljahr 2024/25 | 2024-08-01 | 2025-07-31 | SJ
2024-1 | 1. Halbj. 24/25 | 2024-08-01 | 2025-01-31 | HJ
2024-2 | 2. Halbj. 24/25 | 2025-02-01 | 2025-07-31 | HJ
2025 | Schuljahr 2025/26 | 2025-08-01 | 2026-07-31 | SJ
2025-1 | 1. Halbj. 25/26 | 2025-08-01 | 2026-01-31 | HJ
2025-2 | 2. Halbj. 25/26 | 2026-02-01 | 2026-07-31 | HJ
2026 | Schuljahr 2026/27 | 2026-08-01 | 2027-07-31 | SJ
2026-1 | 1. Halbj. 26/27 | 2026-08-01 | 2027-01-31 | HJ
2026-2 | 2. Halbj. 26/27 | 2027-02-01 | 2027-07-31 | HJ
2027 | Schuljahr 2027/28 | 2027-08-01 | 2028-07-31 | SJ
2027-1 | 1. Halbj. 27/28 | 2027-08-01 | 2028-01-31 | HJ
2027-2 | 2. Halbj. 27/28 | 2028-02-01 | 2028-07-31 | HJ
2028 | Schuljahr 2028/29 | 2028-08-01 | 2029-07-31 | SJ
2028-1 | 1. Halbj. 28/29 | 2028-08-01 | 2029-01-31 | HJ
2028-2 | 2. Halbj. 28/29 | 2029-02-01 | 2029-07-31 | HJ
2029 | Schuljahr 2029/30 | 2029-08-01 | 2030-07-31 | SJ
2029-1 | 1. Halbj. 29/30 | 2029-08-01 | 2030-01-31 | HJ
2029-2 | 2. Halbj. 29/30 | 2030-02-01 | 2030-07-31 | HJ
2030 | Schuljahr 2030/31 | 2030-08-01 | 2031-07-31 | SJ
2030-1 | 1. Halbj. 30/31 | 2030-08-01 | 2031-01-31 | HJ
2030-2 | 2. Halbj. 30/31 | 2031-02-01 | 2031-07-31 | HJ
2031 | Schuljahr 2031/32 | 2031-08-01 | 2032-07-31 | SJ
2031-1 | 1. Halbj. 31/32 | 2031-08-01 | 2032-01-31 | HJ
2031-2 | 2. Halbj. 31/32 | 2032-02-01 | 2032-07-31 | HJ
2032 | Schuljahr 2032/33 | 2032-08-01 | 2033-07-31 | SJ
2032-1 | 1. Halbj. 32/33 | 2032-08-01 | 2033-01-31 | HJ
2032-2 | 2. Halbj. 32/33 | 2033-02-01 | 2033-07-31 | HJ


### Lernperiodentyp <span class="tag tag-cl-lokal">Lokal</span>

Dauer einer Lernperiode (Schuljahr oder Schulhalbjahr)

Code | Bezeichnung
--- | ---
SJ | Schuljahr
HJ | Schulhalbjahr

### Organisationsbeziehungen <span class="tag tag-cl-generisch">Generisch</span>

Organisationsbeziehungen ist eine Liste von Beziehungen, welche zwischen zwei Organisationen bestehen können. Häufig wird hierüber eine Beziehung einer Schule und dem Schulträger hergestellt, aber auch Organisationsbeziehungen wie Schulbehörden oder Medienzentren können darüber abgebildet werden.

Code | Bezeichnung | Bemerkung
--- | --- | ---
SchTrae | Schulträger | Hat eine Organisation A diese `hat_als` Beziehung zu einer Organisation B, so hat A als Schulträger die Organisation B, damit ist B also Schulträger von A.
SchBeh | Schulbehörde | Hat eine Organisation A diese `hat_als` Beziehung zu einer Organisation B, so hat A als Schulbehörde die Organisation B, damit ist B also Schulbehörde von A.
Medienzentrum | Medienzentrum | Hat eine Organisation A diese `hat_als` Beziehung zu einer Organisation B, so hat A als Medienzentrum die Organisation B, damit ist B also Medienzentrum für A.

### Organisationstyp <span class="tag tag-cl-eigen">Schulconnex</span>

Diese Codeliste gibt den Typ einer Organisation an, wie Schule oder Medienzentrum.

Code | Bezeichnung
--- | ---
Schule | Schule
Anbieter | Anbieter
Medienzentrum | Medienzentrum
Behoerde | Behörde
SchTrae | Schulträger
Sonstige | sonstige Organisationen / Einrichtungen

### Personenstatus <span class="tag tag-cl-eigen">Schulconnex</span>

Diese Codeliste gibt an, ob ein Personenkontext aktuell aktiv ist. 

Code | Bezeichnung
--- | ---
Aktiv | aktiv

### Rolle <span class="tag tag-cl-eigen">Schulconnex</span>

Mit Codes dieser Liste wird die Rolle einer Person innerhalb eines Personenkontexts beschrieben.

Code | Bezeichnung
--- | ---
Lern | Lernende/-r
Lehr | Lehrende/-r
SorgBer | Sorgeberechtigte/-r
Extern | externe Person
OrgAdmin | Organisationsadministrator/-in
Leit | Organisationsleitung
SysAdmin | Systemadministrator/-in
SchB | Schulbegleiter/-in
NLehr | Nicht-lehrendes Personal

### Trägerschaft <span class="tag tag-cl-generisch">Generisch</span>

Art der Trägerschaft bei Schul-Organisationen.

Code | Bezeichnung
--- | ---
01 | Bund
02 | Land
03 | Kommune
04 | Privat
05 | Kirchlich
06 | Sonstige

### Vertrauensstufe <span class="tag tag-cl-eigen">Schulconnex</span>

Die Vertrauensstufe gibt an, wie stark die Personendaten vom erfassenden Mandanten verifiziert wurden.

Code | Bezeichnung | Bemerkung
--- | --- | ---
Kein | keine | Der Schlüsselbesitzer ist nicht vertrauenswürdig. Diese Vertrauensstufe wird meist für Test- oder Beispielnutzer vergeben.
Unbe | unbekannt | Der Schlüsselbesitzer ist unbekannt. Diese Vertrauensstufe wird beispielsweise für selbstregistrierte Nutzer vergeben.
Teil | vertraut | Dem Schlüsselbesitzer wird vertraut. Hierbei handelt es sich meist um Nutzer, die von Nutzern mit höherer Stufe angelegt wurden und diesen bekannt sind, sich jedoch nicht einer formalen Identifizierung unterzogen haben.
Voll | verifiziert | Der Schlüsselbesitzer ist eindeutig und formal identifiziert (beispielsweise durch Vorlage des Personalausweises).
