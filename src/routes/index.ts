import type { RouteConfig } from 'react-router-config';
import MainLayout from 'layouts/MainLayout';

import { load, redirect } from './utils';

const routes: RouteConfig[] = [
  {
    component: MainLayout,
    routes: [
      {
        path: '/',
        exact: true,
        component: redirect('page1'),
      },
      {
        path: '/page1',
        exact: true,
        component: load('Page1'),
      },
      {
        path: '/page2',
        exact: true,
        component: load('Page2'),
      },
    ],
  },
];

export default routes;
