// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'FPV Scores Documentations',
  tagline: 'Documentations of the FPVScores.com platform and FPV Scores Rotorhazard plugin.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.fpvscores.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'FPVScores', // Usually your GitHub org/user name.
  projectName: 'FPVScores-Documentation', // Usually your repo name.
  //deploymentBranch: 'main'

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
          editUrl:
            'https://github.com/fpvscores/documentation/tree/main/',
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
        title: 'Docs',
        logo: {
          alt: 'FPVScores.com Documentations',
          src: 'img/fpvscores_logo2.png',
        },
        items: [
        
          {to: '/docs/introduction', label: 'Introduction', position: 'left'},
          {to: '/docs/category/pilots', label: 'Pilots', position: 'left'},
          {to: '/docs/category/organisations', label: 'Event Manager', position: 'left'},
          {to: '/docs/category/sync-plugin', label: 'Sync Plugin', position: 'left'},

          {
            href: 'https://github.com/fpvscores',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Create Pilot Profile',
                to: '/docs/introduction',
              },
              {
                label: 'Register Organisation',
                to: '/docs/introduction',
              },
              {
                label: 'Create Event',
                to: '/docs/introduction',
              },
              {
                label: 'Use Rotorhazard Plugin',
                to: '/docs/introduction',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/fpvscores',
              },
              {
                label: 'Instagram',
                href: 'https:/instagram.com/fpvscores',
              },
              {
                label: 'Facebook',
                href: 'https://facebook.com/fpvscores',
              },
              {
                label: 'Discord',
                href: 'https://x.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'FPVScores.com',
                href: 'https://fpvscores.com/',
              },
              {
                label: 'RotorHazard',
                href: 'https://github.com/RotorHazard/RotorHazard',
              },
              {
                label: 'Dutch Drone Racing',
                href: 'https://dutchdroneracing.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} FPVScores.com`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
