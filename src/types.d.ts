import { ThunkAction } from 'redux-thunk';
import { AxiosInstance } from 'axios';

export type ThunkActionCreator<S> = () => ThunkAction<Promise<any>, S, AxiosInstance>;
