---
title: Nutzergruppen für Dienste
tags: 
- Informativ
---

# Nutzergruppen für Dienste

Manche Clients brauchen spezifische Nutzenrollen, die im Schulconnex-Server direkt verwaltet werden sollen. Da nicht für jeden Client neue Organisations- oder Systemrollen angelegt werden können, bietet es sich an, Berechtigungen im System des Clients über Gruppen (Nutzergruppen) abzubilden. 

Um einen Missbrauch zu verhindern, werden Nutzergruppen abgesichert.

Absicherungsmaßnahmen sind z. B.:
* Nutzergruppen dürfen nicht über die Quellsystem-API angelegt, gelesen, bearbeitet oder gelöscht werden.
* Nutzergruppen dürfen über die Dienste-API nur an die Clients, für die sich eingerichtet werden, ausgeliefert werden.
* Nutzergruppen sind am Typ und an der Bezeichnung der Gruppe identifizierbar.

Die Bezeichnungen von Nutzergruppen werden wie Schemaattributfreigaben zentral als Teil der Konfiguration des Dienstes verwaltet.

Die fachliche Umsetzung kann z. B. beeinhalten:
* Server-Admins können bei der Konfiguration die Bezeichnungen der Nutzergruppen, die der Dienst verwendet, konfigurieren.
* Gruppen des Typs "Nutzergruppe" werden nicht über die QS-API angelegt, gelesen, bearbeitet oder gelöscht.
* Gruppen und Gruppenzugehörigkeiten vom Typ "Nutzergruppe" werden an /person-info und /personen-info nur ausgeliefert wenn für den aufrufenden Dienst eine Nutzergruppe mit der entsprechenden Bezeichnung konfiguriert oder zugeordnet wurde.