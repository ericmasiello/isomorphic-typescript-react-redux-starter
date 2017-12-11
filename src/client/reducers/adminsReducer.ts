import { Reducer } from 'redux';
import { FETCH_ADMINS } from '../actions';

const adminsReducer: Reducer<User[]> = (state = [], action) => {
  if (action.type === FETCH_ADMINS && !action.error) {
    return action.payload.data;
  }
  return state;
};

export default adminsReducer;
