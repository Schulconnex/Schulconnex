---
title: Ausnahmefall -  Synchronisation im Systemkontext
tags:
- Informativ
---

# Synchronisation zwischen Schulconnex-Servern

In seltenen Fällen kann es gewünscht sein, eine Vollsynchronisation zwischen zwei Schulconnex-Servern durchzuführen. Hierfür müssen Daten auch organisationsübergreifend gelesen werden können.

Es bleibt dem Betreiber eines Schulconnex-Servers freigestellt neben den üblichen organisationsspezifischen Access-Token auch organisationsübergreifende System-Token bereitzustellen.

Diese erlauben es, über `GET /personen`, `GET /personenkontexte`, `GET/personenkontexte/:id/beziehungen`, `GET /personenkontexte/:id/sichtfreigaben`, `GET /gruppen` und `GET /gruppenzugehörigkeiten` alle Daten in den jeweiligen Datenmodell auszulesen.
Entsprechend können mit `GET /organisationen` auch alle Organisationen und mit `GET /organisationen/:id/organisationsbeziehungen` auch alle Organisationsbeziehungen ausgelesen werden. Dieses ist aber normalerweise allen Organisationen gestattet und erfordert kein System-Token.

## Auslesen eines Schulconnex-Servers

Beim Arbeiten im Systemkontext sind beim Auslesen der Daten aus einem Schulconnex-Servers folgende Punkte zu beachten:
*	Schulconnex-Server haben keine Locking-Funktionalität.
    *	Es gibt keine Garantie, dass mehrere aufeinanderfolgende Abfragen konsistente Rückgabewerte liefern. 
    * So kann beispielsweise bei der Abfrage der Gruppenzugehörigkeiten die ID eines Personenkontexts geliefert werden, die bei der Abfrage der Personenkontexte noch nicht erstellt wurde.
    * Umgekehrt kann es geschehen, dass ein Datensatz in einer Abfrage noch über eine ID referenziert wird, dieser Datensatz bei der Abfrage der entsprechenden Daten jedoch schon gelöscht ist. 
    *	Ein System zum Abgleich zweier Server muss solche Inkonsistenzen erkennen und damit umgehen können, beispielsweise durch erneute Einzelabfrage der beiden in Konflikt stehenden Datensätze.
*	Die Pseudo-IDs für Dienste können nicht synchronisiert werden.
    *	Es bleibt jedem Schulconnex-Server überlassen, wie die pseudonymen IDs für Dienste erzeigt werden. Dieses kann dynamisch geschehen, beispielsweise durch Encrypten der ID mit einem dienstspezifischen Schlüssel, oder auch zufällig beim ersten Zugriff auf einen Datensatz durch einen Dienst mit anschließender Speicherung in einer internen Datenbank.
    *	Diese Informationen stehen für Abfragen über die API nicht zur Verfügung. 
    *	Durch Synchronisation zweier Schulconnex-Server kann zwar für Quellsysteme ein im Verhalten nahezu identischer Server erstellt werden, nicht jedoch für Dienste.
*	Interne Server-Zustände können nicht ausgelesen werden.
    *	Insbesondere kann nicht ausgelesen werden, ob und welche Daten bereits von Diensten abgefragt wurden.
    *	Nur die regulär für Organisationen auslesbaren Daten können abgefragt werden.
    *	Abfragen im Systemkontext erlauben ausschließlich ein organisationsübergreifendes Auslesen von Daten. Sie erlauben keinen Zugriff auf zusätzliche Informationen.
    *	Bei Sichtfreigaben sollten nur die erstellten Sichtfreigaben ausgelesen werden
*	Personen und Personenkontexte, welche über Sichtfreigaben für mehrere Organisationen sichtbar sind, können eventuell, je nach Auslesevorgang, bei mehreren Organisationen gelistet werden.
    *	Es sollten daher nur die Personen, Personenkontexte und Sichtfreigaben der bereitstellenden Organisation abgefragt werden, nicht die der Organisation, für die eine Sichtfreigabe erfolgt ist.
    *	Zum Abfragen der Personen und Personenkontexte ohne fremde Sichtfreigaben ist die Filteroption `sichtfreigabe=nein` vorgesehen.
    *	Bei der Abfrage der Sichtfreigaben sind die Filteroptionen `ausgehend=ja` und `eingehend=nein` zu nutzen. 


## Übertragung auf einen zweiten Server


In den meisten Szenarien bei denen im Systemkontext gearbeitet wird, ist anzunehmen, dass das Ziel-System, ob Schulconnex-Server oder anderer Server, vom Abfragenden selbst betrieben wird und daher verändert werden kann.

Grundsätzlich sind vier Szenarien zu unterscheiden.

### 1. Nutzung der regulären Schulconnex-APIs
Hierbei werden die regulären POST-APIs zum Erstellen der jeweiligen Datensätze (Personendatensätze, Personenkontexte, Beziehungen, Gruppen, Gruppenbeziehungen, Sichtfreigaben, Organisationen und Organisationsbeziehungen) genutzt. 

Nach jedem Erstellen eines Datensatzes ist die erzeugte ID auszulesen und ein Mapping zwischen Quell-ID und Ziel-ID zu erstellen. Bei der Erzeugung von Datensätzen, welche andere Datensätze referenzieren, ist die ID entsprechend anzupassen.

Diese Vorgehensweise ist nur selten sinnvoll, da im Normallfall die Organisations-ID aus dem Access-Token übernommen wird und damit für alle Datensätze, unabhängig vom Wert im Quell-Server, gleich ist. Ähnliches gilt auch für das Mandanten-Attribut.

### 2. Nutzung der Schulconnex-APIs mit schreibaren Organisations- und Mandanten-Attributen
Hierbei wird vorgegangen wie im vorhergehenden Beispiel, es werden jedoch vom Server Varianten der POST-APIs bereitgestellt, bei denen die Attribute organisation und mandant nicht vom Server vergeben werden, sondern als REQUIRED Attribute im BODY mit angegeben werden können. 

Es ist empfehlenswert solche veränderten API-Endpunkte gesondert zu sichern und nur lokal zugänglich zu machen.

### 3. Nutzung der Schulconnex-APIs mit schreibaren ID-, Organisations- und Mandanten-Attributen
Hierbei handelt es sich um eine Erweiterung des vorhergehenden Beispiels, allerdings muss bei dieser Veränderung der APIs auch das Attribut ID als ‚REQUIRED‘ definiert sein. Über eine solche API können die IDs des Quell-Servers direkt übernommen werden. Ein Mapping auf neue IDs ist nicht notwendig.

Es ist jedoch zu beachten, dass Schulconnex nicht festlegt, wie IDs in einem Schulconnex-Server erzeugt und verwaltet werden. Nutzt beispielsweise der Quell-Server dafür UUIDs, das Ziel-System jedoch intern numerische Werte, so ist eine direkte Kopie der existierenden IDs auch über eine veränderte API nicht möglich.

### 4. Direktes Schreiben in die eigene Datenbank
Wenn ein direkter Zugriff auf die internen Strukturen eines Schulconnex-Servers möglich ist, dann ist es oft einfacher die ausgelesenen Daten direkt in die Datenbank des Zielsystems zu schreiben, ohne dabei über die Schulconnex-APIs zu gehen. 
