import renderer from '../renderer';
import * as express from 'express';
import createStore from '../createStore';
jest.mock('react-helmet', () => {
  const obj: any = { Helmet: {} };
  obj.Helmet.renderStatic = jest.fn(() => ({
    title: { toString: jest.fn(() => 'The title') },
    meta: { toString: jest.fn(() => 'The meta') },
  }));
  return obj;
});

test('should render an html string', () => {
  const req = {} as express.Request;
  req.get = jest.fn();
  const store = createStore(req);
  const result = renderer(req, store, {});
  expect(result).toMatchSnapshot();
});
