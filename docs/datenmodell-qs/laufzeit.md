# Laufzeit

Die Laufzeiten von Gruppen können entweder direkt durch Datumsangaben festgelegt werden (`von`/`bis`) oder
durch Referenzen aufLernperioden (`vonlernperiode`/`bislernperiode`). Wird eine Lernperiode referenziert, so
steht `vonlernperiode` für das Anfangsdatum der Lernperiode (also das Attribut Beginn) und `bislernperiode`
für das Enddatum der Lernperiode. Eine Mischung von Datum- und Perioden-Angaben ist zulässig. So kann
beispielsweise eine Gruppe mit Anfang einer Lernperiode aktiv werden, aber mit Ablauf des Kalenderjahres
enden. In diesem Fall ist für den Anfangszeitpunkt `laufzeit.vonlernperiode` zu nutzen und für den
Endzeitpunkt `laufzeit.bis`. Es darf jedoch nur jeweils ein Anfangs- und Endzeitpunkt angegeben werden.
So dürfen `bislernperiode` und `bis` nicht gleichzeitig belegt sein und auch `vonlernperiode` und `von`
dürfen nicht gleichzeitig belegt sein. Ist ein Startzeitpunkt durch `vonlernperiode` oder `von` angegeben,
so darf der Endzeitpunkt nicht davor liegen. Ist kein Startdatum gegeben, so erstreckt sich die Laufzeit
der Gruppe über jeden Zeitpunkt vor dem Enddatum. Ist kein Enddatum angegeben, so ist jedes Datum nach
dem Startdatum innerhalb der Laufzeit.

| Attribut        | Typ                              | Anzahl   | Bemerkung                                                                                                                           | Qualifizierter Name                         |
|------------------|----------------------------------|----------|-------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------|
| von              | Datum (siehe Abschnitt Datumsformat) | 0..1     | Anfang des Gültigkeitszeitraums der Gruppe. Dieser Zeitpunkt kann auch in der Zukunft liegen.                                       | `urn:schulconnex:de:gruppe:laufzeit:von`   |
| vonlernperiode   | String (Code)                   | 0..1     | Code der zu einer Gruppe gehörenden Lernperiode. Referenz auf Code der Codeliste *Lernperiode*.                                     | `urn:schulconnex:de:gruppe:laufzeit:vonlernperiode` |
| bis              | Datum (siehe Abschnitt Datumsformat) | 0..1     | Ende des Gültigkeitszeitraums der Gruppe. Ende der Gruppenzugehörigkeit. Laufzeiten schließen den ersten und letzten Tag immer mit ein. Ist als `bis` der 31. Oktober 2025 angegeben, so endet die Laufzeit der Gruppe am 01.11.2025 um 00:00. | `urn:schulconnex:de:gruppe:laufzeit:bis`   |
| bislernperiode   | String (Code)                   | 0..1     | Code der zu einer Gruppe gehörenden Lernperiode. Referenz auf Code der Codeliste *Lernperiode*.                                     | `urn:schulconnex:de:gruppe:laufzeit:bislernperiode` |
