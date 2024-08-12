# Schulconnex-OpenAPI Dateinamen-Konventionen

Die YAML-Dateien in diesem Verzeichnis definieren die Schulconnex-API im OpenAPI-Format.
Die APIs sind in logisch und inhaltlich getrennten Dateien definiert, mit dem Ziel,
die Lesbarkeit und Wiederverwendbarkeit zu steigern.

## Hauptdateien

Diese Dateien definieren die Metainformationen der APIs und listen alle definierten
Endpunkte. Die Hauptdateien zur Definition sind:

- `api-qs.yaml` - Für die Quellsystem-API
- `api-dienste.yaml` - Für die Dienste-API

## Dateien mit Endpunkt-Definitionen

Jede Endpunktdatei definiert einen Endpunkt aus den Hauptdateien. Der Dateiname ist wie
folgt aufgebaut:

> `paths-$PFAD_NAME-$PFAD_PARAMETER-$PFAD_UNTERNAME.yaml`


- `$PFAD_NAME` - der Pfadname wie in der Hauptdatei angegeben
- `$PFAD_PARAMETER` - falls vorhanden, der Pfadparameter wie in der Hauptdatei angegeben
- `$PFAD_UNTERNAME` - falls vorhanden, der Unterpfadname wie in der Hauptdatei angegeben

Beispiel:

Die Datei `paths-personen-id-personenkontexte.yaml` beschreibt den Endpunkt
`/personen/{id}/personenkontexte`.

## Dateien mit Components-Definitionen (Schemas)

Diese Dateien unterteilen sich in Dateien, welche 1) die Datenmodelle definieren, 2) die
Codelisten definieren und 3) die Authentifizierung definieren.

### Datenmodelle

Der Dateiname für Datenmodelle ist wie folgt aufgebaut:

> `components-$DATENMODELL_NAME.yaml` oder
> `components-$DATENMODELL_NAME.yaml-$TEILMODELL_NAME` oder
> `components-$API_NAME-$DATENMODELL_NAME.yaml` oder
> `components-$API_NAME-$DATENMODELL_NAME-$HTTP_METHODE-request.yaml` oder
> `components-$API_NAME-$DATENMODELL_NAME-$HTTP_METHODE-response.yaml`

- `$DATENMODELL_NAME` - Der Datenmodellname
- `$TEILMODELL_NAME` - Optionaler Name im Falle von einer Zusammsetzung von Modellen, wobei "-basis" die Attribute enthält, die immer gelten
- `$API_NAME` - Der Name der API, z.B. qs für Quellsysteme oder dienste für Dienste
- `$HTTP_METHODE` - falls vorhanden, eine HTTP-Method wie z.B. GET, POST, PUT

Beispiel

Die Datei `components-dienste-PersonenKontext.yaml` beschreibt das Datenmodell PersonenKontext
für die Dienste-API.

Die Datei `components-qs-PersonenKontext-PUT-request.yaml` beschreibt das Datenmodell
PersonenKontext für die Quellsysteme-API als PUT Request-Body.

### Codelisten

Der Dateiname für Codelisten ist wie folgt aufgebaut:

> `components-code-$CODELISTEN_NAME.yaml`

- `$CODELISTEN_NAME` - Der Codelistenname

### Dateien mit securitySchemes

Definieren die beiden Authentifizierungen für Dienste und Nutzer.

> `securitySchema-$SCHEMA.yaml`

- `$SCHEMA` - Ist entweder oAuthForUser oder oAuthForServices
