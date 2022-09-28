var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var cors=require('cors')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

var movies = require("./routes/movies");
console.log("app")
app.use("/movies", movies);
app.listen(3000);