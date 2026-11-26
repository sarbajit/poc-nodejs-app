const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World from poc-nodejs-app!');
});

app.get('/health', (req, res) => {
  res.json({ status: 'UP' });
});

module.exports = app;
