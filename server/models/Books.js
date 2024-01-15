const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let books = new Schema({
    author: String,
    name: String,
    pages: Number
});

module.exports = mongoose.model("Books", books);