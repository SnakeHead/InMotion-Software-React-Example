import React from 'react'
import { Row, Col, Container } from 'react-grid-system'
import { Card, CardTitle, CardText } from 'material-ui'
import SearchBar from '../components/searchBar'
import AddMovie from '../components/addMovie'


export default class Movies extends React.Component {
  constructor(props) {
      super(props);

      this.movieSearch = this.movieSearch.bind(this);
      {/*This will eventually use mongo*/}
      let movies = localStorage.getItem('movies');
      if (movies) {
        movies = JSON.parse(movies).movies
      } else {
        movies = [];
      }

      console.log(movies);
      this.state = {
        movies: movies,
        movie: ""
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleAddMovie = this.handleAddMovie.bind(this);
    }

    handleChange(event) {
      this.setState({
        movie: event.target.value
      });
    }

    handleAddMovie() {
      const movies = this.state.movies.concat(this.state.movie);
      this.setState({
        movies: movies,
        movie: ""
      })
      const stringifiedMovies = JSON.stringify({ movies: movies });
      localStorage.setItem('movies', stringifiedMovies);
    }

    movieSearch(searchTerm) {
      console.log(searchTerm);
      console.log(this.state.movies);
    }


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
          <AddMovie />
        </Row>
      </div>
    );
  }
}
