import { FETCH_CURRENT_USER } from '../actions';

interface Action extends ReduxAction {
  payload: {
    data: AuthToken;
  }
}

export default function(state: Auth = null, action: Action) {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return action.payload.data || false;
    default:
      return state;
  }
}
