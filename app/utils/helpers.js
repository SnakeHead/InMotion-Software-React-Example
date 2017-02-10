var axios = require("axios");

module.exports = {
  // save/update movie data
  saveMovie: function(movieData) {
    return axios.post("/api/save", movieData);
  },

  // Search for a movie by title
  getMovieByName: function(searchTitle) {
    return axios.get("/api/search/?t=" + searchTitle.searchTerm).then(function(response) {
      return response;
    });
  },

  // Search for a movie by ID
  getMovieByID: function(movieID) {
    return axios.get("/api/getMovieByID/?id=" + movieID).then(function(response) {
      return response;
    });
  },

  // Delete a movie by ID
  deleteMovie: function(deleteMovie) {
    return axios.request({
      url: '/api/deleteMovie/',
      method: 'delete',
      data: ( deleteMovie : deleteMovie )
    }).then(function(response) {
      return response;
    });
    }
};
