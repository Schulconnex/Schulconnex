---
title: Personenkontext
---

# Datenmodell Personenkontext für Diensteanbieter

Hat eine Person mehrere Personenkontexte, so wird typischerweise bereits bei der Anmeldung im
Sicherheitskontext einer angemeldeten Person einer dieser Kontexte selektiert. In diesem Fall
wird auch nur dieser ausgewählte Personenkontext an den Dienst weitergereicht.

Abhängig von vertraglichen Absprachen mit dem Betreiber des Schulconnex-Servers ist es auch möglich,
alle gespeicherten Personenkontexte mitzuliefern und die Auswahl erst in der Anwendung des Dienstes
vorzunehmen. Dies ist beispielsweise bei einem Schulwechsel sinnvoll, wenn Informationen
aus einem Kontext in einen anderen Kontext übernommen werden sollen.

Attribut | Typ | Anzahl | Freigabe erforderlich | Bemerkung
--- | --- | --- | --- | ---
id | String (UTF-8) | 1 | nein | ID des Personenkontexts. Wird vom Schulconnex-Server vergeben und ist eindeutig. Dieses Attribut ist unveränderbar (immutable).
organisation | [Organisation](organisation) | 0/1 | ja | Organisation (siehe Datenmodell *Organisation*).
rolle | String (Code) | 0/1 | ja | Rolle der Person innerhalb der Organisation. Referenz auf einen Code der Codeliste *Rolle*.
erreichbarkeiten | *Array[Erreichbarkeit]* | 0..n | ja | Liste (Array) von Erreichbarkeiten.
personenstatus | String (Code) | 0/1 | ja | Status, den eine Person in einer Organisation in Bezug auf eine bestimmte Rolle hat, Referenz auf einen Code der Codeliste *Personenstatus*.
gruppen | *Array[[Gruppendatensatz](gruppendatensatz)]* | 0/0..n | ja | Array aus Gruppen und dazugehörende Gruppenzugehörigkeiten.
beziehungen | *Struktur* | 0/0..1 | ja | Objekt mit zwei Attributen, den `hat_als` und `ist_von` Beziehungen.
beziehungen.hat_als | *Array[[Beziehung](beziehung)]* | 0/0..n | ja | Array der `hat_als` Beziehungen eines Personenkontextes. Jeder Eintrag enthält eine Personenkontext-ID und eine Beziehung.
beziehungen.ist_von | *Array[[Beziehung](beziehung)]* | 0/0..n | ja | Array der `ist_von` Beziehungen eines Personenkontextes. Jeder Eintrag enthält eine Personenkontext-ID und eine Beziehung.
loeschung | *Struktur* | 0/0..1 | nein| Aktuell gibt es zu Löschungen nur ein Attribut (Zeitpunkt), eventuell werden in späteren Versionen weitere Attribute hinzugefügt.
loeschung.zeitpunkt | String (datetime) | 1 | nein | Datum und Uhrzeit der Löschung des Personenkontexts. Das Format des Löschzeitpunkts ist `YYYY-MM-DD'T'hh:mm'Z'` als UTC-Zeitpunkt.
