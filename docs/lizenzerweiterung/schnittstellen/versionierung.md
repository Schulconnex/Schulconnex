---
title: API-Versionierung
---

# API-Versionierung

Die URL der Schnittstelle besteht aus einer Base-URL sowie dem eigentlichen Endpunkt.

> **`https://subdomain.domain.tld/subpaths/endpunkt`**

Es wird empfohlen, unterschiedliche Versionen der Schnittstelle über unterschiedliche Endpunkte anzubieten. Die API-Versionierung ermöglicht es den Entwicklern eines SchulConneX-Servers, Anpassungen an der API zu implementieren und gleichzeitig zu gewährleisten, dass Clients mit aktiver API-Anbindung weiterhin fehlerfrei funktionieren. Zusätzlich wird gewährleistet, dass Clients genug Zeit zur Implementierung einer neuen Version der API erhalten.

Die Versionierung der API befindet sich in der URL zur REST-API. Dabei wird die Versionsnummer der API in der URL als Pfad am Ende der Base-URL mit angegeben.

Beispiel: `base-url/v1/...`, wobei hier „v1“ für die API-Versionsnummer 1.0 steht. Eine mögliche API-Version 1.1 oder 2.0 wird wie folgt aufgerufen: `base-url/v1-1/...` bzw. `base-url/v2/...`.

Im Folgenden ist ein Beispiel einer Schnittstellen-URL dargestellt.

> **`https://subdomain.domain.tld/subpath/v1/policies-info`**

Die konkrete URL für die Schnittstelle erhalten Sie von dem Betreiber des SchulConneX-Servers.