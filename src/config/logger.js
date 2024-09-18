const log4js = require("log4js");
const { LOG_LEVEL } = require("./constants");

/**
 * creates an instance of logger according the established parameters
 * @param {string} category - category to identify the logger instance
 * @returns log4js.Logger
 */
function createLogger(category) {
  const logger = log4js.getLogger(category);
  logger.level = LOG_LEVEL || "info";
  return logger;
}

module.exports = createLogger;
