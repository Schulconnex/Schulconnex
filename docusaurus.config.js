// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Schulconnex',
  tagline: 'Schnittstellen von Schulconnex für Dienste und Quellsysteme',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Schulconnex', // Usually your GitHub org/user name.
  projectName: 'Schulconnex', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          docItemComponent: "@theme/ApiItem"
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Schulconnex',
        logo: {
          alt: 'Schulconnex',
          src: 'img/logo.svg',
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
            sidebarId: 'apiDiensteSidebarPaloAlto',
            position: 'left',
            label: 'API Dienste (PaloAlto)',
          },
          {
            type: 'docSidebar',
            sidebarId: 'apiQSSidebarPaloAlto',
            position: 'left',
            label: 'API Quellsysteme (PaloAlto)',
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
            title: 'Dokumentation',
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
            title: 'Extra',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Schulconnex/Schulconnex',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Landesinitiative-21: Schulen in Niedersachsen online e. V.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic", // e.g. "classic" or the plugin-content-docs id
        config: {
          apiDienste: { // is considered the <id> that you will reference in the CLI
            specPath: "static/openapi/api-dienste.yaml", // path or URL to the OpenAPI spec
            outputDir: "docs/schulconnex-api-by-plugin/dienste", // output directory for generated *.mdx and sidebar.js files
            sidebarOptions: {
              groupPathsBy: "tag", // generate a sidebar.js slice that groups operations by tag
            },
          },
          apiQuellsysteme: { // is considered the <id> that you will reference in the CLI
            specPath: "static/openapi/api-qs.yaml", // path or URL to the OpenAPI spec
            outputDir: "docs/schulconnex-api-by-plugin/qs", // output directory for generated *.mdx and sidebar.js files
            sidebarOptions: {
              groupPathsBy: "tag", // generate a sidebar.js slice that groups operations by tag
            },
          }
        }
      },
    ]
  ],
  themes: ["docusaurus-theme-openapi-docs"] // exports ApiItem and ApiDemoPanel
};

export default config;
