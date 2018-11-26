const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    title: {type: String,required: true,unique: false},
    description: {type: String,required: true,unique: false},
    creator: {type: String,required: true,unique: false},//maybe should change this to id
    creatorID: {type: mongoose.Schema.Types.ObjectId, ref: 'Profile', required: true, unique: false},
    category:{type: String,required: true,unique: false},
    status: {type: String,default: "Pending",require: true,unique: false},
    date: { type: Date, default: Date.now, unique: false },
    estimate:{type: String,require: false,unique: false}
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;