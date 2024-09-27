# Versionshistorie

Die Versionshistorie beschreibt die wichtigsten inhaltlichen Änderungen zwischen
den veröffentlichten Releases von Schulconnex.

Detailierte Informationen zu Änderungen finden sich in der Historie
der Github-Issues und der entsprechenden Pull-Requests.

## Änderungen von Version 1.4 zu Version 1.5

### Neue Datenmodelle
•	Sichtfreigabe
### Neue APIs
* APIs Sichtfreigabe
  * POST /personenkontexte/:id/sichtfreigaben
  * GET /personenkontexte/:id/sichtfreigaben
  * DELETE /sichtfreigaben/:id
* API Organisationen für Dienstanbieter
  * GET /organisation-info
* Regelungen für herstellereigene Attribute
### Geänderte APIs
* Anbieter können auch eigene Attribute hinzufügen
* Möglichkeit auch nach Mandanten zu filtern
* Attribut rufname in Datenmodell Person für Dienstanbieter
* Attribut gruppenzugehoerigkeit.von und gruppenzugehoerigkeit.bis an Dienstanbieter auslieferbar
* Attribut "verwaistepersonloeschen" bei  Datenmodell Personenkontext und Personpersonenkontext für Dienste hinzugefügt
* Bei Gruppen sind auch Mischungen von Datums- und Lernperiode-basierten Anfangs- und Endzeiten möglich.
* Über OIDC kann jetzt auch die E-Mail abgefragt werden
* Bei erfolgreichem Create/POST wird jetzt Code 201 statt 200 geliefert
### Geänderte Codelisten
* Neue Rollen SchB und NLehr in Codeliste Rolle
* Neue Rolle VLehr in Codeliste Gruppenrolle
* Codeliste Gruppenoptionen enthält derzeit keine Werte
### Geänderte Beschreibungen
* Nutzung der Schnittstelle durch Quellsysteme unter Allgemeines
* Lieferung leerer Listen bei nicht passenden Filtern
* Personenkontexte bei Personen mit mehren Rollen



