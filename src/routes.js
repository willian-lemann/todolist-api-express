const { Router } = require('express');


const TaskController = require('../src/controllers/TaskController');

const routes = Router();

routes.get('/tasks', TaskController.index);
routes.post('/tasks', TaskController.store);
routes.get('/tasks/:id', TaskController.show);
routes.delete('/tasks/:id', TaskController.destroy);

module.exports = routes;