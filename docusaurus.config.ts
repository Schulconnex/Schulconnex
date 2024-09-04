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

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

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
              label: 'Version 1.5-rc1',
              path: '1.5',
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
            label: 'Spezifikation',
          },
          {
            type: 'docSidebar',
            sidebarId: 'apiDiensteSidebarOpenAPIDocs',
            position: 'left',
            label: 'API Dienste',
          },
          {
            type: 'docSidebar',
            sidebarId: 'apiQuellsystemeSidebarOpenAPIDocs',
            position: 'left',
            label: 'API Quellsysteme',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true,
          },
          {
            href: 'https://github.com/Schulconnex/Schulconnex',
            label: 'GitHub',
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
                to: '/docs/einleitung',
              },
              {
                label: 'Allgemeines',
                to: '/docs/allgemeines',
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
                to: '/docs/footer/impressum',
              },
              {
                label: 'Datenschutz',
                to: '/docs/footer/datenschutz',
              },
              {
                label: 'Barrierefreiheit',
                to: '/docs/footer/barrierefreiheit',
              }
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Niedersächsisches Kultusministerium`,
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
          },
          apiQuellsysteme: { // is considered the <id> that you will reference in the CLI
            specPath: "src/openapi/api-qs.yaml", // path or URL to the OpenAPI spec
            outputDir: "docs/generated/openapi/quellsysteme", // output directory for generated *.mdx and sidebar.js files
            sidebarOptions: {
              groupPathsBy: "tag", // generate a sidebar.js slice that groups operations by tag
            },
          }
        }
      },
    ]
  ],
};

export default config;
