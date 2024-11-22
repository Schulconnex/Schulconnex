# Kapitel: Analyse und Semantik der Lizenzbeispiele
Im Folgenden werden verschiedene Lizenzbeispiele im ODRL-Format dargestellt. Diese Beispiele zeigen, wie unterschiedliche Nutzungsszenarien mithilfe von ODRL modelliert werden können, um die Semantik und Einschränkungen der Nutzungsrechte präzise und maschinenlesbar abzubilden.

---

### Generische Darstellung einer Nutzungsvereinbarung
Hier wird die generische Klasse "Set" verwendet. Semantisch passender wäre die Verwendung von "Agreement", da das ODRL-Objekt eine Nutzungsvereinbarung mit einem Medienanbieter und für den konkreten Personenkontext der Zuweisung abbildet. 

Wenn es sich bei dem Zielobjekt (target) um eine Software, wie z. B. ein Online-Schulbuch oder eine Lernanwendung, handelt, erlaubt die Nutzungsvereinbarung, diese Software remote auszuführen ("execute"). Die Verwendung von "use" scheint nach https://w3c.github.io/odrl/bp/#x7-how-to-generalize-actions eher den Elterntyp aller Rechte abzubilden oder alle anderen Rechte zu implizieren. Im letzteren Fall würde die Verwendung von "use" die Übertragung weitgehender Nutzungsrechte bedeuten, was nicht gemeint sein kann. 

Das Attribut "uid" muss einen IRI sein, entsprechende Endpunkte müssen also in moin.schule implementiert werden. Der Endpunkt würde das aktuelle Objekt zurückliefern. 
```json
{
    "@context": [
        "http://www.w3.org/ns/odrl.jsonld"
    ],
    "@type": "Agreement",
    "uid": "https://api-dienste.moin.schule/v1/lizenz-info/9230294b-68da-4f4f-aa63-ad9040122aa7",
    "target": {
        "uid": "urn:schule:medium:123456789",
        "partOf": "https://www.schule-test.de/api/external/univention/media"
    },
    "permission": [
        {
            "action": [
                "execute"
            ]
        }
    ]
}
```
#### Semantik:
* Die Klasse Agreement beschreibt eine explizite Nutzungsvereinbarung zwischen dem Medienanbieter und der Organisation.
* Praktikabilität: Eignet sich für allgemeine Lizenzverträge ohne spezifische Einschränkungen.


### Erweiterung durch Nutzungseinschränkungen

Das Recht, die Anwendung auszuführen, ist durch zwei zusätzliche Bedingungen eingeschränkt: 

* Die Nutzung muss im aktuellen Schuljahr, also zwischen dem 1.8.2023 00:00 Uhr MESZ inklusiv und dem 1.8.2024 00:00 Uhr MESZ exklusiv, liegen. 
* Der Lizenzstatus darf nicht "deactivated" sein. Wenn man annimmt, dass Lizenzstatus die Werte "provisioned", "activated" und "deactivated" annehmen kann, wäre die Nutzung beim aktuellen Status "provisioned" also erlaubt. Würde die Bedingung `urn:schulconnex:de:odrl:lizenzstatus eq activated` gesetzt werden, müsste der Client das so interpretieren, dass ein Aufruf nicht erfolgreich ist, weil nicht alle Bedingungen für die Nutzung erfüllt sind. 

```json
{
    "@context": [
        "http://www.w3.org/ns/odrl.jsonld",
        {
            "scx": "http://schulconnex.de/lizenz-info/ns/1#"
        }
    ],
    "@type": "Set",
    "uid": "https://api-dienste.moin.schule/v1/lizenz-info/9230294b-68da-4f4f-aa63-ad9040122aa7",
    "target": {
        "uid": "urn:schule:medium:123456789",
        "partOf": "https://www.schule-test.de/api/external/univention/media"
    },
    "permission": [
        {
            "action": [
                "execute"
            ],
            "constraint": [
                {
                  "leftOperand": "urn:schulconnex:de:odrl:lizenzstatus",
                  "operator": "neq",
                  "rightOperand": "deactivated",
                  "status": "provisioned"
                },
                {
                  "leftOperand": "dateTime",
                  "operator": "gteq",
                  "rightOperand": "2023-08-01T00:00+0200"
                },
                {
                  "leftOperand": "dateTime",
                  "operator": "lt",
                  "rightOperand": "2024-08-01T00:00+0200"
                }
              ]
        }
    ],
    "scx:anlagen": {
        "scx:lizenzschluessel": [
            {
                "scx:code": "e5f68003-4ec3-4d16-8dbe-8dcd07afc587"
            }
        ]
    }
}
```


### **Schullizenz (Eingeschränkte Nutzung auf eine bestimmte Schule)**

Das Attribut "partOf" unterhalb von "assignee" referenziert eine "PartyCollection", zu der der "assignee" gehören muss. Die PartyCollection ist hier nur durch eine Bedingung (refinement) definiert. Die Bedingungen müssen so definiert sein, dass sie nach den Regeln gemäß https://w3c.github.io/odrl/formal-semantics/#sematics-of-permission so ausgewertet werden, dass sie den tatsächlichen Lizenzvereinbarungen entsprechen. 

In dem Beispiel besteht das Recht, die Software auszuführen, nur dann, wenn die Person, der die Lizenz zugewiesen wurde (assignee) Teil einer Gruppe (PartyCollection) ist, für die die Bedingung (refinement) `urn:schulconnex:de:personenkontext:organisation:kennung eq NI_12345` zutrifft. Die Schulnummer muss also NI_12345 sein. 

Auf die gleiche Art und Weise könnte das Nutzungsrecht an die Zugehörigkeit zu einer Gruppe gebunden werden, z. B. durch die Bedingung `urn:schulconnex:de:personenkontext:gruppe:id eq 4230df82-0c7b-4546-be8d-a8f4efb3a343`. Ob das eine "Gruppenlizenz" im Sinne des Anbieters wäre, müsste geklärt werden. 

```json
{
    "@context": [
        "http://www.w3.org/ns/odrl.jsonld",
        {
            "scx": "http://schulconnex.de/lizenz-info/ns/1#"
        }
    ],
    "@type": "Set",
    "uid": "https://api-dienste.moin.schule/v1/lizenz-info/9230294b-68da-4f4f-aa63-ad9040122aa7",
    "target": {
        "uid": "urn:schule:medium:123456789",
        "partOf": "https://www.schule-test.de/api/external/univention/media"
    },
    "permission": [
        {
            "action": [
                "execute"
            ],
            "assignee": {
                "partOf": {
                    "refinement": [
                        {
                            "leftOperand": "urn:schulconnex:de:personenkontext:gruppe:id",
                            "operator": "eq",
                            "rightOperand": "4230df82-0c7b-4546-be8d-a8f4efb3a343"
                        }
                    ]
                }
            }
        }
    ]
}
```

#### Semantik:
* Die Berechtigung zur Nutzung (execute) ist an eine spezifische Organisation gebunden, die durch die Schulkennung NI_12345 identifiziert wird.
* Dieses Modell stellt sicher, dass nur Benutzer einer bestimmten Schule die Anwendung nutzen können.
* Praktikabilität: Hilfreich für Lizenzen, die an eine Institution gebunden sind, z. B. Schulweiten-Lizenzen.

### Gruppenlizenz
Eine Schul- oder Gruppenlizenz könnte alternativ durch direkte Referenzierung des Schul- oder Gruppenobjekts per IRI abgebildet werden. Das würde technisch aber bedeuten, dass zusätzliche Endpunkte für diese IRI in moin.schule implementiert werden müssten. 

### Lehrerlizenz (an spezifische Rolle gebunden)

Auf gleiche Art und Weise lässt sich die Bedingung abbilden, dass der nutzende Personenkontext eine bestimmte Schulconnex-Organisationsrolle hat. 

```json
{
    "@context": [
        "http://www.w3.org/ns/odrl.jsonld",
        {
            "scx": "http://schulconnex.de/lizenz-info/ns/1#"
        }
    ],
    "@type": "Set",
    "uid": "https://api-dienste.moin.schule/v1/lizenz-info/9230294b-68da-4f4f-aa63-ad9040122aa7",
    "target": {
        "uid": "urn:schule:medium:123456789",
        "partOf": "https://www.schule-test.de/api/external/univention/media"
    },
    "permission": [
        {
            "action": [
                "execute"
            ],
            "assignee": {
                "refinement": [
                    {
                        "leftOperand": "urn:schulconnex:de:personenkontext:rolle",
                        "operator": "eq",
                        "rightOperand": "lehrend"
                    }
                ]
            }
        }
    ],
    "scx:anlagen": {
        "scx:lizenzschluessel": [
            {
                "scx:code": "e5f68003-4ec3-4d16-8dbe-8dcd07afc587"
            }
        ]
    }
}
```

#### Semantik:
* Nur Benutzer mit der Rolle lehrer können die Berechtigung zur Nutzung der Anwendung erhalten.
* Praktikabilität: Diese Lizenzart ist hilfreich, um bestimmte Rechte nur auf Lehrkräfte zu beschränken.



### Fazit
Die Beispiele zeigen, wie ODRL für die Modellierung von Nutzungsrechten genutzt wird, um unterschiedliche Lizenzarten und -bedingungen abzubilden. Jede Darstellung erfüllt spezifische Anforderungen und kann flexibel erweitert werden. Die Nutzung von JSON-LD gewährleistet Interoperabilität und einfache Integration in bestehende Systeme.