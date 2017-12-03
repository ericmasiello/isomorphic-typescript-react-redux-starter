import * as React from 'react';
import { shallow } from 'enzyme';
import { ThunkAction } from 'redux-thunk';
import users, { UsersListPage } from '../UsersListPage';

const { loadData } = users;

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
  // TODO...
});
