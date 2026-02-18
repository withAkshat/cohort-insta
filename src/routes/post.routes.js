const express = require("express");
const {createPost, showPost, postDetails} = require("../controllers/post.controller.js");
const identifyUser = require("../middlewares/auth.middleware.js");
const multer  = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

const postRouter = express.Router();

postRouter.post("/", identifyUser, upload.single("img"), createPost)
postRouter.get("/", identifyUser, showPost)
postRouter.get("/details/:postId", identifyUser, postDetails)

module.exports = postRouter;