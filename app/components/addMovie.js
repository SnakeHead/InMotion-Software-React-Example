import React from 'react'
import { Row, Col } from 'react-grid-system'
import { Card } from 'material-ui'

export default class AddMovie extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      genre: '',
      actors: '',
      year: '',
      rating: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

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
    this.setState({
      title: '',
      genre: '',
      actors: '',
      year: '',
      rating: ''
    });
  }

  render() {
    return (
      <div style={{textAlign: 'left'}}>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.title} name='title' onChange={this.handleInputChange} placeholder='Movie Title...'></input>
          <select name='genre' value={this.state.value}  onChange={this.handleInputChange}>
            <option value="select" action>Genre</option>
            <option value="Action"action>Action</option>
            <option value="Drama"action>Drama</option>
            <option value="Comedy"action>Comedy</option>
          </select>
          <input type='text' value={this.state.actors} name='actors' onChange={this.handleInputChange} placeholder='Actors...'></input>
          <input type='number' value={this.state.year} name='year' onChange={this.handleInputChange} placeholder='Year...'></input>
          <select name='rating' value={this.state.rating} onChange={this.handleInputChange}>
            <option value="select">Rating</option>
            <option value="G">G</option>
            <option value="PG">PG</option>
            <option value="PG-13">PG-13</option>
            <option value="R">R</option>
          </select>
          <input type='submit' value={this.state.value} />
        </form>
      </div>
    )
  }
}
