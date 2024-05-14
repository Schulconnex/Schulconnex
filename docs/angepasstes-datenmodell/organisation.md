---
title: Organisation
---

# Angepasstes Datenmodell Organisation für Diensteanbieter

Attribut | Typ | Anzahl | Freigabe erforderlich[^1] | Bemerkung
--- | --- | --- | --- | ---
id | String (UTF-8) | 1 | nein | ID der Organisation. Wird vom Schulconnex-Server vergeben und ist eindeutig. Dieses Attribut ist unveränderbar (immutable).
kennung | String (UTF-8) | 0/0..1 | ja | Die optionale Kennung (Identifikations-ID) einer Organisation muss innerhalb eines Organisationstyps eindeutig sein. Dies kann beispielsweise die offizielle Schulnummer sein.
name | String (DIN 91379.B) | 0/0..1 | ja | Offizieller Name einer Organisation.
anschrift | Anschrift | 0/0..1 | ja | Anschrift der Organisation.
typ | String (Code) | 0/1 | ja | Typ der Organisation, Referenz auf einen Code der Codeliste *Organisationstyp*.

[^1]: Die Konfigurierbarkeit durch Absprache mit dem Schulconnex Server-Betreiber dient an dieser Stelle nicht dem Schutz personenbezogener Daten, sondern der Reduktion der Bandbreite, wenn Informationen von Diensten nicht benötigt werden.