const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
    title: {type: String,required: true,unique: false},
    // Description: {type: String,required: true,unique: false},
    // Owner: {type: String,required: true,unique: false},
    // Category:{type: String,required: true,unique: false},
    // date: { type: Date, default: Date.now, unique: false },
    // hourly:{type: Number,require: false,unique: false}
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;