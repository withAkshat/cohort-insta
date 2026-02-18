const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");


app.use(express.json());
app.use(cookieParser());


// requrie routes
const authRotuer = require("./routes/auth.routes.js");
const postRouter = require("./routes/post.routes.js");
const userRouter = require("./routes/user.routes.js");

// using routes
app.use("/api/auth", authRotuer);
app.use("/api/users", userRouter);
app.use("/api/post", postRouter);

module.exports = app;