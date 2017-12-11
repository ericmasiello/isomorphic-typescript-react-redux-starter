import { ThunkActionCreator } from '../../types.d';
import { dispatcher } from '../../helpers/actions';

export const FETCH_USERS = 'fetch_users';
export const FETCH_CURRENT_USER = 'fetch_current_user';
export const FETCH_ADMINS = 'fetch_admins';

export const fetchUsers: ThunkActionCreator<User[]> =
  () => async (dispatch, getState, api) =>
  dispatcher<User[]>(dispatch, FETCH_USERS)(api.get('/users'));

export const fetchCurrentUser: ThunkActionCreator<Auth> =
  () => async (dispatch, getState, api) =>
  dispatcher<Auth[]>(dispatch, FETCH_CURRENT_USER)(api.get('/current_user'));

export const fetchAdmins: ThunkActionCreator<User[]> =
  () => async (dispatch, getState, api) =>
  dispatcher<User[]>(dispatch, FETCH_ADMINS)(api.get('/admins'));
