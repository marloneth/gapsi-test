const { Router } = require('express');
const getArticleById = require('../resources/article/getArticleById');
const updateArticleValidator = require('../validators/article/updateArticle');
const updateArticle = require('../resources/article/updateArticle');

const articleRouter = Router();

articleRouter.get('/:id', getArticleById);
articleRouter.patch('/:id', updateArticleValidator, updateArticle);

module.exports = articleRouter;
