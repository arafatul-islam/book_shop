const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

// module import

// middleware
app.use(express.json());
app.use(cors());

const app = express();

const port = process.env.PORT || 5555;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
