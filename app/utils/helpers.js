var axios = require("axios");

module.exports = {
  // save/update movie data
  saveMovie: function(movieData) {
    return axios.post("/api", movieData);
  },

  // Search for a movie by title
  getMovieByName: function(searchTitle) {
    return axios.get("/api/search/?t=" + searchTitle.searchTerm).then(function(response) {
      return response;
    });
  }

};
