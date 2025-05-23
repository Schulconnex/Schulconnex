---
title: Abruf eines digitalen Inhalts über Zugriffsinfo auf Basis eines Nutzungsrecht
---

# Ablauf Abruf eines digitalen Inhalts über Zugriffsinfo auf Basis eines Nutzungsrecht

## Abruf von Zugriffsinfos im Kontext eines Nutzungsrecht


Das Diagramm zeigt den Ablauf der Authentifizierungs- und Autorisierungsprozesse bei der Nutzung eines Medienregals mit LTI-Integration. Im Detail werden die einzelnen Schritte wie folgt beschrieben:

### 1. **Login und Benutzerinformationen**
- Der Benutzer meldet sich bei der **Bildungsplattform** (zentrale Plattform) an.
- Die **Bildungsplattform** sendet eine Anfrage (`GET /person-info`), um Benutzerinformationen abzurufen.
- Anschließend wird eine weitere Anfrage (`GET /lizenz-info`) an das **Lizenzsystem** gestellt, um die Lizenzinformationen des Benutzers aus der Lizenzkomponente zu erhalten.

### 2. **Medienregal-Aufruf**
- Nach erfolgreicher Authentifizierung zeigt das Medienregal die verfügbaren **LTI-Links** zu den Anwendungen an, die dem Benutzer aufgrund seiner Lizenzen zugänglich sind.

### 3. **Anwendung starten**
- Der Benutzer wählt eine Anwendung aus, wodurch ein **LTI-Launch** ausgelöst wird. Dieser Launch enthält die **uid** der Lizenz.
- Im nächsten Schritt wird eine **SSO-Authentifizierung** (Single Sign-On) durchgeführt, und ein **Access Token** wird erzeugt.
- Ein weiterer API-Aufruf (`GET /person-info`) validiert die Benutzerinformationen.
- Der Aufruf `GET /lizenz-zugriffsinfo/{lizenzInfoUid}` stellt sicher, dass die Lizenz und die zugehörigen Zugriffsrechte überprüft werden.

### 4. **Lizenzvalidierung**
- Die Lizenzkomponente validiert die Gültigkeit des Lizenzschlüssels und die Berechtigungen des Benutzers mithilfe von Zugriffsinformationen.

### 5. **Logout und Rückkehr**
- Nach der Nutzung der Anwendung kann der Benutzer sich abmelden. Das System leitet den Benutzer zurück zum LMS.

---

## Zusammenhang zur API-Beschreibung

- Der API-Endpunkt liefert **ODRL-basierte Policies**, die die Nutzungsrechte des Benutzers definieren.
- Über den Parameter `lizenz-zugriffsinfo/{lizenzInfoUid}` können **Access-Control-Informationen** abgerufen werden, um sicherzustellen, dass der Benutzer autorisiert ist.
- Das Diagramm zeigt, wie die API-Aufrufe in einem mehrstufigen System (**Bildungsplattform**, **Lizenzsystem**, **Lizenzkomponente**) interagieren, um die Nutzung von LTI-Anwendungen gemäß den Lizenzbedingungen zu ermöglichen.

### Weitere Details zur API
- **ODRL Policies** werden im Policy-Type `"Set"` definiert.
- Der Parameter `scx:access_control` ergänzt die Nutzungsrechte mit Zugriffsrechten.
- Der Endpunkt unterstützt **Content Negotiation** über den `Accept`-Header, sodass der Client das gewünschte Datenmodell für die Antwort spezifizieren kann.

![Sequenz-diagramm für den Abruf von Zugriffsinfos im Kontext eines Nutzungsrecht](../../../static/diagrams/sequenceDiagrams/access-control.sequence.svg)
