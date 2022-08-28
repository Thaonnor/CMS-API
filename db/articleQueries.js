const pool = require('./db').getPool();

const getArticles = (req, res, next) => {
    pool.query('SELECT * FROM article', (err, results) => {
        if (err) {
            res.status(500).send(err);
        }

        res.status(200).json(results.rows);
    });
};

const getArticleById = (req, res, next) => {
    const id = req.params.id;

    pool.query('SELECT * from article WHERE id = $1', [id], (err, results) => {
        if(err){
            res.status(500).send(err);
        }

        res.status(200).json(results.rows[0]);
    })
};

const getArticlesPage = (req, res, next) => {
    const page = req.params.page;
    const limit = 10;
    const offset = (page * limit) - limit;
    

    pool.query('SELECT * FROM article LIMIT $1 OFFSET $2', [limit, offset], (err, results) => {
        if(err) {
            res.status(500).send(err);
        }

        res.status(200).json(results.rows);
    })
}

const createArticle = (req, res, next) => {};

const updateArticle = (req, res, next) => {};

const deleteArticle = (req, res, next) => {};

module.exports = {
    getArticles,
    getArticleById,
    getArticlesPage,
    createArticle,
    updateArticle,
    deleteArticle,
};
