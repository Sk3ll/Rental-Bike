const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rentals = new Schema({
    name: String,
    typeBike: String,
    price: Number
});

module.exports = mongoose.model("rentals", rentals);