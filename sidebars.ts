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
      items: itemsDienste.splice(1),
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
      items: itemsQuellsysteme.splice(1),
    },
  ],
};

export default sidebars;
