import React from 'react'
import { Row, Col, Container } from 'react-grid-system'
import { Card, CardTitle, CardText } from 'material-ui'
import SearchBar from '../components/searchBar'
import AddMovie from '../components/addMovie'


export default class Movies extends React.Component {
  constructor(props) {
      super(props);

      this.movieSearch = this.movieSearch.bind(this);

      this.state = {
        movies: movies,
        movie: ""
      }

    this.addMovie = this.addMovie.bind(this);
    this.movieSearch = this.movieSearch.bind(this);
  }

  addMovie(newMovie) {
    let {movies} = this.state;
    movies = [newMovie, ...movies];
    helpers.saveMovie(newMovie);
    this.setState({movies});
  }

  movieSearch(searchTerm) {

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
          <AddMovie addMovie={this.addMovie}/>
        </Row>
      </div>
    );
  }
}
