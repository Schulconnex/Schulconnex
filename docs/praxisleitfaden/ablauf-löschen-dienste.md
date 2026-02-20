---
title: Löschen von Personen
tags: 
- Informativ
---

# Ablauf Löschen von Personenkontexten und Personen

Um einen Personendatensatz und die dazugehörenden Personenkontexte zu löschen, geht ein Quellsystem wie folgt vor:

1. Löschen aller Personenkontexte zu einer Person
1. Löschen der Personen

Allgemein werden Personenkontexte durch das Setzen eines Löschzeitpunkts gelöscht, außer sie wurden
bisher an keine Dienste ausgeliefert und können direkt im Quellsystem gelöscht werden.

Wurden Daten bereits an einen Dienst ausgeliefert, dann ist die direkte Löschung
nicht mehr möglich und die Löschung wird durch Setzen des Löschzeitpunkts ausgelöst.

import Text from './ablauf-löschen-dienste-information.md';

<Text/>
