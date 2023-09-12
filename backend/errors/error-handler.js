const CustomApiError = require("../middleware/custom-error.js");
const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomApiError) {
    res.status(401).json({ message: err.message });
  }

  res.status(500).json("something went wrong! Try again.");
};

module.exports = errorHandler;
