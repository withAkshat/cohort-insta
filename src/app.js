const express = require("express");
const app = express();
const userRouter = require("./routes/auth.routes.js");


app.use(express.json());
app.use("/api/auth", userRouter);

module.exports = app;