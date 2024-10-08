const dotenv = require('dotenv');

dotenv.config();

const APP_PORT = process.env.APP_PORT;
const LOG_LEVEL = process.env.LOG_LEVEL;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;

module.exports = {
  APP_PORT,
  LOG_LEVEL,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME,
};
