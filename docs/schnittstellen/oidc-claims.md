---
title: OIDC-Claims
---

# Person-Info über OIDC-Claims

Der bevorzugte Weg, um nach einer Anmeldung auf die Informationen der sich anmeldenden Person
zuzugreifen, ist über die API `/person-info`.

In einigen Fällen, insbesondere wenn nur ein kleiner Teil der möglichen Informationen,
beispielsweise nur ID, Vorname und Nachname benötigt wird, ist es für Dienstanbieter einfacher,
wenn kein gesonderter REST-Call auf die API erfolgen muss, sondern die Information direkt
als Teil des OIDC-ID-Tokens mitgeliefert wird.

Die hier über Claims bereitgestellten Informationen entsprechen den durch `/person-info`
bereitgestellten Informationen. Wie auch bei den durch die API `/person-info` bereitgestellten
Informationen sind diese im Schulconnex-Server konfigurierbar. Welche Konfiguration vorgenommen
wird, ist von der vertraglichen Vereinbarung zwischen dem Dienstanbieter und dem Betreiber
des Schulconnex-Servers abhängig.

Es gibt in OIDC eine Reihe von Standard-Claims, wie `sub`, `given_name` oder `family_name`.
Wo bereits Standard-Claims existieren, welche den Attributnamen in `/person-info` entsprechen,
werden die (englischen) Claim-Namen benutzt. Für Attribute, welche kein Äquivalent in den
Standard-Claims besitzen, werden eigene, Schulconnex-spezifische, Claims in URN-Form genutzt.

Die folgende Tabelle gibt das Mapping von Attribut-Namen auf Claim-Namen wieder.

Attribut-Name | Claim-Name
--- | ---
`id` | `sub`
`familienname` | `family_name`
`vorname` | `given_name`
`rufname` | `urn:schulconnex:de:person:name:rufname`
`erreichbarkeiten[0].kennung` | `email` (existieren mehrere Erreichbarkeiten des Typs „E-Mail“, so wird die erste E-Mail Kennung übermittelt)
`personenkontext.rolle` | `urn:schulconnex:de:personenkontext:rolle`
`personenkontext.organisation.kennung` | `urn:schulconnex:de:personenkontext:organisation:kennung`

Die gelieferten Werte zu den einzelnen Attributen entsprechen **immer** den Konventionen, die auch
bei `/person-info` genutzt werden und **nicht** den Werten, welche den Standard OIDC-Claims entsprechen.

Wird kein Scope Request verwendet, so wird nur der Claim `sub` (entspricht der
pseudonymisierten Personen-ID) geliefert.

```json
{
  "sub": "af3a88fc-d766-11ec-9d64-0242ac120002"
}
```

Über einen entsprechenden Scope Request (`scope=person-info`) können auch Vorname,
Nachname, Rolle und Organisationskennung mitgeliefert werden.

```json
{
  "sub": "af3a88fc-d766-11ec-9d64-0242ac120002",
  "family_name": "Muster",
  "given_name": "Maximilian Klaus Dieter",
  "urn:schulconnex:de:person:name:rufname": "Max",
  "email": "Max.Muster@schule_1234.de",
  "urn:schulconnex:de:personenkontext:rolle": "Lern",
  "urn:schulconnex:de:personenkontext:organisation:kennung": "NI_12345"
}
```
