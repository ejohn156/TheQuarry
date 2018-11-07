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
        required: true,
        trim: true,
        index: {unique: false}
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        index: {unique: false}
    },
    password: {
        type: String,
        required: true,
        trim: true,
        index: {unique: false}
    },
    unccID:{
        type: Number,
        required: true,
        index: {unique: true}
    },
    email: {
        type: String,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
        required: true,
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
        trim: true,
        index: {unique: false}
    },
    work_experience:{
        type: String,
        required: false,
        trim: true,
        index: {unique: false}
    },
    about_me:{
        type: String,
        required: false,
        trim: true,
        index: {unique: false}
    }

});



const User = mongoose.model("User", userSchema);

module.exports = User;