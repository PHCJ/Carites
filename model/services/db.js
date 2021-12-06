//db.js

async function connect(){
    console.log("MySQL");
    // Confirma se está conectado com a variável global.
    if(global.connection && global.connection.state !== 'disconnected')
      return global.connection;

      const mysql = require("mysql2/promise");
      const connection = await mysql.createConnection("mysql://root:abc123**@localhost:3306/caritesdw");

      console.log("Conectou no MYSQL!!");
      global.connection = connection;
      return connection;
}

module.exports = {connect}

