const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const bookRoute = require("./routes/router");
const dotenv = require("dotenv");
const morgan = require("morgan");
const db = require("./service/db");

const PORT = process.env.PORT || 3000;

//midlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//env config
dotenv.config({ path: "./config/config.env" });

//logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//db connection
db.init();

//routes
app.use("/", bookRoute);

//connections
app.listen(3000, () => {
  console.log("server is running at port: " + PORT);
});
