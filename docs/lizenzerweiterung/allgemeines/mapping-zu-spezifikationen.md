---
title: Mapping von W3C Open Digital Rights Language (ODRL) Version 2.2 zu JSON / IMS CommonCartridge
---

# Mapping von W3C Open Digital Rights Language (ODRL) Version 2.2 zu anderen Datenmodellen, Standards und Spezifikationen

Dieses Dokument gibt einen ersten Überblick zu dem Mapping zwischen einem Nutzungsrecht als Policy nach dem definierten ODRL Datenmodell des PolicyType `Set` (JSON-LD) gegenüber JSON und Common-Cartridge von 1EdTech (ehemals IMS-Global, IMS-CC).
Dieses Dokument soll dabei helfen zu verstehen, dass beim Mapping keine relevanten Informationen verloren gehen.

> Anmerkungen: Das Dokument [`einführung-zu-odrl.md`](./einfuehrung-zu-odrl.md) gibt eine Einführung in ODRL, die Basiskonzepte und das Datenmodell.

> Anmerkungen: Die Beispiele sind aus der OpenAPI Specification [`lizenz-info.openapi.yml`](../../oas/lizenz-info.openapi.yml) entnommen.

Inhaltsverzeichnis
- [Mapping von W3C Open Digital Rights Language (ODRL) Version 2.2 zu anderen Datenmodellen, Standards und Spezifikationen](#mapping-von-w3c-open-digital-rights-language-odrl-version-22-zu-anderen-datenmodellen-standards-und-spezifikationen)
  - [ODRL](#odrl)
    - [Beispiel ODRL](#beispiel-odrl)
  - [JSON](#json)
    - [Beispiel JSON](#beispiel-json)
  - [IMS CommonCartridge](#ims-commoncartridge)
    - [Beispiel IMS CommonCartridge](#beispiel-ims-commoncartridge)
  - [Vergleich](#vergleich)

## ODRL

### Beispiel ODRL
Das bereitgestellte JSON-Datenmodell repräsentiert eine Konfiguration der Open Digital Rights Language (ODRL), zur Darstellung von Berechtigungen, Verboten und Pflichten im Zusammenhang mit der Nutzung digitaler Bildungsmedien und Dienste.

```JSON
{
    "@context": [
        "http://www.w3.org/ns/odrl.jsonld",
        {
            "scx": "http://schulconnex.de/lizenz-info/ns/1#"
        }
    ],
    "@type": "Set",
    "uid": "https://api-dienste.moin.schule/v1/lizenz-info/9230294b-68da-4f4f-aa63-ad9040122aa7",
    "target": {
        "uid": "urn:bilo:medium:123456789",
        "partOf": "https://www.bildungslogin-test.de/api/external/univention/media"
    },
    "permission": [
        {
            "action": [
                "execute"
            ]
        }
    ]
}
```

Hier ist eine Erläuterung der einzelnen Schlüssel und ihrer Bedeutung innerhalb des Modells:

- **@context**:	Dies ist ein Schlüsselwort in JSON-LD, das verwendet wird, um den Kontext der im Dokument verwendeten Begriffe zu definieren. JSON-LD (JavaScript Object Notation for Linked Data) ist eine Methode zur Kodierung verknüpfter Daten mittels JSON. In diesem Beispiel umfasst es einen Link zum ODRL-Standard (`http://www.w3.org/ns/odrl.jsonld`) und einen benutzerdefinierten Namensraum (`scx`), der auf `http://schulconnex.de/lizenz-info/ns/1#` verweist. Dieser benutzerdefinierte Namensraum ist spezifisch für die Organisation oder das System (SchulConnex), das dieses Datenmodell verwendet.  
- **@type**: Dies gibt den Typ des durch das JSON-Dokument beschriebenen Objekts an. In diesem Fall ist der Typ `"Set"`, was im Kontext von ODRL eine Sammlung von Berechtigungen, Verboten und Pflichten definiert.
- **uid**: Steht für "Unique Identifier" (eindeutiger Bezeichner) und repräsentiert eine spezifische Instanz des Objekts. Hier wird auf die zukünftig zu entwickelende Schnittstelle verwiesen, von wo diese Lizenzinformation aufrufbar ist.
- **target**: Spezifiziert das Objekt oder Asset, auf das sich die Rechte in der ODRL-Politik beziehen. Die `uid` innerhalb des Ziels (`urn:bilo:medium:123456789`) ist ein Identifikator für ein spezifisches Medium (wie ein digitales Buch, Video usw.), und die URL `partOf` (`https://www.bildungslogin-test.de/api/external/univention/media`) zeigt an, dass das Medium Teil einer größeren Sammlung ist, die von einer externen API verwaltet wird. 
- **permission**: Listet die Aktionen auf, die in Bezug auf das Ziel erlaubt sind. Hier ist die spezifizierte Berechtigung `execute`, was das Recht bedeuten könnte, den digitalen Inhalt oder die Software, die durch den Zielidentifikator spezifiziert ist, auszuführen oder zu nutzen. Die Struktur erlaubt es, mehrere Aktionen oder verschiedene Arten von Berechtigungen anzugeben, die auf unterschiedliche Bedürfnisse oder Rollen zugeschnitten sind.

## JSON
Die JSON-Version ist einfacher und möglicherweise direkter zu verwenden in Anwendungen, die nicht die zusätzlichen semantischen Informationen benötigen, die ODRL bietet. Dies könnte die Integration in Systeme erleichtern, die mit standardmäßigem JSON umgehen, ohne die Komplexität von Linked Data und Semantic Web zu berücksichtigen. Setzt notwendigerweise auch voraus, dass diese Syteme ein eigenes Verständnis von den Attributsbezeichnungen mitbringen müssen.
### Beispiel JSON



```JSON
{
    "uid": "https://api-dienste.moin.schule/v1/lizenz-info/9230294b-68da-4f4f-aa63-ad9040122aa7",
    "target": {
        "uid": "urn:bilo:medium:123456789",
        "partOf": "https://www.bildungslogin-test.de/api/external/univention/media"
    },
    "permission": [
        {
            "action": [
                "execute"
            ]
        }
    ]
}
```

## IMS CommonCartridge
Das bereitgestellte XML ist ein Beispiel für eine IMS Common Cartridge-Manifestdatei, die häufig in der Bildungstechnologie zum Verpacken und Teilen digitaler Lernressourcen verwendet wird. 

### Beispiel IMS CommonCartridge

```XML
<?xml version="1.0" encoding="UTF-8"?>
<manifest identifier="https://api-dienste.moin.schule/v1/lizenz-info/9230294b-68da-4f4f-aa63-ad9040122aa7" xmlns="http://www.imsglobal.org/xsd/imslticc_v1p0">
    <metadata>
        <schema>IMS Common Cartridge</schema>
        <schemaversion>1.0.0</schemaversion>
    </metadata>
    <organizations>
        <organization identifier="scx" structure="rooted-hierarchy">
            <item identifier="https://www.bildungslogin-test.de/api/external/univention/media">
                <item identifier="urn:bilo:medium:123456789" identifierref="903db991-ab4b-40dc-af2b-71fdb0979089">
                    <title>Linear Algebra</title>
                </item>
            </item>
        </organization> 
    </organizations>
    <resources>
        <resource type="imsbasiclti_xmlv1p0" identifier="903db991-ab4b-40dc-af2b-71fdb0979089">
            <cartridge_basiclti_link xmlns:blti="http://www.imsglobal.org/xsd/imsbasiclti_v1p0">
                <blti:title>Linear Algebra</blti:title>
                <blti:launch_url>https://api.scx/medium/1278a045-3690-49d8-80b8-9fae95eae123</blti:launch_url>
                <blti:secure_launch_url>https://api.scx/medium/1278a045-3690-49d8-80b8-9fae95eae123</blti:secure_launch_url>
                <blti:oauth_consumer_key>e4615bef-6942-42a7-ac64-c20143bf738a</blti:oauth_consumer_key>
                <blti:target>iframe</blti:target>
            </cartridge_basiclti_link>
        </resource>
    </resources>
</manifest>
```
Hier ist eine Erläuterung der einzelnen Schlüssel und ihrer Bedeutung innerhalb des Modells:

- **Manifest Identifier**:
  - **ODRL `uid`** wird als **IMS-CC `identifier`** im `<manifest>`-Tag verwendet. Dies dient als eindeutiger Identifikator für das gesamte Paket und spiegelt die spezifische Lizenz-URL wider.

- **Metadata**:
  - Im `<metadata>`-Bereich des IMS-CC wird der Typ des Schemas (`IMS Common Cartridge`) und die Version (`1.0.0`) definiert, was die Verwendung eines etablierten Standards und dessen spezifische Version bestätigt.

- **Organization und Struktur**:
  - Der `<organization>`-Teil in IMS-CC organisiert die Inhalte in einer strukturierten Weise (`rooted-hierarchy`), was in ODRL nicht explizit modelliert wird. Dieser Teil des Mappings hilft, die Inhalte so zu strukturieren, dass sie im Lernmanagementsystem entsprechend dargestellt und verwaltet werden können.

- **Resources**:
  - Der `<resources>`-Bereich stellt die eigentlichen Lernmaterialien und deren Zugriffsmechanismen bereit. In ODRL definierte Berechtigungen, wie `execute`, werden hier genutzt, um spezifische Zugriffsrechte auf digitale Inhalte zu gewähren, was durch die Definition von `launch_url` und `secure_launch_url` umgesetzt wird.

- **Action Mapping**:
  - Aktionen in ODRL, definiert als `permission`, müssen im IMS-CC-Mapping spezifisch umgesetzt werden, um festzulegen, wie auf die Inhalte zugegriffen werden darf. Hier wird die Berechtigung `execute` in Zugriffsrechte auf die Materialien über `blti:launch_url` und `blti:secure_launch_url` übersetzt.

- **Verlinkungen und Zugriffspunkte**:
  - `blti:launch_url` und `blti:secure_launch_url` im IMS-CC repräsentieren die URLs, über die die Inhalte tatsächlich aufgerufen werden können. Diese URLs stellen die praktische Umsetzung der in ODRL definierten Zugriffsrechte dar.

- **Nutzung von `blti`-Elementen**:
  - Basic LTI (Learning Tools Interoperability) Elemente im IMS-CC, wie `cartridge_basiclti_link`, ermöglichen die Interaktion zwischen Lernmanagement-Systemen und externen Tools, was die technische Umsetzung der ODRL-definierten Lizenzen unterstützt.




## Vergleich


| Attribut ODRL | Attribut JSON | Attribut IMS-CC | Anmerkungen |
|---------------|---------------|-----------------|-------------|
| @context | --- | manifest.xmlns | Dieses Attribut gibt den Namespace an, kann von JSON-LD und XML interpretiert werden. |
| @type | --- | manifest.organizations[].organization.structure | Dieses Attribut gibt den Typen an, kann von JSON-LD und XML interpretiert werden. |
| uid | uid | manifest.identifier | Dieses Attribut führt den eindeutigen Identifier der vorliegenden Policy |
| target | target | manifest.organizations[].organization.item[].item | Dieses Attribut führt alle relevanten Informationen über die Resource (Lernobjekt) |
| target.uid | target.uid | manifest.organizations[].organization.item[].item.identifier | Dieses Attribut führt den eindeutigen Identifier der Resource (Lernobjekt) |
| target.partOf | target.partOf | manifest.organizations[].organization.item.identifier | Dieses Attribut führt den eindeutigen Identifier des Katalogs der Resource (Lernobjekt) |
| permission | permission | manifest.resources[].resource.identifier | Dieses Attribut führt alle relevanten Informationen über die Nutzungsrechte / den Zugriff auf die Resource (Lernobjekt) |
| permission.action | permission.action | manifest.resources[].resource.cartridge_basiclti_link | Dieses Attribut führt die Informationen über erlaubten Arten auf die Resource (Lernobjekt) zuzugreifen; ein `LTI-Launch` ist hierbei gleichzuverstehen mit `execute` |