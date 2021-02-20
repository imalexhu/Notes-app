const mongoose = require('mongoose');



const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
    },
    body: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
    },
});

const Task = mongoose.model('Task', TaskSchema)

module.exports = {
    Task
}