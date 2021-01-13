const express = require("express");
require("express-async-errors");
const app = express();
app.use(express.json());
require("dotenv").config();
const cors = require("cors");
let { APP_PORT } = process.env;

const { router } = require("./routes/index");
const { errorHandler } = require("./middlewares/errorHandler");
const { NotFoundError } = require("./errors/NotFoundError");
app.use(cors());
app.use(router);
app.all("*", async (req, res) => {
  throw new NotFoundError();
});
app.use(errorHandler);
const port = APP_PORT || 5000;
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
