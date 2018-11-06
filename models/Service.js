const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
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
    Created_at:{
        type: Date,
        required: true,
        default: Date.now
    },
    hourly:{
        type: Number.parseFloat,
        require: false,
    }
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;