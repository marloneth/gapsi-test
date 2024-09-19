const { Router } = require('express');
const getArticleById = require('../resources/article/getArticleById');
const updateArticleValidator = require('../validators/article/updateArticle');
const updateArticle = require('../resources/article/updateArticle');

const articleRouter = Router();

/**
 * @swagger
 * /api/articles/:id:
 *   get:
 *     summary: Get an article.
 *     description: Get an article from the database looking for it by its id.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the article to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: Article does not exist
 *       500:
 *         description: Server error
 */
articleRouter.get('/:id', getArticleById);

/**
 * @swagger
 * /api/articles/:id:
 *   patch:
 *     summary: Update an article.
 *     description: Update an article from the database looking for it by its id.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the article to retrieve.
 *         schema:
 *           type: string
 *     requestBody:
 *       description: data to update in the article
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               model:
 *                type: string
 *                minLength: 1
 *                maxLength: 10
 *               description:
 *                 type: string
 *                 minLength: 1
 *                 maxLength: 200
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: Article does not exist
 *       422:
 *         description: Provided data is not correct
 *       500:
 *         description: Server error
 */
articleRouter.patch('/:id', updateArticleValidator, updateArticle);

module.exports = articleRouter;
