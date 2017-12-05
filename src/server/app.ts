import * as express from 'express';
import { ThunkAction } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import apiRouter from './routes/api';
import uiRouter from './routes/ui';

const app = express();

app.use('/api', apiRouter);
app.use(express.static('public'));
app.get('*', uiRouter);

export default app;
