import createStore from '../createStore';
import thunk from 'redux-thunk';
import * as express from 'express';
import axios from 'axios';
import * as redux from 'redux';

test('create a store with default state', () => {
  const req = {} as express.Request;
  req.get = jest.fn();

  const store = createStore(req);
  const result: any = store.getState();

  expect(result.users).toHaveLength(0);
  expect(result.admins).toHaveLength(0);
  expect(result.auth).toBe(null);
});

describe('axios instance', () => {

  let originalCreate: any;
  let originalThunkWithExtraArgument: any;
  let originalApplyMiddleware: any;
  const mockAxiosInstaince = jest.fn();

  beforeEach(() => {
    originalApplyMiddleware = redux.applyMiddleware;
    originalThunkWithExtraArgument = thunk.withExtraArgument;
    originalCreate = axios.create;

    (<any>redux).applyMiddleware = jest.fn();
    axios.create = jest.fn(() => mockAxiosInstaince);
    thunk.withExtraArgument = jest.fn();
  });

  afterEach(() => {
    (<any>redux).applyMiddleware = originalApplyMiddleware;
    axios.create = originalCreate;
    thunk.withExtraArgument = originalThunkWithExtraArgument;
  });

  test('should create an axios instance', () => {
    const req = {} as express.Request;
    req.get = jest.fn();

    createStore(req);
    expect(axios.create).toBeCalledWith({
      baseURL: 'http://react-ssr-api.herokuapp.com',
      headers: {
        cookie: '',
      },
    });

    expect(thunk.withExtraArgument).toBeCalledWith(mockAxiosInstaince);
  });

  test('should create an axious instance using the cookie from the request object', () => {
    const req = {} as express.Request;
    req.get = jest.fn(() => 'the cookie');

    createStore(req);
    expect(axios.create).toBeCalledWith({
      baseURL: 'http://react-ssr-api.herokuapp.com',
      headers: {
        cookie: 'the cookie',
      },
    });

    expect(thunk.withExtraArgument).toBeCalledWith(mockAxiosInstaince);
  });
});
