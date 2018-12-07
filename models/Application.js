const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const applicationSchema = new Schema({

    jobTitle: {type: String, required: true, unique: false},
    jobCreator: {type: String, required: true, unique: false},
    jobEstimate: {type: String, required: true, unique: false},
    jobCategory: {type: String, required: true, unique: false},
    applicantID: {type: String, required: true, unique: false},
    recipientID: {type: String, required: true, unique: false},
    status: {type: String, default: 'Pending', required: true},
    comment: {type: String, required: false, unique: false}

});

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;