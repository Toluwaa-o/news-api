require("dotenv").config();
require("express-async-errors");

const express = require("express");
const morgan = require("morgan");
const errorHandler = require("./middleware/error-handler");
const notFound = require("./middleware/not-found");

const NewsRoutes = require("./routes/GetNews");

const app = express();

app.use(morgan("tiny"));

app.use(errorHandler);
app.use(notFound);

app.use("/my-news-api/v1", NewsRoutes);
const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () => console.log(`App listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
