import { Request, Response } from 'express';
import { matchRoutes } from 'react-router-config';
import uiRootController from '../uiControllers';
import renderer from '../../../helpers/renderer';
import createStore from '../../../helpers/createStore';
import Routes from '../../../client/Routes';
jest.mock('react-router-config');
jest.mock('../../../helpers/renderer');
jest.mock('../../../helpers/createStore');

const matchedRoutesWithLoadData = [
  {
    route: {
      loadData: jest.fn(() => Promise.resolve({
        foo: 'bar',
      })),
    },
  },
];

const matchedRoutesWithoutLoadData = [
  {
    route: {
    },
  },
];

const rendered = {
  head: 'the head',
  html: '<div>foo bar</div>',
  state: 'initialState = []',
};
const store = { the: 'store' };

(renderer as jest.Mock<{}>).mockImplementation(() => rendered);
(createStore as jest.Mock<{}>).mockImplementation(jest.fn(() => store));

const req = {} as Request;
req.path = '/the/path';
req.get = jest.fn();

const res = {} as Response;
res.render = jest.fn();
res.redirect = jest.fn();
res.status = jest.fn();

test('should call createStore with the request object', () => {
  (matchRoutes as jest.Mock<{}>).mockImplementation(() => matchedRoutesWithLoadData);
  return uiRootController(req, res).then(() => {
    expect(createStore).toBeCalledWith(req);
  });
});

test('should call matchRoutes', () => {
  (matchRoutes as jest.Mock<{}>).mockImplementation(() => matchedRoutesWithLoadData);
  return uiRootController(req, res).then(() => {
    expect(matchRoutes).toBeCalledWith(Routes, req.path);
  });
});

describe('send rendered response', () => {
  test('should support routes with custom data to load', () => {
    (matchRoutes as jest.Mock<{}>).mockImplementation(() => matchedRoutesWithLoadData);
    return uiRootController(req, res).then(() => {
      expect(res.render).toBeCalledWith('index', rendered);
      expect(matchedRoutesWithLoadData[0].route.loadData).toBeCalledWith(store);
    });
  });
  test('should support routes without custom data to load', () => {
    (matchRoutes as jest.Mock<{}>).mockImplementation(() => matchedRoutesWithoutLoadData);
    return uiRootController(req, res).then(() => {
      expect(res.render).toBeCalledWith('index', rendered);
    });
  });
});

describe('renderer', () => {
  beforeEach(() => {
    (matchRoutes as jest.Mock<{}>).mockImplementation(() => matchedRoutesWithLoadData);
  });

  test('should redirect when a url is present in context', () => {
    (renderer as jest.Mock<{}>).mockImplementation((req: any, store: any, context: any) => {
      context.url = 'the/url';
      return rendered;
    });
    return uiRootController(req, res).then(() => {
      expect(res.redirect).toBeCalledWith(301, 'the/url');
    });
  });

  test('should set status to 404 when notFound is present on context', () => {
    (renderer as jest.Mock<{}>).mockImplementation((req: any, store: any, context: any) => {
      context.notFound = true;
      return rendered;
    });
    return uiRootController(req, res).then(() => {
      expect(res.status).toBeCalledWith(404);
    });
  });
});

