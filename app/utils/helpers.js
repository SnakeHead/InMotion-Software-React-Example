var axios = require("axios");

module.exports = {
  saveMovie: function(movieData) {
    return axios.post("/api", movieData);
  },

  getMovieByName: function(movieTitle) {
    return axios.get("/api", movieTitle).then(function(response) {
      return response;
    });
  }

};
