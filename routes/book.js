const express = require("express");
const routes = express.Router();
const bookSchema = require("../models/book");

//POST
//http://localhost:3000/api/v1/books/book
routes.post("/book", (req, res) => {
  const book = bookSchema(req.body);
  book
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});

// GET
// http:localhost:3000/api/v1/books
routes.get("/", (req, res) => {
  bookSchema
    .find()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});

//http://localhost:3000/api/v1/books/parametro
routes.get("/:year_of_birth", (req, res) => {
  const { year_of_birth } = req.params;
  bookSchema
    .find({ "author.personal_data.year_of_birth": year_of_birth })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});

//PUT
routes.put("/:bookId", (req, res) => {
  const { bookId } = req.params;
  const { tittle, editorial, back_matter, author, motto } = req.body;
  bookSchema
    .updateOne(
      { _id: bookId },
      { $set: { tittle, editorial, back_matter, author, motto } }
    )
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});

// DELETE
routes.delete("/:bookId", (req, res) => {
  const { bookId } = req.params;
  bookSchema
    .deleteOne({ _id: bookId })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});


// //http://localhost:3000/api/v1/books/id
// routes.get("/:bookId", (req, res) => {
//   const { bookId } = req.params;
//   bookSchema
//     .findById(bookId)
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((error) => {
//       res.json({ message: error });
//     });
// });
module.exports = routes;
