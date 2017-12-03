import * as actions from '../index';
import { AxiosInstance } from 'axios';
import { Dispatch } from 'redux';

const mockUsers: User[] = [{ id: '123', name: 'Eric' }];
const error = new Error('There was an error :(');
let dispatch: any;
let getState: any;
let api: any;

describe('fetchUsers', () => {
  beforeEach(() => {
    dispatch = jest.fn() as Dispatch<User[]>;
    getState = jest.fn() as () => User[];
    api = {} as AxiosInstance;
  });

  test('should dispatch an action when data is returned', () => {
    api.get = jest.fn(() => Promise.resolve(mockUsers));

    return actions.fetchUsers()(dispatch, getState, api).then(() => {
      expect(dispatch).toBeCalledWith({
        type: actions.FETCH_USERS,
        payload: mockUsers,
      });
    });
  });

  test('should dispatch an error when api cannot get data', () => {
    api.get = jest.fn(() => Promise.reject(error));

    return actions.fetchUsers()(dispatch, getState, api).then(() => {
      expect(dispatch).toBeCalledWith({
        type: actions.FETCH_USERS,
        payload: error,
        error: true,
      });
    });
  });

  test('should call /users endpoint', () => {
    api.get = jest.fn(() => Promise.resolve());

    return actions.fetchUsers()(dispatch, getState, api).then(() => {
      expect(api.get).toBeCalledWith('/users');
    });
  });
});

describe('fetchAdmins', () => {
  beforeEach(() => {
    dispatch = jest.fn() as Dispatch<User[]>;
    getState = jest.fn() as () => User[];
    api = {} as AxiosInstance;
  });

  test('should dispatch an action when data is returned', () => {
    api.get = jest.fn(() => Promise.resolve(mockUsers));

    return actions.fetchAdmins()(dispatch, getState, api).then(() => {
      expect(dispatch).toBeCalledWith({
        type: actions.FETCH_ADMINS,
        payload: mockUsers,
      });
    });
  });

  test('should dispatch an error when api cannot get data', () => {
    api.get = jest.fn(() => Promise.reject(error));

    return actions.fetchAdmins()(dispatch, getState, api).then(() => {
      expect(dispatch).toBeCalledWith({
        type: actions.FETCH_ADMINS,
        payload: error,
        error: true,
      });
    });
  });

  test('should call /admins endpoint', () => {
    api.get = jest.fn(() => Promise.resolve());

    return actions.fetchAdmins()(dispatch, getState, api).then(() => {
      expect(api.get).toBeCalledWith('/admins');
    });
  });
});
