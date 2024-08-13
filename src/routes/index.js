const { Router } = require("express");
const { creatNewUser} = require("../controllers/userController")


const routes = Router();

routes.use.post("/create-user", creatNewUser);

module.exports = routes;