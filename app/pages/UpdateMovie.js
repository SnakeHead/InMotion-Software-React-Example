import React from 'react'
import { Link, browserHistory } from 'react-router'

import { Row, Col } from 'react-grid-system'
import { Card, CardTitle, CardText, CardActions, RaisedButton } from 'material-ui'
import helpers from '../utils/helpers'

export default class UpdateMovie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: {}
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {
  // Get the latest history.
  helpers.getMovieByID(this.props.routeParams._id).then(function(response) {
    this.setState({ movie: response.data[0] });
    console.log(this.state);
  }.bind(this));
}

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const movie = {...this.state};
    this.props.addMovie(movie);
    // this.setState({
    //   title: '',
    //   genre: '',
    //   actors: '',
    //   year: '',
    //   rating: ''
    // });
    browserHistory.push('/movies');
  }

  handleCancel(event) {
    browserHistory.push('/movies');

  }

  render() {
    return (
      <div style={{textAlign: 'left'}}>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.movie.title} name='title' onChange={this.handleInputChange} placeholder='Movie Title...'></input>
          <select name='genre' value={this.state.movie.genre}  onChange={this.handleInputChange}>
            <option value="select" action>Genre</option>
            <option value="Action"action>Action</option>
            <option value="Drama"action>Drama</option>
            <option value="Comedy"action>Comedy</option>
          </select>
          <input type='text' value={this.state.movie.actors} name='actors' onChange={this.handleInputChange} placeholder='Actors...'></input>
          <input type='number' value={this.state.movie.year} name='year' onChange={this.handleInputChange} placeholder='Year...' style={{width: '50px'}}></input>
          <select name='rating' value={this.state.movie.rating} onChange={this.handleInputChange}>
            <option value="select">Rating</option>
            <option value="G">G</option>
            <option value="PG">PG</option>
            <option value="PG-13">PG-13</option>
            <option value="R">R</option>
          </select>
          <button onClick={this.handleCancel}>Cancel</button>

          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>

    );
  }
}
