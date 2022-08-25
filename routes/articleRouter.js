const express = require('express');
const article = require('../db/articleQueries.js');

function routes() {
    const router = express.Router();

    router.get('/articles', article.getArticles);

    router.get('/article/:id', article.getArticleById);

    router.get('/article?page=:pageNumber', article.getArticlesPage);

    router.post('/article', article.createArticle);

    router.patch('/article/:id', article.updateArticle);

    router.delete('/article/:id', article.deleteArticle);

    return router;
}

module.exports = routes;
