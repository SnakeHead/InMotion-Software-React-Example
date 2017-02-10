import React from 'react'
// import { Row, Col, Container } from 'react-grid-system'
// import { Card, CardTitle, CardText } from 'material-ui'
// import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
//   from 'material-ui/Table';
// import TextField from 'material-ui/TextField';
// import Toggle from 'material-ui/Toggle';
import SearchBar from '../components/searchBar'
import AddMovie from '../components/addMovie'
import Movie from '../components/movie'
import helpers from '../utils/helpers'

import {Table, Panel, Button} from 'react-bootstrap/lib/';


const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
};

// Create the parent class
export default class Movies extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        movies: [],
        movie: {},

      }

      this.addMovie = this.addMovie.bind(this);
      this.movieSearch = this.movieSearch.bind(this);
      this.deleteMovie = this.deleteMovie.bind(this);
      this.refreshMovies = this.refreshMovies.bind(this);
  }

  refreshMovies() {
    // Get the all the movies.
    let searchTerm = '';

    helpers.getMovieByName({searchTerm}).then(function(response) {
      this.setState({movies: response.data});
    }.bind(this));
  }

  componentDidMount() {
    this.refreshMovies();
  }

  addMovie(newMovie) {
    helpers.saveMovie(newMovie).then(function(response) {
      this.refreshMovies();
    }.bind(this));
  }

  deleteMovie(delMovieId) {
    helpers.deleteMovie(delMovieId).then(function(response) {
      this.refreshMovies();
    }.bind(this));
  }

  movieSearch(searchTerm) {
    helpers.getMovieByName({searchTerm}).then(function(response) {
      this.setState({movies: response.data});
    }.bind(this));
  }

  handleToggle = (event, toggled) => {
      this.setState({
        [event.target.name]: toggled,
      });
    };

  render() {
    return (
      <div>
        <Panel header="Welcome to my movie collection!">
          <SearchBar onSearchTermChanged={this.movieSearch} />
        </Panel>
        <Panel>
          <AddMovie addMovie={this.addMovie}/>
        </Panel>
        <div>
          <Table striped bordered condensed hover >
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Actors</th>
                <th>Year</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              {this.state.movies.map((movie) => <Movie movie={movie} key={movie._id} deleteMovie={this.deleteMovie} /> )}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
