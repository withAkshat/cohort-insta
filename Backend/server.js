require("dotenv").config();
const app = require("./src/app.js");
const connectDB = require("./src/config/database.js")
// const express = require("express");

const PORT = process.env.PORT;
connectDB()

app.listen(PORT, (req, res)=>{
    console.log("listening at port 3000!")
});

app.get("/", (req, res)=>{
    res.send("Working fine!")
});