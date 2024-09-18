const express = require('express');
const cors = require('cors');

/**
 * Creates the express app server
 * @returns Express app
 */
function createServer() {
  const app = express();

  app.use(express.json());
  app.use(cors());
  return app;
}

module.exports = createServer;
