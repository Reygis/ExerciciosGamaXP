const express = require("express");
const produtoController = require('../controllers/produtoController')
const routes = express.Router(); 

routes.get("/produto/lista", produtoController.listarProduto);
routes.post("/produto", produtoController.cadastrarProduto)
routes.delete("/produto/:id/deletar", produtoController.deletarProduto);
routes.put("/produto/:id/atualizar", produtoController.atualizarProduto);

// routes.get("/", (req,res) =>{
//     res.send("Testando 123, testando");
// });

// routes.post("/cadastrar", (req,res) => {
//     console.log(req.body);
//     res.json(req.body);
// })

module.exports = routes;