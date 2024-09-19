const log4js = require('log4js');
const { LOG_LEVEL } = require('./constants');

function createLogger(category) {
  const logger = log4js.getLogger(category);
  logger.level = LOG_LEVEL || 'info';
  return logger;
}

module.exports = createLogger;
