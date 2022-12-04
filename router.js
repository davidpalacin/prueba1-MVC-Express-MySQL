const router = require("express").Router();
const ClienteRouter = require("./views/cliente_router");

router.use("/clientes", ClienteRouter);
router.use("/clientes/:id", ClienteRouter);


module.exports = router;