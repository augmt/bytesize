'use strict';

const path = require('path');
const test = require('tape');
const request = require('supertest');
const app = require('../../app.js');

const server = app.listen();

test('server', t => {
  t.plan(2);

  request(server)
    .post('/')
    .attach('file', path.resolve(__dirname, '../fixtures/test.txt'))
    .expect('content-type', /json/)
    .expect(200, {filesize: 36})
    .end(err => t.error(err, '200 POST /', err));

  request(server)
    .post('/')
    .expect(400)
    .end(err => t.error(err, '400 POST /', err));
});

test.onFinish(() => server.close());
