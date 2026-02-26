# ODRL Application Profile für Schulconnex

## Entwurf vom 26. Februar 2026

## Zusammenfassung

Dieses Dokument definiert ein ODRL-Application-Profile zur Abbildung von Nutzungsrechten für Bildungsmedien im Schulconnex-Kontext.

Es beschreibt normativ:

- die zulässige Struktur von ODRL-Policies,
- die Nutzung von Personenkontext-Attributen,
- die Verknüpfung von Nutzungsrechten mit Kontext-Hierarchien,
- die Erweiterung oder Verengung eines Nutzungsrechts durch Access-Control.

Das Profil standardisiert die Modellierung von Nutzungsrechten. Vorgelagerte Prozessphasen (AGB, Ausschreibung, Angebot, Kauf, Lizenzschlüsselbereitstellung) werden als fachlicher Input berücksichtigt, sind aber nicht selbst primärer Regelungsgegenstand.

## 1. Einleitung

Dieser Abschnitt ist nicht normativ.

Das Profil adressiert den Use-Case Nutzungsrecht („Welche Person darf in welchem Personenkontext welches Medium wie nutzen?“). Es richtet sich an Schulträger, Länder, Verlage, Plattformbetreiber und technische Integratoren.

### 1.1 Fachlicher Kontext

Die fachliche Einbettung folgt diesem Lebenszyklus:

1. AGB (allgemeine Regeln)
2. Ausschreibung (Schule/Träger/Landkreis/Bundesland)
3. Angebot (Verlag)
4. Vertragsabschluss (Kauf)
5. Bereitstellung von Lizenzschlüsseln
6. Access-Control
7. resultierendes Nutzungsrecht

### 1.2 Bezug zu Vokabular und Taxonomie

Kontrolliertes Vokabular, Taxonomie und QName-Registry sind in [vokabular-und-taxonomie.md](vokabular-und-taxonomie.md) definiert.

## 2. Anforderungen

Neben explizit als nicht-normativ gekennzeichneten Abschnitten sind alle Aussagen normativ.

Die Schlüsselwörter KANN, KÖNNEN, MUSS, MÜSSEN, SOLL und SOLLEN sind gemäß RFC2119/RFC8174 zu interpretieren, wenn sie in Großbuchstaben verwendet werden.

## 3. Format und Bereitstellung

### 3.1 Repräsentationsformat

Eine Policy MUSS als JSON-Dokument vorliegen und SOLL als JSON-LD interpretierbar sein.

### 3.2 Kontext

Eine Policy MUSS ein `@context`-Objekt oder -Array enthalten. Empfohlen ist:

```json
{
  "@context": {
    "odrl": "http://www.w3.org/ns/odrl.jsonld",
    "schx": "urn:schulconnex:de:",
    "scx": "urn:schulconnex:nutzungsrechte:",
    "ex": "https://schema.schulconnex.de/odrl/profile#"
  }
}
```

### 3.3 Austausch und Referenzierung

- Policies SOLLEN über stabile URIs (`uid`) referenzierbar sein.
- Access-Control-Policies MÜSSEN auf die zugrundeliegende Nutzungsrecht-Policy verweisen (z.B. `ex:extendsPolicy`).

## 4. Profil

### 4.1 Allgemein

#### 4.1.1 `uid`
Eindeutige Identifikation der Policy.

- **Pflichtfeld**: ja
- **Typ**: `string` (URI)

#### 4.1.2 `@type`
Policy-Typ.

- **Pflichtfeld**: ja
- **Typ**: `string`
- **Zulässige Werte**: `Set`, `Offer`, `Agreement`

#### 4.1.3 `target`
Zielobjekt, auf das sich das Nutzungsrecht bezieht.

- **Pflichtfeld**: ja
- **Typ**: `object`
- **Elemente**: `uid` (MUSS), `partOf` (SOLL bei Hierarchien)

#### 4.1.4 `permission` / `prohibition`
Rechte und Verbote.

- **Pflichtfeld**: mindestens eines von beiden MUSS vorhanden sein
- **Typ**: `array[object]`

### 4.2 Personenkontext und Hierarchie

#### 4.2.1 Personenkontext in Constraints
Personenkontext MUSS über Operanden aus der Schulconnex-Registry modelliert werden.

- **Pflichtfeld**: ja (wenn personen- oder organisationsbezogene Einschränkung vorliegt)
- **Typ**: `constraint[]`
- **Empfohlene Operanden**:
  - `urn:schulconnex:de:personenkontext:id`
  - `urn:schulconnex:de:personenkontext:rolle`
  - `urn:schulconnex:de:personenkontext:organisation:kennung`

#### 4.2.2 Höherer Kontext
Ein Nutzungsrecht KANN auf höherer Ebene vergeben und auf untere Ebenen angewendet werden.

- **Pflichtfeld**: nein
- **Typ**: `target.partOf` und ergänzende `constraint`
- **Beispiele**:
  - Bundesland → Landkreis → Träger → Schule
  - Katalog → Paket → Medium

### 4.3 Access-Control als Erweiterungsebene

#### 4.3.1 Referenz auf Basisrecht
Eine Access-Control-Policy MUSS ein bestehendes Nutzungsrecht referenzieren.

- **Pflichtfeld**: ja (für Access-Control-Policies)
- **Typ**: `string` (URI)
- **Empfohlene Property**: `ex:extendsPolicy`

#### 4.3.2 Access-Control-Constraints
Access-Control KANN Rechte verengen oder erweitern, darf aber AGB/Agreement nicht widersprechen.

- **Pflichtfeld**: ja (wenn Access-Control angewendet wird)
- **Typ**: `constraint[]`
- **Beispielhafte Operanden**:
  - `ex:accessControlLevel`
  - `ex:licenseKeyState`

### 4.4 Konfliktauflösung

- `prohibition` hat Vorrang vor `permission`.
- Technische Access-Control DARF Rechte verengen.
- Erweiterungen durch Access-Control SIND NUR ZULÄSSIG, wenn sie Baseline- und Agreement-Regeln nicht verletzen.

## 5. Konformität

Eine Policy ist konform, wenn sie alle folgenden Bedingungen erfüllt:

1. `uid`, `@type`, `target` vorhanden.
2. Mindestens eine Regel in `permission` oder `prohibition` vorhanden.
3. Profileigene Erweiterungen sind namespaced (`ex:` oder `scx:`).
4. Personenkontext-Regeln verwenden Operanden aus der QName-Registry.
5. Access-Control-Erweiterung referenziert Basisrecht.

## 6. Beispiele

Dieser Abschnitt ist nicht normativ.

### 6.1 Agreement (Nutzungsrecht)

```json
{
  "@context": {
    "odrl": "http://www.w3.org/ns/odrl.jsonld",
    "schx": "urn:schulconnex:de:",
    "scx": "urn:schulconnex:nutzungsrechte:",
    "ex": "https://schema.schulconnex.de/odrl/profile#"
  },
  "@type": "Agreement",
  "uid": "https://example.org/policies/agreement-2026-001",
  "target": {
    "uid": "urn:issuer:medium:MATHE-8-001",
    "partOf": "urn:issuer:catalogue:sek1"
  },
  "permission": [
    {
      "action": ["use", "display", "print", "scx:Stream"],
      "assignee": "Nutzer",
      "constraint": [
        {
          "leftOperand": "urn:schulconnex:de:personenkontext:rolle",
          "operator": "isIn",
          "rightOperand": ["teacher", "student"]
        },
        {
          "leftOperand": "urn:schulconnex:de:personenkontext:organisation:kennung",
          "operator": "eq",
          "rightOperand": "school-001"
        },
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
          "leftOperand": "ex:licenseKeyState",
          "operator": "eq",
          "rightOperand": "active"
        }
      ]
    }
  ],
  "prohibition": [
    {
      "action": ["modify", "reproduce"],
      "assignee": "AllUsers"
    }
  ]
}
```

### 6.2 Access-Control-Erweiterung

```json
{
  "@context": {
    "odrl": "http://www.w3.org/ns/odrl.jsonld",
    "schx": "urn:schulconnex:de:",
    "ex": "https://schema.schulconnex.de/odrl/profile#"
  },
  "@type": "Set",
  "uid": "https://example.org/policies/access-control-2026-001",
  "ex:extendsPolicy": "https://example.org/policies/agreement-2026-001",
  "target": {
    "uid": "urn:issuer:medium:MATHE-8-001",
    "partOf": "urn:issuer:catalogue:sek1"
  },
  "permission": [
    {
      "action": ["use"],
      "assignee": "Nutzer",
      "constraint": [
        {
          "leftOperand": "ex:accessControlLevel",
          "operator": "eq",
          "rightOperand": "mfa"
        },
        {
          "leftOperand": "urn:schulconnex:de:personenkontext:id",
          "operator": "neq",
          "rightOperand": "revoked"
        }
      ]
    }
  ]
}
```

## 7. Validierung

### 7.1 JSON Schema

Ein JSON Schema SOLL bereitgestellt werden, das mindestens folgende Prüfungen umfasst:

- Pflichtfelder (`uid`, `@type`, `target`)
- Typprüfung für `permission`, `prohibition`, `constraint`
- erlaubte Policy-Typen (`Set`, `Offer`, `Agreement`)
- Referenzpflicht von Access-Control-Policies (`ex:extendsPolicy`)
- Namespaces für profileigene Operanden/Actions

### 7.2 Semantische Validierung

Zusätzlich zur Schema-Validierung SOLL eine semantische Prüfung erfolgen:

- Konfliktprüfung `permission` vs. `prohibition`
- Prüfung von Hierarchiebezügen (`target.partOf`)
- Prüfung der Kontextspezifik (`personenkontext`-Operanden)

## A. Glossar

- **Application Profile**: Community-spezifische Konkretisierung einer Basisspezifikation
- **Personenkontext**: Rollen- und Organisationsbezug einer Person in Schulconnex
- **Access-Control**: Technische Zugriffskontrolle, die ein Nutzungsrecht erweitert/verengt
- **QName**: Qualifizierter Name über Namespace-Präfix

## B. Referenzen

- **[ODRL]** https://www.w3.org/TR/odrl-model/
- **[JSON-LD 1.1]** https://www.w3.org/TR/json-ld11/
- **[RFC2119]** https://www.rfc-editor.org/rfc/rfc2119
- **[RFC8174]** https://www.rfc-editor.org/rfc/rfc8174
- **[Schulconnex Vokabular/Taxonomie]** [vokabular-und-taxonomie.md](vokabular-und-taxonomie.md)
