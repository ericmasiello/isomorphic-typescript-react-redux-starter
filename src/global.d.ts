declare module 'express-http-proxy';

interface AuthToken {
  googleId: string;
}

interface Context {
  url?: string;
  notFound?: boolean;
}

interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
}