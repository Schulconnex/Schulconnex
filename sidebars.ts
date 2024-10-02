import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';
import { default as itemsDienste } from './docs/generated/openapi/dienste/sidebar'
import { default as itemsQuellsysteme } from './docs/generated/openapi/quellsysteme/sidebar'

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  specSidebar: [
    'stand-der-bearbeitung',
    'vorbemerkung',
    'einleitung',
    'allgemeines',
    {
      type: 'category',
      label: 'Datenmodell',
      link: {
        type: 'doc',
        id: 'datenmodell/datenmodell',
      },
      items: [
        'datenmodell/datumsformat',
        'datenmodell/organisation',
        'datenmodell/person',
        'datenmodell/personenkontext',
        'datenmodell/personendatensatz',
        'datenmodell/gruppe',
        'datenmodell/gruppenzugehörigkeit',
        'datenmodell/sichtfreigabe',
        'datenmodell/gruppendatensatz',
        'datenmodell/lernperiode',
        'datenmodell/beziehung',
        'datenmodell/anschrift',
        'datenmodell/organisationsbeziehung',
      ],
    },
    {
      type: 'category',
      label: 'Angepasstes Datenmodell',
      link: {
        type: 'doc',
        id: 'angepasstes-datenmodell/angepasstes-datenmodell',
      },
      items: [
        'angepasstes-datenmodell/person',
        'angepasstes-datenmodell/personenkontext',
        'angepasstes-datenmodell/organisation',
        'angepasstes-datenmodell/gruppe',
      ],
    },
    {
      type: 'category',
      label: 'Schnittstellendefinition',
      link: {
        type: 'doc',
        id: 'schnittstellendefinition/schnittstellendefinition',
      },
      items: [
        'schnittstellendefinition/fehlerbehandlung',
        'schnittstellendefinition/validierung',
      ],
    },
    {
      type: 'category',
      label: 'Schnittstellen für Dienste und Quellsysteme',
      link: {
        type: 'doc',
        id: 'schnittstellen/schnittstellen',
      },
      items: [
        'schnittstellen/autorisierung-dienste',
        'schnittstellen/autorisierung-qs',
        'schnittstellen/oidc-claims',
        'schnittstellen/vendor-extensions',
      ],
    },
    'codelisten',
    'glossar',
    {
      type: 'category',
      label: 'English API Notes',
      link: {
        type: 'doc',
        id: 'english-api-notes/english-api-notes',
      },
      items: [
        'english-api-notes/data-models',
        'english-api-notes/code-lists',
      ],
    },
    {
      type: 'category',
      label: 'Praxisleitfaden für die Implementierung',
      link: {
        type: 'doc',
        id: 'praxisleitfaden/praxisleitfaden',
      },
      items: [
        'praxisleitfaden/ablauf-synchronisation',
        'praxisleitfaden/ablauf-schuljahrwechsel',
        'praxisleitfaden/rolle-in-organisation',
        'praxisleitfaden/ablauf-löschen',
      ],
    },
  ],

  apiDiensteSidebarOpenAPIDocs: [
    {
      type: 'category',
      label: 'API Dienste',
      link: {
        type: 'doc',
        id: 'generated/openapi/dienste/schulconnex',
      },
      items: [
        {
          type: "category",
          label: "Organisationen",
          items: [
            {
              type: "doc",
              id: "generated/openapi/dienste/read-organisationen-info",
              label: "/organisationen-info",
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
              id: "generated/openapi/dienste/read-person-info",
              label: "/person-info",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "generated/openapi/dienste/read-personen-info",
              label: "/personen-info",
              className: "api-method get",
            },
          ],
        },
      ],
    },
  ],

  apiQuellsystemeSidebarOpenAPIDocs: [
    {
      type: 'category',
      label: 'API Quellsysteme',
      link: {
        type: 'doc',
        id: 'generated/openapi/quellsysteme/schulconnex',
      },
      items: [
        {
          type: "category",
          label: "Organisationen",
          items: [
            {
              type: "doc",
              id: "generated/openapi/quellsysteme/read-organisationen",
              label: "/organisationen",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "generated/openapi/quellsysteme/read-organisation-id",
              label: "/organisationen/\u200B:id",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "generated/openapi/quellsysteme/read-organisation-id-organisationsbeziehungen",
              label: "/organisationen/\u200B:id/\u200Borganisationsbeziehungen",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "generated/openapi/quellsysteme/read-organisation-info",
              label: "/organisation-info",
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
              label: "/personen",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "generated/openapi/quellsysteme/create-person",
              label: "/personen",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "generated/openapi/quellsysteme/read-person-id",
              label: "/personen/\u200B:id",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "generated/openapi/quellsysteme/update-person-id",
              label: "/personen/\u200B:id",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "generated/openapi/quellsysteme/delete-person-id",
              label: "/personen/\u200B:id",
              className: "api-method delete",
            },
            {
              type: "doc",
              id: "generated/openapi/quellsysteme/read-person-id-personenkontexte",
              label: "/personen/\u200B:id/\u200Bpersonenkontexte",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "generated/openapi/quellsysteme/create-person-id-personenkontext",
              label: "/personen/\u200B:id/\u200Bpersonenkontexte",
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
              label: "/personen/\u200B:id/\u200Bpersonenkontexte",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "generated/openapi/quellsysteme/create-person-id-personenkontext",
              label: "/personen/\u200B:id/\u200Bpersonenkontexte",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "generated/openapi/quellsysteme/read-personenkontexte",
              label: "/personenkontexte",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "generated/openapi/quellsysteme/read-personenkontext-id",
              label: "/personenkontexte/\u200B:id",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "generated/openapi/quellsysteme/update-personenkontext-id",
              label: "/personenkontexte/\u200B:id",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "generated/openapi/quellsysteme/delete-personenkontext-id",
              label: "/personenkontexte/\u200B:id",
              className: "api-method delete",
            },
            {
              type: "doc",
              id: "generated/openapi/quellsysteme/create-personenkontext-id-beziehung",
              label: "/personenkontexte/\u200B:id/\u200Bbeziehungen",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "generated/openapi/quellsysteme/read-personenkontext-id-beziehungen",
              label: "/personenkontexte/\u200B:id/\u200Bbeziehungen",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "generated/openapi/quellsysteme/create-personenkontext-id-sichtfreigabe",
              label: "/personenkontexte/\u200B:id/\u200Bsichtfreigaben",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "generated/openapi/quellsysteme/read-personenkontext-id-sichtfreigaben",
              label: "/personenkontexte/\u200B:id/\u200Bsichtfreigaben",
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
              label: "/personenkontexte/\u200B:id/\u200Bbeziehungen",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "generated/openapi/quellsysteme/read-personenkontext-id-beziehungen",
              label: "/personenkontexte/\u200B:id/\u200Bbeziehungen",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "generated/openapi/quellsysteme/read-beziehung-id",
              label: "/beziehungen/\u200B:id",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "generated/openapi/quellsysteme/delete-beziehung-id",
              label: "/beziehungen/\u200B:id",
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
              label: "/gruppen",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "generated/openapi/quellsysteme/read-gruppendatensaetze",
              label: "/gruppen",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "generated/openapi/quellsysteme/read-gruppe-id",
              label: "/gruppen/\u200B:id",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "generated/openapi/quellsysteme/update-gruppe-id",
              label: "/gruppen/\u200B:id",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "generated/openapi/quellsysteme/delete-gruppe-id",
              label: "/gruppen/\u200B:id",
              className: "api-method delete",
            },
            {
              type: "doc",
              id: "generated/openapi/quellsysteme/create-gruppe-id-gruppenzugehoerigkeit",
              label: "/gruppen/\u200B:id/\u200Bgruppenzugehoerigkeiten",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "generated/openapi/quellsysteme/read-gruppe-id-gruppenzugehoerigkeiten",
              label: "/gruppen/\u200B:id/\u200Bgruppenzugehoerigkeiten",
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
              label: "/gruppen/\u200B:id/\u200Bgruppenzugehoerigkeiten",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "generated/openapi/quellsysteme/read-gruppe-id-gruppenzugehoerigkeiten",
              label: "/gruppen/\u200B:id/\u200Bgruppenzugehoerigkeiten",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "generated/openapi/quellsysteme/read-gruppenzugehoerigkeiten",
              label: "/gruppenzugehoerigkeiten",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "generated/openapi/quellsysteme/read-gruppenzugehoerigkeit-id",
              label: "/gruppenzugehoerigkeiten/\u200B:id",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "generated/openapi/quellsysteme/update-gruppenzugehoerigkeit-id",
              label: "/gruppenzugehoerigkeiten/\u200B:id",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "generated/openapi/quellsysteme/delete-gruppenzugehoerigkeit-id",
              label: "/gruppenzugehoerigkeiten/\u200B:id",
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
              label: "/personenkontexte/\u200B:id/\u200Bsichtfreigaben",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "generated/openapi/quellsysteme/read-personenkontext-id-sichtfreigaben",
              label: "/personenkontexte/\u200B:id/\u200Bsichtfreigaben",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "generated/openapi/quellsysteme/delete-sichtfreigabe-id",
              label: "/sichtfreigaben/\u200B:id",
              className: "api-method delete",
            },
          ],
        },
      ],
    },
  ],
};

export default sidebars;
