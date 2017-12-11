import { Reducer } from 'redux';
import { FETCH_CURRENT_USER } from '../actions';

const authReducers: Reducer<Auth> = (state = null, action) => {
  if (action.type === FETCH_CURRENT_USER && !action.error) {
    return action.payload.data || false;
  }
  return state;
};

export default authReducers;
