import * as React from 'react';
import { shallow } from 'enzyme';
import { ThunkAction } from 'redux-thunk';
import * as admins from '../AdminsListPage';

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
  // TODO...
});
