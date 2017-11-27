import { Reducer } from 'redux';
import { FETCH_CURRENT_USER } from '../actions';

const authReducers: Reducer<Auth> = (state = null, action) => {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      console.log('FETCH_CURRENT_USER', action);
      return action.payload.data || false;
    default:
      return state;
  }
};

export default authReducers;
