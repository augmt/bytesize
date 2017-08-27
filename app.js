'use strict';

const fs = require('fs');
const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');

const app = new Koa();
const router = new Router();

router.post('/', koaBody({multipart: true}), ctx => {
  const files = ctx.request.body.files;
  if (files) {
    const fieldname = Object.keys(files)[0];
    const file = files[fieldname];

    ctx.body = {filesize: file.size};
    ctx.type = 'json';

    fs.unlink(file.path, () => {});
  } else {
    ctx.status = 400;
  }
});

app.use(router.routes());
app.use(router.allowedMethods());

module.exports = app;
