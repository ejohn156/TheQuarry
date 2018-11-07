const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    Title: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Owner: {
        type: String,
        required: true
    },
    Category:{
        type: String,
        required: true
    },
    Status: {
        type: String,
        default: "Pending",
        require: true,
    },
    Created_at:{
        type: Date,
        required: true,
        default: Date.now
    }
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;