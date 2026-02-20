const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username:{
    type:String,
    unique: [true, "User already exists!"],
    required: [true, "Enter user credentials"]
  },
  email:{
    type:String,
    unique: [true, "User already exists!"],
    required: [true, "Enter user credentials"]
  },
  password:{
    type:String,
    required:[true, "Enter user credentials"]
  }, 
  bio: String,
  profileImage:{
    type:String,
    default:"https://ik.imagekit.io/yappingBest/vecteezy_default-profile-account-unknown-icon-black-silhouette_20765399.jpg"
  }
});


const userModel = mongoose.model("user", userSchema);

module.exports = userModel;