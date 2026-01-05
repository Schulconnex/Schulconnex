---
title: Empfehlungen für modifizierte Endpunkte
tags:
- Informativ
---

# Empfehlungen für modifizierte Endpunkte

Betreiber eines Schulconnex-Servers können auch Server bereitstellen, bei denen die Endpunkte von den spezifizierten Endpunkten abweichen.

Insbesondere kann ein Server:
* Einzelne Endpunkte nicht anbieten
* Zusätzliche Endpunkte anbieten
* Attribute aus Datenmodellen entfernen
* Datenmodelle um Attribute erweitern

# Hinzufügen von Endpunkten
Das Anbieten von zusätzlichen Endpunkten liegt außerhalb der Schulconnex-Spezifikation.
Es ist jedoch zu empfehlen, dass neue Endpunkte sich analog zu existierenden Endpunkten verhalten.
Insbesondere sollten:
* Namen von Endpunkten klein geschrieben sein
* Deutschsprachige Namen für die Endpunkte gewählt werden
* Datenmodelle den Mustern existierender Datenmodelle angepasst sein.

# Entfernen von Endpunkten
Werden spezifizierte Endpunkte nicht unterstützt, so muss bei Aufruf des Endpunktes der Fehler "501/00 Der Endpunkt ist nicht implementiert" geliefert werden, um deutlich zu machen, dass der Endpunkt bewusst nicht bereitgestellt wird. Eine Fehlermeldung "404 Endpunkt existiert nicht" ist nicht ausreichend.

Werden Endpunkte entfernt, so ist darauf zu achten, dass dieses konsistent geschieht. Insbesondere ist darauf zu achten, dass Änderungen an der Quellsystem-Schnittstelle auch entsprechend an der Dienste-Schnittstelle vorgenommen werden.

Wird beispielsweise der Endpunkt zum Erstellen von Sichtfreigaben entfernt, so sollte auch der Endpunkt zum Löschen von Sichtfreigaben entfernt werden.

Es liegt im Ermessen des Betreibers eines Schulconnex-Servers, wie mit Attributen umgegangen wird, welche nicht mehr über Schnittstellen verändert werden können. Wird die Möglichkeit zum Erstellen einer Sichtfreigabe entfernt, so besteht sowohl die Möglichkeit, im Attribut `sichtfreigabe` bei Personenkontexten automatisch immer „nein“ zu liefern, als auch die Möglichkeit das Attribut vollständig zu entfernen.

# Entfernen von Attributen aus Datenmodellen
Werden Attribute aus Datenmodellen entfernt, so sollte dieses konsistent geschehen.
Insbesondere sollten:
* Attribute, welche bei Quellsystemen entfernt wurden, auch für Dienste entfernt werden
* Attribute bei allen Endpunkten gleich behandelt werden
* Die Attribute `id` und `revision` immer beibehalten werden

# Hinzufügen von Attributen zu Datenmodellen
Beim Erweitern von Datenmodellen sollten die „[Richtlinien für Anwenderspezifische Attribute](vendor-extensions)" befolgt werden.

# Veröffentlichungen von Server-Informationen
Server, welche in der Implementierung von der Spezifikation abweichen, sollten diese Abweichungen dokumentieren.

Die empfohlene Vorgehensweise dafür ist:
1) Herunterladen der aktuellen OpenAPI YAML-Dateien
(Download OpenAPI Dienste und Download OpenAPI Quellsysteme)
2) Einpflegen aller serverspezifischen Abweichungen
(Endpunkte löschen, Endpunkte ergänzen, Datenmodelle anpassen)
3) Bereitstellen der veränderten OpenAPI YAML-Dateien für Entwickler
(Idealerweise als Download auf der eigenen Webseite oder, falls Erweiterungen nicht öffentlich sein sollen, auf anderen Wegen.)