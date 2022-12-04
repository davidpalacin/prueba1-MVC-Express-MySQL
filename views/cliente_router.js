const router = require("express").Router();
const ClienteController = require("../controllers/cliente_controller");

// end-points
router.get("/", ClienteController.findAll);
router.get("/:id", ClienteController.findById);


module.exports = router;