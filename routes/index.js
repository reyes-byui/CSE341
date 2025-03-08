const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.helloRoute);

routes.get('/rhea',  lesson1Controller.helloRheaRoute);

routes.get('/sample', lesson1Controller.sampleRoute);

module.exports = routes;