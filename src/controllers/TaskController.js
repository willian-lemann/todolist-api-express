const TaskService = require('../services/TaskService');

module.exports = {

    async index(request, response) {
        const tasks = await TaskService.index();
        return response.json(tasks);
    },

    async store(request, response) {
        const data = request.body;
        const task = await TaskService.store(data);
        return response.json(task);
    },

    async show(request, response) {
        const { id } = request.params;
        const task = await TaskService.show(id);

        if (task == null) {
            return response.status(404).json();
        }

        return response.json(task);
    },

    async update(request, response) {
        const { id } = request.params;
        const data = request.body;

        const task = await TaskService.update(id, data);
        if (task == null)
            return response.status(404).json();

        return response.json(task);
    },

    async destroy(request, response) {
        const { id } = request.params;
        const task = await TaskService.destroy(id);

        if (task == null)
            return response.status(404).json();

        return response.status(200).json();
    },
};