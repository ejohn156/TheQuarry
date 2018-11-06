const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        index: {unique: true}
    },
    firstName: {
        type: String,
        //required: true,
    },
    lastName: {
        type: String,
        //required: true,
    },
    password: {
        type: String,
        //required: true,
    },
    unccID:{
        type: Number,
        required: "Your Uncc ID is required",
        index: {unique: true}
    },
    email: {
        type: String,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
        required: "Email is required",
        index: {unique: true}
    },
    services: [
        {
            type: Schema.Types.ObjectId,
            ref: "Services"
        }
    ],
    jobs: [
        {
            type: Schema.Types.ObjectId,
            ref: "Jobs"
        }
    ],
    major:{
        type: String,
        required: false,
    },
    work_experience:{
        type: String,
        required: false,
    },
    about_me:{
        type: String,
        required: false,
    }

});



const User = mongoose.model("User", userSchema);

module.exports = User;