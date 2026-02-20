const express = require("express");

const userRouter = express.Router();
const {followUser, unfollowUser, followReq} = require("../controllers/user.controller.js")
const identifyUser = require("../middlewares/auth.middleware.js")

/**
* @route POST /api/users/follow/:userId
* @desc follow a user
* @access Private
*/
userRouter.post("/follow/:username", identifyUser, followUser)

/**
* @route POST /api/users/unfollow/:userId
* @desc unfollow a user
* @access Private
*/
userRouter.post("/unfollow/:username", identifyUser, unfollowUser)

userRouter.post("/isfollowreq/:username", identifyUser, followReq)

module.exports = userRouter;