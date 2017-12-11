import * as express from 'express';
import apiRouter from './routes/api';
import uiRouter from './routes/ui';

const app = express();

app.set('port', process.env.PORT || 3000);
app.use('/api', apiRouter);
app.use(express.static('public'));
app.get('*', uiRouter);

export default app;
