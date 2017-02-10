'use strict';

// Modules
var express = require(`express`);
var path = require(`path`);
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var Promise = require("bluebird");

mongoose.Promise = Promise;

var Movie = require('./models/movieModel');

// Express Port/App Declaration
var PORT = process.env.PORT || 3000;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost/inmotion_movies');
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// Routes
app.get("/api/search", function(req, res) {
  var movieTitle = req.query.t || '';
  // We will find all the mmovies & sort them in ascending title order.
  // This is using regex to find movies where the title begins with...
  Movie.find({
    '$or': [{
        title: {$regex : movieTitle, '$options' : 'i'}
      }, {
        genre: {$regex : movieTitle, '$options' : 'i' }
      }, {
        actors: {$regex : movieTitle, '$options' : 'i'}
      }]

    //  title: {$regex : movieTitle, '$options' : 'i' }
   }).sort([
    ["title", "ascending"]
  ]).exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

app.get("/api/getMovieByID", function(req, res) {
  var movieID = req.query.id || '';
  // We will get the movie with the passed id.
  Movie.find({ _id: movieID }).exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});


app.get(`*`, function(req, res) {
  res.sendFile('public/index.html', { root: __dirname });
});


app.post("/api/save", function(req, res) {
  var movieID = req.body._id;
  const {title, genre, actors, year, rating} = req.body;
  // Note how this route utilizes the findOneAndUpdate function to update the movie
  // { upsert: true } is an optional object we can pass into the findOneAndUpdate method
  // If included, Mongoose will create a new document matching the description if one is not found
  Movie.findOneAndUpdate({
    _id: movieID || mongoose.Types.ObjectId()
  }, {
    $set: {
      title: title,
      genre: genre,
      actors: actors,
      year: year,
      rating: rating
    }
  }, { upsert: true, setDefaultsOnInsert: true }).exec(function(err) {

    if (err) {
      console.log(err);
    }
    else {
      res.send("Updated Movie!");
    }
  });
});

app.delete("/api/deleteMovie", function (req, res) {
  Movie.remove({ _id: req.body }, function(err) {
    if (err) {
      console.log(err);
    }
    else {
      res.send("Deleted Movie!");
    }
  });
});



// Connection to PORT
app.listen(PORT, function() {
  console.log(`Listening On Port: ${PORT}`);
});
