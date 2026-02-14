const postModel = require("../models/post.model.js");
const jwt = require("jsonwebtoken");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const imageKit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function createPost(req, res) {
    
    const token = req.cookies.jwt_token;
    

    if(!token){
        
        return res.status(401).json({
            message: "Token not provided, Unauthorized access!"
        })
    }

    let decoded = null;

    try{
        decoded = jwt.verify(token, process.env.JWT_SECRET) // { id: 'userId', iat: 1770993878, exp: 1771080278 }

    }catch(err){
        return res.status(401).json({
            message: "Unauthorized: Access token is invalid or expired"

        })
    }
    
    const file = await imageKit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer), "file"),
        fileName: 'Test',
        folder: "insta-clone"
    })

    const post = await postModel.create({
        caption: req.body.caption,
        imgUrl: file.url,
        user:decoded.id
    })

    res.status(201).json({
        message: "Post created sucessfully!",
        post
    })

    
}

module.exports = { createPost }