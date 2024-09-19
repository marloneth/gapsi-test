const createError = require('http-errors');
const createLogger = require('../../config/logger');
const articleDaos = require('../../daos/article');

const logger = createLogger('services/article/getArticleById.js');

async function getArticleById(id) {
  logger.debug('Get article by id | service');

  try {
    const article = await articleDaos.getArticleById(id);
    if (!article) {
      throw createError.NotFound(`Article with id ${id} does not exist`);
    }

    return article;
  } catch (error) {
    throw error;
  }
}

module.exports = getArticleById;
