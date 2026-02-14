const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userModel = require("../models/user.model");


const userRegister = async (req, res) => {
    const { username, email, password, bio, profileImage } = req.body;

    const isUserExists = await userModel.findOne({
        $or: [
            { email },
            { username }
        ]
    })

    if (isUserExists) {
        res.status(409).json({
            message: "User already exists!" + (isUserExists == email ? "email already exists" : "username already exists")
        })
        return;
    }

    const hash = await bcrypt.hash(password, 10);

    const user = await userModel.create({
        username,
        email,
        password: hash,
        bio,
        profileImage
    })

    const token = jwt.sign(
        {email}, 
        process.env.JWT_SECRET,
        {expiresIn:"1d"}
    )

    res.status(201).cookie("jwt_token", token).json({
        message: "User registered sucessfully!",
        user: {
            email: user.email,
            username: user.username,
            bio: user.bio,
            profileImage: user.profileImage
        },
        token
    })

}


const userLogin = async (req, res) => {
    const { email, username, password } = req.body;

    const user = await userModel.findOne({
        $or: [
            { email: email },
            { username: username }
        ]
    })

    if (!user) {
        res.status(409).json({
            message: "User does not exist!"
        })
        return;
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
        res.status(401).json({
            message: "Invalid Credentials!"
        })
        return;
    }

    const token = jwt.sign(

        { id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    );

    res.status(200).cookie("jwt_token", token).json({
        message: "User logined!",
        user: {
            username: user.username,
            email: user.email,
        },
        token
    })

}

module.exports = { userRegister, userLogin };

