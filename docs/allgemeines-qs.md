# Schulconnex-Quellsysteme-API

Ein Schulconnex-Service kann gegebenenfalls die Nutzung von HTTP-Methoden für einzelne Quellsysteme
einschränken, beispielsweise nur auf HTTP-GET (und HTTP-HEAD). Wird eine andere Methode benutzt, so erfolgt
eine Fehlermeldung (405/01).

Beim Lesen von Datensätzen von einem Schulconnex-Servers können auch Attribute mitgeliefert werden, welche
durch Quellsysteme nicht verändert werden dürfen, beispielsweise die Mandanten-ID. Bei UPDATE-Operationen
können diese Attribute oft weggelassen werden (genaueres ist bei den entsprechenden Funktionen angegeben).
Werden die Attribute bei der UPDATE-Operation angegeben, so müssen sie allerdings dem vorher ausgelesenen
Wert entsprechen. Bei einer Abweichung wird eine Fehlermeldung ausgegeben.
