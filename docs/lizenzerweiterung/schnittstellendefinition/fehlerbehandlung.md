---
title: Fehlerbehandlung
---

# Fehlerbehandlung

Fehler bei der Nutzung der Schnittstelle werden grundsätzlich mit einem der unten gelisteten Response Codes zurückgegeben. Zusätzlich besitzt die Response auch einen Error Payload, welcher mehr Details über den Fehler enthält und für Entwickler gedacht ist.

Format des Error Payloads mit Beispielwerten:

```json
{
  "code": "401",
  "subcode": "01",
  "titel": "Access Token abgelaufen",
  "beschreibung": "Der Access-Token ist abgelaufen und muss erneuert werden."
}
```

## `400` - Bad Request

Der Aufruf ist nicht vollständig beziehungsweise fehlerhaft, so dass die Bearbeitung
nicht durchgeführt werden kann. Die Angaben beim Aufruf müssen vervollständigt
beziehungsweise angepasst werden.

Code | Sub-Code | Titel | Beschreibung
--- | --- | --- | ---
400 | 00 | `"Fehlerhafte Anfrage"` | `"Die Anfrage ist fehlerhaft:"` + spezifischer Hinweis auf erkannten Fehler.
400 | 01 | `"Fehlende Parameter"` | `"Folgende Parameter fehlen:"` + Liste fehlender Parameter.
400 | 02 | `"Falsche Parameter"` | `"Folgende Parameter haben andere Werte als von der Schnittstelle erwartet:"` + Liste fehlerhafte Parameter.

## `401` - Unauthorized

Eine Autorisierung wurde nicht angegeben beziehungsweise kann nicht bestätigt werden.
Es ist auch möglich, dass die Authentifizierung erneut durchgeführt werden muss,
wenn die Sitzung abgelaufen ist.

Code | Sub-Code | Titel | Beschreibung
--- | --- | --- | ---
401 | 00 | `"Zugang verweigert"` | `"Die Anfrage konnte aufgrund fehlender Autorisierung nicht verarbeitet werden."` + spezifische Fehlermeldung der Schnittstelle, die nicht in eine der anderen Kategorien fällt.
401 | 01 | `"Access Token abgelaufen"` | `"Der Access-Token ist abgelaufen und muss erneuert werden."`
401 | 02 | `"Invalider Access-Token"` | `"Invalider Access-Token. Autorisierung fehlgeschlagen."` Dieser Fehler tritt auf, wenn der Access-Token nicht valide ist oder nicht vollständig.
401 | 03 | `"Falsche Autorisierungsmethode"` | `"Die Anfrage konnte aufgrund einer nicht unterstützten Autorisierungsmethode nicht verarbeitet werden"` + spezifische Fehlermeldung der Schnittstelle, welche Autorisierungsmethode benutzt werden kann, beispielsweise `Authorization: Bearer`.

## `403` - Forbidden

Der Aufruf wird nicht ausgeführt, da nicht ausreichend Rechte vorhanden sind.

Die mit dem Token bei der Authentifizierung übergebenen Zugriffsrechte sind nicht ausreichend,
um den Aufruf vollständig auszuführen.

Code | Sub-Code | Titel | Beschreibung
--- | --- | --- | ---
403 | 00 | `"Fehlende Rechte"` | `"Die Autorisierung war erfolgreich, aber die erforderlichen Rechte für die Nutzung dieses Endpunktes sind nicht vorhanden."` + spezifische Fehlermeldung der Schnittstelle, die nicht in eine der anderen Kategorien fällt.

## `404` - Not found

Der Endpunkt existiert nicht beziehungsweise eine geforderte Entität ist nicht verfügbar.

Code | Sub-Code | Titel | Beschreibung
--- | --- | --- | ---
404 | 00 | `"Endpunkt existiert nicht"` | `"Der aufgerufene Endpunkt existiert nicht."`
404 | 01 | `"Angefragte Entität existiert nicht"` | `"Die angeforderte Entität existiert nicht."`

## `405` - Method not allowed

Die konkrete Anfrage ist nicht erlaubt.

Code | Sub-Code | Titel | Beschreibung
--- | --- | --- | ---
405 | 00 | `"Nicht erlaubt"` | `"Dieser Aufruf ist nicht erlaubt"` + spezifische Fehlermeldung der Schnittstelle, die nicht in eine andere Kategorie fällt.
405 | 01 | `"POST/PUT nicht erlaubt"` | `"Für diesen Endpunkt ist ein POST/PUT nicht erlaubt."`

<!-- ## `422` - Unprocessable Entity

Mit dem Statuscode 422 Unprocessable Entity wird darauf hingewiesen, dass die Nutzdaten der Antwort Entitäten enthalten, die vom erwarteten Datenmodell abweichen. [[422 on IETF HTTP Working Group]](https://httpwg.org/specs/rfc9110.html#status.422) [[422 on mdn]](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422)

Code | Sub-Code | Titel | Beschreibung
--- | --- | --- | ---
422 | 00 | `"Nicht verarbeitbare Entität"` | `"Dieser Aufruf ist syntaktisch korrekt, aber in der Antwort werden Fehler vorrliegen"` -->


## `500` - Interner Serverfehler

Aufgrund eines Serverfehlers kann der Aufruf nicht ausgeführt werden.

Code | Sub-Code | Titel | Beschreibung
--- | --- | --- | ---
500 | 00 | `"Interner Serverfehler"` | `"Es ist ein interner Fehler aufgetreten."` + spezifische Fehlermeldung der Schnittstelle, die nicht in eine der anderen Kategorien fällt.