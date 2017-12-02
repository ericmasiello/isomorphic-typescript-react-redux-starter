import { combineReducers, Reducer } from 'redux';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import adminsReducer from './adminsReducer';

export default <Reducer<AppState>>combineReducers({
  users: usersReducer,
  auth: authReducer,
  admins: adminsReducer
});
