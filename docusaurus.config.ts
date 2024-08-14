import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Schulconnex',
  tagline: 'Schnittstellen für Dienste und Quellsysteme',
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
    defaultLocale: 'de',
    locales: ['de'],
  },

  markdown: {
    mermaid: true,
    remarkRehypeOptions: {
      footnoteLabel: 'Fußnoten',
    }
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'specSidebar',
            position: 'left',
            label: 'Spezifikation',
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
        copyright: `Copyright © ${new Date().getFullYear()} Niedersächsisches Kultusministerium`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      mermaid: {
        options: {
          mirrorActors: false,
        }
      }
    }  satisfies Preset.ThemeConfig,
};

export default config;
