import * as React from 'react';
import App from './App';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';
import NotFoundPage from './pages/NotFoundPage';
import AdminsListPage from './pages/AdminsListPage';
import { RouteConfig } from 'react-router-config';

interface RouteConfigWithLoadData extends RouteConfig {
  component: React.ComponentType<any>;
  loadData?: (store: any) => any;
  routes?: RouteConfigWithLoadData[];
}

const Routes: RouteConfigWithLoadData[] = [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true,
      },
      {
        ...AdminsListPage,
        path: '/admins'
      },
      {
        ...UsersListPage,
        path: '/users'
      },
      {
        ...NotFoundPage,
      }
    ]
  }
];

export default Routes;
