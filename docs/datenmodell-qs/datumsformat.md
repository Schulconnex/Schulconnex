---
tags:
- Verbindlich
---
# Datumsformat

Alle Datumsangaben werden entsprechend der ISO-8601-Formatierung `YYYY-MM-DD` dargestellt. Sie beinhalten
ausschließlich die vierstellige Jahreszahl, die zweistellige Monatsnummer sowie die zweistellige
Tagesnummer, jeweils durch Bindestriche getrennt. Negative Jahreszahlen sind nicht zulässig,
ebenso wenig wie Jahreszahlen ohne Jahrhundertangabe, Monatsnamen oder einstellige Monats- und Tagesangaben.
Somit ist `2022-08-19` eine zulässige Datumsangabe. Nicht zulässige Datumsdarstellungen sind
`22-08-19`, `2022-8-19`, `2022-AUG-19` oder `2022-AU-19`.

Einen Sonderfall stellt hier das Format zur Darstellung eines Löschzeitpunkts dar. Anders als bei sonstigen
Datumsangaben, welche nur tagesgenau benötigt werden, ist für den Löschzeitpunkt auch die Uhrzeit relevant.
Das Format für einen Löschzeitpunkt ist `YYYY-MM-DD'T'hh:mm'Z'` als UTC-Zeitpunkt.
