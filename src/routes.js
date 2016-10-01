'use strict';

import multer from 'koa-multer';
import Router from 'koa-router';

const upload = multer();
const router = new Router();

router.post('/', upload.single('file'), (ctx) => {
  ctx.assert(ctx.req.file);

  ctx.body = {filesize: ctx.req.file.size};
  ctx.type = 'json';
});

export default router;
