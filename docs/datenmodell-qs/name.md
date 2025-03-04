# Name

Datenmodell des Namens einer [Person](person).



Attribut | Typ | Anzahl | Bemerkung
--- | --- | --- | ---
name.familienname | String (DIN 91379.A) | 1 | Familienname(n) der Person. Mehrere Familiennamen werden durch Leerzeichen separiert.
name.vorname | String (DIN 91379.A) | 1 | Mehrere Vornamen werden durch Leerzeichen separiert.
name.initialenfamilienname | String (8) (DIN 91379.A) | 0..1 | Initial oder Initialen des Familiennamens, maximal acht Zeichen.
name.initialenvorname | String (8) (DIN 91379.A) | 0..1 | Initial oder Initialen des Vornamens, maximal acht Zeichen.
name.rufname | String (32) (DIN 91379.A) | 0..1 | Bei mehreren Vornamen wird der täglich im Gebrauch genutzte Vorname geführt, maximal 32 Zeichen.
name.titel | String (128) (DIN 91379.B) | 0..1 | Titel der Person (bspw. ein akademischer Grad, Dienst- und Amtsbezeichnungen oder militärische Ränge), maximal 128 Zeichen.
name.anrede | String (64/512) (DIN 91379.B) | 0..n | Liste (Array) von Namenszusätzen bei der Anrede. Jeder einzelne Namenszusatz hat eine Maximallänge von 64 Zeichen, die Maximallänge für alle Namenszusätze liegt bei 512 Zeichen. Es ist zu beachten, dass die Reihenfolge der Anreden im Array nicht spezifiziert ist. Es liegt im Aufgabenbereich der Anwendungen sicher zu stellen, dass mehrere Anreden in sinnvoller Weise dargestellt werden.
name.namenssuffix | String (64/1024) (DIN 91379.A) | 0..n | Liste (Array) von Namenssuffixen. Jeder einzelne Namenssuffix hat eine Maximallänge von 64 Zeichen, die Maximallänge für alle Namenssuffixe liegt bei 1024 Zeichen. Es ist zu beachten, dass die Reihenfolge der Suffixe im Array nicht spezifiziert ist. Es liegt im Aufgabenbereich der Anwendungen sicher zu stellen, dass mehrere Suffixe in sinnvoller Weise dargestellt werden.
name.sortierindex | String (Nummer) | 0..1 | Index des Buchstabens des Nachnamens, nach dem sortiert werden soll. Der Index ist Null-basiert, d. h. ein Wert von „4“ zeigt an, dass die ersten vier Buchstaben ignoriert und ab dem fünften Buchstaben des Nachnamens sortiert werden soll. Ist kein Sortierindex angegeben, so ist der Nachname entsprechend dem ersten Buchstaben in Listen einzusortieren, äquivalent zum Sortierindex „0“.
