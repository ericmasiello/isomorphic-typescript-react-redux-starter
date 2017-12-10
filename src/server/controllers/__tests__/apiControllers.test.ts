import { proxyConfig } from '../apiControllers';
import { RequestOptions } from 'http';

test('if headers are defined, x-forward-host is set to localhost', () => {
  const opts = {
    headers: {},
  } as RequestOptions;

  const result = proxyConfig.proxyReqOptDecorator(opts);
  if (result.headers) {
    expect(result.headers['x-forwarded-host']).toEqual('localhost:3000');
  } else {
    throw new Error('proxyConfig test failed');
  }
});

test('if no headers are defined, options are returned unchanged', () => {
  const opts = {
    foo: 'bar',
    bar: 'baz',
  } as RequestOptions;

  const result = proxyConfig.proxyReqOptDecorator(Object.assign({}, opts));
  expect(result).toEqual(opts);
});
