import express from "express";
import product from "./product.route.js";
// import { logger } from "../middlewares/logger.middleware.js";

const routes = express.Router();
//Middlewares use:
//routes.use(logger);
routes.use("/product", product);

export default routes;