const express = require('express');
const article = require('../routes/articleRouter.js');
const router = express.Router();

router.get('/article', getArticles);

router.get('/article/:id', getArticleById);

router.get('/article/?page=:pageNumber', getArticlesPage);

router.post('/article', createArticle);

router.patch('/article/:id', updateArticle);

router.delete('/article/:id', deleteArticle);

module.exports = {
    router
}
