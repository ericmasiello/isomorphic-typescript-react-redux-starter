import * as React from 'react';
import { shallow } from 'enzyme';
import { ThunkAction } from 'redux-thunk';
import { Store } from 'redux';
import * as users from '../UsersListPage';
jest.mock('../../actions/', () => {
  return {
    fetchUsers: jest.fn(() => 'fetching users'),
  };
});

const { default: { loadData }, UsersListPage } = users;

describe('UsersListPage', () => {
  const fetchUsers = jest.fn(() => () => {}) as () => ThunkAction<Promise<User[]>, User[], {}>;
  const users: User[] = [{ id: '123', name: 'Eric' }];
  test('should render', () => {
    const wrapper = shallow(
      <UsersListPage
        fetchUsers={fetchUsers}
        users={users}
      />,
    );

    expect(wrapper).toHaveLength(1);
  });
});

describe('loadData', () => {
  test('should call dispatch with the result of fetchUsers', () => {
    const store = {} as Store<User[]>;
    store.dispatch = jest.fn();

    loadData(store);
    expect(store.dispatch).toHaveBeenCalledWith('fetching users');
  });
});
