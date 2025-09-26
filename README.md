
# Schulconnex

<p align="center"><img src=".github/Schulconnex_Logo_RGB.png" alt="Schulconnex Logo" width="600"></p>

Schulconnex ist ein neuer technischer Schnittstellenstandard (API) für die Bereitstellung und Synchronisation
von Identitäten und deren schulischen Kontextdaten. Schulische Kontextdaten sind zum Beispiel die schulischen Rollen,
Gruppenzugehörigkeiten, Unterrichtsfächer, eine Schulnummer oder Angaben zu Bildungsgängen. Die primären Anwendungsfälle
von Schulconnex sind die Synchronisation von Identitäten und schulischen Kontextdaten von Personen zwischen
Schulverwaltungssystemen und schulischen Identitätsverwaltungssystemen (Schulconnex für Quellsysteme) und die Bereitstellung
von schulischen Kontextdaten von Nutzerinnen und Nutzern für digitale Bildungsmedien (Schulconnex für Dienste).

## Abhängigkeiten

* Node.js / npm

Installieren der notwendigen NPM-Module:

```bash
npm install
```

## Lokale Entwicklung

### Markdown-Generierung

```bash
npm run build-openapi-docs
```

Generiert die notwendigen Markdown-Kapitel aus den OpenAPI-YAML-Definitionen. Jede Änderung an den YAML-Definitionen
wird in Docusaurus erst dann sichtbar, wenn dieser Schritt ausgeführt wird.

Bereits erzeugte Markdown-Kapitel lassen sich löschen mit:

```bash
npm run clean-openapi-docs
```

### Starten

```bash
npm start
```

Startet einen lokalen Webserver für die Entwicklung und öffnet einen Webbrowser. Die meisten Änderungen
an den Quellen werden werden sofort sichtbar und benötigen keinen Webserverneustart.

### OpenAPI-Definitionen

Falls benötigt können dereferenzierte OpenAPI-Definitionen erzeugt werden, bei denen sämtliche Definitionen der Dienste-
oder Quellsysteme-API in einer einzelnen Datei exportiert werden.

Für die Dienste-API:

```bash
npm run write-dereferenced-openapi-for-dienste
```

Für die Quellsysteme-API:

```bash
npm run write-dereferenced-openapi-for-qs
```

## Deployment

```bash
npm run build
```

Erzeugt statische Dateien im Verzeichnis `build`, die von einem Webserver gehostet werden können.

## Lizenz

Der Quellcode sowie die Releases sind lizenziert unter [CC BY-ND 4.0](https://creativecommons.org/licenses/by-nd/4.0/legalcode)
