import * as React from 'react';
import { renderRoutes, RouteConfig } from 'react-router-config';
import { Store } from 'redux';
import { injectGlobal } from 'styled-components';
import Header from './components/Header';
import { fetchCurrentUser } from './actions';
import base from './styles/base';
import helpers from './styles/helpers';

injectGlobal`
  ${base}
  ${helpers}
`;

interface Props {
  route: {
    routes: RouteConfig[];
  };
}

const App: React.SFC<Props> = ({ route }) => {
  return (
    <div>
      <Header />
      {renderRoutes(route.routes)}
    </div>
  );
};

export default {
  component: App,
  loadData: ({ dispatch }: Store<Auth>) => {
    return dispatch(fetchCurrentUser());
  },
};
