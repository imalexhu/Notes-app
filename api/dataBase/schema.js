const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const Task = new Schema({
    title: String,
    body: String,
});

const TaskModel = mongoose.model('TaskModel', Task)

module.exports = {
    TaskModel
}