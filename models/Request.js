const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const requestSchema = new Schema({

    serviceID: {type: String, ref: 'Service', required: true, unique: false},
    requesterID: {type: String, required: true, unique: false},
    status: {type: String, default: 'Pending', required: true},
    comment: {type: String, required: false, unique: false}

});

const Request = mongoose.model("Request", requestSchema);

module.exports = Request;