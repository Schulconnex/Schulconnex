---
title: Abruf eines digitalen Inhalts über Zugriffsinfo auf Basis eines Nutzungsrecht
---

# Ablauf Abruf eines digitalen Inhalts über Zugriffsinfo auf Basis eines Nutzungsrecht


## Abruf von Nutzungsrechten als Policies

## Beschreibung des Diagramms

Das Diagramm zeigt den Authentifizierungs- und Autorisierungsprozess bei der Nutzung eines Medienregals mit LTI-Integration. Im Folgenden werden die Schritte im Diagramm erläutert, ergänzt durch die bereitgestellte API-Endpunktbeschreibung:

### 1. **Login und Benutzerinformationen**
- Der Benutzer meldet sich bei **NBC** (zentrale Plattform) an.
- Ein API-Aufruf (`GET /person-info`) wird gesendet, um die Benutzerinformationen abzurufen.
- Ein weiterer API-Aufruf (`GET /lizenz-info`) holt die Lizenzinformationen des Benutzers aus der Lizenzkomponente von **moin.schule**.

### 2. **Medienregal-Aufruf**
- Nach erfolgreicher Authentifizierung zeigt das Medienregal die verfügbaren LTI-Links zu Anwendungen an, die dem Benutzer basierend auf seinen Lizenzen zugänglich sind.

### 3. **Anwendung starten**
- Beim Aufruf einer Anwendung wird ein **LTI-Launch** ausgelöst.
- Im Rahmen des LTI-Launches wird eine **SSO-Authentifizierung** (Single Sign-On) durchgeführt und ein **Access Token** generiert.
- API-Aufrufe wie `GET /person-info` und `GET /lizenz-info/{uid}?access_control=true` validieren den Benutzer und die zugehörigen Lizenzschlüssel (Prüfung der Zugriffsrechte).

### 4. **Lizenzvalidierung**
- Die **Lizenzkomponente** prüft die Gültigkeit und Berechtigung des Nutzungsrechts mithilfe des Attributs `scx:access_control`.

### 5. **Logout und Rückkehr**
- Nach der Nutzung kann der Benutzer sich abmelden, und das System führt ihn zurück zur LMS-Oberfläche.

---

## Zusammenhang zur API-Beschreibung

- Der angegebene API-Endpunkt gibt **ODRL-basierte Policies** zurück, die die Nutzungsrechte des Benutzers definieren.
- Die optionale Abfrage des Parameters `scx:access_control` ergänzt die Nutzungsrechte um Zugriffsrechte.
- Das Diagramm illustriert, wie diese API-Nutzungsrechte und Zugriffsinformationen in einem mehrschichtigen System (**NBC**, **moin.schule**, **Lizenzkomponente**) verwendet werden, um die Nutzung von LTI-Anwendungen zu ermöglichen.

### Weitere Details zur API
- **ODRL Policies** entsprechen dem ODRL-Policy-Type `"Set"`.
- **Access-Control-Informationen** sind in der Antwort-Nutzlast im Attribut `scx:access_control` enthalten.
- Der API-Endpunkt unterstützt **Content Negotiation** über den `Accept`-Header, wodurch der Client das gewünschte Datenmodell der Antwort-Nutzlast festlegen kann.

![Sequenz-diagramm für den Abruf von Nutzungsrechten](../../../static/diagrams/sequenceDiagrams/lizenz-info.sequence.svg)

## Abruf von Zugriffsinfos im Kontext eines Nutzungsrecht


Das Diagramm zeigt den Ablauf der Authentifizierungs- und Autorisierungsprozesse bei der Nutzung eines Medienregals mit LTI-Integration. Im Detail werden die einzelnen Schritte wie folgt beschrieben:

### 1. **Login und Benutzerinformationen**
- Der Benutzer meldet sich bei **NBC** (zentrale Plattform) an.
- **NBC** sendet eine Anfrage (`GET /person-info`), um Benutzerinformationen abzurufen.
- Anschließend wird eine weitere Anfrage (`GET /lizenz-info`) an **moin.schule** gestellt, um die Lizenzinformationen des Benutzers aus der Lizenzkomponente zu erhalten.

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
- Das Diagramm zeigt, wie die API-Aufrufe in einem mehrstufigen System (**NBC**, **moin.schule**, **Lizenzkomponente**) interagieren, um die Nutzung von LTI-Anwendungen gemäß den Lizenzbedingungen zu ermöglichen.

### Weitere Details zur API
- **ODRL Policies** werden im Policy-Type `"Set"` definiert.
- Der Parameter `scx:access_control` ergänzt die Nutzungsrechte mit Zugriffsrechten.
- Der Endpunkt unterstützt **Content Negotiation** über den `Accept`-Header, sodass der Client das gewünschte Datenmodell für die Antwort spezifizieren kann.

![Sequenz-diagramm für den Abruf von Zugriffsinfos im Kontext eines Nutzungsrecht](../../../static/diagrams/sequenceDiagrams/access-control.sequence.svg)
