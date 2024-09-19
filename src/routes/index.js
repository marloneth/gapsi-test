const { Router } = require('express');
const articleRouter = require('./article');

const router = Router();

router.use('/articles', articleRouter);

module.exports = router;
