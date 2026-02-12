const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const userModel = require("../models/user.model");
const { log } = require("console");

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
            message: "User already exists!"
        })
        return;
    }

    const user = await userModel.create({
        username,
        email,
        password: crypto.createHash("sha256").update(password).digest("hex"),
        bio,
        profileImage
    })

    const token = jwt.sign({
        email
    }, process.env.JWT_SECRET)

    res.status(201).json({
        message: "User registered sucessfully!",
        email: user.email,
        username: user.username,
        token
    })

}


const userLogin = async (req, res) => {
    const { email, username, password } = req.body;

    const isUserExists = await userModel.findOne({
        $or: [
            { email: email },
            { username: username }
        ]
    })
    console.log(isUserExists);
    if (!isUserExists) {

        res.status(409).json({
            message: "User does not exist!"
        })

        return;
    }

    const isPasswordMatched = isUserExists.password == crypto.createHash("sha256").update("password").digest("hex");

    if (!isPasswordMatched) {
        res.status(401).json({
            message: "Invalid Credentials!"
        })
        return;
    }

    const token = jwt.sign(

        { id: isUserExists._id },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    );

    res.status(200).cookie("jwt_token", token).json({
        message: "User logined!",
        user: {
            username: isUserExists.username,
            email: isUserExists.email,
        },
        token
    })

}

module.exports = { userRegister, userLogin };

