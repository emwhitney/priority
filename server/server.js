const express = require("express");
const cors = require('cors');
const connection = require('./db');
const bodyParser = require('body-parser')

const app = express();

app.use(cors());
app.use(bodyParser.json())

//ROUTES AROUND THE APP
app.get('/tasks',(req,res) => {
    const TASK_QUERY = `select * from adhdtaskmanager.tasks order by priority DESC`
    connection.query(TASK_QUERY, (err, response) => {
        if(err) console.log(err)
        else res.send(response)
    })
})

app.post('/addTask', (req,res) => {
    const ADD_QUERY = `insert into adhdtaskmanager.tasks (task, priority, type) values ('${req.body.task}', '${req.body.priority}', '${req.body.type}')`
    connection.query(ADD_QUERY, (err) => {
        if(err) console.log(err)
        else res.send('task has been added')
    })
    console.log('added task')
})

app.delete('/deleteTask/:taskid/', (req, res) => {
    const DELETE_QUERY = `DELETE FROM adhdtaskmanager.tasks where (taskid=${req.params.taskid})`
    connection.query(DELETE_QUERY, (err) => {
        if(err) console.log(err)
        else res.send()
    })
    console.log('deleted task')
})

app.listen(4000, () => {
    console.log('running on port 4000')
})

