---
title: Schulconnex
subtitle: Version 1.5
lang: de
author: Landesinitiative n-21 e. V.
subject: Schulconnex
keywords: [Schulconnex, API, Spezifikation]

top-level-division: section
documentclass: book
book: true
classoption: oneside
titlepage: true
titlepage-rule-color: 6034ed
# titlepage-rule-height: 2
titlepage-logo: src/print/logo.png
# logo-width: 110mm

table-use-row-colors: true

header-left: \rightmark
---
\frontmatter

# Rechtliche Hinweise {.unlisted  .unnumbered}

Dieses Werk ist lizenziert unter Creative Commons Namensnennung-Keine Bearbeitung 4.0 (CC BY-ND 4.0).

Das Dokument wurde nach bestem Wissen und mit größter Sorgfalt erstellt, dennoch können Fehler und Ungenauigkeiten nicht vollständig ausgeschlossen werden. Eine juristische Verantwortung oder Haftung für eventuell verbliebene fehlerhafte Angaben und deren Folgen wird nicht übernommen.

Wort- und Bildmarke von Schulconnex sind eingetragene Marken der Landesinitiative n-21: Schulen in Niedersachsen online e. V.

# Vorbemerkung {.unnumbered}

!include`startLine=2` docs/vorbemerkung.md

\mainmatter

\part{Normativer Teil}

!include docs/einleitung.md

!include docs/allgemeines.md

!include docs/datenmodell/datenmodell.md

!include`incrementSection=1` docs/datenmodell/datumsformat.md

!include`incrementSection=1` docs/datenmodell/organisation.md

!include`incrementSection=1` docs/datenmodell/person.md

!include`incrementSection=1` docs/datenmodell/personenkontext.md

!include`incrementSection=1` docs/datenmodell/personendatensatz.md

!include`incrementSection=1` docs/datenmodell/gruppe.md

!include`incrementSection=1` docs/datenmodell/gruppenzugehörigkeit.md

!include`incrementSection=1` docs/datenmodell/gruppendatensatz.md

!include`incrementSection=1` docs/datenmodell/lernperiode.md

!include`incrementSection=1` docs/datenmodell/beziehung.md

!include`incrementSection=1` docs/datenmodell/anschrift.md

!include`incrementSection=1` docs/datenmodell/organisationsbeziehung.md

!include docs/angepasstes-datenmodell/angepasstes-datenmodell.md

!include`incrementSection=1` docs/angepasstes-datenmodell/person.md

!include`incrementSection=1` docs/angepasstes-datenmodell/personenkontext.md

!include`incrementSection=1` docs/angepasstes-datenmodell/organisation.md

!include`incrementSection=1` docs/angepasstes-datenmodell/gruppe.md

!include docs/schnittstellendefinition/schnittstellendefinition.md

!include`incrementSection=1` docs/schnittstellendefinition/fehlerbehandlung.md

!include`incrementSection=1` docs/schnittstellendefinition/validierung.md

!include docs/schnittstellen/schnittstellen.md

!include`incrementSection=1` docs/schnittstellen/autorisierung-qs.md

!include`incrementSection=1` docs/schnittstellen/autorisierung-dienste.md

!include`incrementSection=1` docs/schnittstellen/oidc-claims.md

!include`incrementSection=1` docs/schnittstellen/vendor-extensions.md

!include docs/codelisten.md

\part{Praxisleitfaden}

# Appendix I: Praxisleitfaden {.unnumbered}

!include`startLine=2` docs/praxisleitfaden/praxisleitfaden.md

!include`incrementSection=1` docs/praxisleitfaden/ablauf-synchronisation.md

!include`incrementSection=1` docs/praxisleitfaden/ablauf-schuljahrwechsel.md

!include`incrementSection=1` docs/praxisleitfaden/rolle-in-organisation.md

!include`incrementSection=1` docs/praxisleitfaden/ablauf-löschen.md

# Glossar {.unnumbered}

!include`startLine=2` docs/glossar.md

# Versionshistorie {.unnumbered}

!include`startLine=2` docs/versionshistorie.md
