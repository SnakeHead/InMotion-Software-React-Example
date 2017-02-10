import React from 'react'
import { Link, browserHistory } from 'react-router'
import { Row, Col } from 'react-grid-system'
import {Table, Button, Glyphicon, Form, FormGroup, FormControl, ControlLabel, Well } from 'react-bootstrap/lib/'
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
    helpers.saveMovie(this.state).then(function(response) {
      browserHistory.push('/movies');
    }.bind(this));
  }

  handleCancel(event) {
    browserHistory.push('/movies');
  }

  render() {
    return (
      <div>
        <Form horizontal onSubmit={this.handleSubmit}>
          <ControlLabel style={{paddingRight: 5 }}>Add Movie</ControlLabel>

          <FormGroup bsSize='small'>
            <Col componentClass={ControlLabel} sm={2}>
              Title
            </Col>
            <Col sm={10}>
              <FormControl type="text" value={this.state.title} name='title' onChange={this.handleInputChange} placeholder='Movie Title...'/>
            </Col>
          </FormGroup>

          <FormGroup bsSize='small'>
            <Col componentClass={ControlLabel} sm={2}>
              Genre
            </Col>
            <Col sm={10}>
              <FormControl componentClass="select" value={this.state.genre} name='genre' onChange={this.handleInputChange}>
                <option value="Genre" action>Genre</option>
                <option value="Action"action>Action</option>
                <option value="Drama"action>Drama</option>
                <option value="Comedy"action>Comedy</option>
              </FormControl>
            </Col>
          </FormGroup>

          <FormGroup bsSize='small'>
            <Col componentClass={ControlLabel} sm={2}>
              Actors
            </Col>
            <Col sm={10}>
              <FormControl type="text" value={this.state.actors} name='actors' onChange={this.handleInputChange} placeholder='Actors...'/>
            </Col>
          </FormGroup>

          <FormGroup bsSize='small'>
            <Col componentClass={ControlLabel} sm={2}>
              Year
            </Col>
            <Col sm={10}>
              <FormControl type="text" value={this.state.year} name='year' onChange={this.handleInputChange} placeholder='Year...'/>
            </Col>
        </FormGroup>

          <FormGroup bsSize='small'>
            <Col componentClass={ControlLabel} sm={2}>
              Rating
            </Col>
            <Col sm={10}>
            <FormControl componentClass="select" value={this.state.rating} name='rating' onChange={this.handleInputChange}>
              <option value="Rating" action>Rating</option>
              <option value="G" action>G</option>
              <option value="PG"action>PG</option>
              <option value="PG-13"action>PG-13</option>
              <option value="R"action>R</option>
            </FormControl>
          </Col>
          </FormGroup>
          <Well>
            <Button bsStyle="default" bsSize='xsmall' onClick={this.handleCancel}>Cancel</Button>
            <Button type="submit" bsStyle="primary" bsSize='xsmall'>Update</Button>
          </Well>

          </Form>
      </div>

    );
  }
}
