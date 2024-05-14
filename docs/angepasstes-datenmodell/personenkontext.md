---
title: Personenkontext
---

# Angepasstes Datenmodell Personenkontext für Diensteanbieter

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
organisation | Organisation | 0/1 | ja | Organisation. (Siehe Angepasstes Datenmodell *Organisation*)
rolle | String (Code) | 0/1 | ja | Rolle der Person innerhalb der Organisation. Referenz auf einen Code der Codeliste *Rolle*
erreichbarkeiten | *Array* | 0..n | ja | Liste (Array) von Attributpaaren aus Erreichsbarkeitstyp und Kennung
erreichbarkeiten[].typ | String (Code) | 1 | ja | Typ der Erreichbarkeit. Referenz auf Liste von Codes der Codeliste *Erreichbarkeitstyp*
erreichbarkeiten[].kennung | String (UTF-8) | 1 | ja | Konkrete Angabe der zum Erreichen der Person oder Organisation notwendigen Information. Derzeit ist nur die Erreichbarkeit über  eine E-Mail- Adresse vorgesehen.
personenstatus | String (Code) | 0/1 | ja | Status, den eine Person in einer Organisation in Bezug auf eine bestimmte Rolle hat, Referenz auf einen Code der Codeliste *Personenstatus*
gruppen | *Array* | 0/0..n | ja | Array aus Gruppen und dazugehörende Gruppenzugehörigkeiten.
gruppen.gruppe.* | *Struktur* | 0/1 | ja | Attribute einer einzelnen Gruppe entsprechend Datenmodell *Gruppe*
gruppen.gruppenzugehoerigkeit | *Struktur* | 0/1 | ja |
gruppen.gruppenzugehoerigkeit.rollen | String (Code) | 0/1..n | ja | Rollen der Person innerhalb der Gruppe. Liste von Rollen nach Codeliste *Gruppenrolle*.
gruppen.sonstige_gruppenzugehoerige | Array \{String (Code), String (Code)\} | 0/0..1 | ja | Weitere Zugehörige zu der Gruppe, jeweils als Paare von Kontext-IDs ktid und Rollen (Array von Rollen nach Codeliste *Gruppenrolle*).
beziehungen | *Struktur* | 0/0..1 | ja | Objekt mit zwei Attributen, den `hat_als` und `ist_von` Beziehungen.
beziehungen.hat_als | *Array* | 0/0..n | ja | Array der `hat_als` Beziehungen eines Personenkontextes. Jeder Eintrag enthält eine Personenkontext-ID und eine Beziehung.
beziehungen.hat_als[].ktid | String (UTF-8) | 0/1 | ja | Pseudonymisierte ID des Personenkontexts zu dem aus dem aktuellen Personenkontext eine `hat_als` Beziehung besteht.
beziehungen.hat_als[].beziehung | String (Code) | 0/1 | ja | Art der Beziehung aus Codeliste *Beziehungen*.
beziehungen.ist_von | *Array* | 0/0..n | ja | Array der `ist_von` Beziehungen eines Personenkontextes. Jeder Eintrag enthält eine Personenkontext-ID und eine Beziehung.
beziehungen.ist_von[].ktid | String (UTF-8) | 0/1 | ja | Pseudonymisierte ID des Personenkontexts zu dem aus dem aktuellen Personenkontext eine `ist_von` Beziehung besteht.
beziehungen.ist_von[].beziehung | String (Code) | 0/1 | ja | Art der Beziehung aus Codeliste *Beziehungen*.
loeschung | *Struktur* | 0/0..1 | nein| Aktuell gibt es zu Löschungen nur ein Attribut (Zeitpunkt), eventuell werden in späteren Versionen weitere Attribute hinzugefügt.
loeschung.zeitpunkt | String (datetime) | 1 | nein | Datum und Uhrzeit der Löschung des Personenkontexts. Das Format des Löschzeitpunktes ist `YYYY-MM-DD'T'hh:mm'Z'` als UTC-Zeitpunkt.
