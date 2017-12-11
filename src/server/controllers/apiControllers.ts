import * as proxy from 'express-http-proxy';
import { RequestOptions } from 'http';

export const proxyConfig = {
  proxyReqOptDecorator(opts: RequestOptions) {
    if (opts.headers) {
      opts.headers['x-forwarded-host'] = 'localhost:3000';
    }
    return opts;
  },
};

export const proxyController = proxy('http://react-ssr-api.herokuapp.com', proxyConfig);
