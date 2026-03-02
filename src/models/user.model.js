const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:[true,"Username is already taken."],
        required :true,
    },

    email: {
        type: String,
        unique: [true, "An account already exists with this email."],
        required: true
    },

    password: {
        type: String,
        required: true
    }
});

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;