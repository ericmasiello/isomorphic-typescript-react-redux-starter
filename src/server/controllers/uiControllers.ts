import { Request, Response } from 'express';
import { Store } from 'redux';
import { matchRoutes } from 'react-router-config';
import createStore from '../../helpers/createStore';
import Routes, { RouteConfigWithLoadData } from '../../client/Routes';
import renderer from '../../helpers/renderer';

const uiRootController = (req: Request, res: Response) => {
  const store = <Store<AppState>>createStore(req);
  const promises = <Promise<{}>[]>matchRoutes(Routes, req.path)
    .map((matchedRoute) => {
      const route = <RouteConfigWithLoadData>matchedRoute.route;
      if (route.loadData) {
        return route.loadData(store);
      }
      return null;
    })
    .map((promise) => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

  return Promise.all(promises).then(() => {
    const context: Context = {};
    const { html, head, state } = renderer(req, store, context);

    if (context.url) {
      return res.redirect(301, context.url);
    }
    if (context.notFound) {
      res.status(404);
    }

    res.render('index', { html, head, state });
  });
};

export default uiRootController;
