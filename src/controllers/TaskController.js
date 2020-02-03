const TaskService = require('../services/TaskService');

module.exports = {

    async index(request, response) {
        await TaskService.index(request, response);
    },

    async store(request, response) {
        await TaskService.store(request, response);
    },

    async show(request, response) {
        await TaskService.show(request, response);
    },

    async destroy(request, response) {
        await TaskService.destroy(request, response);
    },
};