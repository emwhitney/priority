const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'economics',
    database: 'adhdtaskmanager'
})

module.exports = connection;