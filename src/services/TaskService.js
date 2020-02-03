const Task = require('../models/Task');

exports.index = async (request, response) => {
    const tasks = await Task.find();
    return response.json(tasks);
};

exports.store = async (request, response) => {
    const data = request.body;

    const task = await Task.create(data);

    return response.json(task);
};

exports.show = async (request, response) => {
    const { _id } = request.params;

    const task = await Task.findById(_id);

    if (task == null)
        return response.status(404).json();

    return response.json(task);
};

exports.destroy = async (request, response) => {
    const { id } = request.params;

    const task = await Task.findById(id);

    if (task == null)
        return response.status(404).json();

    task.remove();

    response.status(200).json();
};