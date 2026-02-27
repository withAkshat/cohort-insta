const express = require("express");
const {createPost, showPost, postDetails, likePost, unLikePost, getAllPosts} = require("../controllers/post.controller.js");
const identifyUser = require("../middlewares/auth.middleware.js");
const multer  = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

const postRouter = express.Router();

postRouter.post("/", identifyUser, upload.single("img"), createPost)
postRouter.get("/", identifyUser, showPost)

/**
* @route GET/api/post/details/:postId
* @description get details about specific post with the id and also check whether the post belongs to the user that the request comes from
 **/
postRouter.get("/details/:postId", identifyUser, postDetails)

/**
 * @route POST api/post/like/:postId
 * @description like a post with id porvided in the params
 */
postRouter.post("/like/:postId", identifyUser, likePost)

/**
 * @route POST api/post/unlike/:postId
 * @description like a post with id porvided in the params
 */
postRouter.post("/unlike/:postId", identifyUser, unLikePost)

/**
 * @route GET api/post/feed
 * @desc shows all posts created in db
 * @access private
 */

postRouter.get("/feed", identifyUser, getAllPosts)


module.exports = postRouter;