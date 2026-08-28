## Leere Attribute

Attribute, für die kein Wert gespeichert ist, unabhängig davon, ob ein Client im Prinzip auf dieses Attribut zugreifen kann, werden von Schulconnex-Servern nicht ausgeliefert. Das gilt sowohl für einfache Attribute als auch für komplexe Objekt, wenn alle enthaltenen Attribute leer sind.

Ist, beispielsweise, zur Geburt einer Person nur der Ort und nicht das Datum gesetzt, so liefert der Server in der Antwort auch nur:
```
"geburt": {
      "geburtsort": "Berlin, Deutschland"
    }
```
Ist auch der Geburtsort nicht gesetzt, so wird das Objekt `geburt` in der Antwort nicht geliefert
