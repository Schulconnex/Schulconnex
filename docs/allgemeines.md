# Allgemeines

## Kernanwendungsfälle

Prinzipiell unterstützt die API zwei grundlegend unterschiedliche Anwendungsfälle: Zum
einen die Bereitstellung von Nutzer- und Kontextdaten im Zusammenhang mit einem Single
Sign-on für Anwendungen (Dienste), zum anderen die Synchronisation von Nutzer- und
Kontextdaten zwischen Schulverwaltungssystemen (Quellsystemen).

Ein Schulconnex-Service ist ein Dienst, welcher APIs nach den Vorgaben der Schulconnex-
Spezifikation bereitstellt. Der Zugriff auf alle Endpunkte der REST-APIs eines Schulconnex-
Services wird durch einen zentralen Authentifizierungs- und Autorisierungsserver gesichert.
Ein Zugriff auf die Endpunkte darf nur mit einem gültigen, von diesem Server ausgestellten
Access-Token möglich sein. Um Access-Token für die API-Nutzung zu erhalten, müssen
Quellsysteme und Dienste als Clients mit einer Client-ID registriert sein.

## Nutzung der Schnittstelle durch Dienste

Dienste (Anwendungen) nutzen die Schulconnex-Dienste-API zum Abruf von Nutzer- und
Kontextdaten.

Ein Zugriff auf die API ist in drei unterschiedlichen Sicherheitskontexten möglich:

Aufruf im **Sicherheitskontext einer angemeldeten nutzenden Person mit Zugriff auf den
Personenkontext**, mit dem die Person angemeldet ist. Bei dieser Art des Zugriffs werden nur
die Daten, die sich auf den konkreten Personenkontext beziehen, mit dem die oder der
Nutzende angemeldet ist, durch die REST-API bereitgestellt. Dies ist der Standard-Zugriff für
die Dienste. Dieser Zugriff setzt einen Authentisierungs- und Autorisierungsvorgang des oder
der Nutzenden durch den Server voraus, bei dem ein entsprechender Access-Token für den
Zugriff auf den Endpunkt ausgestellt wird.

Aufruf im **Sicherheitskontext einer angemeldeten Person mit Zugriff auf alle
Personenkontexte der Person**. Nur angemeldeten Personen mit besonderem Vertrauensstatus
kann es ermöglicht werden, auf die vollständigen Daten einer Person (alle Personenkontexte)
zuzugreifen. Dieser Zugriff setzt ebenfalls einen Authentisierungs- und Autorisierungsvorgang
des oder der Nutzenden durch den Server voraus, bei dem ein entsprechender Access-Token
für den Zugriff auf den Endpunkt ausgestellt wird.

Aufruf im **Sicherheitskontext des Dienstes mit Zugriff auf alle Daten**, die für sie freigegeben
sind. Diese Art des Zugriffs erlaubt den Diensten eine (periodische) Synchronisierung der bei
ihnen gehaltenen Daten mit den Daten des Schulconnex-Services, ohne dass sich die
nutzenden Personen aktiv anmelden müssen. Der Zugriff erfolgt mit einem Access-Token,
den der Authentifizierungsserver und Autorisierungsserver für den Dienst ausstellt. Dieser
Sicherheitskontext wird aktuell zum periodischen Abgleich von gelöschten Daten verwendet.
