import * as React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../Header';

test('should render', () => {
  const wrapper = shallow(<Header auth={null} />);
  expect(wrapper).toHaveLength(1);
});

test('should render Login link if auth token is not provided', () => {
  let wrapper = shallow(<Header auth={null} />);
  expect(wrapper.contains('Login')).toBe(true);

  wrapper = shallow(<Header auth={false} />);
  expect(wrapper.contains('Login')).toBe(true);
});

test('should render Logout link if auth token is provided', () => {
  const auth = {
    googleId: 'foo',
  };
  const wrapper = shallow(<Header auth={auth} />);
  expect(wrapper.contains('Logout')).toBe(true);
});
