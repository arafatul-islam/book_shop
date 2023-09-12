const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();

// module import
const bookShopRouter = require("./routes/book-shop-routes.js");
const errorHanderMiddleware = require("./errors/error-handler.js");
const notFoundMiddleware = require("./errors/not-found.js");
// middleware
app.use(express.json());
app.use(cors());

app.use("/api/v1/", bookShopRouter);
app.use(errorHanderMiddleware);
app.use(notFoundMiddleware);

const port = process.env.PORT || 5555;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
