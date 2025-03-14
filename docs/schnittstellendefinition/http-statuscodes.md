---
tags:
- Verbindlich
---
# HTTP-Statuscodes

## Erfolgreiche Ausführung

### `200` (Erfolgreiche Ausführung)

Die angeforderten Daten werden mit der HTTP-Response übermittelt, beispielsweise werden
die Daten einer Person im JSON-Datenformat übergeben.

### `201` (Erstellt)

Eine neue Ressource wurde erstellt.

## Daten unverändert

### `304` (Not Modified)

Die angeforderten Daten wurden seit dem letzten Zugriff nicht verändert und nicht erneut
ausgeliefert. Dieser Rückgabewert erfolgt nur dann, wenn beim vorhergehenden Zugriff auf
den Datensatz ein ETag geliefert wurde und beim erneuten Zugriff If-None-Match mit dem ETag
im HTTP-Anfrage-Header benutzt wurde sowie der aktuelle ETag des Servers und der ETag
im HTTP-Anfrage-Header übereinstimmen.

## Fehlerbehandlung

Fehler bei der Nutzung der Schnittstelle werden grundsätzlich mit einem der unten gelisteten
Response Codes zurückgegeben. Zusätzlich besitzt die Response auch einen Error Payload, welcher
mehr Details über den Fehler enthält und für Entwickler gedacht ist.

Format des Error Payloads mit Beispielwerten:

```json
{
  "code": "401",
  "subcode": "01",
  "titel": "Access Token abgelaufen",
  "beschreibung": "Der Access-Token ist abgelaufen und muss erneuert werden."
}
```

### `400` - Bad Request

Der Aufruf ist nicht vollständig beziehungsweise fehlerhaft, so dass die Bearbeitung
nicht durchgeführt werden kann. Die Angaben beim Aufruf müssen vervollständigt
beziehungsweise angepasst werden.

Code | Sub-Code | Titel | Beschreibung
--- | --- | --- | ---
400 | 00 | `"Fehlerhafte Anfrage"` | `"Die Anfrage ist fehlerhaft:"` + spezifischer Hinweis auf erkannten Fehler.
400 | 01 | `"Fehlende Parameter"` | `"Folgende Parameter fehlen:"` + Liste fehlender Parameter.
400 | 02 | `"Falsche Parameter"` | `"Folgende Parameter haben andere Werte als von der Schnittstelle erwartet:"` + Liste fehlerhafte Parameter.
400 | 03 | `"Validierungsfehler"` | `"Die Anfrage konnte nicht erfolgreich validiert werden."` + spezifische Fehlerbeschreibung, weshalb die Validierung fehlgeschlagen ist. Dies ist ein genereller Validierungsfehler, sofern keine der folgenden Fehlermeldungen passen.
400 | 04 | `"JSON-Struktur ungültig"` | Der Payload entspricht keiner gültigen JSON-Struktur.
400 | 05 | `"JSON-Struktur nicht deserialisierbar"` | Payload ist nicht deserialisierbar.
400 | 06 | `"JSON-Struktur besitzt ungültige Attribute"` | Unbekannte, beziehungsweise nicht gültige Attribute vorhanden.
400 | 07 | `"Attributwerte haben eine ungültige Länge"` | `"Textlänge von Attribut x ist nicht valide"`, wobei „x“ der Attributname ist, beispielsweise `person.name`.
400 | 08 | `"Attributwerte entsprechen nicht dem gültigen Zeichensatz"` | `"Text von Attribut x entspricht nicht dem Zeichensatz y"`, wobei „x“ der Attributname ist, beispielsweise `person.name` und „y“ der Zeichensatz, beispielsweise UTF-8.
400 | 09 | `"Datumsattribut hat einen ungültigen Wert"` | `"Datumsformat von Attribut x ist ungültig"`, wobei „x“ der Attributname ist.
400 | 10 | `"Attributwerte entspricht keinem der erwarteten Werte"` | `"Attribut x muss einen gültigen Wert aus der Werteliste für Attribut x enthalten."`, wenn Attribut „x“ keinen Wert oder einen ungültigen Wert zugewiesen bekommen hat, wobei „x“ der Attributname ist.
400 | 11 | `"Attribut darf nicht mit diesem Wert gesetzt oder verändert werden."` | `"Attribut x darf aufgrund fehlender Berechtigung nicht mit diesem Wert gesetzt oder verändert werden"`, wobei „x“ der Attributname ist, beispielsweise `person.rolle`.
400 | 12 | `"Person enthält noch Personenkontexte."` | `"Daten vom Typ „Person“ können nur gelöscht werden, wenn für diese Person keine Personenkontexte mehr existieren."`
400 | 13 | `"Personenkontext wird genutzt."` | `"Personenkontexte können über die API /personenkontexte/{id} nur dann direkt gelöscht werden, wenn sie von keinem anderen System genutzt wurden. Wurde der Personenkontext bereits extern genutzt, so muss die Löschung über andere APIs erfolgen."`
400 | 14 | `"Zyklische Referenzgruppe"` | `"Referenzgruppen dürfen keine zirkulären Referenzen haben."`
400 | 15 | `"Text zu lang"` | `"Die Länge eines übergebenen Textattributes überschreitet die in der Spezifikation angegebene Maximallänge."`
400 | 16 | `"Inkonsistente Laufzeitangabe"` | `"Laufzeiten (von Lernperioden) dürfen nur einen Startzeitpunkt (entweder von oder vonlernperiode) und einen Endzeitpunkt haben (bis oder bislernperiode). Mehrere Anfangs- oder Endangaben (beispielsweise bis und bislernperiode) sind nicht zulässig."`
400 | 17 | `"Doppelter Filter"` | `"Jeder Filter darf in der URL nur einmal benutzt werden. Filter wie ?pid=123&pid=124 sind nicht zulässig."`
400 | 18 | `"Beziehung kann nicht erstellt werden."` | `"Die Beziehung zwischen zwei Personenkontexten darf so nicht erzeugt werden."` + spezifische Fehlermeldung der Schnittstelle.
400 | 19 | `"Erreichbarkeit kann nicht hinzugefügt werden."` | `"Diese Erreichbarkeit ist so nicht zulässig."` + spezifische Fehlermeldung der Schnittstelle.

### `401` - Unauthorized

Eine Autorisierung wurde nicht angegeben beziehungsweise kann nicht bestätigt werden.
Es ist auch möglich, dass die Authentifizierung erneut durchgeführt werden muss,
wenn die Sitzung abgelaufen ist.

Code | Sub-Code | Titel | Beschreibung
--- | --- | --- | ---
401 | 00 | `"Zugang verweigert"` | `"Die Anfrage konnte aufgrund fehlender Autorisierung nicht verarbeitet werden."` + spezifische Fehlermeldung der Schnittstelle, die nicht in eine der anderen Kategorien fällt.
401 | 01 | `"Access Token abgelaufen"` | `"Der Access-Token ist abgelaufen und muss erneuert werden."`
401 | 02 | `"Invalider Access-Token"` | `"Invalider Access-Token. Autorisierung fehlgeschlagen."` Dieser Fehler tritt auf, wenn der Access-Token nicht valide ist oder nicht vollständig.
401 | 03 | `"Falsche Autorisierungsmethode"` | `"Die Anfrage konnte aufgrund einer nicht unterstützten Autorisierungsmethode nicht verarbeitet werden"` + spezifische Fehlermeldung der Schnittstelle, welche Autorisierungsmethode benutzt werden kann, beispielsweise `Authorization: Bearer`.

### `403` - Forbidden

Der Aufruf wird nicht ausgeführt, da nicht ausreichend Rechte vorhanden sind.

Die mit dem Token bei der Authentifizierung übergebenen Zugriffsrechte sind nicht ausreichend,
um den Aufruf vollständig auszuführen.

Code | Sub-Code | Titel | Beschreibung
--- | --- | --- | ---
403 | 00 | `"Fehlende Rechte"` | `"Die Autorisierung war erfolgreich, aber die erforderlichen Rechte für die Nutzung dieses Endpunktes sind nicht vorhanden."` + spezifische Fehlermeldung der Schnittstelle, die nicht in eine der anderen Kategorien fällt.

### `404` - Not found

Der Endpunkt existiert nicht beziehungsweise eine geforderte Entität ist nicht verfügbar.

Code | Sub-Code | Titel | Beschreibung
--- | --- | --- | ---
404 | 00 | `"Endpunkt existiert nicht"` | `"Der aufgerufene Endpunkt existiert nicht."`
404 | 01 | `"Angefragte Entität existiert nicht"` | `"Die angeforderte Entität existiert nicht."`

### `405` - Method not allowed

Die konkrete Anfrage ist nicht erlaubt.

Code | Sub-Code | Titel | Beschreibung
--- | --- | --- | ---
405 | 00 | `"Nicht erlaubt"` | `"Dieser Aufruf ist nicht erlaubt"` + spezifische Fehlermeldung der Schnittstelle, die nicht in eine andere Kategorie fällt.
405 | 01 | `"POST/PUT nicht erlaubt"` | `"Für diesen Endpunkt ist ein POST/PUT nicht erlaubt."`

### `409` - Conflict

Die zu verändernde Entität wurde durch Dritte verändert und führt daher zu einem Versionskonflikt.

Code | Sub-Code | Titel | Beschreibung
--- | --- | --- | ---
409 | 00 | `"Konflikt mit dem aktuellen Zustand der Ressource."` | `"Die Entität wurde eventuell durch Dritte verändert. Die Revisionsnummer stimmt nicht überein."`

## Nicht implementiert

### `501` - Not Implemented

Der Endpunkt wird vom Server nicht zur Verfügung gestellt.

Code | Sub-Code | Titel | Beschreibung
--- | --- | --- | ---
501 | 00 | `"Der Endpunkt ist nicht implementiert."` | `"Der aufgerufene Endpunkt ist spezifiziert, wird jedoch auf diesem Server nicht bereitgestellt."`
501 | 01 | `"Der Endpunkt ist noch nicht implementiert."` | `"Der aufgerufene Endpunkt ist spezifiziert, wird jedoch auf diesem Server noch nicht bereitgestellt."`
