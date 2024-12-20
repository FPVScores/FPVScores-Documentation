import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'da6'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '347'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'b00'),
            routes: [
              {
                path: '/docs/category/organisations',
                component: ComponentCreator('/docs/category/organisations', '6a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/pilots',
                component: ComponentCreator('/docs/category/pilots', '997'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/sync-plugin',
                component: ComponentCreator('/docs/category/sync-plugin', 'a52'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/introduction',
                component: ComponentCreator('/docs/introduction', 'f7d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/organisations/create-organisation',
                component: ComponentCreator('/docs/organisations/create-organisation', 'c17'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/organisations/locations',
                component: ComponentCreator('/docs/organisations/locations', 'e51'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/organisations/organisation-settings',
                component: ComponentCreator('/docs/organisations/organisation-settings', 'bd8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/pilots/change-avatar',
                component: ComponentCreator('/docs/pilots/change-avatar', '428'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/pilots/create-account',
                component: ComponentCreator('/docs/pilots/create-account', 'acf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/pilots/pilot-card',
                component: ComponentCreator('/docs/pilots/pilot-card', '127'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/pilots/set-pilot-osd',
                component: ComponentCreator('/docs/pilots/set-pilot-osd', 'b2b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sync-plugin/install',
                component: ComponentCreator('/docs/sync-plugin/install', 'ee8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sync-plugin/settings',
                component: ComponentCreator('/docs/sync-plugin/settings', '05a'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
