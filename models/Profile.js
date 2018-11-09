const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    username: {type: String,required: true,trim: true,unique: true},
    firstName: {type: String,required: true,trim: true,unique: false},
    lastName: {type: String,required: true,trim: true,unique: false},
    password: {type: String,required: true,trim: true,unique: false},
    unccID:{type: Number,required: true,unique: true},
    email: {type: String,match: [/.+@.+\..+/, "Please enter a valid e-mail address"],required: true,unique: true},
    services: [{type: Schema.Types.ObjectId,ref: "Service",unique : false}],
    jobs: [{type: Schema.Types.ObjectId,ref: "Job",unique : false}, ],
    major:{type: String,required: false,trim: true,unique: false},
    work_experience:{type: String,required: false,trim: true,unique: false},
    about_me:{type: String,required: false,trim: true,unique: false},
    date: { type: Date, default: Date.now, unique: false }
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;