const express = require('express');
const dotenv = require('dotenv');

const app = express();

app.get('/', (req, res, next) => {
    res.status(200).send('This is a test response');
});

const port = parseInt(process.env.port) || 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
});