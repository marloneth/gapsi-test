const { dbClient } = require('../config/database');
const createLogger = require('../config/logger');

const logger = createLogger('daos/article.js');

async function getArticleById(id) {
  logger.debug('Get article by id | daos');

  try {
    const result = await dbClient.query(
      'SELECT * FROM articles WHERE id = $1',
      [id]
    );

    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

async function updateArticle(id, data) {
  logger.debug('Update article | daos');

  try {
    const fields = Object.keys(data);
    const values = [...Object.values(data), id];
    const setValues = fields.map((field, index) => {
      return `${field} = $${index + 1}`;
    });

    const result = await dbClient.query(
      `UPDATE articles SET ${setValues.join(', ')} WHERE id = $${
        setValues.length + 1
      } RETURNING *`,
      values
    );

    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getArticleById,
  updateArticle,
};
