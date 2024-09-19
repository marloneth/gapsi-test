const { Client } = require('pg');
const createLogger = require('./logger');
const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME,
} = require('./constants');

const dbConfig = {
  user: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: DB_PORT,
  database: DB_NAME,
};

const logger = createLogger('config/database.js');
const dbClient = new Client(dbConfig);

async function connectDatabase() {
  try {
    logger.info('Connecting with database ...');
    await dbClient.connect();
    logger.info('🐘 Database connected');
  } catch (error) {
    logger.error('Database connection failed');
    throw error;
  }
}

module.exports = { dbClient, connectDatabase };
