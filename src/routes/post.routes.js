const express = require("express");
const {createPost, showPost, postDetails} = require("../controllers/post.controller.js");
const postRouter = express.Router();
const multer  = require('multer');
const upload = multer({ storage: multer.memoryStorage() });


postRouter.post("/", upload.single("img"), createPost)
postRouter.get("/posts", showPost)
postRouter.get("/details/:postId", postDetails)

module.exports = postRouter;