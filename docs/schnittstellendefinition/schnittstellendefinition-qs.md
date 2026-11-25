---
title: ''
---

import Text from './schnittstellendefinition.md';
import Rueckgaben from './schnittstellendefinition-rueckgaben.md';

<Text />

#### POST

Per `POST` können große Datenmengen zum Webserver gesendet werden. Dabei werden
die Parameter nicht in die URL, sondern in den HTTP-Body geschrieben.
`POST` wird oft benutzt, um mehrere Daten gleichzeitig zu senden oder um
Entitäten zu erstellen.

#### PUT

`PUT` funktioniert ähnlich wie `POST` und dient dazu, bereits existierende Entitäten zu verändern. Dabei wird eine Entität vollständig mit den Daten im `PUT` überschrieben.

#### PATCH

`PATCH` funktioniert ähnlich wie `PUT` und dient dazu, Entitäten auf dem Webserver zu verändern. Anders als bei `PUT` werden hier nur die Daten verändert, welche im Request angegeben
wurden. Andere Daten bleiben unverändert erhalten. 

#### DELETE

Mit einem `DELETE` werden Entitäten auf dem Webserver gelöscht.

<Rueckgaben/>