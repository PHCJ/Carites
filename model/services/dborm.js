//db-orm.js

const Sequelize = require('sequelize');
const sequelize = new Sequelize('caritesdw', 'root', 'abc123**', {dialect: 'mysql', host: 'localhost', port:3306})


module.exports = {sequelize}