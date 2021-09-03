import express from "express";
import tipo from '../Controllers/tipoController.js'
const routes = express.Router();

routes.get("/", tipo.getAll);
routes.get("/:idtipo", tipo.getOne);
routes.post("/", tipo.add);
routes.put("/:idtipo", tipo.update);
routes.delete("/:idtipo", tipo.delete);

export default routes;