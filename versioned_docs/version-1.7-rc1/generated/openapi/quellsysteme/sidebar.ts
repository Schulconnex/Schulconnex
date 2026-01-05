import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "generated/openapi/quellsysteme/schulconnex",
    },
    {
      type: "category",
      label: "Organisationen",
      items: [
        {
          type: "doc",
          id: "generated/openapi/quellsysteme/read-organisationen",
          label: "Auflistung von Organisationen",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "generated/openapi/quellsysteme/read-organisation-id",
          label: "Organisation zur angeforderten ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "generated/openapi/quellsysteme/read-organisation-id-organisationsbeziehungen",
          label: "Auflistung von Organisationsbeziehungen",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "generated/openapi/quellsysteme/read-organisation-info",
          label: "Informationen zu der Organisation des Quellsystems",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Personen",
      items: [
        {
          type: "doc",
          id: "generated/openapi/quellsysteme/read-personen",
          label: "Personendatensätze des Quellsystemanbieters",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "generated/openapi/quellsysteme/create-person",
          label: "Erstellen eines Personendatensatzes",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "generated/openapi/quellsysteme/read-person-id",
          label: "Personendatensatz zur angeforderten ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "generated/openapi/quellsysteme/update-person-id",
          label: "Aktualisiert den Personendatensatz der angegebenen ID",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "generated/openapi/quellsysteme/delete-person-id",
          label: "Löscht die Person zur angeforderten ID",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "generated/openapi/quellsysteme/read-person-id-personenkontexte",
          label: "Personenkontexte zur angeforderten ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "generated/openapi/quellsysteme/create-person-id-personenkontext",
          label: "Erstellen eines Personenkontexts zu einem bestimmten Personendatensatz",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Personenkontexte",
      items: [
        {
          type: "doc",
          id: "generated/openapi/quellsysteme/read-person-id-personenkontexte",
          label: "Personenkontexte zur angeforderten ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "generated/openapi/quellsysteme/create-person-id-personenkontext",
          label: "Erstellen eines Personenkontexts zu einem bestimmten Personendatensatz",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "generated/openapi/quellsysteme/read-personenkontexte",
          label: "Auflistung von Personenkontexten",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "generated/openapi/quellsysteme/read-personenkontext-id",
          label: "Personenkontext zur angeforderten ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "generated/openapi/quellsysteme/update-personenkontext-id",
          label: "Aktualisiert den Personenkontext der angegebenen ID",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "generated/openapi/quellsysteme/delete-personenkontext-id",
          label: "Löscht den Personenkontext zur angeforderten ID",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "generated/openapi/quellsysteme/create-personenkontext-id-beziehung",
          label: "Erstellen einer Beziehung",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "generated/openapi/quellsysteme/read-personenkontext-id-beziehungen",
          label: "Auflistung von Beziehungen",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "generated/openapi/quellsysteme/create-personenkontext-id-sichtfreigabe",
          label: "Erstellen einer Sichtfreigabe",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "generated/openapi/quellsysteme/read-personenkontext-id-sichtfreigaben",
          label: "Auflistung von Sichtfreigaben",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Beziehungen",
      items: [
        {
          type: "doc",
          id: "generated/openapi/quellsysteme/create-personenkontext-id-beziehung",
          label: "Erstellen einer Beziehung",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "generated/openapi/quellsysteme/read-personenkontext-id-beziehungen",
          label: "Auflistung von Beziehungen",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "generated/openapi/quellsysteme/read-beziehung-id",
          label: "Beziehung zur angeforderten ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "generated/openapi/quellsysteme/delete-beziehung-id",
          label: "Löscht die Beziehung zur angeforderten ID",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Gruppen",
      items: [
        {
          type: "doc",
          id: "generated/openapi/quellsysteme/create-gruppe",
          label: "Erstellen einer Gruppe",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "generated/openapi/quellsysteme/read-gruppendatensaetze",
          label: "Gruppendatensätzen des Quellsystemanbieters",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "generated/openapi/quellsysteme/read-gruppe-id",
          label: "Gruppe zur angeforderten ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "generated/openapi/quellsysteme/update-gruppe-id",
          label: "Aktualisiert die Gruppe der angegebenen ID",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "generated/openapi/quellsysteme/delete-gruppe-id",
          label: "Löscht die Gruppe zur angeforderten ID",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "generated/openapi/quellsysteme/create-gruppe-id-gruppenzugehoerigkeit",
          label: "Erstellen einer Gruppenzugehörigkeit",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "generated/openapi/quellsysteme/read-gruppe-id-gruppenzugehoerigkeiten",
          label: "Auflistung von Gruppenzugehörigkeiten zur Gruppe",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Gruppenzugehörigkeiten",
      items: [
        {
          type: "doc",
          id: "generated/openapi/quellsysteme/create-gruppe-id-gruppenzugehoerigkeit",
          label: "Erstellen einer Gruppenzugehörigkeit",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "generated/openapi/quellsysteme/read-gruppe-id-gruppenzugehoerigkeiten",
          label: "Auflistung von Gruppenzugehörigkeiten zur Gruppe",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "generated/openapi/quellsysteme/read-gruppenzugehoerigkeiten",
          label: "Auflistung aller Gruppenzugehörigkeiten",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "generated/openapi/quellsysteme/read-gruppenzugehoerigkeit-id",
          label: "Gruppenzugehörigkeit zur angeforderten ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "generated/openapi/quellsysteme/update-gruppenzugehoerigkeit-id",
          label: "Aktualisiert die Gruppenzugehörigkeit der angegebenen ID",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "generated/openapi/quellsysteme/delete-gruppenzugehoerigkeit-id",
          label: "Löscht die Gruppenzugehörigkeit zur angeforderten ID",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Sichtfreigaben",
      items: [
        {
          type: "doc",
          id: "generated/openapi/quellsysteme/create-personenkontext-id-sichtfreigabe",
          label: "Erstellen einer Sichtfreigabe",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "generated/openapi/quellsysteme/read-personenkontext-id-sichtfreigaben",
          label: "Auflistung von Sichtfreigaben",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "generated/openapi/quellsysteme/delete-sichtfreigabe-id",
          label: "Freigaben für Personenkontexte löschen",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
