var axios = require("axios");

module.exports = {
  saveMovie: function(movieData) {
    return axios.post("/api", movieData);
  }
};
