import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '78b'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '557'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '2c5'),
            routes: [
              {
                path: '/docs/category/event-manager',
                component: ComponentCreator('/docs/category/event-manager', 'db7'),
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
                path: '/docs/fpvscores-event-manager/add-location',
                component: ComponentCreator('/docs/fpvscores-event-manager/add-location', 'bfa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fpvscores-event-manager/create-organisation',
                component: ComponentCreator('/docs/fpvscores-event-manager/create-organisation', '145'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fpvscores-event-manager/upload-logo',
                component: ComponentCreator('/docs/fpvscores-event-manager/upload-logo', 'faf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fpvscores-sync-plugin/install',
                component: ComponentCreator('/docs/fpvscores-sync-plugin/install', 'c99'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fpvscores-sync-plugin/settings',
                component: ComponentCreator('/docs/fpvscores-sync-plugin/settings', '931'),
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
