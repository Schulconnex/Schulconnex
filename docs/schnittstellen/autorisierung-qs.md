---
title: Autorisierung Quellsysteme
tags: 
- Informativ
---

# API-Autorisierung für Quellsysteme

Bei Quellsystemen (Client-Anwendung) authentifiziert und autorisiert der Schulconnex-Server
die Client-Anwendung und nicht einen Benutzer. Hierfür verwenden Client-Anwendungen den
OAuth 2.0 Client Credentials Flow ([OAuth 2.0 RFC 6749 „The OAuth 2.0 Authorization Framework“,
Abschnitt 4.4][1]), bei dem eine Client-Anwendung ihre Client-ID und das dazugehörige Client Secret
verwendet, um sich zu authentifizieren und einen Access Token zu erhalten. Bei dem Access Token
handelt es sich um eine Zeichenkette, welche von den Client-Anwendungen bei den darauffolgenden
HTTP-Anfragen gegen die REST-API im Authorization-Header verwendet wird.

[1]: https://datatracker.ietf.org/doc/html/rfc6749#section-4.4
