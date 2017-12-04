import * as React from 'react';
import { shallow, mount } from 'enzyme';
import thunk, { ThunkAction } from 'redux-thunk';
import { Store, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import userDefault, { UsersListPage } from '../UsersListPage';
import { fetchUsers } from '../../actions';
jest.mock('../../actions/');

const mockAction = {
  type: 'testing',
  payload: 'fetching users',
};
const mockFetchUsers = jest.fn(() => mockAction);

(fetchUsers as any).mockImplementation(mockFetchUsers);

const {
  loadData,
  component: ConnectedUsersListPage,
} = userDefault;

const mockUsers: User[] = [{ id: '123', name: 'Eric' }, { id: '456', name: 'Hyun' }];

describe('UsersListPage', () => {
  test('should render', () => {
    const wrapper = shallow(
      <UsersListPage
        fetchUsers={(fetchUsers as () => ThunkAction<Promise<User[]>, User[], {}>)}
        users={mockUsers}
      />,
    );

    expect(wrapper).toHaveLength(1);
  });

  test('should render number of users loaded in title', () => {
    const wrapper = shallow(
      <UsersListPage
        fetchUsers={(fetchUsers as () => ThunkAction<Promise<User[]>, User[], {}>)}
        users={mockUsers}
      />,
    );

    expect(wrapper.contains(<title>2 Users Loaded</title>)).toBe(true);
  });
});

describe('loadData', () => {
  test('should call dispatch with the result of fetchUsers', () => {
    const store = {} as Store<User[]>;
    store.dispatch = jest.fn();

    loadData(store);
    expect(store.dispatch).toHaveBeenCalledWith(mockAction);
  });
});

describe('ConnectedUsersListPage', () => {
  const storeMocker = (users: User[] = []) => {
    const mockReducer = (state: any = { users }) => state;
    return createStore(
      mockReducer,
      applyMiddleware(thunk),
    );
  };

  test('should render users passed via store', () => {
    const wrapper = mount(
      <Provider store={storeMocker(mockUsers)}>
        <ConnectedUsersListPage />
      </Provider>,
    );

    expect(wrapper.contains(<li>Eric</li>)).toBe(true);
    expect(wrapper.contains(<li>Hyun</li>)).toBe(true);
  });
});
