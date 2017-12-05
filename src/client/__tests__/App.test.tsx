import * as React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appDefault, { App } from '../App';
import { renderRoutes, RouteConfig } from 'react-router-config';
jest.mock('react-router-config');

const mockRoute = {
  routes: (['route 1', 'route 2', 'route 3'] as RouteConfig[]),
};

const storeMocker = () => {
  const mockReducer = (state: any = {}) => state;
  return createStore(mockReducer);
};

describe('App', () => {
  test('should render', () => {
    const wrapper = mount(
      <Provider store={storeMocker()}>
        <BrowserRouter>
          <App route={mockRoute} />
        </BrowserRouter>
      </Provider>,
    );
    expect(wrapper).toHaveLength(1);
  });

  test('should call renderRoutes with route list', () => {
    const wrapper = mount(
      <Provider store={storeMocker()}>
        <BrowserRouter>
          <App route={mockRoute} />
        </BrowserRouter>
      </Provider>,
    );
    expect(renderRoutes).toBeCalledWith(mockRoute.routes);
  });
});

describe('loadData', () => {
  // TODO...
});

describe('ConnectedApp', () => {
  // TODO...
});
