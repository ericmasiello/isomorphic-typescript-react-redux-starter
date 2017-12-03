import { Reducer } from 'redux';
import { FETCH_USERS } from '../actions';

const usersReducer: Reducer<User[]> = (state = [], action) => {
  if (action.type === FETCH_USERS && !action.error) {
    return action.payload.data;
  }
  return state;
};

export default usersReducer;
