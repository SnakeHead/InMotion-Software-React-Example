import React from 'react'
import { Row, Col } from 'react-grid-system'
import {Table, Button, Glyphicon, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap/lib/'

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
        <Form inline onSubmit={this.handleSubmit}>
          <ControlLabel style={{paddingRight: 5 }}>Add Movie</ControlLabel>
          <FormGroup bsSize='small'>
            <FormControl type="text" value={this.state.title} name='title' onChange={this.handleInputChange} placeholder='Movie Title...'/>
          </FormGroup>

          <FormGroup bsSize='small'>
            <FormControl componentClass="select" value={this.state.genre} name='genre' onChange={this.handleInputChange}>
              <option value="select" action>Genre</option>
              <option value="Action"action>Action</option>
              <option value="Drama"action>Drama</option>
              <option value="Comedy"action>Comedy</option>
            </FormControl>
          </FormGroup>

          <FormGroup bsSize='small'>
            <FormControl type="text" value={this.state.actors} name='actors' onChange={this.handleInputChange} placeholder='Actors...'/>
          </FormGroup>

          <FormGroup bsSize='small'>
            <FormControl type="text" value={this.state.year} name='year' onChange={this.handleInputChange} placeholder='Year...'/>
          </FormGroup>

          <FormGroup bsSize='small'>
            <FormControl componentClass="select" value={this.state.rating} name='rating' onChange={this.handleInputChange}>
              <option value="G" action>Rating</option>
              <option value="G" action>G</option>
              <option value="PG"action>PG</option>
              <option value="PG-13"action>PG-13</option>
              <option value="R"action>R</option>
            </FormControl>
          </FormGroup>

          <Button type="submit" bsStyle="primary" bsSize='xsmall' style={{marginLeft: 5 }}>Add</Button>
        </Form>
      </div>
    )
  }
}
