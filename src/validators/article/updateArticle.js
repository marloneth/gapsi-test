const Ajv = require('ajv');
const createError = require('http-errors');
const createLogger = require('../../config/logger');
const { respondError } = require('../../utils/response');
const updateArticleSchema = require('../../validationSchemas/article/updateArticle.json');

const ajv = new Ajv();
const logger = createLogger('validators/article/updateArticle.js');

function updateArticleValidator(req, res, next) {
  logger.debug('Validating contact update data | validator');

  try {
    const data = req.body;
    const isDataValid = ajv.validate(updateArticleSchema, data);

    if (isDataValid) return next();

    const errorToSend = ajv.errorsText();
    throw createError.UnprocessableEntity(errorToSend);
  } catch (error) {
    const responseData = {
      status: error.status,
      message: error.message,
    };

    return respondError(logger, res, responseData);
  }
}

module.exports = updateArticleValidator;
