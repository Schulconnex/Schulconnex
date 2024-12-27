---
title: Person
---

# Datenmodell Person für Diensteanbieter

Nachfolgend ist das Datenmodell einer Person dargestellt.

| Attribut          | Typ                      | Anzahl   | Freigabe erforderlich | Bemerkung                                                                                                                   | Qualifizierter Name                              |
|-------------------|--------------------------|----------|------------------------|---------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------|
| stammorganisation | [Organisation](organisation) | 0/0..1   | ja                     | Personen können einer Organisation angehören, jedoch zeitweise an einer anderen Organisation tätig sein. Die erste Organisation ist die Stammorganisation. Der häufigste Anwendungsfall ist die Abordnung eines Lehrenden an eine andere Dienststelle. Die Stammorganisation ist unabhängig vom Personenkontext. | `urn:schulconnex:de:person:stammorganisation`   |
| name              | [Name](name)            | 0/1      | ja                     | Der Name der Person.                                                                                                       | `urn:schulconnex:de:person:name`                |
| geburt            | [Geburt](geburt)        | 0/0..1   | ja                     | Zur Geburt der Person.                                                                                                     | `urn:schulconnex:de:person:geburt`              |
| geschlecht        | String (Code)           | 0/0..1   | ja                     | Referenz auf einen Code der Codeliste *Geschlecht*.                                                                        | `urn:schulconnex:de:person:geschlecht`          |
| lokalisierung     | String                  | 0/0..1   | ja                     | Bevorzugte Lokalisierungseinstellung einer Person für Anwendungen. Wert basiert auf Definition in RFC 5646. Wenn nicht angegeben, wird „de“ angenommen. | `urn:schulconnex:de:person:lokalisierung`       |
| vertrauensstufe   | String (Code)           | 0/1      | ja                     | Gibt an, wie stark die Personendaten vom erfassenden Mandanten verifiziert wurden, Referenz auf einen Code der Codeliste *Vertrauensstufe*. | `urn:schulconnex:de:person:vertrauensstufe`     |
