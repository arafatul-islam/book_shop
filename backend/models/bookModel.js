const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publisher: { type: String, required: true },
  year: { type: Number, required: true },
  genre: { type: String, required: true },
});

module.exports = mongoose.model("book", BookSchema);
