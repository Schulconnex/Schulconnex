## Leere Inhalte in JSON-Antworten

Schulconnex-Servern dürfen keine JSON-Objekte ohne Inhalte ausliefern.

Das gilt sowohl für einzelne Attribute, für die kein Wert in der Antwort ausgeliefert wird, für Arrays, die keine Elemente enthalten, als auch für komplexere Objekte, welche nur Attribute oder Unter-Objekte ohne Inhalte enthalten.

Ein einzelnes Attribut hat dann keinen Wert, wenn dieser nie gesetzt wurde und in der Spezifikation kein Default-Wert definiert ist, oder wenn ein vorhandener Wert gelöscht oder bei einem PATCH auf `null` gesetzt wurde. Unabhängig davon, ob ein Client im Prinzip auf dieses Attribut zugreifen kann, dürfen solche Attribute von Schulconnex-Servern nicht ausgeliefert werden. 

Das gilt auch für komplexe Objekte, wenn alle enthaltenen, für einen Client lesbaren, Attribute leer sind.

Ist, beispielsweise, zur Geburt einer Person nur der Ort und nicht das Datum gesetzt, so liefert der Server in der Antwort auch nur:
```
"geburt": {
      "geburtsort": "Berlin, Deutschland"
    }
```
Ist auch der Geburtsort nicht gesetzt, so wird das Objekt `geburt` in der Antwort nicht geliefert.

Hat ein Dienst nur Zugriff auf das Attribut `geburt.datum`, so darf das Objekt `geburt` in beiden Fällen nicht geliefert werden. 

Hierdurch sollen Inkonsistenzen im Verhalten unterschiedlicher Schulconnex-Server vermieden werden und verhindert werden, dass Dienste implizit Rückschlüsse auf für diese nicht freigegebene Attribute ziehen können. 

Eine Ausnahme von diesem Verhalten besteht bei der Nutzung von Filtern beim Lese-Zugriff auf Daten. Wird, beispielsweise durch die Nutzung von Filtern, auf eine Anfrage kein Rückgabewert geliefert, so muss ein Schulconnex-Server eine leere Liste `[]` liefern.