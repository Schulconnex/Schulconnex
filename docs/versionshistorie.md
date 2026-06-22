---
tags:
- Informativ
---
# Versionshistorie

Die Versionshistorie beschreibt die wichtigsten inhaltlichen Änderungen zwischen den veröffentlichten Versionen von Schulconnex.

Detailierte Informationen zu den Änderungen finden sich in der Historie der Github Issues und der entsprechenden Pull Requests.


## Änderungen von Version 1.7 zu Version 1.8

### Geänderte APIs

* Bei der Auflistung von Organisationen über die Dienste-API `organisationen-info` wird jetzt das Attribut `id` mitgeliefert.
* Eine Sichtfreigabe kann nicht mehr direkt über POST/PUT auf `personen/:id/personenkontexte` innerhalb eines Personenkontextes gesetzt oder verändert werden.
* Bei `organisationen-info` erfolgt die Autorisierungsmethode über `oAuthForServices` statt mit `oAuthForUser`. (Fehlerkorrektur)
* Über die Filter `offset` und `limit` können Antworten auf Leseanfragen auf `personen-info` paginiert werden.
* Das Datenmodell Anschrift ist um die Klasse `verwaltungspolitischeKodierung` mit dem Attribut `Bundesland` erweitert worden.
* Bei den APIs `personen` und `personenkontexte` kann nach Organisations-IDs gefiltert werden.
* Das Format des Löschzeitpunktes wird jetzt korrekt nach ISO 8601 auf `YYYY-MM-DDThh:mmZ` angegeben und auf die Norm Bezug genommen. Insbesondere wird klargestellt, dass Löschzeitpunkte im 24-Stunden Format anzugeben sind.

### Geänderte Codelisten
* Lokalisierung ist nicht mehr über eine Codeliste repräsentiert. Der erlaubten Werte werden vom Betreiber eines Schulconnex-Servers vorgegeben.
* Es wurde eine zusätzliche Codeliste `Bundesland` eingeführt.
* Der Wert `Studienseminar` wurde der Codeliste `Organisationstyp` hinzugefügt.
  
### Sonstiges
* Qualifizierter Namen: Es wurden qualifizierter Namen im URN Format für Schulconnex-eigene Attribute eingeführt. (Beispiel: `urn:schulconnex:de:kern:gruppe:optionen`)
* Codelisten sind jetzt einer von drei Kategorien zugeordnet: Schulconnex-eigene, generische und lokale Codelisten
* Beschreibung zu Auskunftssperren neu formuliert.
* Allen Codelisten wurde eine Beschreibung hinzugefügt.
* Einzelnen Codelistenwerten wurden zusätzliche Beschreibungen beigefügt.
* Klarstellungen zu Sichtfreigaben (Löschberechtigung)
* Beschreibung wie mehrere API-Calls über JSON-Batching zusammengefasst werden können.

## Änderungen von Version 1.6 zu Version 1.7

### Geänderte APIs
* Neuer Filter zur Ausgabe von `hat_als` Beziehungen bei:
    * /personen
    * /personen/:id/personenkontexte
    * /personenkontexte   
* Die API `personen-info` gibt keine `ist_von` Beziehungen aus
* Die API `organisationen` kann auch Organisationsbeziehungen mit ausgeben
* Bei API `organisationen-info` wurde die Struktur der Query-Filter an `personen-info` angepasst

### Geänderte Codelisten
* Neuer Wert in Codeliste `Organisationsbeziehung`: 
    * `Medienzentrum`
    
### Sonstiges
* Praxisleitfaden: Aufruf eines Mediums über ein Medienregal
* Informationen zur Gewährleistung von Datenschutzzielen durch Schulconnex

## Änderungen von Version 1.5.1 zu Version 1.6

### Nutzungsrechte-API
* Neue Rubrik Nutzungsrechte hinzugefügt:
     *  Allgemeines
     *  Nutzung der REST API
     *  Praxisleitfaden - Nutzungsrechte mit ODRL
     *  API Nutzungsrechte: 
         * /policies-info

### Geänderte Datenmodelle
* Attribut `bezeichnung` dem Datenmodell `Fach` hinzugefügt

### Geänderte Codelisten
* `Lokalisierung` referenziert direkt RFC 5646 und nutzt keine eigene Codeliste mehr
* Codeliste `Organisationstyp` hat drei neue Werte: 
    * `Medienzentrum`
    * `Behoerde`
    * `SchTrae (Schulträger)`

## Änderungen von Version 1.5 zu Version 1.5.1

### Allgemeines

* Verbesserte Gliederung der Webseite
* Kennzeichnung der Teile der Spezifikation als verbindlich oder informativ
* Sprachliche Verbesserungen

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

* Codeliste Rollen: Neue Rollen `SchB` (Schulbegleiter/-in) und `NLehr` (Nichtlehrendes Personal) definiert
* Codeliste Gruppenrollen: Neue Rolle `VLehr` (Vertretungslehrkraft) definiert
* Die Codeliste Gruppenoptionen enthält derzeit keine Werte
