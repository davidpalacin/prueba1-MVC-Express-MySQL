const conn = require("../db/db");

class Model {
   constructor() {}

   static findAll(table, callback) {
      let query = `SELECT * FROM ${table}`;

      conn.query(query, (err, results) => {
         if (err) {
            callback(err, null);
         } else {
            callback(err, results);
         }
      });
   }
}

module.exports = Model;