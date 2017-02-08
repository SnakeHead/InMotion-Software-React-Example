import React from 'react'
import { Row, Col, Container } from 'react-grid-system'
import { Card, CardTitle, CardText } from 'material-ui'
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import SearchBar from '../components/searchBar'
import AddMovie from '../components/addMovie'
import Movie from '../components/movie'
import helpers from '../utils/helpers'

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
  }

  componentDidMount() {
    // Get the all the movies.
    let searchTerm = '';

    helpers.getMovieByName({searchTerm}).then(function(response) {
      this.setState({movies: response.data});
    }.bind(this));
  }

  addMovie(newMovie) {
    let {movies} = this.state;
    movies = [newMovie, ...movies];
    helpers.saveMovie(newMovie);
    this.setState({movies});
  }

  deleteMovie(delMovie) {
    let {movies} = this.state;
    movies = [delMovie, ...movies];
    this.setState({movies});
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
        <Row>
          <Col md={8} offset={{ md: 2 }}>
            <Card>
              <CardTitle
                title="Welcome to my movie collection!"
                subtitle="Woot!"
              />
              </Card>
          </Col>
        </Row>
        <Row>
          <SearchBar onSearchTermChanged={this.movieSearch} />
          <AddMovie addMovie={this.addMovie}/>
        </Row>
        <div>
          <Table
            height={this.state.height}
            fixedHeader={this.state.fixedHeader}
            fixedFooter={this.state.fixedFooter}
            selectable={true}
            multiSelectable={this.state.multiSelectable}
          >
            <TableHeader
              displaySelectAll={this.state.showCheckboxes}
              adjustForCheckbox={false}
              enableSelectAll={this.state.enableSelectAll}
          >
              <TableRow>
                <TableHeaderColumn>Title</TableHeaderColumn>
                <TableHeaderColumn>Genre</TableHeaderColumn>
                <TableHeaderColumn>Actors</TableHeaderColumn>
                <TableHeaderColumn>Year</TableHeaderColumn>
                <TableHeaderColumn>Rating</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody
              fixedHeader={true}
              fixedFooter={true}
              stripedRows={true}
              showRowHover={true}
            >
              {this.state.movies.map((movie) => <Movie movie={movie} key={movie._id} deleteMovie={this.delMovie} /> )}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
}
