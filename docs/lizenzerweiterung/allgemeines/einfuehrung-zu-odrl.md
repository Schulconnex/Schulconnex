---
title: Einführung zu ODRL
---

# Einführung in W3C Open Digital Rights Language (ODRL) Version 2.2

Dieses Dokument gibt einen ersten Überblick zu W3C ODRL v2.2 und beschreibt in den Kapiteln der vollständigkeithalber möglichst alle Attribute; in diesen Fällen schließt das Kapitel damit ab, welche Attribute in dieser Version berücksichigung finden und für welche bisher keine Verwendung geplant ist (out of scope).

> Anmerkungen bzgl in-scope oder out-of-scope werden als Kommentar geführt.

Inhaltsverzeichnis
- [Einführung in W3C Open Digital Rights Language (ODRL) Version 2.2](#einführung-in-w3c-open-digital-rights-language-odrl-version-22)
  - [Beschreibung und Konzept](#beschreibung-und-konzept)
    - [Policy Types](#policy-types)
    - [Rules (Regeln)](#rules-regeln)
    - [Das Attribut "inheritFrom" (Vererbung)](#das-attribut-inheritfrom-vererbung)
    - [Metadaten für Medien](#metadaten-für-medien)
      - [Metadaten nach einer Spezifikation](#metadaten-nach-einer-spezifikation)
    - [Beispiele](#beispiele)
      - [Beispiel für das Attribut "refinement"](#beispiel-für-das-attribut-refinement)
      - [Beispiel für das Attribut "inheritFrom"](#beispiel-für-das-attribut-inheritfrom)
  - [Application-profiles in ODRL](#application-profiles-in-odrl)
    - [Eigene Attribute auf oberster Ebene](#eigene-attribute-auf-oberster-ebene)
    - [Prozess beim Erstellen eines Application-profile](#prozess-beim-erstellen-eines-application-profile)
  - [Scope der Schnittstelle /lizenz-info](#scope-der-schnittstelle-lizenz-info)

## Beschreibung und Konzept

Die Open Digital Rights Language (ODRL) ist eine Sprache, die speziell dafür entwickelt wurde, digitale Rechte und Lizenzen zu beschreiben. Sie bietet einen standardisierten Weg, um die Bedingungen für die Nutzung von digitalen Inhalten festzulegen. ODRL ermöglicht es, die Rechte und Einschränkungen von digitalen Werken, wie zum Beispiel Texten, Bildern oder Videos, auf eine strukturierte und maschinenlesbare Weise zu formulieren.

Hier sind einige Schlüsselkonzepte und Attribute in ODRL:

1. **Permission (Erlaubnis):** Dieses Attribut beschreibt die erlaubten Handlungen oder Aktivitäten, die mit dem digitalen Inhalt durchgeführt werden können. Zum Beispiel könnte es angeben, dass der Inhalt kopiert, gedruckt oder für den persönlichen Gebrauch verwendet werden darf.

2. **Prohibit (Verbieten):** Im Gegensatz zur Erlaubnis gibt das Prohibit-Attribut an, welche Handlungen ausdrücklich untersagt sind. Es legt fest, was nicht mit dem digitalen Inhalt getan werden darf. Zum Beispiel könnte es verbieten, den Inhalt zu verkaufen oder zu modifizieren.

3. **Constraint (Einschränkung):** Dieses Attribut ermöglicht es, spezifische Bedingungen oder Anforderungen für die Nutzung des digitalen Inhalts festzulegen. Dies könnte zeitliche Einschränkungen, geografische Beschränkungen oder andere spezifische Anforderungen umfassen.

4. **Party (Partei):** In ODRL bezieht sich "Party" auf diejenigen, die an den Rechten und Lizenzen beteiligt sind. Das können zum Beispiel der Inhaltsanbieter, der Nutzer oder andere involvierte Parteien sein.

5. **Duty (Pflicht):** Dieses Attribut legt Verpflichtungen oder Aufgaben für die Parteien fest. Zum Beispiel könnte eine Pflicht vorsehen, dass der Nutzer den Urheber des Inhalts angemessen anerkennt.

ODRL ermöglicht die Kombination dieser Elemente, um komplexe Szenarien für die Nutzung digitaler Inhalte zu beschreiben. Durch die Verwendung dieser Sprache können Maschinen die Rechte und Einschränkungen verstehen und automatisch handeln, um sicherzustellen, dass digitale Inhalte entsprechend den festgelegten Regeln verwendet werden.

> In der aktuellen Version des Dokuments ist für ODRL-Policies die Verwendung von `Prohibit` (Verbieten), `Duty` (Pflicht) nicht vorgesehen.

### Policy Types

In ODRL gibt es verschiedene Policy Types, die die Art der Vereinbarung oder Regelung zwischen den Parteien definieren. Hier sind einige der häufig verwendeten Policy Types:

1. **Offer:** Diese Art von Richtlinie beschreibt ein Angebot, bei dem eine Partei die Erlaubnis anbietet, bestimmte Handlungen mit einem digitalen Inhalt durchzuführen. Der Angebotsgeber legt die Bedingungen und Anforderungen fest.

2. **Agreement:** Eine Vereinbarung ist eine gegenseitige Zustimmung zwischen Parteien über die Regeln für die Nutzung digitaler Inhalte. Es ist im Grunde eine beidseitige Vereinbarung über die Bedingungen der Nutzung.

3. **Set:** Ein Satz (Set) von Richtlinien kann verwendet werden, um eine Gruppe von Regelungen zu bündeln. Ein Set könnte mehrere einzelne Richtlinien enthalten, die zusammen eine umfassendere Vereinbarung bilden.

4. **Asset:** Dieser Policy Type wird verwendet, um Eigenschaften eines digitalen Inhalts zu beschreiben, wie z.B. Metadaten, und kann auch Regelungen für den Zugriff darauf enthalten.

5. **Privacy:** Datenschutzrichtlinien werden verwendet, um festzulegen, wie personenbezogene Daten gesammelt, gespeichert und verarbeitet werden dürfen.

6. **Ticket:** In ODRL bezieht sich der Policy Type "Ticket" auf eine spezielle Art von Vereinbarung, bei der der Zugang zu einem digitalen Inhalt durch ein "Ticket" oder eine Art von Berechtigungsnachweis gesteuert wird. Ein Ticket könnte beispielsweise einen zeitlich begrenzten Zugriff auf einen bestimmten Inhalt gewähren. Es handelt sich um eine Art von Richtlinie, die sich auf die Erstellung und Verwaltung von Zugangsberechtigungen konzentriert, ähnlich wie ein Eintrittsticket für eine Veranstaltung.

In Bezug auf das Policy Type-Attribut ist es in der Regel wichtig, es zu spezifizieren, um klarzustellen, welche Art von Richtlinie erstellt wird. Je nach Kontext und Anwendung könnte es sich um eine Vereinbarung (Agreement), ein Angebot (Offer), einen Satz (Set) oder einen anderen Typ handeln. Dies hilft dabei, die Absichten der Parteien klar zu kommunizieren.

> In der aktuellen Version des Dokuments sind für ODRL-Policies die Definition als Policy-Types `Offer`, `Asset`, `Privacy` nicht vorgesehen.

### Rules (Regeln)

In ODRL werden Permissions, Constraints und andere Elemente oft als Listen von Regeln (Rules) definiert. Eine Regel in ODRL ist im Wesentlichen eine Kombination von Bedingungen, die spezifiziert, unter welchen Umständen eine Aktion erlaubt oder eingeschränkt ist.

Eine Regel besteht normalerweise aus den folgenden Teilen:

1. **Target:** Das Ziel der Regel gibt an, auf welchen digitalen Inhalt oder welche Ressource sich die Regel bezieht. Es kann sich um ein Asset handeln, das eine digitale Datei oder eine Gruppe von Dateien repräsentiert.

Beispiel (Einfach):
```json
"target": "example:book"
```

Beispiel (Semantisch):
```json
"target": {
    "asset": {
        "relation": "http://www.w3.org/ns/odrl/2/target",
        "ref": "example:book"
    }
}
```

2. **Action:** Die Aktion beschreibt die erlaubte oder eingeschränkte Handlung, die auf das Ziel angewendet werden kann. Es könnte sich um das Lesen, Kopieren, Drucken oder eine andere Aktion handeln.

Beispiel (Einfach):
```json
"action": "read"
```

Beispiel (Semantisch):
```json
"action": {
    "read": {}
}
```

3. **Constraint:** Eine Bedingung legt die Einschränkungen oder Anforderungen fest, die erfüllt sein müssen, damit die Aktion durchgeführt werden kann. Eine Bedingung kann zum Beispiel angeben, dass die Aktion nur in einer bestimmten Region erlaubt ist.

Beispiel (Einfach):
```json
"constraint": [
    {
        "leftOperand": "example:region",
        "operator": "eq",
        "rightOperand": "Europe"
    }
]
```

Beispiel (Semantisch):
```json
"constraint": [
    {
        "leftOperand": {
            "asset": {
                "relation": "http://www.w3.org/ns/odrl/2/target",
                "ref": "example:region"
            }
        },
        "operator": "eq",
        "rightOperand": "Europe"
    }
]
```

4. **Refinement:** Die Verfeinerung (Refinement) ermöglicht eine genauere Spezifikation der Regel. Es können zusätzliche Details oder Ausnahmen hinzugefügt werden.

Beispiel (Einfach):
```json
"refinement": [
    {
        "leftOperand": "example:timePeriod",
        "operator": "lt",
        "rightOperand": "2024-12-31T23:59:59Z"
    }
]
```

Beispiel (Semantisch):
```json
"refinement": [
    {
        "leftOperand": {
            "asset": {
                "relation": "http://www.w3.org/ns/odrl/2/target",
                "ref": "example:timePeriod"
            }
        },
        "operator": "lt",
        "rightOperand": "2024-12-31T23:59:59Z"
    }
]
```

Eine Richtlinie in ODRL kann mehrere solcher Regeln enthalten, die kombiniert werden, um die Bedingungen für die Nutzung von digitalen Inhalten detailliert zu beschreiben.

> In der aktuellen Version des Dokuments sind für ODRL-Rules - sofern Möglich - die Verwendung der einfachen Darstellung vorgesehen. Nachfolgend ein Beispiel eines `Refinement` auf ein `Target`.

Beispiel (Target als kompletter Katalog eines Anbieters, jedoch exakt nur Medien mit der Kennung "example:book"):
```json
"target": {
    "@type": "http://www.w3.org/ns/odrl/2/AssetCollection",
    "source": "example:provider:catalog",
    "refinement": [
        {
            "leftOperand": "http://www.w3.org/ns/odrl/2/media",
            "operator": "eq",
            "rightOperand": "example:book"
        }
    ]
}
```

### Das Attribut "inheritFrom" (Vererbung)

Das Attribut "inheritFrom" in ODRL wird verwendet, um anzuzeigen, dass eine Richtlinie oder Regel von einer anderen Richtlinie oder Regel erbt. Es ermöglicht die Vererbung von Bedingungen, Erlaubnissen oder anderen Eigenschaften von einer übergeordneten Entität zu einer untergeordneten Entität.

Hier ist ein vereinfachtes Beispiel, um das Konzept zu verdeutlichen:
```json
{
    "uid": "example:parentPolicy",
    "permission": [
        {
            "action": "read",
            "target": "example:book"
        }
    ]
}

{
    "uid": "example:childPolicy",
    "inheritFrom": "example:parentPolicy",
    "constraint": [
        {
            "leftOperand": "example:group",
            "operator": "eq",
            "rightOperand": "example:organization:group1"
        }
    ]
}
```

In diesem Beispiel gibt es zwei Richtlinien: "example:parentPolicy" und "example:childPolicy". Die "childPolicy" erbt von der "parentPolicy" durch die Verwendung des "inheritFrom"-Attributs. Die "parentPolicy" erlaubt das Lesen des Buchs "example:book". Die "childPolicy" erbt diese Erlaubnis und fügt eine zusätzliche Constraint hinzu, die sicherstellt, dass die Person Mitglied der Gruppe "example:organization:group1" ist.

Die Verwendung von "inheritFrom" ermöglicht eine effiziente Verwaltung von Richtlinien, insbesondere wenn mehrere Richtlinien ähnliche Bedingungen oder Erlaubnisse teilen sollen. Änderungen in der übergeordneten Richtlinie werden automatisch auf die untergeordnete Richtlinie übertragen, es sei denn, sie wird dort ausdrücklich überschrieben.

> In der aktuellen Version des Dokuments ist in ODRL-Policies die Verwendung von `inheritFrom` vorgesehen. Die Trennung auf verschiedene ODRL-Policies erlaubt es diese jeweils in einem Kontext zu verorten, welche für Businesslogik, wie z.B. die REST-API Schnittstelle `/lizenz-info`, relevant sind.

### Metadaten für Medien

In ODRL können Sie Metadaten zu einem Target hinzufügen, um zusätzliche Informationen über den digitalen Inhalt zu spezifizieren. Dies wird normalerweise über das `metadata`-Attribut im `target`-Element gemacht. Die `metadata`-Eigenschaft ermöglicht es, Metadaten für das Ziel des Zugriffs oder der Nutzung zu definieren.

Hier ist ein Beispiel, wie Sie Metadaten für ein E-Book in einer ODRL-Richtlinie spezifizieren könnten:

```json
{
    "uid": "example:policy:123",
    "permission": [
        {
            "action": "read",
            "target": {
                "@type": "http://www.w3.org/ns/odrl/2/AssetCollection",
                "source": "example:provider:catalog",
                "refinement": [
                    {
                        "leftOperand": "http://www.w3.org/ns/odrl/2/media",
                        "operator": "eq",
                        "rightOperand": "example:book"
                    }
                ],
                "metadata": {
                    "title": "The Great Novel",
                    "summary": "A compelling story of adventure and discovery.",
                    "readingTime": "4 hours"
                }
            }
        }
    ],
    "constraint": [
      // Weitere Einschränkungen können hier hinzugefügt werden
    ]
}
```

In diesem Beispiel enthält das `metadata`-Attribut innerhalb des `target`-Elements Informationen wie den Titel des E-Books, eine Zusammenfassung und die typische Lesezeit.

Es ist wichtig zu beachten, dass die genaue Struktur der Metadaten vom jeweiligen Anwendungsfall abhängt. Sie können die Metadaten anpassen, um die spezifischen Informationen zu enthalten, die für Ihr System oder Ihre Anwendung relevant sind.

#### Metadaten nach einer Spezifikation

Die Metadaten in ODRL können in der Struktur und im Format einer spezifischen Metadatenspezifikation aufgebaut sein, solange diese Struktur in Ihrem Anwendungsfall sinnvoll ist. Das ODRL-Framework selbst definiert nicht die genaue Struktur von Metadaten. Stattdessen überlässt es es den Anwendern, wie sie ihre Metadaten innerhalb der `metadata`-Eigenschaft strukturieren und organisieren möchten.

Wenn Sie eine bestimmte Metadatenspezifikation wie IEEE LOM (Learning Object Metadata) oder LMT (Learning Metadata Terms) verwenden möchten, können Sie dies in Ihren ODRL-Richtlinien umsetzen. Sie würden die Struktur der Metadaten entsprechend der Spezifikation Ihrer Wahl gestalten.

Hier ist ein vereinfachtes Beispiel, wie dies für IEEE LOM aussehen könnte:

```json
{
    "uid": "example:policy:123",
    "permission": [
        {
            "action": "read",
            "target": {
                "@type": "http://www.w3.org/ns/odrl/2/AssetCollection",
                "source": "example:provider:catalog",
                "refinement": [
                    {
                        "leftOperand": "http://www.w3.org/ns/odrl/2/media",
                        "operator": "eq",
                        "rightOperand": "example:book"
                    }
                ],
                "metadata": {
                    "LOM": {
                        "general": {
                            "title": "The Great Novel",
                            "description": "A compelling story of adventure and discovery.",
                            "keyword": ["novel", "adventure", "discovery"]
                        },
                        "lifecycle": {
                            "version": "1.0"
                        }
                    }
                }
            }
        }
    ],
    "constraint": [
      // Weitere Einschränkungen können hier hinzugefügt werden
    ]
}
```

In diesem Beispiel wurde die Struktur der Metadaten an die allgemeinen Kategorien von IEEE LOM angepasst, wie z.B. "general" für allgemeine Informationen über das Lernobjekt und "lifecycle" für lebenszyklusbezogene Informationen. Sie können diese Struktur weiter anpassen, um den Anforderungen Ihrer spezifischen Metadatenspezifikation gerecht zu werden.

Auch für Learning Metadata Terms (LMT) könnten Sie die Metadaten in ODRL-Richtlinien einbinden. Hier ist ein vereinfachtes Beispiel:

```json
{
    "uid": "example:policy:123",
    "permission": [
        {
            "action": "read",
            "target": {
              "@type": "http://www.w3.org/ns/odrl/2/AssetCollection",
                "source": "example:provider:catalog",
                "refinement": [
                    {
                        "leftOperand": "http://www.w3.org/ns/odrl/2/media",
                        "operator": "eq",
                        "rightOperand": "example:book"
                    }
                ],
                "metadata": {
                    "LMT": {
                        "educational": {
                            "learningResourceType": "book",
                            "intendedEndUserRole": "learner"
                        },
                        "rights": {
                            "copyrightHolder": "Author Name",
                            "license": "http://example.com/licenses/by-nc-sa/4.0"
                        }
                    }
                }
            }
        }
    ],
    "constraint": [
      // Weitere Einschränkungen können hier hinzugefügt werden
    ]
}
```

In diesem Beispiel wurden LMT-Elemente wie "educational" und "rights" verwendet, um Bildungsinformationen und Rechteinformationen zu spezifizieren. Sie können die Struktur und Elemente weiter anpassen, um sicherzustellen, dass sie den Anforderungen Ihrer spezifischen Anwendung und der LMT-Spezifikation entsprechen. Beachten Sie, dass die genaue Struktur stark von den spezifischen Anforderungen Ihres Anwendungsfalls und Ihrer Anwendung abhängt.

### Beispiele

Dieses Beispiel definiert eine ODRL-Richtlinie, die es der Person mit der ID "user123" erlaubt, auf das E-Book mit der ID "book" zuzugreifen, vorausgesetzt, sie ist Mitglied der Gruppe "group1" innerhalb der Organisation. Außerdem muss der Zugriff durch die Verwendung des spezifischen Lizenzschlüssels "ThisIsAnAccessKey" erfolgen. Beachte, dass die Beispiel-IDs (z.B., "example:book", "example:group", "example:person") fiktiv sind.

> Beispiel mit Regeln auf Root-Ebene

```JSON
{
    "uid": "example:policy:123",
    "permission": [
        {
            "target": {
                "@type": "http://www.w3.org/ns/odrl/2/AssetCollection",
                "source": "example:provider:catalog",
                "refinement": [
                    {
                        "leftOperand": "http://www.w3.org/ns/odrl/2/media",
                        "operator": "eq",
                        "rightOperand": "example:book"
                    }
                ],
            },
            "action": "read"
        }
    ],
    "constraint": [
        {
          "leftOperand": "example:group",
          "operator": "eq",
          "rightOperand": "example:organization:group1"
        },
        {
          "leftOperand": "example:person",
          "operator": "eq",
          "rightOperand": "example:person:user123"
        },
        {
          "leftOperand": "example:accessKey",
          "operator": "eq",
          "rightOperand": "ThisIsAnAccessKey"
        }
    ]
}
```

#### Beispiel für das Attribut "refinement"

Das Attribut "refinement" wird in ODRL verwendet, um zusätzliche Details oder Verfeinerungen zu einer Regel hinzuzufügen. Es ermöglicht eine genauere Spezifikation der Bedingungen. So könnten beispielsweise in einer Erlaubnis-Richtlinie zusätzliche Verfeinerungen hinzugefügt werden, um die Erlaubnis weiter zu präzisieren.

> Beispiel mit verschachtelten Regeln durch Nutzung des Attribut "refinement" (Zu Verstehen als Filter auf eine Regel)

```JSON
{
    "uid": "example:policy:123",
    "permission": [
        {
            "target": {
                "@type": "http://www.w3.org/ns/odrl/2/AssetCollection",
                "source": "example:provider:catalog",
                "refinement": [
                    {
                        "leftOperand": "http://www.w3.org/ns/odrl/2/media",
                        "operator": "eq",
                        "rightOperand": "example:book"
                    }
                ],
            },
            "action": "read",
            "refinement": {
                "leftOperand": "example:accessKey",
                "operator": "eq",
                "rightOperand": "ThisIsAnAccessKey"
            }
        }
    ],
    "constraint": [
        {
            "leftOperand": "example:group",
            "operator": "eq",
            "rightOperand": "example:organization:group1"
        },
        {
            "leftOperand": "example:person",
            "operator": "eq",
            "rightOperand": "example:person:user123"
        }
    ]
}
```

#### Beispiel für das Attribut "inheritFrom"

In diesem Beispiel:

- Die Vereinbarung (`example:publisherAgreement`) zwischen dem Verlag und der Organisation ermöglicht das Lesen des E-Books.

- Das Set (`example:userPermissions`) erbt von der Vereinbarung und spezifiziert, dass der Nutzer zur Gruppe `group1` gehören muss.

- Ein weiteres Set (`example:licenseKeyPolicy`) erbt von den Nutzerberechtigungen und erfordert den spezifischen Lizenzschlüssel.
    - Beispielhaft getrennt, kann mit dem Set (`example:userPermissions`) zusammen definiert werden.

- Das Ticket (`example:ticket`) erbt von der Lizenzschlüsselrichtlinie und ist für die Anwendung `MyWebApp` bestimmt. Es ermöglicht dem Benutzer mit der ID `user123` den Zugriff auf das E-Book bis zu einem bestimmten Datum.
    - Würde im Fall des Zusammenlegen der Sets (`example:userPermissions`) und (`example:licenseKeyPolicy`) dann vom Set (`example:userPermissions`) erben.

```json
{
    "uid": "example:publisherAgreement",
    "policyType": "Agreement",
    "permission": [
        {
            "action": "read",
            "target": {
                "@type": "http://www.w3.org/ns/odrl/2/AssetCollection",
                "source": "example:provider:catalog",
                "refinement": [
                    {
                        "leftOperand": "http://www.w3.org/ns/odrl/2/media",
                        "operator": "eq",
                        "rightOperand": "example:book"
                    }
                ]
            }
        }
    ]
}

{
    "uid": "example:userPermissions",
    "policyType": "Set",
    "inheritFrom": "example:publisherAgreement",
    "constraint": [
        {
            "leftOperand": "example:group",
            "operator": "eq",
            "rightOperand": "example:organization:group1"
        }
    ]
}

{
    "uid": "example:licenseKeyPolicy",
    "policyType": "Set",
    "inheritFrom": "example:userPermissions",
    "constraint": [
        {
            "leftOperand": "example:accessKey",
            "operator": "eq",
            "rightOperand": "ThisIsAnAccessKey"
        }
    ]
}

{
    "uid": "example:ticket",
    "policyType": "Ticket",
    "inheritFrom": "example:licenseKeyPolicy",
    "assigner": "example:MyWebApp",
    "assignee": "example:person:user123",
    "target": "example:eBook",
    "constraint": [
        {
            "dateTime": {
                "relation": "http://www.w3.org/ns/odrl/2/dateTime",
                "rightOperand": "2024-02-29T12:00:00Z",
                "function": "eq"
            }
        }
    ]
}
```

## Application-profiles in ODRL

In ODRL gibt es die Möglichkeit Application Profiles zu erstellen, um den Einsatz der ODRL-Sprache in bestimmten Anwendungsbereichen oder für spezifische Anforderungen zu standardisieren. Ein Application Profile kann spezifische Anwendungsregeln und -richtlinien definieren, die über die allgemeinen ODRL-Spezifikationen hinausgehen oder diese präzisieren. Es kann auch spezifische Terminologien, Bedingungen und Anwendungspraktiken für eine bestimmte Anwendungsdomäne festlegen.

Ein ODRL Application Profile könnte beispielsweise für den Bildungsbereich, den Gesundheitssektor, den Verlagswesen oder für andere spezifische Anwendungsfälle erstellt werden. Die Bedingungen, die in einem solchen Profil definiert werden können, umfassen:

1. **Terminologie:** Festlegen von spezifischen Begriffen, die in einer bestimmten Anwendungsdomäne verwendet werden sollen, um Missverständnisse zu vermeiden und die Interoperabilität zu verbessern.

2. **Spezifische Aktionen:** Definieren von benutzerdefinierten Aktionen, die spezifisch für die Anwendung sind. Zum Beispiel können Bildungseinrichtungen spezielle Aktionen wie "Unterrichtsanzeige" oder "Testzugriff" haben.

3. **Spezifische Einschränkungen:** Festlegen von zusätzlichen Beschränkungen oder Anforderungen, die für die Anwendungsdomäne relevant sind. Dies könnte zeitliche Beschränkungen, geografische Einschränkungen oder andere spezifische Anforderungen umfassen.

4. **Spezifische Target-Typen:** Definition von speziellen Asset-Typen, die für die Anwendung relevant sind. Dies könnte beispielsweise "Lehrbuch", "Medizinische Aufzeichnung" oder "Wissenschaftliche Veröffentlichung" sein.

5. **Anwendungsrichtlinien:** Festlegen von spezifischen Richtlinien oder Regeln, die in der Anwendungsdomäne gelten. Dies könnte beispielsweise die Notwendigkeit einer bestimmten Erlaubnis für die Verwendung von medizinischen Aufzeichnungen sein.

Es ist wichtig sicherzustellen, dass ein ODRL Application Profile _**rückwärtskompatibel**_ zu den allgemeinen ODRL-Spezifikationen bleibt, um eine Interoperabilität mit anderen Systemen sicherzustellen, die die generischen ODRL-Richtlinien verwenden.

### Eigene Attribute auf oberster Ebene

Grundsätzlich können Sie in einem ODRL Application Profile eigene Attribute auf der obersten Ebene hinzufügen. Sie können spezifische Anforderungen oder Bedingungen für Ihre Anwendung definieren, die über die allgemeinen ODRL-Spezifikationen hinausgehen.

Zum Beispiel könnten Sie ein neues Attribut "Anhang" auf der obersten Ebene erstellen und es verwenden, um zusätzliche Informationen oder Verweise auf externe Ressourcen anzugeben, die für die Interpretation der Richtlinie wichtig sind. _**Beachten Sie dabei, dass die Verwendung von benutzerdefinierten Attributen die Interoperabilität beeinträchtigen kann**_, es sei denn, andere Systeme auch dieses spezielle Attribut unterstützen.

Hier ein einfaches Beispiel in YAML, wie es in einem ODRL Application Profile aussehen könnte:

```yaml
profile:
  name: "MyApplicationProfile"
  version: "1.0"
  description: "Spezifisches Anwendungsprofil für meine Anwendung"
  attach:
    type: "external"
    reference: "https://example.com/documentation"
  permissions:
    - action: read
      target:
        type: document
      constraint:
        spatial: "europe"
  prohibits:
    - action: copy
      target:
        type: document
      constraint:
        temporal: "2024-01-01T00:00:00Z"
```

In diesem Beispiel wurde das benutzerdefinierte Attribut "Anhang" durch das Attribut "attach" ersetzt, um zusätzliche Informationen zu speichern. Sie können die Struktur und den Namen des Attributs nach Ihren Anforderungen anpassen. _**Beachten Sie jedoch, dass die Unterstützung für benutzerdefinierte Attribute in anderen ODRL-fähigen Systemen möglicherweise nicht garantiert ist**_.

### Prozess beim Erstellen eines Application-profile

Die Definition und Veröffentlichung eines ODRL Application Profiles beinhalten einige Schritte, um sicherzustellen, dass das Profil klar, konsistent und für andere verständlich ist. Hier sind die grundlegenden Schritte:

1. **Anforderungsanalyse:**
   - Klären Sie die spezifischen Anforderungen und Anwendungsfälle, die Ihr ODRL Application Profile adressieren soll. Überlegen Sie, welche speziellen Attribute oder Anpassungen notwendig sind.

2. **Definition des Profils:**
   - Erstellen Sie eine klare Definition für Ihr ODRL Application Profile. Das umfasst die Festlegung von:
     - Anwendungsdomäne und -kontext.
     - Neue Attribute und ihre Bedeutung.
     - Spezielle Terminologie und Begriffe.
     - Spezifische Aktionen, Einschränkungen und Ziele.

3. **Dokumentation:**
   - Erstellen Sie eine umfassende Dokumentation, die die Verwendung des Application Profiles erklärt. Dies sollte eine klare Beschreibung der neuen Attribute, Aktionen und Einschränkungen enthalten. Überlegen Sie, wie andere Entwickler oder Anwender Ihr Profil verstehen und implementieren können.

4. **Beispiele und Muster:** 
   - Fügen Sie Beispiele und Muster für die Verwendung Ihres Application Profiles hinzu. Dies hilft anderen, die Anwendung Ihrer spezifischen Attribute und Regeln zu verstehen.

5. **Validierung und Tests:**
   - Validieren Sie Ihr Application Profile, um sicherzustellen, dass es korrekt und konsistent ist. Führen Sie Tests durch, um sicherzustellen, dass die definierten Regeln in verschiedenen Szenarien funktionieren.

6. **Veröffentlichung:**
   - Veröffentlichen Sie Ihr ODRL Application Profile an einem geeigneten Ort. Dies könnte eine öffentliche Plattform, ein spezielles Repository oder sogar Ihre eigene Website sein. Stellen Sie sicher, dass die Dokumentation und Beispiele leicht zugänglich sind.

7. **Kommunikation:**
   - Informieren Sie die ODRL-Community und andere relevante Interessengruppen über die Existenz und Verfügbarkeit Ihres Application Profiles. Dies könnte durch Mailinglisten, Foren oder Konferenzen erfolgen.

8. **Feedback sammeln:**
   - Öffnen Sie Ihr Application Profile für Feedback von anderen Entwicklern und Anwendern. Dies kann helfen, mögliche Verbesserungen zu identifizieren und sicherzustellen, dass Ihr Profil breiter akzeptiert wird.

9. **Aktualisierung:**
   - Aktualisieren Sie Ihr Application Profile bei Bedarf, basierend auf Feedback und neuen Anforderungen. Stellen Sie sicher, dass die Versionierung klar kommuniziert wird.

10. **Interoperabilität prüfen:**
   - Überprüfen Sie die Interoperabilität Ihres Application Profiles mit anderen ODRL-fähigen Systemen. Achten Sie darauf, dass benutzerdefinierte Attribute und Regeln auch von anderen korrekt interpretiert werden können.

## Scope der Schnittstelle /lizenz-info

Die Schnittstelle `/lizenz-info` wird nicht alle ODRL PolicyTypes behandeln. Das wird von Lizenzverwaltungssystemen adressiert. Die REST-API Schnittstelle `/lizenz-info` fokussiert sich auf die Abfrage von Lizenzzuweisungen für den autorisierten Benutzer als Liste von ODRL Policies vom PolicyType "Set" - alternativ auch "Ticket" (`Array<ODRL>`).

In dem Nachfolgenden Diagramm markiert als "Consumer" auf der rechten Seite.

<!-- ![Highlevel betrachtung eines Lizenzverwaltungssystem](../../assets/diagrams/highlevel/controlconnect.highlevel.svg)
Highlevel betrachtung eines Lizenzverwaltungssystem -->

Scope der Schnittstelle "lizenz-info"

<!-- ![Highlevel betrachtung des Scope der Schnittstelle "lizenz-info"](../../assets/diagrams/highlevel/lizenz-info.highlevel.svg)
Highlevel betrachtung des Scope der Schnittstelle "lizenz-info" -->

Eine Beispielhafte Schnittstellenbeschreibung nach OpenAPI Specification (OAS) finden Sie im [Verzeichnis OAS](../oas/lizenz-info.openapi.yml)