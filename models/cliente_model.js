const Model = require("./model");
const conn = require("../db/db");


class Cliente extends Model {
    #nombre
   constructor(nombre) {
    this.#nombre = nombre;
   }

   static findById(id, callback) {
      let query = `SELECT * FROM Clientes WHERE id=${id};`;
      console.log(query);

      conn.query(query, (err, results) => {
         if (err) {
            callback(err, null);
         } else {
            callback(err, results);
         }
      });
   }
}

module.exports = Cliente;