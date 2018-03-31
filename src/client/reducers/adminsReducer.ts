import { Reducer } from 'redux';
import { FETCH_ADMINS } from '../actions';

const adminsReducer: Reducer<User[]> = (state = [], action) => {
  switch (action.type) {
    case FETCH_ADMINS:
      return action.payload.data;
    default:
      return state;
  }
}

export default adminsReducer;
