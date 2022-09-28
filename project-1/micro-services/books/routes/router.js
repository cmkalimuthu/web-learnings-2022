const express = require("express");
const router = express.Router();
const bookService = require("../service/book");

//get all books
router.get("/books", async (req, res) => {
  await bookService
    .getAllBooks()
    .then((books) => {
      if (!books.message) res.json(books);
      else res.json(books.message);
    })
    .catch((err) => {
      res.json({ message: "something went wrong" });
    });
});

//get book by id
router.get("/book/:id", async (req, res) => {
  const bookId = req.params.id;
  if (bookId.length !== 24) res.json({ message: "Invalid bookId" });
  else {
    await bookService
      .getBookById(bookId)
      .then((book) => {
        if (!book.message) res.json(book);
        else res.json(book.message);
      })
      .catch((err) => {
        res.json({ message: "something went wrong" });
      });
  }
});

//new book
router.post("/book", async (req, res) => {
  const body = req.body;
  if (body.bookName && body.author && body.numberOfPages && body.publisher) {
    var newBook = {
      bookName: req.body.bookName,
      author: req.body.author,
      numberOfPages: req.body.numberOfPages,
      publisher: req.body.publisher,
    };
    await bookService
      .createBook(newBook)
      .then((book) => {
        if (!book.message) res.json(book);
        else res.json(book.message);
      })
      .catch((err) => {
        res.json({ message: "something went wrong" });
      });
  } else {
    res.json({ message: "Missing Request data !" });
  }
});

//delete book by id
router.delete("/book/:id", async (req, res) => {
  var bookId = req.params.id;
  if (bookId.length !== 24) res.json({ message: "Invalid bookId" });
  else {
    await bookService
      .deleteBookById(bookId)
      .then((book) => {
        if (book.message) res.json(book);
        else res.json({ message: "book deletion failed !" });
      })
      .catch((err) => {
        res.json({ message: "something went wrong" });
      });
  }
});

module.exports = router;
