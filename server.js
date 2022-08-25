const express = require('express');
const dotenv = require('dotenv').config();

const app = express();

const articleRouter = require('./routes/articleRouter.js')();

app.use('/api', articleRouter);

app.get('/', (req, res, next) => {
    res.status(200).send('This is a test response');
});

const port = parseInt(process.env.port);

app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
});
