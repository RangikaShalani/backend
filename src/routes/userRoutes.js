const express = require("express");
const { creatNewUser} = require("../controllers/userController");
const router = express.Router();

router.post("/create-user", creatNewUser);

module.exports = router;