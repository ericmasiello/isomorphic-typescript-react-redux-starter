import * as React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import requireAuth from '../requireAuth';

jest.mock('react-router-dom');

const Dummy: React.SFC<{}> = () => <div>Hi</div>;
const Connected = requireAuth(Dummy);
const storeMocker = (authState?: any) => createStore((state: any = { auth: authState }) => state);

test('should render a redirect when auth is false', () => {
  const wrapper = mount(
    <Provider store={storeMocker(false)}>
      <Connected />
    </Provider>,
  );

  expect(wrapper.find('Redirect')).toHaveLength(1);
});

test('should Loading when auth is null', () => {
  const wrapper = mount(
    <Provider store={storeMocker(null)}>
      <Connected />
    </Provider>,
  );

  expect(wrapper.contains('Loading...')).toBe(true);
});

test('should render the component otherwise', () => {
  const wrapper = mount(
    <Provider store={storeMocker()}>
      <Connected />
    </Provider>,
  );

  expect(wrapper.find(Dummy)).toHaveLength(1);
});
