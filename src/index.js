const { APP_PORT } = require('./config/constants');
const { connectDatabase } = require('./config/database');
const createLogger = require('./config/logger');
const createServer = require('./server');

const logger = createLogger('index.js');
const app = createServer();
const port = APP_PORT;

app.listen(port, () => {
  logger.info('🌎 Server running ...');
  logger.info(`Listening on port ${port}`);
  connectDatabase();
});
