import { FETCH_USERS } from '../../actions';
import usersReducer from '../usersReducer';

const defaultState = [{ id: '123', name: 'Initial User' }];
const newUsers: User[] = [{ id: '456', name: 'New User' }];

test('should return payload data when non-error matching action is passed', () => {
  const result = usersReducer(defaultState, {
    type: FETCH_USERS,
    payload: {
      data: newUsers,
    },
  });

  expect(result).toEqual(newUsers);
});

test('should return default state when errored matching action is passed', () => {
  const result = usersReducer(defaultState, {
    type: FETCH_USERS,
    payload: {
      data: newUsers,
    },
    error: true,
  });

  expect(result).toEqual(defaultState);
});

test('should return default state for non matching action type', () => {
  const result = usersReducer(defaultState, {
    type: 'foo',
  });

  expect(result).toEqual(defaultState);
});
