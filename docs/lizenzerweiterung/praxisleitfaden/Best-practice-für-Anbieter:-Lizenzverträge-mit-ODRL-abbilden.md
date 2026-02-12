---
tags:
- Informativ
---

# Best-practice für Anbieter: Lizenzverträge mit ODRL abbilden

## Einführung in ODRL
Open Digital Rights Language (ODRL) ist ein Standard zur Beschreibung von Rechten und deren Verwaltung im digitalen Raum. ODRL ermöglicht es Anbietern, klare und verständliche Lizenzverträge zu formulieren, die sowohl die Rechte als auch die Pflichten der Nutzer festlegen. In diesem Dokument werden drei Strategien vorgestellt, um Lizenzverträge mithilfe von ODRL effektiv abzubilden.

## 1. LLM Prompting
Bei der Strategie des **LLM Prompting** wird ein präziser Prompt an ein Language Model (LLM) gesendet, um ein ODRL-Dokument zu generieren. 

### Beispiel-Prompt
Hier ist ein Beispiel-Prompt, das genutzt werden kann, um ein ODRL-Dokument für die Lern-App ANTON zu erzeugen:

```markdown
**Prompt für ODRL-Generierung:**

Bitte generiere ein ODRL-Dokument für die Lern-App ANTON. Berücksichtige dabei folgende Punkte:

1. **Nutzungsrechte:**
   - Welche Aktionen dürfen Nutzer (Schüler, Lehrer, Schulen) durchführen (z.B. Nutzung der App, Erstellen von Inhalten)?
   - Gibt es Einschränkungen oder Verbote (z.B. Kopieren, Modifizieren)?

2. **Zahlungsmodalitäten:**
   - Welche kostenpflichtigen Dienste gibt es und wie werden sie abgerechnet?
   - Welche Zahlungsmethoden sind zulässig?

3. **Lizenzierung:**
   - Wie erhalten Schulen und Privatpersonen die Lizenz zur Nutzung?
     - Direkte Lizenzierung durch die Schule
     - Einzelne Lizenzierung für Privatpersonen
     - Gruppenlizenzen für Schulen
     - Lehrerlizenz für Lehrkräfte
   - Wie wird die Lizenz aktiviert?
     - Durch einen Lizenzschlüssel
     - Über eine Plattformbasierte Aktivierung
     - Einmalige Aktivierung durch QR-Code oder Link
     - Integration mit Schulplattformen (z.B. LMS)

4. **Account-Anforderungen:**
   - Muss ein Nutzerkonto erstellt werden? Wenn ja, welche Informationen sind erforderlich?
   - Welche Verpflichtungen haben Nutzer bei der Anmeldung (z.B. Wahrheitsgemäße Angaben)?

5. **Strafen und Konsequenzen:**
   - Welche Strafen gibt es bei Verstößen gegen die AGB (z.B. Sperrung des Kontos, rechtliche Schritte)?
   - Gibt es spezifische Bedingungen für die Beendigung des Zugangs zur App?

6. **Plattformen:**
   - Auf welchen Plattformen (Web, Android, iOS) darf die App verwendet werden?

Bitte berücksichtige alle oben genannten Aspekte und strukturiere das ODRL-Dokument entsprechend.
```

### Beispielhaftes Ergebnis
Ein typisches Ergebnis könnte ein ODRL-Dokument sein, das die spezifischen Rechte und Pflichten der Nutzer detailliert beschreibt. Weitere Informationen sind auf der Seite https://anton.app/terms zu finden.

```json
{
    "@context": "http://www.w3.org/ns/odrl.jsonld",
    "id": "https://www.anton.app/terms",
    "permission": [
        {
            "target": "https://www.anton.app",
            "action": "use",
            "assignee": "Nutzer",
            "constraint": [
                {
                    "leftOperand": "role",
                    "operator": "isIn",
                    "rightOperand": [
                        "Schüler",
                        "Lehrer",
                        "Schule"
                    ]
                }
            ]
        },
        {
            "target": "https://www.anton.app",
            "action": "createContent",
            "assignee": "Nutzer"
        }
    ],
    "prohibition": [
        {
            "target": "https://www.anton.app",
            "action": "copy",
            "assignee": "Nutzer"
        },
        {
            "target": "https://www.anton.app",
            "action": "modify",
            "assignee": "Nutzer"
        }
    ],
    "requirement": [
        {
            "target": "https://www.anton.app",
            "action": "payment",
            "assignee": "Nutzer",
            "constraint": [
                {
                    "leftOperand": "paymentMethod",
                    "operator": "isIn",
                    "rightOperand": [
                        "creditCard",
                        "PayPal"
                    ]
                }
            ]
        },
        {
            "target": "https://www.anton.app",
            "action": "obtainLicense",
            "assignee": "Nutzer",
            "constraint": [
                {
                    "leftOperand": "licenseType",
                    "operator": "isIn",
                    "rightOperand": [
                        "Schulträger",
                        "Privat",
                        "Gruppenlizenz",
                        "Lehrerlizenz"
                    ]
                }
            ]
        }
    ],
    "obligation": [
        {
            "target": "https://www.anton.app",
            "action": "createAccount",
            "assignee": "Nutzer",
            "constraint": [
                {
                    "leftOperand": "requiredInformation",
                    "operator": "isProvided",
                    "rightOperand": [
                        "E-Mail",
                        "Persönliche Daten"
                    ]
                }
            ]
        },
        {
            "target": "https://www.anton.app",
            "action": "provideAccurateInformation",
            "assignee": "Nutzer"
        }
    ],
    "sanction": [
        {
            "target": "https://www.anton.app",
            "action": "suspendAccount",
            "assignee": "Anbieter",
            "condition": "ifViolation"
        },
        {
            "target": "https://www.anton.app",
            "action": "terminateAccess",
            "assignee": "Anbieter",
            "condition": "ifSevereViolation"
        }
    ],
    "platform": [
        {
            "target": "Web",
            "action": "use",
            "assignee": "Nutzer"
        },
        {
            "target": "Android",
            "action": "use",
            "assignee": "Nutzer"
        },
        {
            "target": "iOS",
            "action": "use",
            "assignee": "Nutzer"
        }
    ]
}
```

In vielen Fällen ergibt sich aus der Sichtung / Prüfung des Ergebnisses ein hoher manueller Aufwand zur Anpassung.

## 2. LLM One-Shot
Die Strategie des LLM One-Shot besteht darin, ein oder mehrere Beispiele zusammen mit dem Prompt zu übermitteln, um die Qualität der generierten Inhalte zu erhöhen.

### Beispiele
Ein Beispiel aus der W3C ODRL Best Practices-Seite (https://w3c.github.io/odrl/bp/) könnte wie folgt aussehen:

```json
{
    "@context": "http://www.w3.org/ns/odrl.jsonld",
    "@type": "Set",
    "uid": "http://example.org/policy/9",
    "permission": [
        {
            "target": "http://example.com/asset/1",
            "assignee": "http://example.com/party/Alice",
            "action": "use"
        }
    ],
    "prohibition": [
        {
            "target": "http://example.com/asset/1",
            "assignee": "http://example.com/party/Bob",
            "action": "use"
        }
    ]
}
```

Ein Beispiel aus der Schulconnex-Spezifikation zu Nutzungsrechten (Typische Nutzungsrechte mit ODRL abbilden) könnte wie folgt aussehen:

```json
{
    "uid": "https://example.com/v1/policies-info/9230294b-68da-4f4f-aa63-ad9040122aa7",
    "target": {
        "uid": "urn:issuer:medium:123456789",
        "partOf": "urn:issuer:catalogue"
    },
    "permission": [
        {
            "action": [
                "execute"
            ],
            "constraint": [
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
                },
                "refinement": [
                    {
                        "leftOperand": "urn:schulconnex:de:personenkontext:rolle",
                        "operator": "eq",
                        "rightOperand": "lehr"
                    }
                ]
            }
        }
    ]
}
```

Durch die Bereitstellung solcher Beispiele können die generierten ODRL-Dokumente präziser und relevanter gestaltet werden.

### Beispielhaftes Ergebnis
Ein typisches Ergebnis könnte ein ODRL-Dokument sein, das die spezifischen Rechte und Pflichten der Nutzer detailliert beschreibt. Weitere Informationen sind auf der Seite https://anton.app/terms zu finden.

```json
{
    "uid": "https://anton.app/v1/policies-info/anton-policy-2023",
    "target": {
        "uid": "urn:anton:medium:learning-app:12345",
        "partOf": "urn:anton:catalogue"
    },
    "permission": [
        {
            "action": [
                "use",
                "createContent"
            ],
            "assignee": {
                "partOf": {
                    "refinement": [
                        {
                            "leftOperand": "urn:anton:context:role",
                            "operator": "in",
                            "rightOperand": ["student", "teacher", "school"]
                        }
                    ]
                }
            },
            "constraint": [
                {
                    "leftOperand": "not",
                    "operator": "eq",
                    "rightOperand": "copy"
                },
                {
                    "leftOperand": "not",
                    "operator": "eq",
                    "rightOperand": "modify"
                }
            ]
        }
    ],
    "payment": [
        {
            "service": "ANTON-Plus",
            "billing": {
                "model": "subscription",
                "frequency": "monthly",
                "paymentMethods": [
                    "creditCard",
                    "paypal",
                    "directDebit"
                ]
            }
        }
    ],
    "license": [
        {
            "type": "schoolLicense",
            "activation": [
                {
                    "method": "licenseKey"
                },
                {
                    "method": "platformActivation"
                }
            ]
        },
        {
            "type": "individualLicense",
            "activation": [
                {
                    "method": "licenseKey"
                },
                {
                    "method": "QRCode"
                }
            ]
        }
    ],
    "accountRequirements": {
        "mustCreateAccount": true,
        "requiredInfo": [
            "name",
            "email",
            "role"
        ],
        "obligations": [
            "provide truthful information"
        ]
    },
    "penalties": [
        {
            "type": "accountSuspension",
            "condition": "violation of terms"
        },
        {
            "type": "legalAction",
            "condition": "severe violations"
        }
    ],
    "platforms": [
        "Web",
        "Android",
        "iOS"
    ]
}
```

In vielen Fällen ergibt sich aus der Sichtung / Prüfung des Ergebnisses ein hoher manueller Aufwand zur Anpassung.

## 3. LLM Guided-Generation
Die Strategie der LLM Guided-Generation nutzt ein ODRL Application-Profile, um spezifische Regeln für die Generierung von ODRL-Dokumenten festzulegen. Obwohl ein solches ODRL Application-Profile derzeit noch nicht existiert, könnte es beispielsweise die Struktur und die Anforderungen für die Definition von Rechten und Pflichten vorgeben.

### Beispiel ODRL Application-Profile
Ein Beispiel für ein ODRL-Dokument könnte wie folgt aussehen:

```markdown
TODO
````

Die Definition eines ODRL Application-Profiles würde es Anbietern ermöglichen, die Erstellung von ODRL-Dokumenten zu standardisieren und sicherzustellen, dass alle relevanten Aspekte abgedeckt sind.

### Beispielhaftes Ergebnis
Ein typisches Ergebnis könnte ein ODRL-Dokument sein, das die spezifischen Rechte und Pflichten der Nutzer detailliert beschreibt. Weitere Informationen sind auf der Seite https://anton.app/terms zu finden.

```markdown
TODO
```

Durch die Bereitstellung eines ODRL Application-Profiles können die generierten ODRL-Dokumente präziser und relevanter gestaltet werden. Ein manueller Aufwand für Anpassungen ist weiterhin im Rahmen des möglichen.
