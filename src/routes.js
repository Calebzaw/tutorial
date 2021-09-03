import express from "express";
import tipo from './Routes/tipoRoutes.js'
import produto from './Routes/produtoRoutes.js'

const routes = express.Router();

routes.use("/tipo", tipo);
routes.use("/produto", produto);

export default routes;

