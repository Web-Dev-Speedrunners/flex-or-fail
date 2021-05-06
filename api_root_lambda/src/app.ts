import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './router';
import errorRequestHandler from './router_handler/error';

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(router);
app.use(errorRequestHandler);

export default app;
