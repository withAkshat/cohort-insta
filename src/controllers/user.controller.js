const followModel = require("../models/follow.model.js");

const followUser = async (req, res) => {

    const followeeUsername = req.params.username;
    const followerUsername = req.user.username

    const isFollow = await followModel.find({
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
    const followerUsername = req.user.username

    const isFollow = await followModel.find({
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

module.exports = { followUser, unfollowUser }