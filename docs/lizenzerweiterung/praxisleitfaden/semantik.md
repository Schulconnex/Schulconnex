# Analyse und Semantik der Lizenzbeispiele
Im Folgenden werden verschiedene Lizenzbeispiele im ODRL-Format dargestellt. Diese Beispiele zeigen, wie unterschiedliche Nutzungsszenarien mithilfe von ODRL modelliert werden können, um die Semantik und Einschränkungen der Nutzungsrechte präzise und maschinenlesbar abzubilden.

---

### Generische Darstellung einer Nutzungsvereinbarung
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
    ],
    "access_control": [
        {
            "value": {
                "type": "urn:scx:lizenz:zugriffsinfo:licensekey",
                "licenseKey": "e5f68003-4ec3-4d16-8dbe-8dcd07afc587"
            }
        }
    ]
}
```

Die generische Klasse "Set" wurde durch die semantisch passendere Klasse "Agreement" ersetzt, da es sich bei dem ODRL-Objekt um eine explizite Nutzungsvereinbarung zwischen einem Medienanbieter und einer Organisation handelt. Diese Vereinbarung beschreibt die Bedingungen, unter denen ein bestimmtes digitales Medium genutzt werden darf, z. B. ein Online-Schulbuch oder eine Lernanwendung.

Die Nutzungsvereinbarung erlaubt explizit die Remote-Ausführung des Zielobjekts (z. B. einer Software) und nutzt hierfür die ODRL-Aktion "execute". Diese spezifische Aktion wurde gewählt, da sie technisch präzise die Ausführbarkeit beschreibt. Die Alternative "use" wäre zu allgemein und könnte fälschlicherweise implizieren, dass die Vereinbarung umfassendere Nutzungsrechte gewährt. Laut den Empfehlungen der W3C-Best-Practices für ODRL repräsentiert "use" den Elterntyp aller Rechte oder könnte andere Rechte implizieren. In diesem Fall wäre dies unangebracht, da nur die Ausführung gestattet wird.

Das Attribut "uid" verweist auf eine eindeutige IRI, die als Endpunkt in der Systemlandschaft, z. B. unter "https://api-dienste.moin.schule", implementiert werden muss. Dieser Endpunkt liefert das aktuelle Objekt der Vereinbarung zurück und gewährleistet somit Nachvollziehbarkeit und Interoperabilität. Das Einbinden eines solchen spezifischen Endpunkts ermöglicht eine klare Identifikation und erleichtert die Integration in bestehende Systeme.

Zusammengefasst beschreibt die Klasse "Agreement" eine eindeutige und verbindliche Nutzungsvereinbarung zwischen Medienanbieter und Organisation, die auf ein spezifisches Zielobjekt verweist. Durch die Verwendung von präzisen Begrifflichkeiten und eindeutigen Referenzen wird die technische und rechtliche Klarheit sichergestellt, ohne die Intention der Vereinbarung zu erweitern oder ungenau zu formulieren.

#### JSON-Äquivalent der ODRL-Repräsentation
Das ODRL-Beispiels könnte man auch in einem vereinfachten, nicht-ODRL-spezifischen JSON-Format bereitstellen, beispielsweise so:
```json
{
    "type": "LicenseAgreement",
    "id": "https://api-dienste.moin.schule/v1/lizenz-info/9230294b-68da-4f4f-aa63-ad9040122aa7",
    "target": {
        "id": "urn:schule:medium:123456789",
        "source": "https://www.schule-test.de/api/external/univention/media"
    },
    "permissions": [
        {
            "action": [
                "execute"
            ]
        }
    ]
}
```

Vorteile des JSON-Formats:
- Einfachere Struktur: Das JSON-Format ist leicht verständlich und verzichtet auf spezifische ODRL-Syntax. Dadurch wird die Schnittstelle auch für Entwickler:innen, die mit ODRL nicht vertraut sind, einfacher zugänglich.
- Leichtere Integration: Da das JSON-Format weniger komplex ist, lässt es sich einfacher in bestehenden Anwendungen oder Datenpipelines integrieren, ohne dass zusätzliche Frameworks oder Konventionen beachtet werden müssen.
- Flexibilität: Das JSON-Format kann einfacher an spezifische Anwendungsfälle angepasst werden, da es nicht an die strikten Anforderungen von ODRL gebunden ist. So könnten beispielsweise zusätzliche Attribute ohne Rücksicht auf das ODRL-Datenmodell eingefügt werden.
- Performance: Das vereinfachte Format kann potenziell schneller verarbeitet werden, da es weniger Konventionen enthält und keine zusätzlichen Kontexte (wie @context) eingebunden werden müssen.

Nachteile des JSON-Formats:
- Verlust von Standardisierung: Die Nutzung eines vereinfachten JSON-Formats führt dazu, dass die Daten nicht mehr dem W3C-Standard für ODRL entsprechen. Dadurch könnten Kompatibilitätsprobleme mit anderen Systemen oder Tools auftreten, die ODRL als Basis erwarten.
- Eingeschränkte Interoperabilität: ODRL ist ein etablierter Standard für die Rechteverwaltung und wird in vielen internationalen Projekten und Systemen verwendet. Ein proprietäres JSON-Format schränkt die Möglichkeit ein, diese Daten nahtlos mit anderen ODRL-konformen Anwendungen auszutauschen.
- Weniger semantische Präzision: ODRL bietet eine reichhaltige Ontologie und klar definierte semantische Konzepte. Diese Präzision geht im vereinfachten JSON-Format verloren, was zu Missverständnissen oder Fehlinterpretationen führen könnte.
- Erhöhte Wartungsaufwände: Mit einem eigenen JSON-Format müsste die Dokumentation für jede neue Erweiterung eigenständig gepflegt werden. Dies erhöht den Aufwand im Vergleich zur Nutzung eines standardisierten Modells wie ODRL, bei dem Erweiterungen oft bereits durch die Community gepflegt werden.

### Erweiterung durch Nutzungseinschränkungen

Das gegebene Beispiel zeigt, wie erweiterte Nutzungseinschränkungen durch die Verwendung von ODRL modelliert werden können, um die Bedingungen für die Ausführung einer Anwendung präzise zu definieren. Hier wird die Nutzung durch zwei wesentliche Einschränkungen begrenzt: einen definierten Zeitrahmen und den aktuellen Lizenzstatus.

```json
{
    "@context": [
        "http://www.w3.org/ns/odrl.jsonld",
        {
            "urn:schulconnex:de:lizenzen": "http://schulconnex.de/lizenz-info/ns/1#"
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
    "access_control": [
        {
            "value": {
                "type": "urn:scx:lizenz:zugriffsinfo:licensekey",
                "licenseKey": "e5f68003-4ec3-4d16-8dbe-8dcd07afc587"
            }
        }
    ]
}
```

**JSON-Äquivalent:**
```json
{
    "type": "LicenseSet",
    "id": "https://api-dienste.moin.schule/v1/lizenz-info/9230294b-68da-4f4f-aa63-ad9040122aa7",
    "target": {
        "id": "urn:schule:medium:123456789",
        "partOf": "https://www.schule-test.de/api/external/univention/media"
    },
    "permissions": [
        {
            "action": "execute",
            "constraints": [
                {
                    "field": "licenseStatus",
                    "operator": "notEqual",
                    "value": "deactivated",
                    "currentStatus": "provisioned"
                },
                {
                    "field": "dateTime",
                    "operator": "greaterOrEqual",
                    "value": "2023-08-01T00:00+0200"
                },
                {
                    "field": "dateTime",
                    "operator": "lessThan",
                    "value": "2024-08-01T00:00+0200"
                }
            ]
        }
    ],
    "access_control": [
        {
            "type": "urn:scx:lizenz:zugriffsinfo:licensekey",
            "value": {
                "licenseKey": "e5f68003-4ec3-4d16-8dbe-8dcd07afc587"
            }
        }
    ]
    
}
```

#### Zeitliche Einschränkungen
Die zeitliche Einschränkung wird durch zwei Constraints modelliert, die den Beginn und das Ende der zulässigen Nutzungsperiode definieren. Diese Einschränkungen werden mithilfe der ODRL-Operatoren gteq (größer oder gleich) und lt (kleiner als) implementiert:
* `gteq`: Das Nutzungsrecht gilt ab dem 1. August 2023, 00:00 Uhr MESZ, einschließlich dieses Datums. 
* `lt`: Das Nutzungsrecht endet vor dem 1. August 2024, 00:00 Uhr MESZ, sodass dieses Datum selbst nicht mehr eingeschlossen ist.

Diese Modellierung ermöglicht eine präzise Steuerung der Gültigkeit, indem klar definierte Zeiträume für die Nutzung festgelegt werden. Dadurch können Lizenzen explizit auf Schuljahre oder andere spezifische Zeiträume begrenzt werden.

#### Lizenzstatus als Bedingung
Der Lizenzstatus stellt eine zusätzliche Einschränkung dar, die festlegt, dass die Anwendung nur genutzt werden darf, wenn der Status der Lizenz nicht "deactivated" ist. Diese Bedingung wird durch den Operator neq (ungleich) umgesetzt. Damit können Szenarien modelliert werden, in denen Lizenzen unterschiedliche Stati annehmen, beispielsweise:
* **"provisioned"**: Bereitgestellt, aber noch nicht vollständig aktiviert.
* *"activated"*: Vollständig aktiviert und nutzbar.
* **"deactivated"**: Lizenz ist ungültig oder abgelaufen, Nutzung nicht gestattet.

Die Bedingung neq deactivated stellt sicher, dass die Anwendung nur im Status "provisioned" oder "activated" genutzt werden kann. Diese Modellierung bietet Flexibilität, um verschiedene Lizenzzustände zu berücksichtigen.

#### Zusätzliche Metadaten
In der Modellierung erweiterter Nutzungseinschränkungen spielen zusätzliche Metadaten eine wichtige Rolle, um den Kontext und die Bedingungen des Nutzungsrechts präzise zu beschreiben. Ein Nutzungsrecht definiert, welches Medium eine Nutzende Person in Anspruch nehmen darf, und umfasst neben der Identifikation des Mediums auch die erlaubten Nutzungsarten.

##### Modellierung des Nutzungsrechts
Im Kontext des Beispiels wird das Nutzungsrecht durch die target-Eigenschaft präzisiert:
* **Eindeutiger Identifikator**: Jedes Medium wird durch eine eindeutige Kennung (`uid`) identifiziert, beispielsweise `urn:schule:medium:123456789`
* Medienhierarchie: Das Medium kann ein spezifisches Element aus einem Katalog sein, ein vollständiger Katalog oder ein bestimmter Ausschnitt aus einem Medium. Diese Beziehungen können über die Eigenschaft `partOf` beschrieben werden, um den Bezug des Mediums zu einem größeren Kontext (z. B. einem Medienkatalog) darzustellen.

Das weitere Metadatenfeld "urn:schulconnex:de:lizenzen:zugriffsinfo:lizenzschluessel" beschreibt ein Nutzungsrecht, bei dem:
* Ein spezifisches Medium (urn:schule:medium:123456789) aus einem Medienkatalog (partOf) identifiziert wird.
* Das Medium remote ausgeführt werden darf (action: execute).
* Ein Lizenzschlüssel (scx:code) die eindeutige Verbindung zwischen der Nutzenden Person und dem Medium sicherstellt.


### Gruppenlizenz
Das gegebene Beispiel zeigt, wie eine Gruppenlizenz in ODRL modelliert werden kann. Eine Gruppenlizenz definiert, dass ein Medium von einer spezifischen Gruppe innerhalb einer Organisation genutzt werden darf. Dies wird durch das Attribut assignee erreicht, das auf die Gruppe verweist, der die Lizenz zugewiesen ist.

```json
{
    "@context": [
        "http://www.w3.org/ns/odrl.jsonld",
        {
            "urn:schulconnex:de:lizenzen": "http://schulconnex.de/lizenz-info/ns/1#"
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
                "partOf": "urn:schulconnex:de:personenkontext:gruppe:ffceeb40-01e6-483f-a909-382ff576b429"
            }
        }
    ],
    "access_control": [
        {
            "value": {
                "type": "urn:scx:lizenz:zugriffsinfo:licensekey",
                "licenseKey": "e5f68003-4ec3-4d16-8dbe-8dcd07afc587"
            }
        }
    ]
    
}
```

**JSON-Äquivalent**
```JSON
{
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
                            "leftOperand": "urn:schulconnex:de:personenkontext:gruppe",
                            "operator": "eq",
                            "rightOperand": "ffceeb40-01e6-483f-a909-382ff576b429"
                        }
                    ]
                }
            }
        }
    ],
    "access_control": [
        {
            "type": "urn:scx:lizenz:zugriffsinfo:licensekey",
            "value": {
                "licenseKey": "e5f68003-4ec3-4d16-8dbe-8dcd07afc587"
            }
        }
    ]

}
```

Eine Gruppenlizenz ermöglicht es, Nutzungsrechte auf eine spezifische Gruppe zu beschränken, die Teil einer größeren Organisation (z. B. einer Schule) ist. Die Rechte sind dabei explizit für die Gruppe gültig und können durch weitere Bedingungen (z. B. zeitliche Einschränkungen) ergänzt werden.

Die Realisierung erfolgt durch:
* **Zielmedium (Target)**:
  * Das Medium wird eindeutig durch eine uid identifiziert, z. B. urn:schule:medium:123456789.
  * Die Eigenschaft partOf beschreibt, dass das Medium Teil eines Medienkatalogs ist.
* **Gruppenbezug (Assignee)**:Das Attribut assignee verweist auf die Gruppe, der die Lizenz zugewiesen ist.
  * Das Attribut assignee verweist auf die Gruppe, der die Lizenz zugewiesen ist.
  * Die Eigenschaft partOf im assignee-Block beschreibt die Zugehörigkeit der Gruppe zu einer übergeordneten Einheit, z. B. einer Schule.
* **Erweiterbare Metadaten**:
  * Der Lizenzschlüssel im Namespace urn:scx:lizenz:zugriffsinfo:licensekey identifiziert die spezifische Gruppenlizenz eindeutig.

Die Gruppe, die die Lizenz erhält, wird eindeutig durch eine IRI beschrieben, z. B. https://api.schule.de/group/klasse10a. Die IRI der Gruppe wird im assignee-Attribut hinterlegt. Optional kann die Zugehörigkeit der Gruppe zu einer Schule oder Organisation über partOf angegeben werden.
Weitere Bedingungen wie zeitliche Einschränkungen oder der Status der Lizenz können hinzugefügt werden, um die Nutzung präzise zu regeln.

### **Schullizenz (Eingeschränkte Nutzung auf eine bestimmte Schule)**

Das vorliegende Beispiel zeigt die Modellierung einer Schullizenz mit ODRL. Die Lizenz definiert, dass ein Medium (z. B. eine Software oder ein digitales Lehrmaterial) von Personen genutzt werden darf, die Teil einer Organisation mit einer spezifischen Kennung sind. Die Organisation wird durch eine sogenannte PartyCollection referenziert, die über Bedingungen (refinement) definiert ist.

```json
{
    "@context": [
        "http://www.w3.org/ns/odrl.jsonld",
        {
            "urn:schulconnex:de:lizenzen": "http://schulconnex.de/lizenz-info/ns/1#"
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
                            "leftOperand": "urn:schulconnex:de:personenkontext:organisation:kennung",
                            "operator": "eq",
                            "rightOperand": "NI_12345"
                        }
                    ]
                }
            }
        }
    ],
    "access_control": [
        {
            "value": {
                "type": "urn:scx:lizenz:zugriffsinfo:licensekey",
                "licenseKey": "e5f68003-4ec3-4d16-8dbe-8dcd07afc587"
            }
        }
    ]

}
```

**JSON-Äquivalent**
```json
{
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
                            "leftOperand": "urn:schulconnex:de:personenkontext:organisation:kennung",
                            "operator": "eq",
                            "rightOperand": "NI_12345"
                        }
                    ]
                }
            }
        }
    ],
    "access_control": [
        {
            "type": "urn:scx:lizenz:zugriffsinfo:licensekey",
            "value": {
                "licenseKey": "e5f68003-4ec3-4d16-8dbe-8dcd07afc587"
            }
        }
    ]

}
```

Eine Schullizenz gewährt Nutzungsrechte an alle Personen, die einer bestimmten Schule oder Organisation angehören. Diese Zugehörigkeit wird durch Bedingungen überprüft, die auf Merkmale der Organisation oder der zugehörigen Personen basieren. Die Bedingungen müssen gemäß den ODRL-Formalitäten so formuliert sein, dass sie korrekt ausgewertet werden können.
Im Beispiel gilt das Nutzungsrecht unter der folgenden Bedingung:
* Die Lizenz ist an die Organisation mit der Schulnummer NI_12345 gebunden.
* Nur Personen, die Teil dieser Organisation sind, dürfen die Software ausführen (action: execute).

Das Medium wird durch eine eindeutige Kennung (uid) identifiziert: urn:schule:medium:123456789. Zusätzlich wird angegeben, dass das Medium Teil eines größeren Medienkatalogs ist (partOf). Das assignee-Attribut beschreibt, dass die Lizenz einer Gruppe zugewiesen ist. Die partOf-Eigenschaft innerhalb von assignee referenziert eine PartyCollection, die durch die Bedingung (refinement) definiert wird. Die Bedingung prüft, ob die Organisation die Schulnummer NI_12345 besitzt (urn:schulconnex:de:personenkontext:organisation:kennung eq NI_12345). Auf ähnliche Weise können weitere Bedingungen hinzugefügt werden, z. B. Einschränkungen auf spezifische Gruppen innerhalb der Organisation, wie eine Klasse oder Fachgruppe. Der Lizenzschlüssel (urn:schulconnex:de:lizenzen:zugriffsinfo:lizenzschluessel) identifiziert die Schullizenz eindeutig und erleichtert die Nachverfolgbarkeit.

### Lehrerlizenz (an spezifische Rolle gebunden)

Das gezeigte JSON-Beispiel beschreibt eine Lehrerlizenz, die die Nutzung eines Mediums auf Personen mit einer spezifischen Rolle innerhalb einer Organisation beschränkt. Die Nutzung ist ausschließlich Lehrkräften vorbehalten, was durch die Verknüpfung von Nutzungsrechten mit einer Bedingung zur Rolle des Nutzenden realisiert wird.

```json
{
    "@context": [
        "http://www.w3.org/ns/odrl.jsonld",
        {
            "urn:schulconnex:de:lizenzen": "http://schulconnex.de/lizenz-info/ns/1#"
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
    "access_control": [
        {
            "value": {
                "type": "urn:scx:lizenz:zugriffsinfo:licensekey",
                "licenseKey": "e5f68003-4ec3-4d16-8dbe-8dcd07afc587"
            }
        }
    ]
    
}
```

**JSON-Äquivalent**
```json
{
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
                        "rightOperand": "lehr"
                    }
                ]
            }
        }
    ],
    "access_control": [
        {
            "type": "urn:scx:lizenz:zugriffsinfo:licensekey",
            "value": {
                "licenseKey": "e5f68003-4ec3-4d16-8dbe-8dcd07afc587"
            }
        }
    ]

}
```

Eine Lehrerlizenz ist eine spezifische Lizenz, die die Nutzung eines Mediums an eine bestimmte Rolle bindet, in diesem Fall die Rolle "lehrend". Diese Einschränkung stellt sicher, dass nur Personen mit dieser Rolle das Medium verwenden dürfen.
Die Lehrerlizenz wird durch folgende Elemente definiert:
* **Zielmedium (Target)**: 
  * Das Medium wird durch eine eindeutige Kennung (`uid`) identifiziert, z. B. `urn:schule:medium:123456789`.
  * Über die Eigenschaft partOf wird angegeben, dass das Medium Teil eines Medienkatalogs ist.
* **Rollenbasierte Einschränkung (Assignee mit Refinement)**:
  * Das Attribut `assignee` spezifiziert, wer die Berechtigung erhält. Hier wird die Einschränkung auf Lehrkräfte durch die refinement-Bedingung realisiert.
  * Die Bedingung prüft mithilfe des ODRL-Operators `eq`, ob der Wert der Eigenschaft `urn:schulconnex:de:personenkontext:rolle` auf **"lehrend"** gesetzt ist.
* **Zusätzliche Metadaten**:
  * Der Lizenzschlüssel (`urn:schulconnex:de:lizenzen:zugriffsinfo:lizenzschluessel`) ermöglicht die eindeutige Nachverfolgung und Identifikation der Lizenz.

Die Rolle, die Zugriff auf das Medium erhalten soll, wird durch den Wert "lehrend" eindeutig definiert. Diese Rolle kann beispielsweise in einem Benutzerverwaltungssystem einer Organisation hinterlegt sein. Die Bedingung wird im Attribut assignee mit einem refinement beschrieben. Hier wird geprüft, ob die Rolle der Person, die das Medium nutzen möchte, den Wert "lehrend" aufweist. Systeme, die diese Lizenz prüfen, müssen in der Lage sein, die Rolle des Nutzenden anhand der definierten Bedingung zu ermitteln und zu verifizieren.

### Dynamische Lizenz – Modellierung einer nutzungsbegrenzten Lizenz
Das Beispiel beschreibt eine dynamische Lizenz, die durch einen spezifischen Nutzungskontext begrenzt ist. Eine dynamische Lizenz gewährt ein Nutzungsrecht, das an eine bestimmte Bedingung, z. B. die Anzahl der erlaubten Nutzungen, geknüpft ist. Im dargestellten Beispiel wird das Medium nur einmalig zur Ausführung freigegeben.

```json
{
    "@context": [
        "http://www.w3.org/ns/odrl.jsonld",
        {
            "urn:schulconnex:de:lizenzen": "http://schulconnex.de/lizenz-info/ns/1#"
        }
    ],
    "@type": "Ticket",
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
            "refinement": [
                {
                    "leftOperand": "count",
                    "operator": "eq",
                    "rightOperand": "1"
                }
            ]
        }
    ],
    "access_control": [
        {
            "value": {
                "type": "urn:scx:lizenz:zugriffsinfo:licensekey",
                "licenseKey": "e5f68003-4ec3-4d16-8dbe-8dcd07afc587"
            }
        }
    ]

}
```
**JSON-Äquivalent**
```json
{
    "type": "DynamicLicense",
    "id": "https://api-dienste.moin.schule/v1/lizenz-info/123456789",
    "target": {
        "id": "urn:schule:medium:123456789",
        "catalog": "https://www.schule-test.de/api/external/univention/media"
    },
    "permissions": [
        {
            "action": "execute",
            "conditions": [
                {
                    "key": "count",
                    "operator": "eq",
                    "value": 1
                }
            ]
        }
    ],
    "access_control": [
        {
            "type": "urn:scx:lizenz:zugriffsinfo:licensekey",
            "value": {
                "licenseKey": "e5f68003-4ec3-4d16-8dbe-8dcd07afc587"
            }
        }
    ]

}
```

Eine dynamische Lizenz eignet sich, um zeitlich oder mengenmäßig begrenzte Nutzungsrechte zu modellieren. Dies ist insbesondere bei Ressourcen hilfreich, die kontrolliert oder limitiert bereitgestellt werden sollen. Die hier gezeigte Umsetzung stellt eine Lizenz dar, bei der die Nutzung auf eine einmalige Ausführung beschränkt ist.
Die dynmaische Lizenz wird durch folgende Elemente definiert:
* **Zielmedium (Target)**:
  * Das Medium wird durch eine eindeutige Kennung (`uid`) definiert, z. B. `urn:schule:medium:123456789`.
  * Über die Eigenschaft `partOf` wird angegeben, dass das Medium Teil eines Medienkatalogs ist.
* **Bedingung der Nutzung (Refinement)**:
  * Im `permission`-Abschnitt wird die Nutzung des Mediums erlaubt, jedoch mit einer Einschränkung (`refinement`).
  * Die Bedingung prüft, dass die Anzahl der Nutzungen gleich "1" sein muss. Dies bedeutet, dass die Nutzung einmalig erlaubt ist.
* **Lizenzschlüssel und zusätzliche Metadaten**:
  * Der Lizenzschlüssel (`urn:schulconnex:de:lizenzen:zugriffsinfo:lizenzschluessel`) identifiziert die Lizenz eindeutig und kann genutzt werden, um die Nutzung zu tracken oder zu validieren.
* **Dynamische Lizenz (Ticket)**:
  * Durch die Verwendung des Typs `Ticket` wird signalisiert, dass es sich um eine dynamische und möglicherweise temporär gültige Lizenz handelt.

Der Refinement-Operator count beschreibt, dass die Nutzung auf eine bestimmte Anzahl begrenzt ist. Der Wert 1 definiert, dass nur eine einzige Ausführung erlaubt ist. Der Typ Ticket signalisiert, dass die Lizenz nicht dauerhaft, sondern zeitlich oder nutzungsgebunden gültig ist. Eine entsprechende Überwachung des Zählers (count) ist erforderlich, um die Bedingung technisch umzusetzen. Systeme, die die Lizenz prüfen, müssen die Anzahl der Nutzungen tracken und sicherstellen, dass die Bedingung nicht verletzt wird. Nach der ersten Nutzung kann die Lizenz deaktiviert oder entfernt werden.

### Modellierung eines gestreamten Mediums

Das ODRL-Beispiel beschreibt die Lizenz für ein gestreamtes Medium. Es stellt sicher, dass ein Medium nur unter bestimmten räumlichen Bedingungen und über temporär gültige URLs bereitgestellt wird.

```json
{
    "@context": [
        "http://www.w3.org/ns/odrl.jsonld",
        {
            "urn:schulconnex:de:lizenzen": "http://schulconnex.de/lizenz-info/ns/1#"
        }
    ],
    "@type": "Ticket",
    "uid": "https://api-dienste.moin.schule/v1/lizenz-info/9230294b-68da-4f4f-aa63-ad9040122aa7",
    "target": {
        "uid": "urn:exampleprovider:media:offer:EPUB-220053802",
        "partOf": "urn:exampleprovider:media:catalog"
    },
    "permission": [
        {
            "action": [
                "stream"
            ],
            "constraint": [
                {
                    "leftOperand": "spatial",
                    "operator": "eq",
                    "rightOperand": "https://www.wikidata.org/wiki/Q5956",
                    "comment": "Landkreis Diepholz"
                }
            ]
        }
    ],
    "access_control": [
        {
            "value": {
                "type": "urn:scx:lizenz:zugriffsinfo:temporaryurl",
                "temporaryURL": "https://exampleprovider/tmp/123455677",
                "gueltigkeit_von": "2024-12-05",
                "gueltigkeit_bis": "2024-12-06"
            }
        }
    ]

}
```

**JSON-Äquivalent**
```json
{
    "type": "TemporaryLicense",
    "id": "https://api-dienste.moin.schule/v1/lizenz-info/9230294b-68da-4f4f-aa63-ad9040122aa7",
    "target": {
        "id": "urn:exampleprovider:media:offer:EPUB-220053802",
        "catalog": "urn:exampleprovider:media:catalog"
    },
    "permissions": [
        {
            "action": "stream",
            "conditions": [
                {
                    "key": "geographicLocation",
                    "operator": "equals",
                    "value": "https://www.wikidata.org/wiki/Q5956",
                    "description": "Landkreis Diepholz"
                }
            ]
        }
    ],
    "access_control": [
        {
            "type": "urn:scx:lizenz:zugriffsinfo:temporaryurl",
            "value": {
                "temporaryURL": "https://exampleprovider/tmp/123455677",
                "gueltigkeit_von": "2024-12-05",
                "gueltigkeit_bis": "2024-12-06"
            }
        }
    ]

}
```

Die gestreamte Lizenz wird durch folgende Elemente definiert:
* **Medium als Ziel (Target)**:
  * Das Medium wird eindeutig durch eine Kennung (`urn:exampleprovider:media:offer:EPUB-220053802`) identifiziert.
  * Über `partOf` wird angegeben, dass das Medium Teil eines größeren Medienkatalogs ist.
* **Streaming-Berechtigung (Permission)**:
  * Die Aktion stream gibt an, dass das Medium nur gestreamt werden darf (keine Downloads oder andere Zugriffe).
  * Eine räumliche Einschränkung (spatial) beschränkt die Nutzung auf einen bestimmten geografischen Kontext, z. B. den Landkreis Diepholz, referenziert über Wikidata.
* **Zusätzliche Einschränkungen (Appendix)**:
  * Eine temporäre URL wird für den Zugriff bereitgestellt, die zeitlich begrenzt ist.
  * Die Gültigkeit der URL wird über einen refinement-Block geregelt, der sicherstellt, dass die URL nur innerhalb eines kurzen Zeitfensters (z. B. 5 Minuten nach Abruf) gültig ist.

Das Medium ist eindeutig referenziert, und der übergeordnete Katalog wird über partOf angegeben. Die Aktion `stream` erlaubt ausschließlich das Streaming des Mediums. Die räumliche Einschränkung (`spatial`) stellt sicher, dass das Medium nur in einem definierten geografischen Kontext, hier dem **Landkreis Diepholz**, genutzt werden kann. Eine temporäre URL (`urn:schulconnex:de:lizenzen:zugriffsinfo:temporaereurl`) wird zur Verfügung gestellt, die den Zugriff für einen begrenzten Zeitraum (z. B. bis zum angegebenen Zeitpunkt) erlaubt. Dies verhindert, dass die URL dauerhaft genutzt wird und sichert den kontrollierten Zugriff.

Das Beispiel veranschaulicht, dass verschiedene Anwendungsfälle bedient werden können wie:
* **Geografisch begrenztes Streaming**: Das Medium wird nur für Nutzer:innen in einem definierten Gebiet, z. B. einem Landkreis, bereitgestellt.
* **Zeitlich begrenzter Zugriff**: Der Zugriff erfolgt über eine temporär gültige URL, die nach Ablauf des Zeitfensters ungültig wird.
* **Streaming-spezifische Rechteverwaltung**: Es wird sichergestellt, dass nur Streaming erlaubt ist und keine andere Form der Nutzung, z. B. Download, möglich ist.

### Modellierung einer Lizenz für ein Arbeitsblatt
Das gegebene ODRL-Beispiel beschreibt eine Lizenz für ein Arbeitsblatt, die verschiedene Aktionen erlaubt, darunter das Verschieben, Betrachten, Drucken, Verteilen und Modifizieren des Inhalts. Die Modifikationsrechte sind dabei an Pflichten wie die Namensnennung und das Teilen unter gleichen Bedingungen geknüpft.

```json
{
    "@context": [
        "http://www.w3.org/ns/odrl.jsonld",
        {
            "urn:schulconnex:de:lizenzen": "http://schulconnex.de/policies-info/ns/1#"
        }
    ],
    "@type": "Set",
    "uid": "https://api-dienste.moin.schule/v1/lizenz-info/9230294b-68da-4f4f-aa63-ad9040122aa7",
    "target": {
        "uid": "urn:exampleprovider:media:offer:EPUB-220053802",
        "partOf": "urn:exampleprovider:media:catalog"
    },
    "permission": [
        {
            "action": [
                "move",
                "view",
                "print",
                "distribute"
            ]
        },
        {
            "action": [
                "modify"
            ],
            "duty": [
                {
                    "action": [
                        "Attribution",
                        "ShareAlike"
                    ]
                }
            ]
        }
    ]
}
```

**JSON-Äquivalent**
```json
{
    "type": "License",
    "id": "https://api-dienste.moin.schule/v1/lizenz-info/9230294b-68da-4f4f-aa63-ad9040122aa7",
    "target": {
        "id": "urn:exampleprovider:media:offer:EPUB-220053802",
        "catalog": "urn:exampleprovider:media:catalog"
    },
    "permissions": [
        {
            "actions": [
                "move",
                "view",
                "print",
                "distribute"
            ]
        },
        {
            "actions": [
                "modify"
            ],
            "obligations": [
                {
                    "requirements": [
                        "Attribution",
                        "ShareAlike"
                    ]
                }
            ]
        }
    ]
}
```

Die Lizenz für ein Arbeitsblatt wird durch folgende Elemente definiert:
* **Medium als Ziel (Target)**:
  * Das Arbeitsblatt wird durch eine eindeutige Kennung (`uid`) definiert, z. B. `urn:exampleprovider:media:offer:EPUB-220053802`.
  * Die Zugehörigkeit zu einem Medienkatalog wird durch `partOf` angegeben.
* **Erlaubte Aktionen (Permission)**:
  * Die Lizenz erlaubt grundlegende Aktionen wie `move` (Verschieben), `view` (Ansehen), `print` (Drucken) und `distribute` (Verteilen), die uneingeschränkt ausgeführt werden können.
  * Die Aktion `modify` (Bearbeiten) wird unter der Bedingung erlaubt, dass bestimmte Pflichten (`duty`) erfüllt werden.
* **Pflichten bei Modifikation (Duty)**:
  * Beim Bearbeiten des Arbeitsblatts muss der Urheber genannt werden (`Attribution`).
  * Die modifizierten Inhalte müssen unter denselben Bedingungen weitergegeben werden (`ShareAlike`), was sicherstellt, dass der bearbeitete Inhalt dieselben Lizenzbedingungen behält.

Das Arbeitsblatt ist als eigenständige Ressource definiert und kann Teil eines größeren Medienkatalogs sein. Allgemeine Aktionen wie Ansehen, Drucken, Verteilen und Verschieben sind ohne weitere Bedingungen erlaubt. Das Modifizieren des Arbeitsblatts ist mit bestimmten Verpflichtungen verknüpft, die im Duty-Block beschrieben werden. `Attribution`: Der ursprüngliche Urheber oder Anbieter des Arbeitsblatts muss genannt werden. `ShareAlike`: Bearbeitete Versionen müssen unter denselben Bedingungen wie das Original weitergegeben werden, was die Einhaltung der ursprünglichen Lizenz garantiert.

Diese Lizenz eignet sich besonders für Arbeitsblätter oder ähnliche Inhalte, die im Rahmen von Bildungs- oder Schulprojekten verwendet werden, bei denen:
* Lehrkräfte die Arbeitsblätter nach Bedarf bearbeiten dürfen.
* Die Verbreitung oder Bearbeitung an die Bedingungen gebunden ist, den ursprünglichen Urheber zu nennen und die Inhalte frei weiterzugeben.

### Fazit
Die Beispiele zeigen, wie ODRL für die Modellierung von Nutzungsrechten genutzt wird, um unterschiedliche Lizenzarten und -bedingungen abzubilden. Jede Darstellung erfüllt spezifische Anforderungen und kann flexibel erweitert werden. Die Nutzung von JSON-LD gewährleistet Interoperabilität und einfache Integration in bestehende Systeme.