import { fetchUsers, FETCH_USERS } from '../index';
import { AxiosInstance } from 'axios';
import { Dispatch } from 'redux';

describe('fetchUsers', () => {
  const mockUsers: User[] = [{ id: '123', name: 'Eric' }];
  const error = new Error('There was an error :(');
  let dispatch: any;
  let getState: any;
  let api: any;

  beforeEach(() => {
    dispatch = jest.fn() as Dispatch<User[]>;
    getState = jest.fn() as () => User[];
    api = {} as AxiosInstance;
  });

  test('should dispatch an action when data is returned', () => {
    api.get = jest.fn(() => Promise.resolve(mockUsers));

    return fetchUsers()(dispatch, getState, api).then(() => {
      expect(dispatch).toBeCalledWith({
        type: FETCH_USERS,
        payload: mockUsers,
      });
    });
  });

  test('should dispatch an error when api cannot get data', () => {
    api.get = jest.fn(() => Promise.reject(error));

    return fetchUsers()(dispatch, getState, api).then(() => {
      expect(dispatch).toBeCalledWith({
        type: FETCH_USERS,
        payload: error,
        error: true,
      });
    });
  });
});
