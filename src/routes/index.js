const { Router } = require("express");
const userRoutes = require("./userRoutes");


const routes = Router();

routes.use("/app", userRoutes);

module.exports = routes;