---
title: Löschen von Personen
tags:
- Informativ
---

# Ablauf Löschen von Personenkontexten und Personen

Aus Sicht des [Datenschutzes][1] ist der Schulconnex-Server ein Datenübermittler zwischen
Schulverwaltung (Quellsystemen) und angebundenen Anwendungen (Dienste). Aus dieser Voraussetzung
leiten sich bestimmte gesetzliche Anforderungen an das Löschen von Personen und Personenkontexten ab.
Diese Anforderungen werden durch festgelegte Statusfolgen bei der Löschung konzeptuell umgesetzt.

[1]: https://www.gesetze-im-internet.de/bdsg_2018/__25.html

Besonders relevant aus Sicht des Datenschutzgesetzes sind hierbei zwei Aspekte: Erstens die Unverzüglichkeit
der Löschung und zweitens die Benachrichtigung anderer Organisationen, denen die Daten bereitgestellt wurden,
über die Löschung der Daten. Diese Organisationen sind dann aufgefordert, eventuelle Kopien der Daten
ihrerseits unverzüglich zu löschen.

Der Schulconnex-Service macht vom Ablauf her keinen Unterschied zwischen der Löschung von Personenkontexten
und Personen aus organisatorischen Gründen (wie „Schuljahr endet“, „Lehrkraft verlässt die Schule“) und
der Löschung aufgrund von [Art. 17 DSGVO („Recht auf Löschung“ / „Recht auf Vergessenwerden“)][2].
Im letzteren Fall ist jedoch die Frist zur Löschung deutlich kürzer, technisch wird
meist der aktuelle Tag als Löschtermin gesetzt.

Primäre Quellsysteme, synchronisierte Quellsysteme (über Sichtfreigaben) und andere Dienste
können den Löschtermin nutzen, um Nutzer und Nutzerinnen über eine bevorstehende Löschung
zu informieren und eventuell zu Aktionen (wie eigene Sicherung der Daten) aufzufordern.

## Löschen von Personenkontexten und Personen aus Sicht des primären Quellsystems

Um einen Personendatensatz und die dazugehörenden Personenkontexte zu löschen, geht das Quellsystem wie folgt vor:

1. Löschen aller Personenkontexte zu einer Person
1. Löschen der Personen

Allgemein werden Personenkontexte durch das Setzen eines Löschzeitpunkts gelöscht.

Wurden Personenkontexte noch nicht von angebundenen Diensten genutzt, so können diese
auch direkt mit dem HTTP-DELETE Aufruf der API `/personenkontexte/{id}` gelöscht werden.

Wurden die Daten jedoch bereits anderen Diensten bereitgestellt, dann ist die direkte Löschung
nicht mehr möglich (es wird der Fehlercode 400/13 geliefert) und die Löschung muss
durch Setzen des Löschzeitpunkts ausgelöst werden.

Dabei ist der Vorgang wie folgt:

- Es wird ein Löschzeitpunkt für jeden Personenkontext der Person gesetzt.
- Ein Löschzeitpunkt darf nicht in der Vergangenheit liegen.
- Zum Löschzeitpunkt wird der Personenkontext vom Schulconnex-Service gelöscht.
  Die Daten des Personenkontexts sind nicht mehr direkt zugreifbar.
- Im Fall, dass es sich um den einzigen Personenkontext der Person handelt, kann nach der Löschung
  dieses Personenkontexts auch die Person durch einen DELETE-Aufruf an `/personen/{id}` gelöscht werden.

import Text from './ablauf-löschen-dienste-information.md';

<Text />
