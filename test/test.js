'use strict';

import test from 'tape';
import { expect } from 'chai';
import request from 'supertest';
import app from './../src/app.js';

const server = app.listen();

test(app.name, (t) => {
  t.plan(2);

  request(server)
    .post('/')
    .attach('file', 'test/dummy.txt')
    .expect('Content-Type', /json/)
    .end((err) => t.ifError(err, 'content-type should be json'));

  request(server)
    .post('/')
    .attach('file', 'test/dummy.txt')
    .expect((res) => expect(res.body).to.deep.equal({filesize: 23}))
    .end((err) => t.ifError(err, 'should respond with the input file\'s size in bytes'));
});

test.onFinish(() => server.close());
