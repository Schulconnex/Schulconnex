---
title: Nutzung von Identifikatoren (Identifier)
---

# Nutzung von Identifikatoren (Identifier)

## 1. Einführung in URI, IRI, URN

- **URI (Uniform Resource Identifier):** Ein URI ist eine Zeichenfolge zur eindeutigen Identifikation von Ressourcen. Es gibt verschiedene Arten von URIs, darunter URLs (Uniform Resource Locators), die sowohl die Identifikation als auch den Ort einer Ressource angeben, und URNs (Uniform Resource Names), die nur eine Identifikation ohne Ortsangabe bieten.

  - **Beispiel einer URL (als Teil der URI):** `http://example.org/resource/123`
  - **Beispiel einer URN (als Teil der URI):** `urn:isbn:0451450523`

- **IRI (Internationalized Resource Identifier):** Ein IRI ist eine Erweiterung des URI-Konzepts, das zusätzlich internationale Zeichen (z.B. Zeichen aus nicht-lateinischen Alphabeten) unterstützt. Ein IRI kann Zeichen enthalten, die in URIs nicht erlaubt sind.

  - **Beispiel einer IRI:** `http://例子.测试/资源`

- **URN (Uniform Resource Name):** Eine URN ist eine spezielle Form eines URIs, die eine Ressource durch einen Namen innerhalb eines bestimmten Namensraums identifiziert. URNs werden typischerweise verwendet, wenn es darum geht, eine Ressource dauerhaft zu identifizieren, unabhängig von ihrem Standort.

  - **Beispiel einer URN:** `urn:isbn:0451450523` (identifiziert eindeutig ein Buch basierend auf der ISBN-Nummer)

## 2. Umgang mit Identifikatoren (URI, IRI, URN) und Deserialisierbarkeit in RDF, JSON-LD, Schema.org und ODRL

### RDF

- **Identifikatoren:** RDF verwendet URIs zur eindeutigen Identifikation von Ressourcen. Es können sowohl URNs als auch IRIs als Identifikatoren verwendet werden, solange sie eindeutig und unverwechselbar sind.

- **Deserialisierbarkeit:** Weder URIs, IRIs noch URNs in RDF müssen deserialisierbar sein. Sie dienen lediglich der Identifikation. Dennoch ist es in RDF üblich, URIs zu verwenden, die es erlauben, durch ["Follow Your Nose"](https://patterns.dataincubator.org/book/follow-your-nose.html) zusätzliche Informationen zu verlinkten Daten zu erhalten.

- **Best Practices:**
  - **Eindeutigkeit:** Verwenden Sie URIs, die eindeutig und beständig sind.
  - **Stabilität:** Wählen Sie URIs, die langfristig stabil bleiben, um Referenzen nicht zu brechen.
  - **Deserialisierbarkeit:** Wenn möglich, sollten URIs deserialisierbar sein, damit zusätzliche Informationen abgerufen werden können.
  - **Verwendung von HTTPS:** Wo möglich, sollten URIs mit HTTPS verwendet werden, um Sicherheit und Vertrauenswürdigkeit zu gewährleisten.

- **Beispiel:**
  ```rdf
  <urn:isbn:0451450523> <http://schema.org/name> "Some Book" .
  ```
  In diesem Beispiel ist die URN `urn:isbn:0451450523` ein gültiger Identifikator in RDF, der nicht zwingend deserialisierbar ist.

### JSON-LD

- **Identifikatoren:** In JSON-LD können URIs, IRIs und URNs als Identifikatoren verwendet werden. JSON-LD erlaubt die Verwendung von IRIs, was eine flexiblere und internationalisierte Darstellung von Identifikatoren ermöglicht. URNs können ebenfalls als alternative Identifikatoren verwendet werden.

- **Deserialisierbarkeit:** Wie bei RDF müssen URIs, IRIs oder URNs in JSON-LD nicht deserialisierbar sein. Sie dienen primär als eindeutige Bezeichner. Es wird jedoch empfohlen, deserialisierbare URIs zu verwenden, um zusätzliche maschinenlesbare Daten über die Ressource abrufen zu können.

- **Best Practices:**
  - **Kontextualisierung:** Verwenden Sie den @context-Schlüssel, um sicherzustellen, dass die URIs in einem standardisierten und verständlichen Kontext stehen.
  - **Deserialisierbare URIs:** Nutzen Sie deserialisierbare URIs, wann immer möglich, um die Interoperabilität und Zugänglichkeit von Daten zu verbessern.
  - **IRI-Verwendung:** Nutzen Sie IRIs, wenn Ressourcen international identifiziert werden sollen.

[Quelle: JSON-LD 1.1 | W3C Recommendation 16.07.2020](https://www.w3.org/TR/json-ld11/#iris)

- **Beispiel:**
  ```json
  {
    "@context": "http://schema.org",
    "@id": "urn:isbn:0451450523",
    "@type": "Book",
    "name": "Some Book"
  }
  ```
  Hier wird eine URN als `@id` verwendet, die nicht deserialisierbar sein muss.

### Schema.org

- **Identifikatoren:** Schema.org unterstützt die Verwendung von URIs und IRIs als Identifikatoren in JSON-LD. URNs können ebenfalls verwendet werden, obwohl URIs und IRIs aufgrund ihrer größeren Verbreitung bevorzugt werden.

- **Deserialisierbarkeit:** Auch in Schema.org müssen die verwendeten URIs, IRIs oder URNs nicht deserialisierbar sein. Sie sind primär eindeutige Identifikatoren. Wenn URIs oder IRIs deserialisierbar sind, können sie jedoch zusätzlichen Kontext bieten, indem sie über "Follow Your Nose" weitere Informationen zugänglich machen.

- **Best Practices:**
  - **Strukturierung:** Verwenden Sie URIs, die in einem standardisierten Schema-Framework eingebettet sind, um Konsistenz und Interoperabilität zu fördern.
  - **Verwaltete URIs:** Setzen Sie auf URIs, die von vertrauenswürdigen und gut gewarteten Quellen stammen, wie z.B. öffentlich zugängliche Vokabulare.
  - **IRI- und URN-Nutzung:** Verwenden Sie IRIs für internationale Ressourcen und URNs, wenn eine permanente Identifikation ohne Ortsangabe erforderlich ist.

  [Quelle: schema.org | Data model - Property "identifier"](https://schema.org/docs/datamodel.html#identifierBg)

- **Beispiel:**
  ```json
  {
    "@context": "http://schema.org",
    "@type": "Book",
    "@id": "urn:isbn:0451450523",
    "name": "Some Book"
  }
  ```
  Hier identifiziert die URN das Buch, wobei sie nicht deserialisierbar sein muss.

### ODRL

- **Identifikatoren:** In ODRL können URIs, IRIs und URNs als Identifikatoren verwendet werden, ähnlich wie in RDF und JSON-LD. Da ODRL zur Beschreibung von Rechten und Pflichten in Bezug auf digitale Inhalte dient, wird häufig eine URI verwendet, um Lizenzen, Rechteinhaber oder bestimmte Rechte eindeutig zu identifizieren.

- **Deserialisierbarkeit:** In ODRL müssen die URIs, IRIs oder URNs nicht deserialisierbar sein. Sie dienen primär als eindeutige Identifikatoren, um Rechte und Pflichten zu definieren. Allerdings können deserialisierbare URIs zusätzliche maschinenlesbare Informationen über die Rechte und deren Bedingungen bereitstellen, was die Verwaltung von Rechten erleichtern kann.

- **Best Practices:**
  - **Eindeutige und beständige Identifikatoren:** Verwenden Sie URIs, die klar und unverwechselbar sind, um Rechte und Pflichten präzise zu definieren.
  - **Verwaltung von URIs:** Stellen Sie sicher, dass URIs langfristig stabil und beständig bleiben, um die Rechtssicherheit zu gewährleisten.
  - **Deserialisierbare URIs:** Nutzen Sie deserialisierbare URIs, um zusätzliche Informationen über die Lizenzbedingungen und Rechte verfügbar zu machen.
  - **Verwendung von URNs:** Wenn dauerhafte und unveränderliche Identifikatoren benötigt werden, z.B. für Lizenzen, können URNs eine gute Wahl sein.

[Quelle: ODRL Information Model 2.2 | W3C Recommendation 15.02.2018](https://www.w3.org/TR/odrl-model/#policy)

- **Beispiel:**
  ```json
  {
    "@context": "http://www.w3.org/ns/odrl.jsonld",
    "@type": "Policy",
    "uid": "urn:example:policy:1010",
    "permission": [{
        "target": "http://example.org/asset/1234",
        "action": "http://www.w3.org/ns/odrl/2/use"
    }]
  }
  ```
  Hier wird eine URN `urn:example:policy:1010` verwendet, um eine spezifische Richtlinie zu identifizieren, und ein deserialisierbarer URI `http://example.org/asset/1234` als Zielressource.

## 3. Zusammenfassung und Vergleich

- **URI, IRI und URN:** Alle Technologien (RDF, JSON-LD, Schema.org, ODRL) unterstützen die Verwendung von URIs als primäre Identifikatoren. IRIs bieten eine erweiterte Zeichenunterstützung, und URNs sind eine robuste Methode zur dauerhaften Identifikation von Ressourcen, insbesondere wenn keine Ortsangabe erforderlich ist.

- **Deserialisierbarkeit von URIs/IRIs/URNs:** In RDF, JSON-LD, Schema.org und ODRL müssen URIs, IRIs oder URNs nicht deserialisierbar sein. Dennoch ist es oft vorteilhaft, deserialisierbare URIs zu verwenden, um durch "Follow Your Nose"

 zusätzliche maschinenlesbare Informationen über die Ressource abzurufen.

- **Best Practices:** Die Verwendung eindeutiger, stabiler und gegebenenfalls deserialisierbarer Identifikatoren ist entscheidend, um die Interoperabilität, Zugänglichkeit und Langlebigkeit von Daten sicherzustellen. Dies gilt besonders in Kontexten, in denen die Ressourcen oder Rechte langfristig verwaltet und referenziert werden müssen.

## 4. Übergreifende Beispiele mit allen drei Identifikator-Typen

### Übergreifendes Beispiel: Generelles Beispiel

Ein Beispiel, das alle drei Identifikator-Typen in den verschiedenen Technologien verwendet:

```json
{
  "@context": "http://schema.org",
  "@type": "Person",
  "@id": "urn:isbn:0451450523",
  "name": "John Doe",
  "knows": {
    "@id": "http://例子.测试/资源",
    "@type": "Person",
    "name": "Jane Doe"
  },
  "worksFor": {
    "@id": "http://example.org/organization/456",
    "@type": "Organization",
    "name": "Example Corp"
  }
},
{
  "@context": "http://www.w3.org/ns/odrl.jsonld",
  "@type": "Policy",
  "uid": "urn:example:policy:1010",
  "permission": [{
      "target": "http://example.org/asset/1234",
      "action": "http://www.w3.org/ns/odrl/2/use"
  }]
}
```

In diesem Beispiel:
- `urn:isbn:0451450523` ist eine URN, die in Schema.org verwendet wird, um eine Person eindeutig zu identifizieren.
- `http://例子.测试/资源` ist eine IRI, die eine andere Person identifiziert. Diese IRI muss nicht deserialisierbar sein, kann jedoch zusätzliche Informationen bereitstellen, wenn sie dies wäre.
- `http://example.org/organization/456` ist eine URI, die eine Organisation identifiziert.
- In ODRL wird `urn:example:policy:1010` verwendet, um eine spezifische Richtlinie zu identifizieren, und ein deserialisierbarer URI `http://example.org/asset/1234` als Zielressource.

Dieses Beispiel zeigt die Verwendung verschiedener Identifikatoren in einem einheitlichen Datensatz und berücksichtigt die jeweiligen Best Practices für RDF, JSON-LD, Schema.org und ODRL.

### Übergreifendes Beispiel: Lehrkraft und Rechteverwaltung

Beispiel einer Lehrkraft (Person) mit einer spezifischen Rolle innerhalb einer Schule und deren Rechte im Hinblick auf die Nutzung eines Mediums aus dem Katalog eines Verlags über ODRL beschreiben.

```json
[
  {
    "@context": "http://schema.org",
    "@type": "Person",
    "@id": "urn:person:12345",
    "name": "John Doe",
    "roleName": "Lehrer",
    "affiliation": {
      "@type": "Organization",
      "@id": "urn:school:67890",
      "name": "Musterschule",
      "location": {
        "@type": "Place",
        "name": "Hamburg, Germany"
      }
    }
  },
  {
    "@context": "http://schema.org",
    "@type": "CreativeWork",
    "@id": "urn:media:98765",
    "name": "Lehrbuch Mathematik 1",
    "author": {
      "@type": "Organization",
      "@id": "urn:publisher:54321",
      "name": "Verlag XY"
    },
    "educationalUse": "instruction",
    "isPartOf": {
      "@type": "Product",
      "@id": "urn:catalog:11111",
      "name": "Medienkatalog Verlag XY"
    }
  },
  {
    "@context": "http://www.w3.org/ns/odrl.jsonld",
    "@type": "Policy",
    "uid": "urn:policy:001",
    "profile": "https://moin.schule/odrl-profile",
    "permission": [
      {
        "target": "urn:media:98765",
        "action": "http://www.w3.org/ns/odrl/2/use",
        "assignee": "urn:person:12345",
        "assigner": "urn:publisher:54321"
      }
    ],
    "duty": [
      {
        "action": "http://www.w3.org/ns/odrl/2/compensate",
        "target": "urn:publisher:54321",
        "constraint": [
          {
            "leftOperand": "http://www.w3.org/ns/odrl/2/payAmount",
            "operator": "http://www.w3.org/ns/odrl/2/eq",
            "rightOperand": "10.00"
          }
        ]
      }
    ]
  }
]
```

In diesem Beispiel:
1. **Person (Lehrkraft)**
   - **@type: "Person"** beschreibt die Lehrkraft John Doe.
   - **@id: "urn:person:12345"** ist die eindeutige URN der Lehrkraft.
   - **roleName** gibt an, dass John Doe die Rolle eines Lehrers hat.
   - **affiliation** verknüpft die Person mit einer Schule:
     - **@type: "Organization"** beschreibt die Schule ("Musterschule").
     - **@id: "urn:school:67890"** ist die eindeutige URN der Schule.
     - **location** gibt den Ort der Schule an (Hamburg, Germany).

2. **Medium (Lehrbuch)**
   - **@type: "CreativeWork"** beschreibt das Medium, hier ein Lehrbuch für Mathematik.
   - **@id: "urn:media:98765"** ist die eindeutige URN des Mediums.
   - **author** beschreibt den Verlag, der das Medium veröffentlicht hat:
     - **@type: "Organization"** für den Verlag XY.
     - **@id: "urn:publisher:54321"** ist die eindeutige URN des Verlags.
   - **isPartOf** gibt an, dass das Medium Teil eines Katalogs ist.

3. **Policy (Rechteverwaltung)**
   - **@type: "Policy"** beschreibt eine ODRL-Politik.
   - **uid: "urn:policy:001"** ist die eindeutige URN der Richtlinie.
   - **permission** legt fest, dass die Lehrkraft das Medium nutzen darf:
     - **target** bezieht sich auf das Medium (`urn:media:98765`).
     - **action** definiert die erlaubte Handlung, hier "use" (nutzen).
     - **assignee** gibt die Lehrkraft an, die das Recht erhält.
     - **assigner** ist der Verlag, der das Recht gewährt.
   - **duty** legt fest, dass eine Zahlungspflicht besteht:
     - **action** beschreibt die notwendige Handlung (compensate).
     - **target** ist der Verlag, an den gezahlt werden muss.
     - **constraint** definiert die Höhe der Zahlung (10,00 EUR).

### Best Practices in diesem Beispiel
- **Eindeutige Identifikatoren:** URNs werden verwendet, um Personen, Organisationen, Medien und Richtlinien eindeutig und dauerhaft zu identifizieren.
- **Interoperabilität:** Die Nutzung von Schema.org und ODRL ermöglicht es, das Beispiel sowohl maschinen- als auch menschenlesbar zu gestalten.
- **Verwendung von ODRL-Profilen:** Das spezifische Profil (`https://moin.schule/odrl-profile`) stellt sicher, dass die Richtlinie den Anforderungen von moin.schule entspricht.

Ja, es ist eine gängige und empfohlene Best Practice, RESTful URLs als Identifier (URIs) zu nutzen, wenn Daten über REST API-Schnittstellen verwaltet werden. Diese Praxis bietet mehrere Vorteile:

## 5. Vorteile der Nutzung von RESTful URLs als Identifier

1. **Eindeutigkeit und Konsistenz:**
   - RESTful URLs sind eindeutig und können zur Identifikation einer bestimmten Ressource in einem System verwendet werden.
   - Sie stellen sicher, dass jede Ressource eine konsistente und nachvollziehbare Adresse hat, die sich an einer festen Struktur orientiert.

2. **Deserialisierbarkeit und "Follow Your Nose":**
   - RESTful URLs sind typischerweise deserialisierbar, d.h., sie können direkt in einen Webbrowser oder API-Client eingegeben werden, um zusätzliche Informationen über die Ressource abzurufen.
   - Dieses Prinzip folgt dem "Follow Your Nose"-Ansatz, bei dem durch das Navigieren von URL zu URL zusätzliche kontextuelle Daten abgerufen werden können.

3. **Interoperabilität und Integration:**
   - Die Verwendung von RESTful URLs erleichtert die Integration mit anderen Systemen und APIs, da diese URLs standardisiert und leicht interpretierbar sind.
   - Sie unterstützen die Interoperabilität zwischen verschiedenen Diensten, indem sie Ressourcen in einer gemeinsamen Weise identifizieren und zugänglich machen.

4. **Lesbarkeit und Transparenz:**
   - RESTful URLs sind oft menschenlesbar und bieten Transparenz darüber, welche Ressource angesprochen wird.
   - Dies erleichtert Entwicklern und Nutzern das Verständnis und die Nutzung der API.

5. **Versionierung und Erweiterbarkeit:**
   - Durch die Verwendung von RESTful URLs können Versionen von APIs und Ressourcen leicht verwaltet werden. Beispielsweise kann durch die Einbeziehung einer Versionsnummer in der URL (`/v1/resource/123`) eine API-Versionierung unterstützt werden.
   - RESTful URLs können bei Bedarf erweitert werden, um zusätzliche Ressourcen oder Parameter zu unterstützen.

### Beispiel für eine RESTful URL als Identifier

Stellen wir uns vor, das Medium (Lehrbuch Mathematik 1) und die Lehrkraft aus dem vorherigen Beispiel würden über eine REST API verwaltet:

- **Personen-API (Lehrkraft):**
  ```plaintext
  https://api.schule.de/person/12345
  ```

- **Medien-API (Lehrbuch):**
  ```plaintext
  https://api.schule.de/media/98765
  ```

- **Schul-API (Organisation):**
  ```plaintext
  https://api.schule.de/school/67890
  ```

- **Verlags-API (Organisation):**
  ```plaintext
  https://api.verlag.de/publisher/54321
  ```

- **Policy-API (Rechteverwaltung):**
  ```plaintext
  https://api.schule.de/policy/001
  ```

### Beispiel in JSON-LD unter Verwendung von RESTful URLs als Identifier

```json
[
  {
    "@context": "http://schema.org",
    "@type": "Person",
    "@id": "https://api.schule.de/person/12345",
    "name": "John Doe",
    "roleName": "Lehrer",
    "affiliation": {
      "@type": "Organization",
      "@id": "https://api.schule.de/school/67890",
      "name": "Musterschule",
      "location": {
        "@type": "Place",
        "name": "Hamburg, Germany"
      }
    }
  },
  {
    "@context": "http://schema.org",
    "@type": "CreativeWork",
    "@id": "https://api.schule.de/media/98765",
    "name": "Lehrbuch Mathematik 1",
    "author": {
      "@type": "Organization",
      "@id": "https://api.verlag.de/publisher/54321",
      "name": "Verlag XY"
    },
    "educationalUse": "instruction",
    "isPartOf": {
      "@type": "Product",
      "@id": "https://api.verlag.de/catalog/11111",
      "name": "Medienkatalog Verlag XY"
    }
  },
  {
    "@context": "http://www.w3.org/ns/odrl.jsonld",
    "@type": "Policy",
    "uid": "https://api.schule.de/policy/001",
    "profile": "https://moin.schule/odrl-profile",
    "permission": [
      {
        "target": "https://api.schule.de/media/98765",
        "action": "http://www.w3.org/ns/odrl/2/use",
        "assignee": "https://api.schule.de/person/12345",
        "assigner": "https://api.verlag.de/publisher/54321"
      }
    ],
    "duty": [
      {
        "action": "http://www.w3.org/ns/odrl/2/compensate",
        "target": "https://api.verlag.de/publisher/54321",
        "constraint": [
          {
            "leftOperand": "http://www.w3.org/ns/odrl/2/payAmount",
            "operator": "http://www.w3.org/ns/odrl/2/eq",
            "rightOperand": "10.00"
          }
        ]
      }
    ]
  }
]
```

### Best Practices für die Nutzung von RESTful URLs als Identifier in APIs

- **Verwenden Sie stabile und beständige URLs:** Die URLs sollten sich nicht ändern, um langfristige Referenzen sicherzustellen.
- **Eindeutigkeit sicherstellen:** Jede Ressource sollte durch eine eindeutige URL identifiziert werden.
- **Menschenlesbare URLs bevorzugen:** Wo möglich, sollten URLs leicht verständlich und interpretierbar sein.
- **Versionierung:** Implementieren Sie Versionsnummern in den URLs, um API-Änderungen zu verwalten.
- **Sicherheit:** Nutzen Sie HTTPS für alle URLs, um die Sicherheit der API-Kommunikation zu gewährleisten. 

Durch die Nutzung von RESTful URLs als Identifier wird die API sowohl für Maschinen als auch für Menschen leichter verständlich, und die Integration in verschiedene Systeme wird erheblich erleichtert.
