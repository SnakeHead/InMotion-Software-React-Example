import React from 'react'
import { Link, browserHistory } from 'react-router'

import { Row, Col } from 'react-grid-system'
import { Card, CardTitle, CardText, CardActions, RaisedButton, TextField, SelectField, MenuItem } from 'material-ui'
import helpers from '../utils/helpers'

export default class UpdateMovie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      genre: '',
      actors: '',
      year: '',
      rating: '',
      movie: {}
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {
  // Get the latest history.
  helpers.getMovieByID(this.props.routeParams._id).then(function(response) {
    this.setState( response.data[0] );
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

  handleChange(event, index, value) {
     console.log(value);
     this.setState({value});
   };

  handleSubmit(event) {
    event.preventDefault();
    helpers.saveMovie(this.state).then(function(response) {
      browserHistory.push('/movies');
    }.bind(this));
  }

  handleCancel(event) {
    browserHistory.push('/movies');
  }

  render() {
    return (
      <div style={{textAlign: 'left'}}>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.title} name='title' onChange={this.handleInputChange} placeholder='Movie Title...'></input>
          <select name='genre' value={this.state.genre}  onChange={this.handleChange}>
            <option value="select" action>Genre</option>
            <option value="Action"action>Action</option>
            <option value="Drama"action>Drama</option>
            <option value="Comedy"action>Comedy</option>
          </select>
          <input type='text' value={this.state.actors} name='actors' onChange={this.handleInputChange} placeholder='Actors...'></input>
          <input type='number' value={this.state.year} name='year' onChange={this.handleInputChange} placeholder='Year...' style={{width: '50px'}}></input>
          <select name='rating' value={this.state.rating} onChange={this.handleInputChange}>
            <option value="select">Rating</option>
            <option value="G">G</option>
            <option value="PG">PG</option>
            <option value="PG-13">PG-13</option>
            <option value="R">R</option>
          </select>
          <button onClick={this.handleCancel}>Cancel</button>

          <button onClick={this.handleSubmit}>Submit</button>
        </form>
        <form onSubmit={this.handleSubmit}>
        <TextField floatingLabelText='Movie Title' value={this.state.title} name='title' onChange={this.handleInputChange} hintText='Movie Title...'/><br />
        <SelectField floatingLabelText='Genre' value={this.state.genre} name='genre' onChange={this.handleInputChange} autoWidth={true}>
          <MenuItem value="select" primaryText='Genre'/>
          <MenuItem value="Action"primaryText='Action'/>
          <MenuItem value="Drama"primaryText='Drama'/>
          <MenuItem value="Comedy" primaryText='Comedy'/>
        </SelectField><br />
        <TextField floatingLabelText='Actors' value={this.state.actors} name='actors' onChange={this.handleInputChange} hintText='Enter the actors...'/><br />
        <TextField floatingLabelText='Year' value={this.state.year} name='year' onChange={this.handleInputChange} hintText='Year Released'/><br />
        <SelectField floatingLabelText='Rating' value={this.state.rating} name='rating' onChange={this.handleInputChange} autoWidth={true}>
          <MenuItem value="G" primaryText='G'/>
          <MenuItem value="PG" primaryText='PG'/>
          <MenuItem value="PG-13"primaryText='PG-13'/>
          <MenuItem value="R" primaryText='R'/>
        </SelectField><br />
        <RaisedButton onClick={this.handleCancel} label='Cancel' />
        <RaisedButton onClick={this.handleSubmit} label='Update' primary={true}/>
        </form>

      </div>

    );
  }
}
