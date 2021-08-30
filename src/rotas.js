const express = require('express');
const CandidateController = require('./candidateController');
const routes = new express.Router();

routes.post('/register', CandidateController.register);
routes.get('/', (req, res) => {
    res.send('Sucesso!!!');
});
module.exports = routes;