import * as React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store, createStore } from 'redux';
import appDefault from '../App';
import { renderRoutes, RouteConfig } from 'react-router-config';
import { fetchCurrentUser } from '../actions';
jest.mock('react-router-config');
jest.mock('../actions/');

const mockRoute = {
  routes: (['route 1', 'route 2', 'route 3'] as RouteConfig[]),
};

const mockAction = {
  type: 'testing',
  payload: 'current user',
};

const mockFetchCurrentUser = jest.fn(() => mockAction);
(fetchCurrentUser as any).mockImplementation(mockFetchCurrentUser);

const {
  loadData,
  component: App,
} = appDefault;

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
    mount(
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
  test('should call dispatch with the result of fetchCurrentUser', () => {
    const store = {} as Store<Auth>;
    store.dispatch = jest.fn();

    loadData(store);
    expect(store.dispatch).toHaveBeenCalledWith(mockAction);
  });
});
