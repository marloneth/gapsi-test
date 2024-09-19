const createLogger = require('../../config/logger');
const getArticleByIdService = require('../../services/article/getArticleById');
const { respondSuccess, respondError } = require('../../utils/response');
const logger = createLogger('resources/article/getArticleById.js');

async function getArticleById(req, res) {
  logger.info('Get article by id | resource');

  try {
    const { id } = req.params;
    const article = await getArticleByIdService(id);
    const responseData = {
      status: 200,
      message: 'Article retrieved successfully',
      data: { article },
    };
    return respondSuccess(logger, res, responseData);
  } catch (error) {
    const responseData = {
      status: error.status,
      message: error.message,
    };

    return respondError(logger, res, responseData);
  }
}

module.exports = getArticleById;
