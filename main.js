const express = require("express");
const router = require("./router");

const app = express();
const PORT = 3000;

// recibir json
app.use(express.json());

// rutas
app.get("/", (req, res) => {
   //localhost:3000
   res.send("Página inicial, prueba a hacer alguna llamada a la API");
});

app.use(router);

// iniciar servidor
app.listen(PORT, () => {
   console.log(`Listening in port ${PORT}`);
});