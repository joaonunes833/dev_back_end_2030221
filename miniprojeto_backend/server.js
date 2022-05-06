var mysql = require('mysql');
const express = require('express');
const app = express();
const port = 3000;

// Middleware para converter o body para JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

// SQL connection 

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ficha7'
});