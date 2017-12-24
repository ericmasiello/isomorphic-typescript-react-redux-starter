// Startup point for the client side application
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';
import Routes from './Routes';
import createStore from '../helpers/createStore';

const axiosInstance = axios.create({
  baseURL: '/api',
});

const store = createStore(
  axiosInstance,
  window.INITIAL_STATE,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
);

export const client = (
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>
);

ReactDOM.hydrate(
  client,
  document.querySelector('#root'),
);
