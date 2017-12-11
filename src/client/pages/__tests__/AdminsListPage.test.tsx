import * as React from 'react';
import { shallow, mount } from 'enzyme';
import thunk, { ThunkAction } from 'redux-thunk';
import { Store, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import adminDefault, { AdminsListPage } from '../AdminsListPage';
import { fetchAdmins } from '../../actions';
jest.mock('../../actions/');

const mockAction = {
  type: 'testing',
  payload: 'fetching admins',
};
const mockFetchAdmins = jest.fn(() => mockAction);
(fetchAdmins as jest.Mock<{}>).mockImplementation(mockFetchAdmins);

const {
  loadData,
  component: ConnectedAdminsListPage,
} = adminDefault;

const mockAdmins: User[] = [{ id: '123', name: 'Admin Eric' }, { id: '456', name: 'Admin Hyun' }];

describe('AdminsListPage', () => {
  test('should render', () => {
    const wrapper = shallow(
      <AdminsListPage
        fetchAdmins={fetchAdmins as () => ThunkAction<Promise<User[]>, User[], {}>}
        admins={mockAdmins}
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
    expect(store.dispatch).toHaveBeenCalledWith(mockAction);
  });
});

describe('ConnectedAdminsListPage', () => {
  const storeMocker = (admins: User[] = []) => {
    const mockReducer = (state: any = { admins }) => state;
    return createStore(
      mockReducer,
      applyMiddleware(thunk),
    );
  };

  test('should render admins passed via store', () => {
    const wrapper = mount(
      <Provider store={storeMocker(mockAdmins)}>
        <ConnectedAdminsListPage />
      </Provider>,
    );

    expect(wrapper.contains(<li>Admin Eric</li>)).toBe(true);
    expect(wrapper.contains(<li>Admin Hyun</li>)).toBe(true);
  });
});
