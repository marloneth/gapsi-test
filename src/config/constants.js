const dotenv = require("dotenv");

dotenv.config();

const APP_PORT = process.env.APP_PORT;
const LOG_LEVEL = process.env.LOG_LEVEL;

module.exports = {
  APP_PORT,
  LOG_LEVEL,
};
