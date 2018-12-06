const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const applicationSchema = new Schema({

    jobID: {type: String, required: true, unique: false},
    applicantID: {type: String, required: true, unique: false},
    status: {type: String, default: 'Pending', required: true},
    comment: {type: String, required: false, unique: false}

});

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;