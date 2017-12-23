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
  const html = renderToString(sheet.collectStyles(app));
  const styleTags = sheet.getStyleTags();
  const helmet = Helmet.renderStatic();

  return {
    head: `
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${styleTags}
    `,
    html,
    state: serialize(store.getState()),
  };
};
