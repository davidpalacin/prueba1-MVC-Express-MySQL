const Cliente = require("../models/cliente_model");
const ClienteController = {};

ClienteController.findAll = (req,res) => {
    Cliente.findAll("Clientes", (error, response)=>{
        if(response){
            res.json(response);
        }else{
            res.status(404).send({
                message: "Cannot find any Client",
            });
            console.log(error);
        }
    });
}

ClienteController.findById = (req,res) => {
    Cliente.findById(req.params.id, (error, response)=>{
        if(response){
            res.json(response);
        }else{
            res.status(404).send({
                message: `Cant find client with id: ${req.params.id}`,
            });
            console.log(error);
        }
    });
}

module.exports = ClienteController;