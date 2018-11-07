const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
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
    Created_at:{
        type: Date,
        required: true,
        default: Date.now,
        index: {unique: false}
    },
    hourly:{
        type: Number,
        require: false,
        index: {unique: false}
    }
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;