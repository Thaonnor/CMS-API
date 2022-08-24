const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
    res.status(200).send('This is a test response');
});

app.listen(3000, () => {
    console.log('Server now listening on port 3000');
});