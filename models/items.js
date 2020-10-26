const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const items = new Schema({
    name: String,
    typeBike: String,
    price: Number
});

module.exports = mongoose.model("items", items);