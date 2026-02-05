# ODRL Application Profile für SchulConnex

## 1. Einleitung

Dieses Dokument beschreibt das ODRL-Application Profile für SchulConnex, das die Nutzungsrechte an Bildungsmedien für Medienersteller, Autoren, Verlage, Schulträger und Schulen regelt.

## 2. Zielsetzung

Das Ziel dieses Application Profiles ist es, die Nutzungsrechte für Bildungsmedien klar zu definieren, um sicherzustellen, dass Lehrkräfte und Lernende die Medien gemäß den festgelegten Rechten nutzen können.

## 3. Vokabular und Taxonomie

### 3.1. Vokabular

Für die Definition des Vokabular und der Taxonomie siehe [Vokabular und Dokumentation](vocabular-und-taxonomie.md).

## 4. ODRL-Profile

### 4.1. Spezifisches ODRL

Hier ist ein Beispiel für ein spezifisches ODRL-Statement mit IDs und zeitlichen Gültigkeitsangaben:

```json
{
  "@context": {
    "odrl": "http://www.w3.org/ns/odrl.jsonld",
    "voc": "urn:schulconnex:nutzungsrechte:"
  },
  "id": "urn:schulconnex:odrl:permission:12345",
  "permission": {
    "id": "urn:schulconnex:permission:123",
    "assignee": {
      "@id": "http://example.com/user123",
      "type": "Learner"
    },
    "action": [
      {
        "@id": "urn:schulconnex:nutzungsrechte:Open"
      },
      {
        "@id": "urn:schulconnex:nutzungsrechte:Print"
      }
    ],
    "target": {
      "@id": "http://example.com/resource123",
      "type": "EducationalResource"
    },
    "license": {
      "@id": "http://example.com/license/abc123"
    },
    "related": {
      "@id": "urn:schulconnex:odrl:purchase:67890"
    },
    "from": "2023-10-01T00:00:00Z",
    "until": "2024-09-30T23:59:59Z"
  },
  "prohibition": {
    "id": "urn:schulconnex:prohibition:123",
    "action": {
      "@id": "urn:schulconnex:nutzungsrechte:Distribute"
    },
    "target": {
      "@id": "http://example.com/resource123"
    },
    "from": "2023-10-01T00:00:00Z",
    "until": "2024-09-30T23:59:59Z"
  },
  "duty": {
    "id": "urn:schulconnex:duty:123",
    "action": {
      "@id": "urn:schulconnex:nutzungsrechte:Modify"
    },
    "target": {
      "@id": "http://example.com/resource123"
    },
    "from": "2023-10-01T00:00:00Z",
    "until": "2024-09-30T23:59:59Z"
  }
}
```

### 4.2. Übergeordnetes ODRL

Hier ein Beispiel für das übergeordnete ODRL-Statement:

```json
{
  "@context": {
    "odrl": "http://www.w3.org/ns/odrl.jsonld",
    "voc": "urn:schulconnex:nutzungsrechte:"
  },
  "id": "urn:schulconnex:odrl:purchase:67890",
  "permission": {
    "id": "urn:schulconnex:permission:456",
    "assignee": {
      "@id": "http://example.com/school123",
      "type": "School"
    },
    "action": {
      "@id": "urn:schulconnex:nutzungsrechte:Purchase"
    },
    "target": {
      "@id": "http://example.com/resource123",
      "type": "EducationalResource"
    }
  }
}
```

## 5. Dokumentation

Alle Stakeholder sollten Zugang zu dieser Dokumentation haben. Die Begriffe im Vokabular sind klar definiert, um Missverständnisse zu vermeiden.

## 6. Validierung und Feedback

Das Vokabular und die ODRL-Profile sollten regelmäßig überprüft und bei Bedarf angepasst werden. Feedback von Stakeholdern ist entscheidend für die kontinuierliche Verbesserung.

---

Wenn du weitere Anpassungen oder spezifische Informationen benötigst, lass es mich wissen!