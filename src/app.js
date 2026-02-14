const express = require("express");
const app = express();
const userRouter = require("./routes/auth.routes.js");
const postRouter = require("./routes/post.routes.js");
const cookieParser = require("cookie-parser");


app.use(express.json());
app.use(cookieParser());


app.use("/api/auth", userRouter);
app.use("/api/post", postRouter);

module.exports = app;