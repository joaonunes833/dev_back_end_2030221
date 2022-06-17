module.exports = (sequelize, type) => {
    return sequelize.define('users', {
        fullname: type.TEXT,
        date: type.TEXT,
        age: type.INTEGER
    });  
};