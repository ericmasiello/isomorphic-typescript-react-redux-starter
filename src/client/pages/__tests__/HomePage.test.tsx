import * as React from 'react';
import { shallow } from 'enzyme';
import homePage, { Home } from '../HomePage';

const StyledHomePage = homePage.component;

test('should render HomePage', () => {
  const wrapper = shallow(
    <Home />,
  );
  expect(wrapper).toHaveLength(1);
});

test('should render styled HomePage', () => {
  const wrapper = shallow(
    <StyledHomePage />,
  );
  expect(wrapper).toHaveLength(1);
});
