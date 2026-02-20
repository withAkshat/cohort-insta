const express = require("express");
const { userRegister, userLogin, getMe } = require("../controllers/auth.controller.js");
const identifyUser = require("../middlewares/auth.middleware.js")
const authRotuer = express.Router();

/**
 * POST /api/auth/register
 */
authRotuer.post("/register", userRegister);

/**
 * POST /api/auth/register
 */
authRotuer.post("/login", userLogin);

/**
 * @route GET /api/auth/get-me
 * @desc Get currently logged in user's information
 * @access Private
 */
authRotuer.get("/get-me", identifyUser, getMe)

module.exports = authRotuer;