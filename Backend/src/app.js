const express = require("express");
const app = express();

const cors = require("cors")
const cookieParser = require("cookie-parser");


app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}))

// requrie routes
const authRotuer = require("./routes/auth.routes.js");
const postRouter = require("./routes/post.routes.js");
const userRouter = require("./routes/user.routes.js");

app.use((req, res, next) => {
  console.log("Requested URL:", req.originalUrl);
  next();
});

// using routes
app.use("/api/auth", authRotuer);
app.use("/api/user", userRouter);
app.use("/api/post", postRouter);

module.exports = app;