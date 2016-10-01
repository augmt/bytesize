'use strict';

import Koa from 'koa';
import router from './routes.js';

const app = new Koa();

app.name = 'file-metadata-microservice';

app.use(router.routes());

export default app;
