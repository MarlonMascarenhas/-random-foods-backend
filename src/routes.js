const express = require('express');

const ComidasController = require('./controllers/ComidasController');
const RandomSelection = require('./controllers/RandomController');
const routes = express.Router();

routes.get('/comidas', ComidasController.index);
routes.post('/comidas', ComidasController.create);
routes.get('/randomSelection', RandomSelection.randomSelection);

module.exports = routes;