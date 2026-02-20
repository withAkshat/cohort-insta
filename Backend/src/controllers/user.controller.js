const followModel = require("../models/follow.model.js");

const followUser = async (req, res) => {

    const followeeUsername = req.params.username;
    const followerUsername = req.user.username

    if(followeeUsername === followerUsername){
        return res.status(404).json({
            message: "User can not follow/unfollow themself!"
        })
    }

    const isFollow = await followModel.findOne({
        follower: followerUsername,
        followee: followeeUsername
    })

    if (isFollow) {

        return res.status(200).json({
            message: `You already follow ${followeeUsername}`
        })
    }

    const followRecord = await followModel.create({
        follower: followerUsername,
        followee: followeeUsername
    })

    res.status(201).json({
        message: `You are now following ${followeeUsername}`,
        follow: followRecord
    })
}


const unfollowUser = async (req, res) => {
    
    const followeeUsername = req.params.username;
    const followerUsername = req.user.username;

    if(followeeUsername === followerUsername){
        return res.status(404).json({
            message: "User can not follow/unfollow themself!"
        })
    }

    const isFollow = await followModel.findOne({
        follower: followerUsername,
        followee: followeeUsername
    })

    if (!isFollow) {
        return res.status(200).json({
            message: `You does not follow ${followeeUsername}`
        })
    }

    const followRecord = await followModel.findByIdAndDelete(isFollow._id)

    res.status(200).json({
        message: `You have sucessfully unfollowed ${followeeUsername}`,
        follow: followRecord
    })
}

const followReq = async (req, res)=>{

    const followeeUsername = req.params.username;
    const followerUsername = req.user.username;

    const {status} = req.body;

    const isFollow = await followModel.findOne({
        follower: followerUsername,
        followee: followeeUsername
    })

    if(!isFollow){
        return res.status(404).json({
            message: "Follow request not found!"
        })
    }

    const followStatus = await followModel.findByIdAndUpdate(isFollow._id,{status});

    res.status(200).json({
        message:"Follow status updated",
        followStatus:followStatus
    })
}

module.exports = { followUser, unfollowUser, followReq }