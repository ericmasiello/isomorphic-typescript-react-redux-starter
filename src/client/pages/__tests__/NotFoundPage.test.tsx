import * as React from 'react';
import { shallow } from 'enzyme';
import notFound from '../NotFoundPage';

const NotFoundPage = notFound.component;

test('should render', () => {
  const wrapper = shallow(
    <NotFoundPage />,
  );
  expect(wrapper).toHaveLength(1);
});

test('should set staticContext.foundFound if passed in', () => {
  const staticContext: any = {};

  shallow(
    <NotFoundPage
      staticContext={staticContext}
    />,
  );

  expect(staticContext.notFound).toBe(true);
});
