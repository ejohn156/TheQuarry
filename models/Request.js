const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const requestSchema = new Schema({

    serviceID: {type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true, unique: false},
    requesterID: {type: mongoose.Schema.Types.ObjectId, ref: 'Profile', required: true, unique: false},
    status: {type: String, default: 'Pending', required: true},
    comment: {type: String, required: false, unique: false}

});

const Request = mongoose.model("Request", requestSchema);

module.exports = Request;