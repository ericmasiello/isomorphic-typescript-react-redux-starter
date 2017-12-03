import { AxiosPromise } from 'axios';
import { Dispatch } from 'redux';
import to from 'await-to-js';

export function dispatcher<T>(dispatch: Dispatch<T>, type: string) {
  return async (request: AxiosPromise) => {
    const [err, res] = await to(request);

    if (err) {
      dispatch({
        type,
        payload: err,
        error: true,
      });
      return true;
    }

    dispatch({
      type,
      payload: res,
    });
  };
}
