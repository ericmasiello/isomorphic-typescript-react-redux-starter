import * as React from 'react';
import { shallow } from 'enzyme';
import { ThunkAction } from 'redux-thunk';
import { Store } from 'redux';
import * as admins from '../AdminsListPage';
import { fetchUsers } from '../../actions';
jest.mock('../../actions/', () => {
  return {
    fetchAdmins: jest.fn(() => 'fetching admins'),
  };
});

const { default: { loadData }, AdminsListPage } = admins;

describe('AdminsListPage', () => {
  const fetchAdmins = jest.fn(() => () => {}) as () => ThunkAction<Promise<User[]>, User[], {}>;
  const admins: User[] = [{ id: '123', name: 'Eric' }];
  test('should render', () => {
    const wrapper = shallow(
      <AdminsListPage
        fetchAdmins={fetchAdmins}
        admins={admins}
      />,
    );

    expect(wrapper).toHaveLength(1);
  });
});

describe('loadData', () => {
  test('should call dispatch with the result of fetchAdmins', () => {
    const store = {} as Store<User[]>;
    store.dispatch = jest.fn();

    loadData(store);
    expect(store.dispatch).toHaveBeenCalledWith('fetching admins');
  });
});
