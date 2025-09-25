---
title: ''
---

## Information von Diensten über die Löschung von Personenkontexten

Die [DSGVO schreibt in Artikel 17][2] vor, dass Dienste, welchen personenbezogene Daten bereitgestellt
wurden, über die Löschung der Daten zu informieren sind, um diesen zu ermöglichen, alle Links
zu diesen personenbezogenen Daten oder Kopien oder Replikationen dieser personenbezogenen Daten
unverzüglich zu löschen.

[2]: https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679#d1e2621-1-1

Um dies zu ermöglichen, wird für Dienste, welche persistent Daten speichern, der API-Endpunkt `/personen-info`
bereitgestellt.

Diese Schnittstelle liefert zu allen aktiven Personenkontexten, welche an das System ausgeliefert
wurden und die nicht gelöscht sind, die (pseudonymisierte) Kontext-ID sowie, soweit gesetzt,
den geplanten Löschzeitpunkt. Letzterer ist nur als Absichtserklärung zu verstehen und kann dazu dienen,
die Nutzerin oder den Nutzer darauf hinzuweisen, dass der Zugang demnächst endet, und eventuell aufzufordern,
relevante Daten vor dem Termin zu sichern. Die Kenntnis des Löschzeitpunkts allein ist aber nicht ausreichend,
um die Löschung vorzunehmen, da der Löschzeitpunkt gelöscht oder geändert werden kann.

Es ist Aufgabe des Dienstes, den API-Endpunkt `/personen-info` mit ausreichender Regelmäßigkeit abzurufen,
damit eine angemessen schnelle Löschung erfolgen kann.

Hat ein Dienst zu einer Person alle lokal persistent gehaltenen Personenkontext-Daten gelöscht,
so muss er auch die persistent gehaltenen Daten zur Person löschen.
