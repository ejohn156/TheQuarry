const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    Title: {
        type: String,
        required: true,
        index: {unique: false}
     },
    Description: {
        type: String,
        required: true,
        index: {unique: false}
    },
    Owner: {
        type: String,
        required: true,
        index: {unique: false}
    },
    Category:{
        type: String,
        required: true,
        index: {unique: false}
    },
    Status: {
        type: String,
        default: "Pending",
        require: true,
        index: {unique: false}
    },
    Created_at:{
        type: Date,
        required: true,
        default: Date.now,
        index: {unique: false}
    },
    Estimate:{
        type: Number,
        require: false,
        index: {unique: false}
    }
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;