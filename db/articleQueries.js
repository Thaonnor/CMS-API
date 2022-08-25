const pool = require('./db').getPool();

const getArticles = (req, res, next) => {
    pool.query('SELECT * from article JOIN ')
};

const getArticleById = () => {};

const getArticlesPage = () => {};

const createArticle = () => {};

const updateArticle = () => {};

const deleteArticle = () => {};

module.exports = {
    getArticles,
    getArticleById,
    getArticlesPage,
    createArticle,
    updateArticle,
    deleteArticle,
};
