import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Schulconnex',
  tagline: 'Schnittstellen für Dienste und Quellsysteme',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://schulconnex.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Schulconnex/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'schulconnex.github.io', // Usually your GitHub org/user name.
  projectName: 'schulconnex', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },

  markdown: {
    mermaid: true,
    remarkRehypeOptions: {
      footnoteLabel: 'Fußnoten',
    },
  },

  themes: [
    '@docusaurus/theme-mermaid',
    'docusaurus-theme-openapi-docs'
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          lastVersion: 'current',
          versions: {
            current: {
              label: 'Version 1.5.1',
              // path: '1.5',
            },
          },
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          docItemComponent: "@theme/ApiItem",
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig:
    {
      navbar: {
        title: 'Schulconnex',
        logo: {
          alt: 'Schulconnex',
          src: 'img/logo.svg',
          srcDark: 'img/logo_dark.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'specSidebar',
            position: 'left',
            label: 'Allgemeines',
          },
          {
            type: 'dropdown',
            label: 'Dienste',
            position: 'left',
            items: [
              {
                type: 'doc',
                docId: 'schnelleinstieg-dienste',
                label: 'Schnelleinstieg',
              },
              {
                type: 'docSidebar',
                sidebarId: 'spezDiensteSidebar',
                label: 'Spezifikation',
              },
              {
                type: 'docSidebar',
                sidebarId: 'apiDiensteSidebarOpenAPIDocs',
                label: 'API Dienste',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Quellsysteme',
            position: 'left',
            items: [
              {
                type: 'doc',
                docId: 'schnelleinstieg-qs',
                label: 'Schnelleinstieg',
              },
              {
                type: 'docSidebar',
                sidebarId: 'spezQuellsystemeSidebar',
                label: 'Spezifikation',
              },
              {
                type: 'docSidebar',
                sidebarId: 'apiQuellsystemeSidebarOpenAPIDocs',
                label: 'API Quellsysteme',
              }
            ],
          },
          {
            type: 'dropdown',
            label: 'Nutzungsrechte',
            position: 'left',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'spezPoliciesSidebar',
                label: 'Spezifikation',
              },
              {
                type: 'docSidebar',
                sidebarId: 'apiPoliciesSidebarOpenAPIDocs',
                label: 'API Nutzungsrechte',
              },
            ],
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true,
          },
          {
            href: 'https://github.com/Schulconnex/Schulconnex/issues',
            label: 'Issues',
            position: 'right',
          },
          {
            href: 'https://github.com/Schulconnex/Schulconnex',
            html: '<svg height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" version="1.1" data-view-component="true" class="octicon octicon-mark-github v-align-middle"><path d="M12 1C5.9225 1 1 5.9225 1 12C1 16.8675 4.14875 20.9787 8.52125 22.4362C9.07125 22.5325 9.2775 22.2025 9.2775 21.9137C9.2775 21.6525 9.26375 20.7862 9.26375 19.865C6.5 20.3737 5.785 19.1912 5.565 18.5725C5.44125 18.2562 4.905 17.28 4.4375 17.0187C4.0525 16.8125 3.5025 16.3037 4.42375 16.29C5.29 16.2762 5.90875 17.0875 6.115 17.4175C7.105 19.0812 8.68625 18.6137 9.31875 18.325C9.415 17.61 9.70375 17.1287 10.02 16.8537C7.5725 16.5787 5.015 15.63 5.015 11.4225C5.015 10.2262 5.44125 9.23625 6.1425 8.46625C6.0325 8.19125 5.6475 7.06375 6.2525 5.55125C6.2525 5.55125 7.17375 5.2625 9.2775 6.67875C10.1575 6.43125 11.0925 6.3075 12.0275 6.3075C12.9625 6.3075 13.8975 6.43125 14.7775 6.67875C16.8813 5.24875 17.8025 5.55125 17.8025 5.55125C18.4075 7.06375 18.0225 8.19125 17.9125 8.46625C18.6138 9.23625 19.04 10.2125 19.04 11.4225C19.04 15.6437 16.4688 16.5787 14.0213 16.8537C14.42 17.1975 14.7638 17.8575 14.7638 18.8887C14.7638 20.36 14.75 21.5425 14.75 21.9137C14.75 22.2025 14.9563 22.5462 15.5063 22.4362C19.8513 20.9787 23 16.8537 23 12C23 5.9225 18.0775 1 12 1Z"></path></svg>',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Schulconnex',
            items: [
              {
                label: 'Einleitung',
                to: `docs/einleitung`,
              },
              {
                label: 'Allgemeines',
                to: `docs/allgemeines`,
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Schulconnex/Schulconnex',
              },
            ],
          },
          {
            title: 'Rechtliches',
            items: [
              {
                label: 'Impressum',
                to: `docs/footer/impressum`,
              },
              {
                label: 'Datenschutz',
                to: `docs/footer/datenschutz`,
              },
              {
                label: 'Barrierefreiheit',
                to: `docs/footer/barrierefreiheit`,
              }
            ],
          }
        ],
        copyright: '<a href=https://creativecommons.org/licenses/by-nd/4.0/legalcode target=_blank>CC BY-ND 4.0</a>',
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      mermaid: {
        options: {
          mirrorActors: false,
        },
      },
    }  satisfies Preset.ThemeConfig,

    plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic", // e.g. "classic" or the plugin-content-docs id
        config: {
          apiDienste: { // is considered the <id> that you will reference in the CLI
            specPath: "src/openapi/api-dienste.yaml", // path or URL to the OpenAPI spec
            outputDir: "docs/generated/openapi/dienste", // output directory for generated *.mdx and sidebar.js files
            sidebarOptions: {
              groupPathsBy: "tag", // generate a sidebar.js slice that groups operations by tag
            },
            template: 'src/generators/markdown/template.mustache',
          },
          apiQuellsysteme: { // is considered the <id> that you will reference in the CLI
            specPath: "src/openapi/api-qs.yaml", // path or URL to the OpenAPI spec
            outputDir: "docs/generated/openapi/quellsysteme", // output directory for generated *.mdx and sidebar.js files
            sidebarOptions: {
              groupPathsBy: "tag", // generate a sidebar.js slice that groups operations by tag
            },
            template: 'src/generators/markdown/template.mustache',
          },
          apiPolicies: { // is considered the <id> that you will reference in the CLI
            specPath: "src/openapi/api-policies.yaml", // path or URL to the OpenAPI spec
            outputDir: "docs/generated/openapi/policies", // output directory for generated *.mdx and sidebar.js files
            sidebarOptions: {
              groupPathsBy: "tag", // generate a sidebar.js slice that groups operations by tag
            },
            template: 'src/generators/markdown/template.mustache',
          },
        }
      },
    ]
  ],
};

export default config;
