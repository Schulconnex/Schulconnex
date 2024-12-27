# Referenzgruppe

Bei Referenzgruppen handelt es sich um Gruppen, deren Gruppenzugehörige vollständig oder teilweise der
Hauptgruppe zugeordnet werden. Referenzgruppen erlauben die einfachere Verwaltung von Gruppen von Personen,
da hierdurch beispielsweise eine oder mehrere Klassen als Einheit einem Kurs als Teilnehmer zugeordnet werden
können. Gruppenzugehörige aus Referenzgruppen werden automatisch in die aktuelle Gruppe übernommen und
behalten dabei ihre Rollen aus der Gruppenzugehörigkeit der Referenzgruppe.  Die automatische Übernahme kann
auf bestimmte Rollen beschränkt werden. Referenzgruppen müssen zur selben Organisation wie die Hauptgruppe
gehören (Gruppe und Referenzgruppe müssen eine identische `orgid` haben). Referenzgruppen dürfen hierarchisch
sein, d. h. Referenzgruppen von Referenzgruppen einer Gruppe werden behandelt wie Referenzgruppen der Gruppe.
Zyklische Verweise sind jedoch untersagt und führen zu einer Fehlermeldung.

| Attribut | Typ            | Anzahl | Bemerkung                                                                                                                                  | Qualifizierter Name                              |
|----------|----------------|--------|--------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------|
| grupid   | String (UTF-8) | 1      | ID der Referenzgruppe.                                                                                                                     | `urn:schulconnex:de:referenzgruppe:grupid`      |
| rollen   | String (Code)  | 0..n   | Gruppenrollen aus der Gruppenzugehörigkeit von Personenkontexten, welche in die Referenzgruppe übernommen werden. Hinweis: Werden hier keine Gruppenrollen aufgeführt, so werden alle Personenkontexte der Referenzgruppe übernommen. | `urn:schulconnex:de:referenzgruppe:rollen`      |

