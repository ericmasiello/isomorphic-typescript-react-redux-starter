import { Reducer } from 'redux';
import { FETCH_USERS } from '../actions';

const usersReducer: Reducer<User[]> = (state = [], action) => {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload.data;
    default:
      return state;
  }
};

export default usersReducer;
