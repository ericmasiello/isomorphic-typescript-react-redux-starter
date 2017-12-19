import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import * as serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';
import { Request } from 'express';
import { Store } from 'redux';
import { ServerStyleSheet } from 'styled-components';
import Routes from '../client/Routes';

export default (req: Request, store: Store<AppState>, context: object) => {

  const app = (
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );

  const sheet = new ServerStyleSheet();
  const content = renderToString(sheet.collectStyles(app));
  const styleTags = sheet.getStyleTags();
  const helmet = Helmet.renderStatic();

  /* tslint:disable max-line-length */
  return `
    <html>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css" />
        ${styleTags}
      </head>
      <body>
        <div id="root">${content}</div>
        <script>
          window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        <script src="vendor.js"></script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
  /* tslint:enable max-line-length */
};
