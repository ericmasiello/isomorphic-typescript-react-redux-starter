declare module 'express-http-proxy';

type Auth = AuthToken | null | false;

interface AppState {
  users: User[];
  admins: User[];
  auth: Auth;
}

interface AuthToken {
  googleId: string;
}

interface Context {
  url?: string;
  notFound?: boolean;
}

interface User {
  id: string;
  name: string;
}

interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
  INITIAL_STATE?: any
}

interface RequireAuthHOC {
  (ChildComponent: React.ComponentType<any>): React.ComponentType<any>;
}