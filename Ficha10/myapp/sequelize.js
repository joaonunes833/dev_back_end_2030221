// Connect and authenticate to DB using Sequelize in JS code
const Sequelize = require('sequelize');

// Models
const PersonModel = require('./models/person');

const sequelize = new Sequelize('ficha09', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

const Person = PersonModel(sequelize, Sequelize);
// const Invoice = InvoiceModel(sequelize, Sequelize);

// Synchronize the Models with the Database
// Person.sync({ force: false }).then(() => {
//     return Person.create({
//       firstName: 'John',
//       lastName: 'Hancock',
//       profession: 'IT',
//       age: 49
//     });
// });

sequelize.authenticate().then(() => {
    console.log("Connection has been established");
}).catch(err => {
    console.error("Unable to connect", err);
});

module.exports = {Person};
