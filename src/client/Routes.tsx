import * as React from 'react';
import App from './App';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';
import NotFoundPage from './pages/NotFoundPage';
import AdminsListPage from './pages/AdminsListPage';
import { RouteConfig } from 'react-router-config';

const Routes: RouteConfig[] = [
  {
    component: (App.component as React.ComponentType<{}>),
    routes: [
      {
        component: (HomePage.component as React.ComponentType<{}>),
        path: '/',
        exact: true
      },
      {
        component: (AdminsListPage.component as React.ComponentType<{}>),
        path: '/admins'
      },
      {
        component: (UsersListPage.component as React.ComponentType<{}>),
        path: '/users'
      },
      {
        component: (NotFoundPage.component as React.ComponentType<{}>),
      }
    ]
  }
];

export default Routes;
