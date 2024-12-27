# Codelisten

Codelisten legen mögliche Werte für bestimmte Attribute fest, beispielsweise für „Geschlecht“
oder „Organisationstyp“. Nachfolgend befinden sich alle Codelisten, welche in der Spezifikation
referenziert werden.

Codes aus Codelisten werden generell als Strings zurückgegeben, d. h. die JSON-Form für das
weibliche Geschlecht ist als `"geschlecht": "w"` und nicht `"geschlecht": w` zu erwarten.

Alle Codes müssen als nicht abhängig von Groß-/Kleinschreibung interpretiert werden
(sind nicht Case-sensitiv). Die Organisationsarten `"SCHULE"`, `"schule"`, `"Schule"` oder
auch `"ScHuLe"` müssen als identisch angenommen werden.

## Personenstatus

Code | Bezeichnung
--- | ---
Aktiv | aktiv

## Geschlecht

Code | Bezeichnung
--- | ---
m | männlich
w | weiblich
d | divers
x | keine Angabe

## Rolle

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

## Vertrauensstufe

Code | Bezeichnung | Bemerkung
--- | --- | ---
Kein | keine | Der Schlüsselbesitzer ist nicht vertrauenswürdig. Diese Vertrauensstufe wird meist für Test- oder Beispiel-Nutzer vergeben.
Unbe | unbekannt | Der Schlüsselbesitzer ist unbekannt. Diese Vertrauensstufe wird beispielsweise für selbstregistrierte Nutzer vergeben.
Teil | vertraut | Dem Schlüsselbesitzer wird vertraut. Hierbei handelt es sich meist um Nutzer, die von Nutzern mit höherer Stufe angelegt wurden und diesen bekannt sind, sich jedoch nicht einer formalen Identifizierung unterzogen haben.
Voll | verifiziert | Der Schlüsselbesitzer ist eindeutig und formal identifiziert (beispielsweise durch Vorlage des Personalausweises).

## Organisationstyp

Code | Bezeichnung
--- | ---
Schule | Schule
Anbieter | Anbieter
Sonstige | sonstige Organisationen / Einrichtungen

## Jahrgangsstufe

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

## Boolean

Die Codeliste „Boolean“ regelt das Mapping der deutschen Wörter „ja“ und „nein“ auf die
englischen Begriffe „true“ und „false“.

Code | Bemerkung
--- | ---
Ja | Mapping auf `"true"`.
Nein | Mapping auf `"false"`.

## Trägerschaft

Code | Bezeichnung
--- | ---
01 | Bund
02 | Land
03 | Kommune
04 | Privat
05 | Kirchlich
06 | Sonstige

## Lokalisierung

Basierend auf [RFC 5646][1]. Beispiele finden sich in nachfolgender Tabelle.

[1]: https://www.rfc-editor.org/rfc/rfc5646

Code | Bezeichnung
--- | ---
de | deutsch
de-XX | deutsch, Anrede du, einfache Sprache
en-GB | englisch (Vereinigtes Königreich)

## Gruppenbereich

Hinweis: Diese Codeliste ist spezifisch für das Bundesland Niedersachsen. Bei Verwendung
dieser API in anderen Bundesländern kann gegebenenfalls eine andere Codeliste Verwendung
finden.

Code | Bezeichnung
--- | ---
Pflicht | Pflichtunterricht
Wahl | Wahlunterricht
Wahlpflicht | Wahlpflichtunterricht

## Gruppendifferenzierung

Hinweis: Diese Codeliste ist spezifisch für das Bundesland Niedersachsen. Bei Verwendung
dieser API in anderen Bundesländern kann gegebenenfalls eine andere Codeliste Verwendung finden.

Code | Bezeichnung
--- | ---
G | G-Kurs
E | E-Kurs
Z | Z-Kurs
gA | grundlegendes Anforderungsniveau
eA | erhöhtes Anforderungsniveau

## Gruppenoption

 Hinweis: In der aktuellen Version sind noch keine Werte vorhanden.
 Hinweis: Diese Codeliste ist nicht länderübergreifend und potentiell von Bundesland zu Bundesland abweichend.

Code | Bezeichnung
--- | ---

## Gruppentyp

Code | Bezeichnung
--- | ---
Klasse | Schulklasse
Kurs | Kurs/Unterricht
Sonstig | Sonstige Gruppe

## Gruppenrolle

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

## Lernperiode

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

## Lernperiodentyp

Code | Bezeichnung
--- | ---
SJ | Schuljahr
HJ | Schulhalbjahr

## Fächerkanon

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

## Bildungsziel

Hinweis: Diese Codeliste ist spezifisch für das Bundesland Niedersachsen. Bei Verwendung
dieser API in anderen Bundesländern kann gegebenenfalls eine andere Codeliste Verwendung finden.

Code | Bezeichnung
--- | ---
GS | Grundschule
HS | Hauptschule
RS | Realschule
GY-SEK-I | Gymnasium Sekundarstufe I
GY-SEK-II | Gymnasium Sekundarstufe II

## Erreichbarkeitstyp

Erreichbarkeitstyp ist eine Liste von Kommunikationskanälen, über die eine Person oder
Organisation erreicht werden kann.

Code | Bezeichnung | Bemerkung
--- | --- | ---
E-Mail | E-Mail | E-Mail-Adressen müssen [RFC 5322][2] (Internet Message Format) erfüllen, um akzeptiert zu werden, anderenfalls wird ein 400/06 Fehler geliefert.

[2]: https://www.rfc-editor.org/rfc/rfc5322

## Beziehungen

Beziehungen ist eine Liste von Beziehungen, welche zwischen zwei Personen innerhalb von
Personenkontexten bestehen können. Häufig wird hierüber eine Beziehung zwischen Erziehungsberechtigten
und Lernenden hergestellt, aber auch Beziehungen wie Tutoren oder Tutorinnen zu Lernenden innerhalb
einer Schule können darüber abgebildet werden.

Code | Bezeichnung | Bemerkung
--- | --- | ---
SorgBer | Sorgeberechtigte/-r | Hat eine Person A im Personenkontext diese `hat_als` Beziehung zu einem Personenkontext der Person B, so hat A als Sorgeberechtigten oder Sorgeberechtigte die Person B.
SchB | Schulbegleiter/-in | Hat eine Person A im Personenkontext diese `hat_als` Beziehung zu einem Personenkontext der Person B, so hat A als Schulbegleiter oder Schulbegleiterin die Person B.

## Organisationsbeziehungen

Code | Bezeichnung | Bemerkung
--- | --- | ---
SchTrae | Schulträger | Hat eine Organisation A diese `hat_als` Beziehung zu einer Organisations B, so hat A als Schulträger die Organisation B, damit ist B also Schulträger von A.
SchBeh | Schulbehörde | Hat eine Organisation A diese `hat_als` Beziehung zu einer Organisations B, so hat A als Schulbehörde die Organisation B, damit ist B also Schulbehörde von A.
