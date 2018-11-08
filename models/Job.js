const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    title: {type: String,required: true,unique: false},
    // Description: {type: String,required: true,unique: false},
    // Owner: {type: String,required: true,unique: false},
    // Category:{type: String,required: true,unique: false},
    // Status: {type: String,default: "Pending",require: true,unique: false},
    // date: { type: Date, default: Date.now, unique: false },
    // Estimate:{type: Number,require: false,unique: false}
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;