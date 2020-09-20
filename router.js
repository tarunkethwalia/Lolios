const express = require('express');
const Router = express.Router();

Router.get('/', (req, res) => {
    res.status(200).send('Server is up and Running..!!!');
});

module.exports = Router;