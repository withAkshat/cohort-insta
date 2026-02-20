const postModel = require("../models/post.model.js");
const likeModel = require("../models/like.model.js");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const imageKit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function createPost(req, res) {

    const file = await imageKit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer), "file"),
        fileName: 'Test',
        folder: "insta-clone"
    })

    const post = await postModel.create({
        caption: req.body.caption,
        imgUrl: file.url,
        user: req.user.id
    })

    res.status(201).json({
        message: "Post created sucessfully!",
        post
    })


}

async function showPost(req, res) {
    
    const userId = req.user.id;
    const posts = await postModel.find({ user: userId });

    res.status(200).json({
        message: "Posts fetched sucessfullly",
        posts
    })
}

async function postDetails(req, res) {

    const { postId }= req.params;
    const userId = req.user.id; // from token

    const post = await postModel.findById(postId);

    if(!post){
        return res.status(404).json({
            message: "Post not found"
        })
    }

    const isValidUser = post.user.toString() === userId;

    if(!isValidUser){
        return res.status(403).json({
            message: "Forbidden Content"
        })
    }

    res.status(200).json({
        message:"Post fetched!",
        post
    })
}

async function likePost(req, res){

    const postId = req.params.postId;
    const username = req.user.username;

    const isPostFound = await postModel.findById(postId);

    if(!isPostFound){
        return res.status(404).json({
            message: "Post not found"
        })
    }

    const isAlreadyLiked = await likeModel.findOne({
        post: postId,
        user : username,
    })

    if(isAlreadyLiked){
        return res.status(200).json({
            message: `Post already liked!`
        })
    }

    const likeRecord = await likeModel.create({
        post: postId,
        user : username,
    })

    res.status(200).json({
        message:"Post liked sucessfully",
        likeRecord
    })
}


module.exports = { createPost, showPost, postDetails, likePost }