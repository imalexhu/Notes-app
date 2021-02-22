const mongoose = require('./dataBase/mongose')
const express = require('express')
const cors = require('cors')
const app = express()
const { Task } = require('./dataBase/schema')
const bodyParser = require('body-parser')

app.use(bodyParser.json());

app.use(cors());

app.get('/tasks', (req, res) => {
    // return all tasks
    Task.find({}).then((list) => res.send(list))
})


app.post('/tasks', (req, res) => {
    let title = req.body.title;
    let body = req.body.body

    let newTask = new Task({
        title: title,
        body: body,
    })

    newTask.save().then((list) => {
        res.send(list)
    })

})

app.patch('/tasks/:id', (req, res) => {
    let _id = req.params.id;


    Task.findByIdAndUpdate({ _id }, {
        $set: req.body
    }).then(res.sendStatus(200))
})


app.delete('/tasks/:id', (req, res) => {
    // delete the task
    let _id = req.params.id;
    console.log("Deleating")
    console.log(_id)

    Task.findByIdAndDelete({ _id }).then((deleated) => res.send(deleated))
})

app.get('/tasks/:id', (req, res) => {
    // get specific task
    let _id = req.params.id;

    Task.findById({ _id }).then((task) => res.send(task))
})

app.delete('/tasks', (req, res) => {
    // deleates all tasks
    Task.deleteMany({}).then((deleated) => res.send(deleated))
})


app.listen(3000, console.log("Listening on 3000"));


//amy waz here