import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import { Request } from 'express';
import reducers from '../client/reducers';

export default (req: Request) => {
  const axiosInstance = axios.create({
    baseURL: 'http://react-ssr-api.herokuapp.com',
    headers: { cookie: req.get('cookie') || '' },
  });

  const store = createStore(
    reducers,
    {
      users: [],
      admins: [],
      auth: null,
    },
    applyMiddleware(thunk.withExtraArgument(axiosInstance)),
  );

  return store;
};
