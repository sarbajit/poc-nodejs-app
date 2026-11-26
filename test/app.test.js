const { test, after, before } = require('node:test');
const assert = require('node:assert');
const app = require('../src/app');

let server;
let baseUrl;

before(async () => {
  server = app.listen(0);
  await new Promise((resolve) => server.once('listening', resolve));
  baseUrl = `http://localhost:${server.address().port}`;
});

after(() => server.close());

test('GET / returns Hello World', async () => {
  const res = await fetch(`${baseUrl}/`);
  assert.strictEqual(res.status, 200);
  assert.strictEqual(await res.text(), 'Hello World from poc-nodejs-app!');
});

test('GET /health returns UP', async () => {
  const res = await fetch(`${baseUrl}/health`);
  assert.deepStrictEqual(await res.json(), { status: 'UP' });
});
