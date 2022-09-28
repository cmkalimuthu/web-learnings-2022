const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const cookies = require('cookie-parser')

app.use(bodyParser.json()); //to get body from req
app.use(bodyParser.urlencoded({ extended: true })); //query strings

//res.cookie('token',token); for cookie storage and clear cookie for session out

app.get("/app", (req, res) => {
  res.json("hello welcome to express jwt");
});

app.post("/app/posts", verifyToken, (req, res) => {
  const token = req.token;
  console.log(token);
  jwt.verify(token, "secretkey", (err, authData) => {
    res.json(authData);//user details and iat time when token created
  });
});

//middlewares
function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (bearerHeader !== undefined) {
    req.token = bearerHeader.toString().split(" ")[1];
    next();
  } else {
    res.json("Authorization required");
  }
}

app.post("/app/login", (req, res) => {
  const user = req.body;
  if (user !== undefined && user.username && user.id && user.email) {
        //expiresIn: "10h" // it will be expired after 10 hours
        //expiresIn: "20d" // it will be expired after 20 days
        //expiresIn: 120 // it will be expired after 120ms
        //expiresIn: "120s" // it will be expired after 120s
    jwt.sign({ user: user }, "secretkey",{expiresIn:"120s"}, (err, token) => {
      if (err) console.log(err);
      res.json(token);
    });
  } else {
    res.json("Invalid request");
  }
});

app.listen(8080, () => {
  console.log("app is running in localhost");
});
