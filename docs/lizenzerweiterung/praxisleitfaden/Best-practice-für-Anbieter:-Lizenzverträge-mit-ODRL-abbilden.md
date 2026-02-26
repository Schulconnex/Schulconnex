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
Hier ist ein Beispiel-Prompt, das genutzt werden kann, um ein ODRL-Dokument auf Basis einer beispielhaften, öffentlich zugänglichen AGB zu erzeugen:

```markdown
**Prompt für ODRL-Generierung:**

Bitte generiere ein ODRL-Dokument für digitale Bildungsmedien auf Basis einer beispielhaften, öffentlich zugänglichen AGB (z.B. https://example.org/terms). Berücksichtige dabei folgende Punkte:

1. **Nutzungsrechte:**
    - Welche Aktionen dürfen Nutzer (Lehrkräfte, Schulen/Bildungseinrichtungen, Medienzentren) durchführen (z.B. Streaming, Download im zulässigen Rahmen, Verleih im Lizenzrahmen)?
    - Welche Einschränkungen oder Verbote gelten (z.B. Vervielfältigung, Bearbeitung, Transkodierung ohne schriftliche Zustimmung)?

2. **Zahlungsmodalitäten:**
   - Welche kostenpflichtigen Dienste gibt es und wie werden sie abgerechnet?
   - Welche Zahlungsmethoden sind zulässig?

3. **Lizenzierung:**
     - Wie erhalten Schulen/Bildungseinrichtungen und Medienzentren die Lizenz zur Nutzung?
         - Lehreronlinelizenz (personenbezogen)
         - Schullizenz / Schulonlinelizenz
         - Medienzentrenlizenz (mit Verleihrecht)
         - Plattform-Lizenz mit definierter Laufzeit
   - Wie wird die Lizenz aktiviert?
     - Durch einen Lizenzschlüssel
     - Über eine Plattformbasierte Aktivierung
     - Einmalige Aktivierung durch QR-Code oder Link
     - Integration mit Schulplattformen (z.B. LMS)

4. **Account-Anforderungen:**
    - Welche Zugänge sind erforderlich (persönlicher Lehrkraft-Zugang, ggf. Streaming-Zugang für Lernende)?
    - Welche Verpflichtungen bestehen bei Vergabe und Verwaltung von Zugangsdaten?

5. **Strafen und Konsequenzen:**
    - Welche Maßnahmen gibt es bei Verstößen gegen die AGB (z.B. Entzug von Nutzungsrechten, Sperrung von Zugängen, rechtliche Schritte)?
    - Welche Bedingungen gelten bei Ablauf der Lizenz (z.B. Löschung von Dateien und Sperrung des Zugangs)?

6. **Plattformen:**
    - Über welche technischen Wege dürfen Inhalte genutzt werden (browserbasierte Plattform, zulässige Distribution per Link)?

Bitte berücksichtige alle oben genannten Aspekte und strukturiere das ODRL-Dokument entsprechend.
```

### Beispielhaftes Ergebnis
Ein typisches Ergebnis könnte ein ODRL-Dokument sein, das die spezifischen Rechte und Pflichten der Nutzer detailliert beschreibt. Als Referenz dient eine beispielhafte, öffentlich zugängliche AGB-Seite (z.B. https://example.org/terms).

```json
{
    "@context": [
        "http://www.w3.org/ns/odrl.jsonld",
        {
            "ex": "https://example.org/odrl/profile#"
        }
    ],
    "id": "https://example.org/terms",
    "permission": [
        {
            "target": "https://example.org/digital-media-platform",
            "action": "use",
            "assignee": "Nutzer",
            "constraint": [
                {
                    "leftOperand": "role",
                    "operator": "isIn",
                    "rightOperand": [
                        "Lehrkraft",
                        "Schule/Bildungseinrichtung",
                        "Medienzentrum"
                    ]
                }
            ]
        },
        {
            "target": "https://example.org/digital-media-platform",
            "action": "ex:stream",
            "assignee": "Nutzer"
        },
        {
            "target": "https://example.org/digital-media-platform",
            "action": "ex:download",
            "assignee": "Lehrkraft",
            "constraint": [
                {
                    "leftOperand": "purpose",
                    "operator": "eq",
                    "rightOperand": "Unterricht"
                }
            ]
        }
    ],
    "prohibition": [
        {
            "target": "https://example.org/digital-media-platform",
            "action": "reproduce",
            "assignee": "Nutzer"
        },
        {
            "target": "https://example.org/digital-media-platform",
            "action": "modify",
            "assignee": "Nutzer"
        },
        {
            "target": "https://example.org/digital-media-platform",
            "action": "ex:transcode",
            "assignee": "Nutzer",
            "constraint": [
                {
                    "leftOperand": "consent",
                    "operator": "neq",
                    "rightOperand": "writtenApprovalByProvider"
                }
            ]
        }
    ],
    "requirement": [
        {
            "target": "https://example.org/digital-media-platform",
            "action": "ex:payment",
            "assignee": "Nutzer",
            "constraint": [
                {
                    "leftOperand": "invoicePeriod",
                    "operator": "eq",
                    "rightOperand": "30DaysNet"
                }
            ]
        },
        {
            "target": "https://example.org/digital-media-platform",
            "action": "ex:obtainLicense",
            "assignee": "Nutzer",
            "constraint": [
                {
                    "leftOperand": "licenseType",
                    "operator": "isIn",
                    "rightOperand": [
                        "Lehreronlinelizenz",
                        "Schullizenz",
                        "Schulonlinelizenz",
                        "Medienzentrenlizenz"
                    ]
                }
            ]
        }
    ],
    "obligation": [
        {
            "target": "https://example.org/digital-media-platform",
            "action": "ex:assignAccessByRole",
            "assignee": "Schule/Bildungseinrichtung",
            "constraint": [
                {
                    "leftOperand": "studentAccess",
                    "operator": "eq",
                    "rightOperand": "streamOnly"
                },
                {
                    "leftOperand": "integrationType",
                    "operator": "eq",
                    "rightOperand": "linkOnly"
                }
            ]
        },
        {
            "target": "https://example.org/digital-media-platform",
            "action": "delete",
            "assignee": "Nutzer",
            "constraint": [
                {
                    "leftOperand": "event",
                    "operator": "eq",
                    "rightOperand": "licenseExpiry"
                },
                {
                    "leftOperand": "scope",
                    "operator": "isIn",
                    "rightOperand": [
                        "localDevices",
                        "servers",
                        "directories"
                    ]
                }
            ]
        }
    ],
    "sanction": [
        {
            "target": "https://example.org/digital-media-platform",
            "action": "ex:suspendAccount",
            "assignee": "Anbieter",
            "condition": "ifViolation"
        },
        {
            "target": "https://example.org/digital-media-platform",
            "action": "ex:withdrawUsageRights",
            "assignee": "Anbieter",
            "condition": "ifViolationOrLegalNecessity"
        }
    ],
    "platform": [
        {
            "target": "Browserbasierte Medienplattform",
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

Ein weiteres Beispiel auf Basis AGB-abgeleiteter Nutzungsrechte könnte wie folgt aussehen:

```json
{
    "@context": [
        "http://www.w3.org/ns/odrl.jsonld",
        {
            "ex": "https://example.org/odrl/profile#"
        }
    ],
    "uid": "https://example.com/v1/policies-info/9230294b-68da-4f4f-aa63-ad9040122aa7",
    "target": {
        "uid": "urn:issuer:medium:123456789",
        "partOf": "urn:issuer:catalogue"
    },
    "permission": [
        {
            "action": [
                "use",
                "ex:stream"
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
                },
                {
                    "leftOperand": "ex:role",
                    "operator": "isIn",
                    "rightOperand": [
                        "teacher",
                        "school",
                        "mediaCenter"
                    ]
                }
            ],
            "assignee": "Nutzer"
        }
    ]
}
```

Durch die Bereitstellung solcher Beispiele können die generierten ODRL-Dokumente präziser und relevanter gestaltet werden.

### Beispielhaftes Ergebnis
Ein typisches Ergebnis könnte ein ODRL-Dokument sein, das die spezifischen Rechte und Pflichten der Nutzer detailliert beschreibt. Als Referenz dient eine beispielhafte, öffentlich zugängliche AGB-Seite (z.B. https://example.org/terms).

```json
{
    "@context": [
        "http://www.w3.org/ns/odrl.jsonld",
        {
            "ex": "https://example.org/odrl/profile#"
        }
    ],
    "uid": "https://example.org/v1/policies-info/sample-policy-2024",
    "target": {
        "uid": "urn:provider:medium:online:12345",
        "partOf": "urn:provider:platform"
    },
    "permission": [
        {
            "action": [
                "use",
                "ex:stream"
            ],
            "assignee": {
                "partOf": {
                    "refinement": [
                        {
                            "leftOperand": "urn:provider:context:role",
                            "operator": "in",
                            "rightOperand": ["teacher", "school", "mediaCenter"]
                        }
                    ]
                }
            },
            "constraint": [
                {
                    "leftOperand": "purpose",
                    "operator": "eq",
                    "rightOperand": "education"
                },
                {
                    "leftOperand": "licenseStatus",
                    "operator": "eq",
                    "rightOperand": "active"
                }
            ]
        },
        {
            "action": [
                "ex:download"
            ],
            "assignee": {
                "refinement": [
                    {
                        "leftOperand": "urn:provider:context:role",
                        "operator": "eq",
                        "rightOperand": "teacher"
                    }
                ]
            }
        }
    ],
    "prohibition": [
        {
            "action": [
                "modify",
                "reproduce",
                "ex:transcode"
            ],
            "constraint": [
                {
                    "leftOperand": "consent",
                    "operator": "neq",
                    "rightOperand": "writtenApprovalByProvider"
                }
            ]
        },
        {
            "action": [
                "ex:embedDirectlyInLMS"
            ],
            "constraint": [
                {
                    "leftOperand": "integrationType",
                    "operator": "neq",
                    "rightOperand": "linkToMediaPlatform"
                }
            ]
        }
    ],
    "payment": [
        {
            "service": "DigitalMediaPlatform",
            "billing": {
                "model": "subscription",
                "frequency": "yearly",
                "paymentMethods": [
                    "invoice"
                ]
            }
        }
    ],
    "license": [
        {
            "type": "schoolLicense",
            "activation": [
                {
                    "method": "accountProvisioning"
                },
                {
                    "method": "portalAccess"
                }
            ],
            "duration": "12Months"
        },
        {
            "type": "mediaCenterLicense",
            "activation": [
                {
                    "method": "distributionSystemAccess"
                },
                {
                    "method": "portalAccess"
                }
            ]
        }
    ],
    "accountRequirements": {
        "mustCreateAccount": true,
        "requiredInfo": [
            "role"
        ],
        "obligations": [
            "assign student accounts as streaming-only",
            "delete all stored files after license expiry"
        ]
    },
    "penalties": [
        {
            "type": "accountSuspension",
            "condition": "violation of terms"
        },
        {
            "type": "usageRightWithdrawal",
            "condition": "contract breach or legal/content-related necessity"
        }
    ],
    "platforms": [
        "browser-based media platform"
    ]
}
```

In vielen Fällen ergibt sich aus der Sichtung / Prüfung des Ergebnisses ein hoher manueller Aufwand zur Anpassung.

## 3. LLM Guided-Generation
Die Strategie der LLM Guided-Generation nutzt ein ODRL Application-Profile, um spezifische Regeln für die Generierung von ODRL-Dokumenten festzulegen. Dabei wird das Vokabular zunächst aus einer beispielhaften, öffentlich zugänglichen AGB abgeleitet und anschließend gemäß `vokabular-und-taxonomie.md` sowie `application-profile.md` in ein konsistentes ODRL-Profil überführt.

### Mapping: AGB-Klausel zu ODRL

| AGB-Klausel (beispielhaft) | ODRL-Abbildung |
| --- | --- |
| Nutzung ist nur für bestimmte Rollen erlaubt (z.B. Lehrkraft, Schule, Medienzentrum). | `permission.constraint`: `leftOperand = ex:role`, `operator = isIn`, passende `rightOperand`-Liste |
| Zugriff ist nur bei aktiver Laufzeit/Lizenz gültig. | `permission.constraint`: zwei `dateTime`-Constraints (`gteq` und `lt`) |
| Bestimmte Lizenzarten sind erforderlich. | `permission.constraint`: `leftOperand = ex:licenseType`, `operator = isIn` |
| Inhalte dürfen nur per Link in LMS eingebunden werden. | `permission.constraint`: `leftOperand = ex:integrationType`, `operator = eq`, `rightOperand = linkOnly` |
| Download ist nur für Lehrkräfte erlaubt. | eigene `permission` für `ex:download` mit Constraint `ex:role = teacher` |
| Bearbeitung/Vervielfältigung/Transkodierung ist untersagt. | `prohibition.action`: `modify`, `reproduce`, `ex:transcode` |
| Nach Lizenzablauf müssen Inhalte gelöscht werden. | `permission.duty`: `action = delete` mit Event-Constraint `ex:event = licenseExpiry` |

**Nicht aus AGB ableiten (Guardrails)**

- Keine organisationsspezifischen Kennungen oder Stammdaten (z.B. Schulnummern, interne IDs) direkt aus allgemeinen AGB übernehmen.
- Keine internen Rollen-Codes oder proprietären Feldnamen ohne explizites Vokabular/Namespace verwenden.
- Keine technischen Implementierungsdetails (z.B. konkrete System- oder Benutzer-IDs) in ODRL aufnehmen, sofern sie nicht ausdrücklich Vertragsbestandteil sind.

### Beispiel ODRL Application-Profile
Ein Beispiel für ein ODRL-Dokument könnte wie folgt aussehen:

```json
{
    "@context": {
        "odrl": "http://www.w3.org/ns/odrl.jsonld",
        "ex": "https://example.org/odrl/profile#"
    },
    "id": "https://example.org/odrl/profile/agb-guided/v1",
    "profile": "https://example.org/odrl/profile/agb-guided/v1",
    "sourceAgb": "https://example.org/terms",
    "guidance": {
        "requiredAttributes": [
            "uid",
            "target",
            "permission",
            "assignee",
            "constraint"
        ],
        "agbVocabulary": {
            "roles": [
                "teacher",
                "school",
                "mediaCenter"
            ],
            "licenseTypes": [
                "teacherOnlineLicense",
                "schoolLicense",
                "schoolOnlineLicense",
                "mediaCenterLicense"
            ],
            "usageModes": [
                "stream",
                "download"
            ],
            "restrictions": [
                "noModification",
                "noTranscodingWithoutWrittenConsent",
                "linkOnlyIntegration"
            ]
        },
        "allowedRoleOperand": "ex:role",
        "allowedLicenseTypeOperand": "ex:licenseType",
        "allowedIntegrationOperand": "ex:integrationType",
        "allowedTimeOperand": "dateTime",
        "allowedActions": [
            "use",
            "display",
            "print",
            "ex:stream",
            "ex:download",
            "ex:shareByLink"
        ]
    }
}
````

Die Definition eines ODRL Application-Profiles würde es Anbietern ermöglichen, die Erstellung von ODRL-Dokumenten zu standardisieren und sicherzustellen, dass alle relevanten Aspekte abgedeckt sind.

### Beispielhaftes Ergebnis
Ein typisches Ergebnis könnte ein ODRL-Dokument sein, das die spezifischen Rechte und Pflichten der Nutzer detailliert beschreibt. Dabei werden AGB-Begriffe (Rollen, Lizenztypen, Nutzungsarten, Restriktionen) über das Application-Profile in ODRL-Attribute und Constraints übersetzt.

```json
{
    "@context": {
        "odrl": "http://www.w3.org/ns/odrl.jsonld",
        "ex": "https://example.org/odrl/profile#"
    },
    "uid": "https://example.com/v1/policies-info/guided-odrl-2026-001",
    "@type": "Set",
    "profile": "https://example.org/odrl/profile/agb-guided/v1",
    "target": {
        "uid": "urn:issuer:medium:MATHE-2026-001",
        "partOf": "urn:issuer:catalogue"
    },
    "permission": [
        {
            "action": [
                "use",
                "display",
                "print",
                "ex:stream"
            ],
            "assignee": "Nutzer",
            "constraint": [
                {
                    "leftOperand": "dateTime",
                    "operator": "gteq",
                    "rightOperand": "2026-08-01T00:00+0200"
                },
                {
                    "leftOperand": "dateTime",
                    "operator": "lt",
                    "rightOperand": "2027-08-01T00:00+0200"
                },
                {
                    "leftOperand": "ex:role",
                    "operator": "isIn",
                    "rightOperand": [
                        "teacher",
                        "school",
                        "mediaCenter"
                    ]
                },
                {
                    "leftOperand": "ex:licenseType",
                    "operator": "isIn",
                    "rightOperand": [
                        "teacherOnlineLicense",
                        "schoolOnlineLicense"
                    ]
                },
                {
                    "leftOperand": "ex:integrationType",
                    "operator": "eq",
                    "rightOperand": "linkOnly"
                }
            ],
            "duty": [
                {
                    "action": "delete",
                    "constraint": [
                        {
                            "leftOperand": "ex:event",
                            "operator": "eq",
                            "rightOperand": "licenseExpiry"
                        }
                    ]
                }
            ]
        },
        {
            "action": [
                "ex:download"
            ],
            "assignee": "Nutzer",
            "constraint": [
                {
                    "leftOperand": "ex:role",
                    "operator": "eq",
                    "rightOperand": "teacher"
                }
            ]
        }
    ],
    "prohibition": [
        {
            "action": [
                "reproduce",
                "modify",
                "ex:transcode"
            ],
            "assignee": "AllUsers"
        }
    ]
}
```

Durch die Bereitstellung eines ODRL Application-Profiles können die generierten ODRL-Dokumente präziser und relevanter gestaltet werden. Ein manueller Aufwand für Anpassungen ist weiterhin im Rahmen des möglichen.

## 4. Erweiterte Best-Practices

Neben Prompting, One-Shot und Guided-Generation sind insbesondere die folgenden zwei Strategien in der Praxis hilfreich.

### 4.1 Retrieval-Augmented Generation (RAG)
Bei der RAG-Strategie werden vor der eigentlichen ODRL-Generierung gezielt relevante Passagen aus den AGB extrahiert und dem LLM als verbindlicher Kontext übergeben. Dadurch sinkt das Risiko, dass Regeln erfunden oder falsch übertragen werden.

**Empfohlener Ablauf:**

1. AGB in sinnvolle Abschnitte segmentieren (z.B. Nutzungsrechte, Verbote, Laufzeit, Sanktionen).
2. Für jede gewünschte ODRL-Regel nur die fachlich passenden AGB-Abschnitte abrufen.
3. ODRL ausschließlich aus diesen Abschnitten erzeugen.
4. Für jede Policy-Regel eine Referenz auf die zugrunde liegende AGB-Passage dokumentieren.

**Vorteil:**
- Hohe Nachvollziehbarkeit und bessere fachliche Qualität der generierten ODRL-Policies.

### 4.2 Human-in-the-loop
Bei Human-in-the-loop wird die automatische ODRL-Generierung durch eine strukturierte fachliche und ggf. juristische Prüfung ergänzt. Das LLM erstellt einen Entwurf, der erst nach Review freigegeben wird.

**Empfohlener Ablauf:**

1. LLM erzeugt einen ODRL-Entwurf inklusive Mapping-Tabelle (AGB-Klausel → ODRL-Regel).
2. Fachreview prüft, ob die Regeln die AGB inhaltlich korrekt abbilden.
3. Juristischer oder Compliance-Review bewertet kritische Klauseln (z.B. Verbote, Sanktionen, Laufzeit).
4. Freigegebene Version wird versioniert abgelegt und als Referenzstandard genutzt.

**Vorteil:**
- Höhere Rechtssicherheit und kontrollierte Qualität vor produktivem Einsatz.
