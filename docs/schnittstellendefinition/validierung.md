---
title: Validierung
tags: 
- Verbindlich
---
# Validierung der Anfrage

Alle Anfragen werden validiert und auf Korrektheit überprüft. Sobald eine Anfrage die
Validierung nicht besteht, wird eine Fehlermeldung zurückgegeben.

Die Priorisierung der Validierung sieht wie folgt aus:

- Zunächst wird die Zugriffsberechtigung überprüft und ein `401 Unauthorized` zurückgegeben,
  sobald eine Autorisierung benötigt wird.

- Anschließend wird das Datenmodell in der Anfrage überprüft. Bei dieser Validierung
  wird beim ersten Fehler im Datenmodell sofort mit einem passenden Fehler geantwortet
  und die Verarbeitung der Anfrage abgebrochen. Fehlermeldungen sind unter
  [Fehlerbehandlung - 400 Bad Request](http-statuscodes#400---bad-request) gelistet. 
  Subcode 04 und darauf folgende Codes beschreiben spezifische Validierungsfehler, 
  Subcode 03 wird geliefert, wenn ein Validierungsfehler auftritt, aber keine der
  spezifischen Fehlermeldungen passt.

- Bei `PUT` und `POST` Anfragen werden Query-Parameter dekodiert und wie Attributwerte
  des Payloads validiert. Query-Parameter werden nur URL-kodiert angenommen.
