import * as express from 'express';
import { matchRoutes, RouteConfig } from 'react-router-config';
import * as proxy from 'express-http-proxy';
import { RequestOptions } from 'http';
import { Store } from 'redux';
import Routes, { RouteConfigWithLoadData } from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import { ThunkAction } from 'redux-thunk';
import { AxiosInstance } from 'axios';

const app = express();

app.use(
  '/api',
  proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts: RequestOptions) {
      if (opts.headers) {
        opts.headers['x-forwarded-host'] = 'localhost:3000';
      }
      return opts;
    }
  })
);
app.use(express.static('public'));
app.get('*', (req, res) => {
  const store = <Store<AppState>>createStore(req);
  const promises = <Promise<{}>[]>matchRoutes(Routes, req.path)
    .map(matchedRoute => {
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

  Promise.all(promises).then(() => {
    const context: Context = {};
    const content = renderer(req, store, context);

    if (context.url) {
      return res.redirect(301, context.url);
    }
    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
