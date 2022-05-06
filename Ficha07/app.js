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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// ENDPOINTS

app.get('/persons', function (request, response) {
    connection.query('SELECT * FROM ficha7.persons', function (err, results, fields) {
        response.send(results);
    })
})

app.post('/persons', function (request, response) {
    var personBody = request.body;
    connection.query('INSERT INTO ficha7.persons (firstname, lastname, profession, age) VALUES (?, ?, ?, ?)', [personBody.firstname, personBody.lastname, personBody.profession, personBody.age], function (err, results, fields) {
        response.send("Person added into ID: " + results.insertId);
    })
})

app.get('/persons/:id', function (req, res) {

    var Id = req.params.id;

    connection.query('SELECT * FROM ficha7.persons WHERE id = ?;', Id, function (err, results, fields) {
        res.send(results);
    })
})

app.delete('/persons', function (request, response) {
    var Id = request.body.id;
    connection.query('DELETE FROM ficha7.persons WHERE id = ?;', Id, function (err, results, fields) {
        if (results.affectedRows != 0) {
            response.send("Persons deleted: " + results.affectedRows + "\nId: " + Id);
        }

        else {
            response.send("Id does not exist");
        }

    })
})

app.get('/persons/:age/:profession', function (req, res) {

    var personAge = req.params.age;
    var personProfession = req.params.profession;

    connection.query("SELECT * FROM ficha7.persons WHERE age = ? AND profession = ?;", [personAge, personProfession], function (err, results, fields) {
        res.send(results);
    })
})

app.put('/persons/:id', function (req, res) {

    var Id = req.params.id;
    var personBody = req.body;
    var personFN = personBody.firstname;
    var personLN = personBody.lastname;
    var personProfession = personBody.profession;
    var personAge = personBody.age;

    connection.query("UPDATE ficha7.persons SET firstname = ?, lastname = ?, profession = ?, age = ? WHERE id = ?;", [personFN, personLN, personProfession, personAge, Id], function (err, results, fields) {
        res.send("ID changed: " + Id + "\n Affected rows: " + results.affectedRows);
    })
})
