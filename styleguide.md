


# Schulconnex  Styleguide

  ## Einleitung
Bei der Beschreibung der Schulconnex Schnittstelle sind Begriffe einheitlich zu verwenden. Es sollten für denselben Begriff auch immer dasselbe Wort in derselben Schreibweise benutzt werden. Synonyme sind zu vermeiden.

Darüber hinaus ist erstrebenswert, dass Formatierungen von Texten, die Benennung von Dateien und andere formale Aspekte der Spezifikation konsistent gehandhabt werden.

Derzeit beruht dieser Styleguide primäre auf Entscheidungen, welche beim Redigieren der Spezifikation getroffen wurden, in der Absicht diese Entscheidungen an zentraler Stelle zu dokumentieren. Daher ist dieser Styleguide derzeit nur grob strukturiert.

Es besteht die Absicht dass, wenn ausreichend viele Informationen gesammelt wurden, der Styleguide neu strukturiert wird.

## Begriffe und Schreibweisen
- Schulconnex wird in einem Wort geschrieben und hat nur einen Großbuchstaben. "Schul-Connex", "SchulConneX" oder "SchulconneX" sind keine zulässigen Schreibweisen.
- Nicht durch die Schulconnex Spezifikation vorgegebene Attribute heissen "herstellereigene Attribute" und nicht "anwendungsfallspezifische Attribute"  oder "anwendungsspezifische Attribute".
- Der Begriff "REST-API" ist mit Bindestrich zu schreiben und nicht als "REST API".
- Der Begriff "OIDC-Claims" ist mit Bindestrich zu schreiben und nicht als "OIDC Claims".
- Entsprechendes gilt für Wortkombinationen mit "HTTP", beispielsweise "HTTP-Anfragen", jedoch **nicht** bei "HTTP ContentType".
- Wird "Schulconnex" zusammen mit einem anderen Begriff benutzt ("Schulconnex-Server", "Schulconnex- Spezifikation"), werden die Begriffe mit einem Bindestrich verbunden.

## Attributnamen
- Alle Attributnamen werden durchgehend klein geschrieben. Also `kennung` und `id` statt `Kennung` und `ID`
- Attributnamen enthalten nur die Buchstaben `a` bis `z`.
- Umlaute werden immer ausgeschrieben, also `faecher` und nicht `fächer`.
- Zusammengesetzte Namen werden immer direkt zusammengeschrieben, ohne Unterstrich oder Bindestrich, also `namenssuffix` und nicht `namens-suffix` oder `namens_suffix`.

## Attributbeschreibungen
 - Beschreibungen von Attributen enden immer mit einem Punkt, auch wenn es sich um keinen vollständigen Satz handelt. So ist die Beschreibung zu `geburt.datum` beispielsweise in der Form "Geburtsdatum einer Person." zu schreiben und nicht als "Geburtsdatum einer Person".

## Formatierungen in Markdown Dateien
 - Wird in der Beschreibung eines Attributes ein anderes Attribut oder ein Wert aus einer Codeliste erwähnt, so sind diese mit Backquotes (manchmal auch Backticks genannt) als Code zu markieren, beispielsweise: "Ist `sichtfreigabe` nicht gesetzt, so entspricht das dem Wert `nein`.)
 - Wird der Name einer Codeliste in einer Attributbeschreibung erwähnt, so wird der Name kursiv geschrieben. Beispiel: "Referenz auf einen Code der Codeliste *Personenstatus*."

## Filenamen

