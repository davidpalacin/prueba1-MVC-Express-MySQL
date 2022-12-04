const mysql = require("mysql2");
const dbConfig = require("../config/config.json");

// crear la conexion con la base de datos
const conn = mysql.createConnection({
   host: dbConfig.host,
   port: dbConfig.port,
   user: dbConfig.user,
   password: dbConfig.password,
   database: dbConfig.database,
});

// abrir la conexion
conn.connect((err) => {
   if (err) throw err;
   console.log(`Connected to ${dbConfig.database}`);
});

module.exports = conn;