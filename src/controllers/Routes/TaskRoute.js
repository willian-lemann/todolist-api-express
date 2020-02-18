const { Router } = require('express');
 
const TaskController = require('../src/controllers/TaskController');

const TaskRoute = Router();

TaskRoute.get('/Task', TaskController.index);
TaskRoute.get('/Task/:id', TaskController.show);
TaskRoute.post('/Task', TaskController.store);
TaskRoute.put('/Task/:id', TaskController.update);
TaskRoute.delete('/Task/:id', TaskController.destroy);

module.exports = TaskRoute;