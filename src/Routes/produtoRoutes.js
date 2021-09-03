import express from "express";
import produto from '../Controllers/produtoController.js'
const routes = express.Router();

routes.get("/", produto.getAll);
routes.get("/:idproduto", produto.getOne);
routes.post("/", produto.add);
routes.put("/:idproduto", produto.update);
routes.delete("/:idproduto", produto.delete);

export default routes;
