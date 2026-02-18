const express = require("express");
const { userRegister, userLogin } = require("../controllers/auth.controller.js");
const authRotuer = express.Router();

authRotuer.post("/register", userRegister);
authRotuer.post("/login", userLogin);

module.exports = authRotuer;