import { FETCH_USERS } from '../actions';

interface Action extends ReduxAction {
  payload: {
    data: User[];
  }
}

export default (state: User[] = [], action: Action) => {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload.data;
    default:
      return state;
  }
};
