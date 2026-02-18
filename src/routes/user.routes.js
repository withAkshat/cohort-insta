const express = require("express");

const userRouter = express.Router();
const {followUser, unfollowUser} = require("../controllers/user.controller.js")
const identifyUser = require("../middlewares/auth.middleware.js")

/**
* @route POST /api/users/follow/:userId
* @desc follow a user
* @access Private
*/
userRouter.post("/follow/:userId", identifyUser, followUser)

/**
* @route POST /api/users/unfollow/:userId
* @desc unfollow a user
* @access Private
*/
userRouter.post("/unfollow/:userId", identifyUser, unfollowUser)

module.exports = userRouter;