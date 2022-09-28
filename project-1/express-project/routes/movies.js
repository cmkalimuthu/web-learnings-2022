var express = require("express");
var router = express.Router();

var movies = [
  { id: 101, name: "Fight Club", year: 1999, rating: 8.1 },
  { id: 102, name: "Inception", year: 2010, rating: 8.7 },
  { id: 103, name: "The Dark Knight", year: 2008, rating: 9 },
  { id: 104, name: "12 Angry Men", year: 1957, rating: 8.9 },
];

//to get all movies list from db
router.get("/", (req, res) => {
  res.json(movies);
});

//to get movie using movie id
router.get("/:id([0-9]{3,})", (req, res) => {
  var curMovie = movies.filter((movie) => {
    if (movie.id == req.params.id) return true;
  });
  if (curMovie.length == 1) {
    res.json(curMovie[0]);
  } else {
    res.status(404);
    res.json({ message: "movie not found in directory" });
  }
});

//to add new movie to directory
router.post("/", (req, res) => {
  var movie = req.body;
  if (!req.body.name) {
    res.status(400);
    res.json({ message: "bad request" });
  } else {
    var newId = movies[movies.length - 1].id + 1;
    movies.push({
      id: newId,
      name: movie.name,
      year: movie.year,
      rating: movie.rating,
    });
    res.json({ message: "New movie added.", location: "/movies/" + newId });
  }
});

//to update an existing movie
router.put("/:id([0-9]{3,})", (req, res) => {
  var movie = req.body;
  if (
    !movie.name ||
    !movie.year.toString().match(/^[0-9]{4}$/g) ||
    !movie.rating.toString().match(/^[0-9]\.[0-9]$/g)
  ) {
    res.status(400);
    res.json({ message: "bad request" });
  } else {
    var updatedIndex = movies
      .map((movie) => {
        return movie.id;
      })
      .indexOf(parseInt(req.params.id));
  }

  if (updatedIndex == -1) {
    movies.push({
      id: req.params.id,
      name: movie.name,
      year: movie.year,
      rating: movie.rating,
    });

    res.json({ message: "New movie added.", location: "/movies/" + movie.id });
  } else {
    movies[updatedIndex] = {
      id: req.params.id,
      name: movie.name,
      year: movie.year,
      rating: movie.rating,
    };

    res.json({
      message: "Movie Id " + req.params.id + " updated",
      location: "/movies/" + movie.id,
    });
  }
});

router.delete("/:id([0-9]{3,})", (req, res) => {
  var deleteIndex = movies
    .map((movie) => {
      return movie.id;
    })
    .indexOf(parseInt(req.params.id));

  if (deleteIndex == -1) {
    res.json({ message: "No record found " });
  } else {
    movies.splice(deleteIndex, 1);
    res.send({ message: "Movie id" + req.params.id } + " removed");
  }
});

module.exports = router;
