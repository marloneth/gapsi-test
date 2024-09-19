const express = require('express');
const cors = require('cors');
const routes = require('./routes/index');

function createServer() {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use('/api', routes);
  return app;
}

module.exports = createServer;
