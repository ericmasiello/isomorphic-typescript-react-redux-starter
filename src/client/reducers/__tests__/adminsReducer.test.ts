import { FETCH_ADMINS } from '../../actions';
import adminsReducer from '../adminsReducer';

const defaultState = [{ id: '123', name: 'Initial User' }];
const newUsers: User[] = [{ id: '456', name: 'New User' }];

test('should return payload data when non-error matching action is passed', () => {
  const result = adminsReducer(defaultState, {
    type: FETCH_ADMINS,
    payload: {
      data: newUsers,
    },
  });

  expect(result).toEqual(newUsers);
});

test('should return default state when errored matching action is passed', () => {
  const result = adminsReducer(defaultState, {
    type: FETCH_ADMINS,
    payload: {
      data: newUsers,
    },
    error: true,
  });

  expect(result).toEqual(defaultState);
});

test('should return default state for non matching action type', () => {
  const result = adminsReducer(defaultState, {
    type: 'foo',
  });

  expect(result).toEqual(defaultState);
});
