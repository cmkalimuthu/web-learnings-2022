const Book = require("../models/Book");
// const Book = mongoose.model("Book");

module.exports = {
  getAllBooks: async () => {
    return new Promise((resolve, reject) => {
      Book.find()
        .then((books) => {
          let data = books;
          if (!books.length) {
            data = { message: "No Books available in library" };
          }
          resolve(data);
        })
        .catch((err) => {
          console.log(`${err} in getAllBooks function`);
          reject(err);
        });
    });
  },

  //get book by id
  getBookById: async (bookId) => {
    return new Promise((resolve, reject) => {
      Book.findOne({ _id: bookId })
        .then((book) => {
          let data = book;
          if (!book) {
            data = { message: "Invalid book id" };
          }
          resolve(data);
        })
        .catch((err) => {
          console.log(`${err} in getBookById function`);
          reject(err);
        });
    });
  },

  //new book
  createBook: async (newBook) => {
    return new Promise((resolve, reject) => {
      var book = new Book(newBook);

      book
        .save()
        .then((book) => {
          resolve(book);
        })
        .catch((err) => {
          console.log(`${err} in createBook function`);
          reject(err);
        });
    });
  },

  //   //delete book by id
  deleteBookById: async (bookId) => {
    return new Promise((resolve, reject) => {
      Book.findOneAndDelete({ _id: bookId })
        .then((book) => {
          resolve({ message: `Book ${book.bookName} is deleted ` });
        })
        .catch((err) => {
          console.log(`${err} in createBook function`);
          reject(err);
        });
    });
  },
};
