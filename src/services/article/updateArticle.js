const createError = require('http-errors');
const createLogger = require('../../config/logger');
const articleDaos = require('../../daos/article');
const logger = createLogger('services/article/updateArticle.js');

async function updateArticle(id, data) {
  logger.debug('Update article | service');

  try {
    const articleExist = await articleDaos.getArticleById(id);
    if (!articleExist) {
      throw createError.NotFound(`Article with id ${id} does not exist`);
    }

    const updatedArticle = await articleDaos.updateArticle(id, data);
    return updatedArticle;
  } catch (error) {
    throw error;
  }
}

module.exports = updateArticle;
