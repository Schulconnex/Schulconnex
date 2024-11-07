## Einfaches Beispiel

### [1_anwendung.ld.json](1_anwendung.ld.json)

Hier wird die generische Klasse "Set" verwendet. Semantisch passender wäre die Verwendung von "Agreement", da das ODRL-Objekt eine Nutzungsvereinbarung mit einem Medienanbieter und für den konkreten Personenkontext der Zuweisung abbildet. 

Wenn es sich bei dem Zielobjekt (target) um eine Software, wie z. B. ein Online-Schulbuch oder eine Lernanwendung, handelt, erlaubt die Nutzungsvereinbarung, diese Software remote auszuführen ("execute"). Die Verwendung von "use" scheint nach https://w3c.github.io/odrl/bp/#x7-how-to-generalize-actions eher den Elterntyp aller Rechte abzubilden oder alle anderen Rechte zu implizieren. Im letzteren Fall würde die Verwendung von "use" die Übertragung weitgehender Nutzungsrechte bedeuten, was nicht gemeint sein kann. 

Das Attribut "uid" muss einen IRI sein, entsprechende Endpunkte müssen also in moin.schule implementiert werden. Der Endpunkt würde das aktuelle Objekt zurückliefern. 

Der Lizenzschlüssel gehört nicht zu den vertraglichen Nutzungsbedingungen für das Medium und passt semantisch m. E. gar nicht das ODRL-Datenmodell. Der Vorschlag wäre, ihn als Schulconnex-Anlage an das ODRL-Objekt anzuhängen. 

### Auslieferung nicht im JSON-LD-Format [1_anwendung.json](1_anwendung.json)

Im JSON-LD-Format wird nur ausgeliefert, falls `Accept: application/ld+json` angefordert wird. 

### Erweiterung durch Nutzungseinschränkungen [2_anwendung_erweitert.ld.json](2_anwendung_erweitert.ld.json)

Das Recht, die Anwendung auszuführen, ist durch zwei zusätzliche Bedingungen eingeschränkt: 

* Die Nutzung muss im aktuellen Schuljahr, also zwischen dem 1.8.2023 00:00 Uhr MESZ inklusiv und dem 1.8.2024 00:00 Uhr MESZ exklusiv, liegen. 
* Der Lizenzstatus darf nicht "deactivated" sein. Wenn man annimmt, dass Lizenzstatus die Werte "provisioned", "activated" und "deactivated" annehmen kann, wäre die Nutzung beim aktuellen Status "provisioned" also erlaubt. Würde die Bedingung `urn:schulconnex:de:odrl:lizenzstatus eq activated` gesetzt werden, müsste der Client das so interpretieren, dass ein Aufruf nicht erfolgreich ist, weil nicht alle Bedingungen für die Nutzung erfüllt sind. 