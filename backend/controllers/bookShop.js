const Book = require("../models/bookModel.js");
const CustomApiError = require("../middleware/custom-error.js");

const createBook = async (req, res) => {
  const { title, author, publisher, year, genre } = req.body;
  Object.values(req.body).map((value) => {
    if (!value) {
      throw new CustomApiError("all fields must be provided");
    }
  });
  res.send({ title, author, publisher, year, genre });
};

const getAllBooks = async (req, res) => {
  res.status(201).json({ message: "all books show list" });
};

const updateBook = async (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `updateBook book id: ${id} ` });
};
const getBook = async (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `getBook book id: ${id} ` });
};
const deleteBook = async (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `deleteBook book id: ${id} ` });
};
module.exports = { createBook, getAllBooks, updateBook, deleteBook, getBook };
