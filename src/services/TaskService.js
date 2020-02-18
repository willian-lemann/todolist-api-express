const Task = require('../models/Task');

exports.index = async (request, response) => {
    return await Task.find();
};

exports.store = async (data) => {
    const task = await Task.create(data);
    return task;
};

exports.show = async (id) => {
    const task = await Task.findById(id);

    if (task == null)
        return null;

    return task;
};

exports.update = async (id, data) => {

    const task = await Task.findById(id);

    if (task == null)
        return null;

    const newTask = await task.updateOne(data, (err) => {
        if (err)
            return { Error: err };
    });

    return newTask;
};

exports.destroy = async (id) => {

    const task = await Task.findById(id);

    if (task == null)
        return null;

    task.remove();
};