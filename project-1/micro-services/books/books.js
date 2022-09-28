var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var cors = require("cors");
var PORT = 3000;

var mongoose = require("mongoose");
const url = `mongodb+srv://admin:admin%40atlas@cluster0.2zdrkni.mongodb.net/?retryWrites=true&w=majority`;
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./Book");
var Book = mongoose.model("Book");

//get all books
app.get("/books", (req, res) => {
  Book.find().then((books) => {
    if (books.length == 0) {
      res.send("No books available in Library");
    } else {
      res.json(books);
    }
  });
});

//get book by id
app.get("/book/:id", (req, res) => {
  var bookId = req.params.id;
  Book.findOne({ _id: bookId }).then((book) => {
    res.json(book);
  });
});

//new book
app.post("/book", (req, res) => {
  var newBook = {
    bookName: req.body.bookName,
    author: req.body.author,
    numberOfPages: req.body.numberOfPages,
    publisher: req.body.publisher,
  };
  var book = new Book(newBook);

  book
    .save()
    .then((book) => {
      console.log(book);
      res.json("new book added successfully");
    })
    .catch((err) => {
      console.log("err occured whilesaving book in db" + err);
    });
});

//delete book by id
app.delete("/book/:id", (req, res) => {
  var bookId = req.params.id;
  Book.findOneAndDelete({ _id: bookId }).then((book) => {
    res.json(book.bookName + " Book is deleted");
  });
});

//connections
app.listen(3000, () => {
  console.log("server is running at port: " + PORT);
  mongoose
    .connect(url, connectionParams)
    .then(() => {
      console.log("db connected");
    })
    .catch((e) => {
      console.log("error occured while connecting to mongoDB " + e);
    });
});
