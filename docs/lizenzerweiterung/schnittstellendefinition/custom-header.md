---
title: Teilweise Fehlerhafte Verarbeitung
---

# Teilweise Fehlerhafte Verarbeitung

Bei einer Anfrage an den Webserver werden für die angeforderte Antwort vom Webserver Informationen intern und / oder von registrierten Diensten angefordert und verarbeitet. Unter Umständen kann es zu dem Zustand kommen, dass eines der für die Antwort benötigten Informationen Fehlerhaft oder nicht Erreichbar ist. Standardmäßig werden nur die Informationen für die Antwort verarbeitet, welche erfolgreich angefordert werden konnten.

Sofern die Schnittstelle es ermöglicht, kann bei der Anfrage das Ausliefern der Fehlerinformationen angefordert werden. Diesbezüglich muss es in der Antwort-Nutzlast signalisiert werden.

Nachfolgend werden die Möglichkeiten der Signalisierung, dass die Nutzdaten der Antwort Entitäten enthalten, die vom erwarteten Datenmodell abweichen gelistet.

## Custom-Header `Content-Partial-Error` (Nicht verarbeitbare Entität)

Mit dem Custom-Header Content-Partial-Error wird in der Antwort-Nutzlast mit dem Wert `TRUE` darauf hingewiesen, dass die Anfrage zwar syntaktisch korrekt war, aber inhaltliche Fehler vorliegen, die eine vollständige Verarbeitung verhindern. Kontextuell ähnlich wird für eine Abtwort-Nutzlast darauf hingewiesen, dass die Nutzdaten der Antwort Entitäten enthalten, die vom erwarteten Datenmodell abweichen. [[5]](https://www.rfc-editor.org/rfc/rfc6648)
