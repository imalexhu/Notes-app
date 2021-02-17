const mongoose = require('mongoose')
const express = require('express')
const app = express()

app.get('', (req, res) => {
    // return all tasks
})

app.post('', (req, res) => {
    // Create New Task
})

app.patch(':id', (req, res) => {
    //modify the task
})


app.delete(':id', (req, res) => {
    // delete the task
})

//amy waz here