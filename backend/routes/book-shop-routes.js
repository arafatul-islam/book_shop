const router = require("express").Router();
const {
  createBook,
  getAllBooks,
  updateBook,
  deleteBook,
  getBook,
} = require("../controllers/bookShop.js");
router.route("/book-shop").post(createBook).get(getAllBooks);
router
  .route("/book-shop/:id")
  .patch(updateBook)
  .get(getBook)
  .delete(deleteBook);

module.exports = router;
