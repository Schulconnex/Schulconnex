---
title: Rollenänderung
tags: 
- Informativ
---

# Änderung der Rolle in einer Organisation

Eine direkte Änderung der Rolle innerhalb eines Personenkontextes über die API-Schnittstelle
`/personenkontexte/{id}` ist nicht möglich.

Ist eine Änderung der Rolle notwendig, so muss dieses über die Erstellung eines neuen Personenkontextes geschehen.

Der empfohlene Ablauf ist wie folgt:

1. Erstellen eines neuen Personenkontextes mit der neuen Rolle
1. Überprüfen der erfolgreichen Erstellung des neuen Personenkontextes
1. Löschen des alten Personenkontextes

Grund für dieses Vorgehen ist das Vermeiden potentieller Fehler.

- Es darf für eine Person keine zwei Personenkontexte mit identischen Rollen in einer
  Organisation geben. Bei direkter Änderung könnte es geschehen, dass ein Konflikt mit
  einem bereits bestehenden Kontext entsteht. Dieser Fehler kann durch schrittweise Änderung
  (erst erstellen, dann löschen) klarer erkannt und einfacher behandelt werden.
- Durch die Erstellung eines neuen Personenkontextes vor dem Löschen des alten Personenkontextes
  wird vermieden, dass es zu Rechte-Problemen durch die Änderungsreihenfolge kommt. Insbesondere
  wird vermieden, dass bei einer Änderung von der Administratorrolle in eine Rolle mit weniger
  Berechtigungen die Löschung der Administratorrolle erfolgt, aber in der Folge das Recht zur Erstellung
  der anderen Rolle nicht mehr besteht.
- Durch die explizite Löschung des ursprünglichen Personenkontextes und Neuerstellung eines
  anderen Personenkontextes, statt einer direkten Änderung, wird sichergestellt, dass die Mechanismen
  zur Benachrichtigung anderer Dienste (wie das Löschdatum oder das Erstellungsdatum der Personenkontext-ID) funktionieren.
- Es ist möglich, dass eine spätere Version dieser Spezifikation die direkte Änderung des Personenkontextes
  ausschließen wird, so dass die hier beschriebene Vorgehensweise die Zukunftssicherheit der Anwendung erhöht.
