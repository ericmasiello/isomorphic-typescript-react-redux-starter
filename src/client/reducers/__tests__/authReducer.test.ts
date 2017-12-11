import { FETCH_CURRENT_USER } from '../../actions';
import authReducer from '../authReducer';

const defaultState = null;
const newAuth: AuthToken = { googleId: '123' };

test('should return payload data when non-error matching action is passed', () => {
  const result = authReducer(defaultState, {
    type: FETCH_CURRENT_USER,
    payload: {
      data: newAuth,
    },
  });

  expect(result).toEqual(newAuth);
});

test('should return false when token is not set on payload', () => {
  const result = authReducer(defaultState, {
    type: FETCH_CURRENT_USER,
    payload: {
      data: null,
    },
  });

  expect(result).toEqual(false);
});

test('should return default state when errored matching action is passed', () => {
  const result = authReducer(defaultState, {
    type: FETCH_CURRENT_USER,
    payload: {
      data: newAuth,
    },
    error: true,
  });

  expect(result).toEqual(defaultState);
});

test('should return default state for non matching action type', () => {
  const result = authReducer(defaultState, {
    type: 'foo',
  });

  expect(result).toEqual(defaultState);
});
