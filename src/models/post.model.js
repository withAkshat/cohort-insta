const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    caption: {
        type:String,
        required: true
    },
    
    imgUrl: {
        type:String,
        required: true
    },

    user: {
        ref: "users",
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "user id is required for creating a post!"]
    }
})

const postModel = mongoose.model("posts", postSchema);

module.exports = postModel;