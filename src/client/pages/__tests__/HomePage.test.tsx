import * as React from 'react';
import { shallow } from 'enzyme';
import homePage from '../HomePage';

const HomePage = homePage.component;

test('should render', () => {
  const wrapper = shallow(
    <HomePage />,
  );
  expect(wrapper).toHaveLength(1);
});
