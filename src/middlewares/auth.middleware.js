const jwt = require("jsonwebtoken");

async function identifyUser(req, res, next){

    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "Token not provided, Unauthorized access!"
        })
    }

    let decoded = null;
    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET);
    }
    catch (e) {
        res.status(403).json({
            message: "Unauthorized: Access token is invalid or expired"
        })
    }

    req.user = decoded;

    console.log("aaya tha mai yahan!");
    
    next();
}

module.exports = identifyUser;