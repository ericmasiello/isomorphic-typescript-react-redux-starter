import * as React from 'react';
import { renderRoutes } from 'react-router-config';
import { RouteConfig } from 'react-router-config';
import Header from './components/Header';
import { fetchCurrentUser } from './actions';
import { Store } from 'redux';

interface Props {
  route: {
    routes: any
  }
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
  loadData: ({ dispatch }: Store<any>) => {
    return dispatch(fetchCurrentUser());
  }
};
