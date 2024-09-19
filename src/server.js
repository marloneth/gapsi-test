const express = require('express');
const cors = require('cors');
const routes = require('./routes/index');
const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('../swagger');

function createServer() {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use('/api', routes);
  app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
  return app;
}

module.exports = createServer;
