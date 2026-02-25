const mongoose = require("mongoose")

const followSchema = new mongoose.Schema({
    follower:{
        type: String,
        required: [true, "Follower is required"]
    },

    followee:{
        type: String,
        required: [true, "Followee is required"]
    },

    status:{
        type:String,
        default: "pending",
        enum: {
            values: ["accepted", "pending", "rejected"],
            message: "status can only be pending, accepted/rejected"
        }
    }

}, {timestamps: true})

const followModel = mongoose.model("follows", followSchema)

module.exports = followModel;