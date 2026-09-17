## Leere Attribute

Als leere Attribute gelten Attribute, für die kein Wert gespeichert ist. Unabhängig davon, ob ein Client im Prinzip auf dieses Attribut zugreifen kann, dürfen solche Attribute von Schulconnex-Servern nicht ausgeliefert werden. Das gilt sowohl für einfache Attribute als auch für komplexe Objekte, wenn alle enthaltenen, für einen Client lesbaren, Attribute leer sind.

Ein Attribut hat dann keinen Wert, wenn dieser nie gesetzt wurde und in der Spezifikation kein Default-Wert definiert ist, oder wenn ein vorhandener Wert gelöscht oder bei einem PATCH auf `null` gesetzt wurde.

Ist, beispielsweise, zur Geburt einer Person nur der Ort und nicht das Datum gesetzt, so liefert der Server in der Antwort auch nur:
```
"geburt": {
      "geburtsort": "Berlin, Deutschland"
    }
```
Ist auch der Geburtsort nicht gesetzt, so wird das Objekt `geburt` in der Antwort nicht geliefert

Hierdurch sollen Inkonsistenzen im Verhalten unterschiedlicher Schulconnex-Server vermieden werden und verhindert werden, dass Client-Syteme implizit Rückschlüsse auf für diese nicht freigegebene Attribute ziehen können.