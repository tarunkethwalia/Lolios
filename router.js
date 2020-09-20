const express = require('express');
const Router = express.Router();

Router.get('/', (req, res) => {
    res.sendFile('./index.html', { root: __dirname });
});

module.exports = Router;