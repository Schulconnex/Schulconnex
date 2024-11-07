## Einschränkung der Nutzung auf eine Schule oder Gruppe

### Schullizenz [3_gruppenlizenz_schule.ld.json](3_gruppenlizenz_schule.ld.json)

Das Attribut "partOf" unterhalb von "assignee" referenziert eine "PartyCollection", zu der der "assignee" gehören muss. Die PartyCollection ist hier nur durch eine Bedingung (refinement) definiert. Die Bedingungen müssen so definiert sein, dass sie nach den Regeln gemäß https://w3c.github.io/odrl/formal-semantics/#sematics-of-permission so ausgewertet werden, dass sie den tatsächlichen Lizenzvereinbarungen entsprechen. 

In dem Beispiel besteht das Recht, die Software auszuführen, nur dann, wenn die Person, der die Lizenz zugewiesen wurde (assignee) Teil einer Gruppe (PartyCollection) ist, für die die Bedingung (refinement) `urn:schulconnex:de:personenkontext:organisation:kennung eq NI_12345` zutrifft. Die Schulnummer muss also NI_12345 sein. 

Auf die gleiche Art und Weise könnte das Nutzungsrecht an die Zugehörigkeit zu einer Gruppe gebunden werden, z. B. durch die Bedingung `urn:schulconnex:de:personenkontext:gruppe:id eq 4230df82-0c7b-4546-be8d-a8f4efb3a343`. Ob das eine "Gruppenlizenz" im Sinne des Anbieters wäre, müsste geklärt werden. 

Für alle relevaten Schulconnex-Attribute müssten für diese Darstellung URN-Notationen definiert werden. 

#### Alternative Darstellung Gruppenlizenz [3_gruppenlizenz.ld.json](3_gruppenlizenz.ld.json)

Eine Schul- oder Gruppenlizenz könnte alternativ durch direkte Referenzierung des Schul- oder Gruppenobjekts per IRI abgebildet werden. Das würde technisch aber bedeuten, dass zusätzliche Endpunkte für diese IRI in moin.schule implementiert werden müssten. 

### Lehrerlizenz [4_lehrerlizenz.ld.json](4_lehrerlizenz.ld.json)

Auf gleiche Art und Weise lässt sich die Bedingung abbilden, dass der nutzende Personenkontext eine bestimmte Schulconnex-Organisationsrolle hat. 