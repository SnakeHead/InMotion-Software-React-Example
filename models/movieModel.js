// require mongoose
var mongoose = require('mongoose');

// create the Schema class
var Schema = mongoose.Schema;

// instantiate a new Schema, MovieSchema
var MovieSchema = new Schema({
    movietitle: {
        type: String,
        trim: true,
        required: "Movie Title is Required"
    },
    genre: {
        type: String,
        trim: true,
        required: "Genre is Required"
    },
    actors: {
        type: String,
        trim: true,
        required: "Actors Are Required"
    },
      year: {
        type: Number,
    },
    rating: {
        type: String,
    },

    // movieCreated: just the current date
    movieCreated: {
        type: Date,
        default: Date.now
    }
});

var Movie = mongoose.model("Movie", MovieSchema);

module.expoerts = Movie
