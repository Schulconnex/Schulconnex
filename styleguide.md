# Schulconnex-Styleguide

## Einleitung

Bei der Beschreibung der Schulconnex-Schnittstelle sind Begriffe einheitlich zu verwenden. Es sollten für denselben
Begriff auch immer dasselbe Wort in derselben Schreibweise benutzt werden. Synonyme sind zu vermeiden.

Darüber hinaus ist erstrebenswert, dass Formatierungen von Texten, die Benennung von Dateien und andere formale
Aspekte der Spezifikation konsistent gehandhabt werden.

Derzeit beruht dieser Styleguide primär auf Entscheidungen, welche beim Redigieren der Spezifikation getroffen
wurden, in der Absicht diese Entscheidungen an zentraler Stelle zu dokumentieren. Daher ist dieser Styleguide
derzeit nur grob strukturiert.

Es besteht die Absicht, dass, wenn ausreichend viele Informationen gesammelt wurden, der Styleguide neu
strukturiert wird.

## Begriffe und Schreibweisen

- Schulconnex wird in einem Wort geschrieben und hat nur einen Großbuchstaben. "Schul-Connex", "SchulConneX" oder
  "SchulconneX" sind keine zulässigen Schreibweisen.
- Nicht durch die Schulconnex-Spezifikation vorgegebene Attribute heißen "anbieterspezifische Attribute" und nicht
  "anwendungsfallspezifische Attribute", "herstellerspezifische Attribute"  oder "anwendungsspezifische Attribute".
- Der Begriff "REST-API" ist mit Bindestrich zu schreiben und nicht als "REST API".
- Der Begriff "OIDC-Claims" ist mit Bindestrich zu schreiben und nicht als "OIDC Claims".
- Entsprechendes gilt für Wortkombinationen mit "HTTP", beispielsweise "HTTP-Anfragen".
- Wird "Schulconnex" zusammen mit einem anderen Begriff benutzt ("Schulconnex-Server", "Schulconnex-Spezifikation"),
  werden die Begriffe mit einem Bindestrich verbunden.
- Als Genitiv von Personenkontext wird "Personenkontexts", nicht "Personenkontextes" beutzt.

## Attributnamen

- Alle Attributnamen werden durchgehend klein geschrieben. Also `kennung` und `id` statt `Kennung` und `ID`
- Attributnamen enthalten nur die Buchstaben `a` bis `z`.
- Umlaute werden immer ausgeschrieben, also `faecher` und nicht `fächer`.
- Zusammengesetzte Namen werden immer direkt zusammengeschrieben, ohne Unterstrich oder Bindestrich, also
  `namenssuffix` und nicht `namens-suffix` oder `namens_suffix`.

## Attributbeschreibungen

- Beschreibungen von Attributen enden immer mit einem Punkt, auch wenn es sich um keinen vollständigen Satz handelt.
  So ist die Beschreibung zu `geburt.datum` beispielsweise in der Form "Geburtsdatum einer Person." zu schreiben
  und nicht als "Geburtsdatum einer Person".
- Bei der Kardinalität von Attributwerten werden Minimal- und Maximal-Wert durch zwei Punkte getrennt, also beispielsweise "0..1" oder "1..n".

## Formatierungen in Markdown-Dateien

- Wird in der Beschreibung eines Attributes ein anderes Attribut oder ein Wert aus einer Codeliste erwähnt, so
  sind diese mit Backquotes (manchmal auch Backticks genannt) als Code zu markieren, beispielsweise: "Ist
  `sichtfreigabe` nicht gesetzt, so entspricht das dem Wert `Nein`."
- Wird der Name einer Codeliste in einer Attributbeschreibung erwähnt, so wird der Name kursiv geschrieben.
  Beispiel: "Referenz auf einen Code der Codeliste *Personenstatus*."

## Schulconnex-OpenAPI Dateinamen-Konventionen

Die YAML-Dateien in im Verzeichnis `src/openapi/` definieren die Schulconnex-API im OpenAPI-Format. Die APIs
sind in logisch und inhaltlich getrennten Dateien definiert, mit dem Ziel, die Lesbarkeit und
Wiederverwendbarkeit zu steigern.

### Hauptdateien

Diese Dateien definieren die Metainformationen der Schulconnex REST-API und listen alle definierten Endpunkte.
Die Hauptdateien zur Definition sind:

- `api-qs.yaml` - Für die Quellsystem-API
- `api-dienste.yaml` - Für die Dienste-API

### Dateien mit Endpunkt-Definitionen

Jede Endpunktdatei definiert einen Endpunkt aus den Hauptdateien. Der Dateiname ist wie folgt aufgebaut:

> `paths-$PFAD_NAME-$PFAD_PARAMETER-$PFAD_UNTERNAME.yaml`

- `$PFAD_NAME` - der Pfadname wie in der Hauptdatei angegeben
- `$PFAD_PARAMETER` - falls vorhanden, der Pfadparameter wie in der Hauptdatei angegeben
- `$PFAD_UNTERNAME` - falls vorhanden, der Unterpfadname wie in der Hauptdatei angegeben

Beispiel:

Die Datei `paths-personen-id-personenkontexte.yaml` beschreibt den Endpunkt
`/personen/{id}/personenkontexte`.

### Dateien mit Components-Definitionen (Schemas)

Diese Dateien unterteilen sich in Dateien, welche 1) die Datenmodelle definieren, 2) die
Codelisten definieren und 3) die Authentifizierung definieren.

#### Datenmodelle

Der Dateiname für Datenmodelle ist wie folgt aufgebaut:

> `components-$DATENMODELL_NAME.yaml` oder
> `components-$DATENMODELL_NAME.yaml-$TEILMODELL_NAME` oder
> `components-$API_NAME-$DATENMODELL_NAME.yaml` oder
> `components-$API_NAME-$DATENMODELL_NAME-$HTTP_METHODE-request.yaml` oder
> `components-$API_NAME-$DATENMODELL_NAME-$HTTP_METHODE-response.yaml`

- `$DATENMODELL_NAME` - Der Datenmodellname
- `$TEILMODELL_NAME` - Optionaler Name im Falle von einer Zusammsetzung von Modellen, wobei "-basis" die Attribute
  enthält, die immer gelten
- `$API_NAME` - Der Name der API, z.B. qs für Quellsysteme oder dienste für Dienste
- `$HTTP_METHODE` - falls vorhanden, eine HTTP-Method wie z.B. GET, POST, PUT

Beispiel

Die Datei `components-dienste-PersonenKontext.yaml` beschreibt das Datenmodell PersonenKontext
für die Dienste-API.

Die Datei `components-qs-PersonenKontext-PUT-request.yaml` beschreibt das Datenmodell
PersonenKontext für die Quellsysteme-API als PUT Request-Body.

#### Codelisten

Der Dateiname für Codelisten ist wie folgt aufgebaut:

> `components-code-$CODELISTEN_NAME.yaml`

- `$CODELISTEN_NAME` - Der Codelistenname

#### Dateien mit securitySchemes

Definieren die beiden Authentifizierungen für Dienste und Nutzer.

> `securitySchema-$SCHEMA.yaml`

- `$SCHEMA` - Ist entweder oAuthForUser oder oAuthForServices
