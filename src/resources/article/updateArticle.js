const createLogger = require('../../config/logger');
const updateArticleService = require('../../services/article/updateArticle');
const { respondSuccess, respondError } = require('../../utils/response');
const logger = createLogger('resources/article/updateArticle.js');

async function updateArticle(req, res) {
  logger.info('Update article | resource');

  try {
    const { id } = req.params;
    const data = req.body;
    const updatedArticle = await updateArticleService(id, data);
    const responseData = {
      status: 200,
      message: 'Article updated successfully',
      data: { article: updatedArticle },
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

module.exports = updateArticle;
