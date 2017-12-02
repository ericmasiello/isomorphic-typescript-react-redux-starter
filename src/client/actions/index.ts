import { ThunkAction } from 'redux-thunk';
import { AxiosInstance } from 'axios';

type ThunkActionCreator<S> = () => ThunkAction<Promise<any>, S, AxiosInstance>;

export const FETCH_USERS = 'fetch_users';
export const fetchUsers: ThunkActionCreator<User[]> = () => async (dispatch, getState, api) => {
  const res = await api.get('/users');

  dispatch({
    type: FETCH_USERS,
    payload: res
  });
};

export const FETCH_CURRENT_USER = 'fetch_current_user';
export const fetchCurrentUser: ThunkActionCreator<Auth> = () => async (dispatch, getState, api) => {
  const res = await api.get('/current_user');

  dispatch({
    type: FETCH_CURRENT_USER,
    payload: res
  });
};

export const FETCH_ADMINS = 'fetch_admins';
export const fetchAdmins: ThunkActionCreator<User[]> = () => async (dispatch, getState, api) => {
  const res = await api.get('/admins');

  dispatch({
    type: FETCH_ADMINS,
    payload: res
  });
};
