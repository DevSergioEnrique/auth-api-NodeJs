const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createConnection({
    host : process.env.HOST ?? "localhost",
    user : process.env.USER ?? "root",
    password: process.env.PASSWORD ?? "",
    database : process.env.DATABASE ?? "users"
})

// Establece la conexión
connection.connect((error) => {
    if (error) {
      console.error('Error al conectar a la base de datos:', error);
      return;
    }
    console.log('Conexión exitosa a la base de datos.');
  });

module.exports = connection;