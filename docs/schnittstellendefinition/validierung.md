---
title: Validierung
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
  Kapitel [7.4 Fehlerbehandlung - 400 Bad Request - Subcode 03 – „Validierungsfehler“](fehlerbehandlung#400---bad-request) gelistet.

- Bei `PUT` und `POST` Anfragen werden Query-Parameter dekodiert und wie Attributwerte
  des Payloads validiert. Query-Parameter werden nur URL-kodiert angenommen.
