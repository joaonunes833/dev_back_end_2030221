// Express require
var fs = require('fs')
const express = require('express')
const app = express()
const port = 3000

// Middleware para converter o body para JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// Connect and authenticate to DB using Sequelize in JS code
const Sequelize = require('sequelize');
const { query } = require('express');

const sequelize = new Sequelize('ficha09', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log("Connection has been established");
}).catch(err => {
    console.error("Unable to connect", err);
});

// Define a Model with JS code
const User = sequelize.define('user', {
    // attributes
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        //allowNull defautls to true
    },
    profession: { 
        type: Sequelize.STRING,
    },
    age: {
        type: Sequelize.INTEGER,
    }
},{
    // options
});

// Synchronize the Models with the Database
// User.sync({ force: false }).then(() => {
//     return User.create({
//       firstName: 'John',
//       lastName: 'Hancock',
//       profession: 'IT',
//       age: 49
//     });
// });

// Insert multiple instances in bulk
// User.bulkCreate([
//     { firstName: "Nathan", lastName: "Sebhastian", profession: "IT", age: 23},
//     { firstName: "Jack", lastName: "Stark", profession: "IT", age: 43 },
//     { firstName: "John", lastName: "Snow", profession: "IT", age: 33 },
//     { firstName: "Philip", lastName: "Park", profession: "IT", age: 53 }
//   ]).then(function() {
//       return User.findAll();
//   }).then(function(users) {
//       console.log (users);
//   });

// Lists all existing users
app.get('/persons', function (request, response) {
    User.findAll().then(users => {
        if (users==0) {
            response.status(400).send("No persons exist in the table.");
        }
        else {
            response.send(users);
        }
        
    })
});

// Adds new person to table
app.post('/persons', function (request, response) {
    var body = request.body;
    User.create(body).then(user => {
        response.send("User added in id:" + user.id);
    });
});

// Deletes a user with given ID (via Body)
app.delete('/persons', function (request, response) {
    var id = request.body.id;
    if (isNaN(id)) {
        response.status(400).send("Invalid ID supplied");
    }
    else {
        User.destroy({
            where: {id: id}
          }).then(result => {
            if (result == 0) {
                response.status(400).send("The ID to be deleted doesn't exist.");
            }
            else {
                response.send("Id: " + id + " deleted.");
            }
          });
    }
});

// Deletes a user with given ID (via Params)
app.delete('/persons/:id', function (request, response) {
    var id = request.params.id;
    if (isNaN(id)) {
        response.status(400).send("Invalid ID supplied");
    }
    else {
        User.destroy({
            where: {
                id: id
            }
          }).then(result => {
            if (result == 0) {
                response.status(400).send("The ID to be deleted doesn't exist.");
            }
            else {
                response.send("Id: " + id + " deleted.");
            }
            
          });
    }
});

// Finds a user with given ID (via Query)
app.get('/persons/id', function (request, response) {
    var id = request.query.id;
    if (isNaN(id)) {
        response.status(400).send("Invalid ID supplied");
    }
    else {
        User.findAll({
            where: {
                id: id
            }
        }).then(user => {
            if (user == 0) {
                response.status(400).send("The ID to be listed doesn't exist.");
            }
            else{
                response.send(user);
            }
        });
    }
});

// Finds a user with given information (Profession,Age)(via Body)
app.get('/persons/:age/:profession', function (request, response) {
    var age = request.params.age;
    var profession = request.params.profession;
    if (profession == null || age == null) {
        response.status(400).send("Some information is missing.");
    }
    else {
        User.findAll({
            where: {
                profession: profession,
                age: age
            }
        }).then(users => {
            if (users == 0) {
                response.status(400).send("No users found with informations introduced.");
            }
            else{
                response.send(users);
            }
        });
    }
});

// Updates a user with given information (via Params(id),Body(info))
app.put('/persons/:id', function (request, response) {
    var id = request.params.id;
    var body = request.body;
    if (isNaN(id)) {
        response.status(400).send("Invalid ID supplied.");
    }
    else {
        User.update(body, {
            where: {
              id: id
            }
          }).then(result => {
              if (result == 0) {
                response.status(400).send("No users were updated.");
              }
              else {
                response.send("Id: " + id + " was updated.");
              }
          });
    }
});