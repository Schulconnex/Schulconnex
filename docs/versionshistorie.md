# Versionshistorie

Die Versionshistorie beschreibt die wichtigsten inhaltlichen Änderungen zwischen den veröffentlichten Versionen von Schulconnex.

Detailierte Informationen zu den Änderungen finden sich in der Historie der Github Issues und der entsprechenden Pull Requests.

## Änderungen von Version 1.4 zu Version 1.5

### Allgemeines

* Regeln für herstellereigene Attribute definiert

### Neue Datenmodelle und APIs

* API Sichtfreigabe
  * POST /personenkontexte/:id/sichtfreigaben
  * GET /personenkontexte/:id/sichtfreigaben
  * DELETE /sichtfreigaben/:id
* API Organisationen für Dienstanbieter
  * GET /organisationen-info

### Geänderte APIs

* Filterattribut `mandant` für Quellsysteme definiert
* Attribut `rufname` in das Datenmodell Person für Dienstanbieter aufgenommen
* Attribute `gruppenzugehoerigkeit.von` und `gruppenzugehoerigkeit.bis` in das Datenmodell Gruppe für Dienstanbieter aufgenommen
* Erfolgreiche `HTTP POST`-Aufrufe werden mit dem Code `201` quittiert. **Diese Änderung ist nicht rückwärtskompatibel.**

### Geänderte Codelisten

* Codeliste Rollen: Neue Rollen `SchB` (Schulbetreuung) und `NLehr` (Nichtlehrendes Personal) definiert
* Codeliste Gruppenrollen: Neue Rolle `VLehr` (Vertretungslehrkraft) definiert
* Die Codeliste Gruppenoptionen enthält derzeit keine Werte.
