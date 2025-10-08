---
tags:
- Informativ
---

# Gewährleistung von Datenschutzzielen durch Schulconnex

Neben den gebräuchlichen technischen-organisatorischen Maßnahmen beim Betrieb von Schulconnex-Servern, unterstützt die Schulconnex-Spezifikation den Datenschutz bereits durch eine Reihe von Designentscheidungen.

Insbesondere beinhalten diese als verbindliche Vorgaben:
* Datensparsamkeit als Grundprinzip (Privacy by Design und Privacy by Default)
Prinzipiell werden an Dienste nur Daten ausgeliefert, welche von dem Dienst auch benötigt werden. Für jedes Datenmodell wird zwischen dem Server-Betreiber und dem Dienstanbieter individuell vertraglich festgelegt, welche Daten dem Dienst bereitgestellt werden.
Für alle nicht technisch notwendigen Attribute eines Datenmodells ist eine explizite Freigabe des Attributes notwendig. Die Standardeinstellung ist somit die Nicht-Bereitstellung von Daten.

* Technische Identifier für Datenobjekte werden für jeden Dienst einzeln pseudonymisiert und gelten ausschließlich für diesen Dienst.

* Die Bereitstellung von Daten einer Organisation an eine andere Organisation muss explizit über eine Sichtfreigabe erfolgen, die jederzeit widerrufen werden kann. Sichtfreigaben erlauben anderen Organisationen nur lesenden Zugriff.

* Für Personen mit besonderem Schutzbedarf besteht die Möglichkeit eine Auskunftssperre zu setzen, um die Übertragung von Informationen an andere Quellsysteme oder Dienste zu blockieren.

* Hat eine Person das Recht auf Einschränkung der Verarbeitung ihrer Daten nach Artikel 18 der EU-Datenschutz-Grundverordnung (DSGVO) in Anspruch genommen, so können diese Daten entsprechend markiert werden, so dass eine weitere Verarbeitung vorerst nicht stattfindet.

Weiterhin stellt die Schulconnex-Spezifikation einen informativen Praxisleitfaden für die Implementierungs der  Abläufe zum Löschen von Personen-Daten und Personenkontext-Daten bereit, sowie Mechanismen diese Löschanforderungen auch an Dienste zu liefern, welche die Daten bereits genutzt haben und eventuell lokale Kopien halten.
