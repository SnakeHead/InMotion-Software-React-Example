import React from 'react'
import {TableRow, TableRowColumn} from 'material-ui/Table'
import FontIcon from 'material-ui/FontIcon'
import {RaisedButton} from 'material-ui'
import helpers from '../utils/helpers'

export default class Movie extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      genre: '',
      actors: '',
      year: '',
      rating: ''
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    helpers.deleteMovie(this.props.movie._id).then(function(response) {
      this.setState({
        title: '',
        genre: '',
        actors: '',
        year: '',
        rating: ''
      });
    }.bind(this));

    const movie = {...this.state};
    this.props.deleteMovie(movie);
  }

  render() {
    return (
      <TableRow
        displayBorder={true}
      >
      <TableRowColumn data={this.props.movie._id} selected={this.selected}>{this.props.movie.title}</TableRowColumn>
      <TableRowColumn>{this.props.movie.genre}</TableRowColumn>
      <TableRowColumn>{this.props.movie.actors}</TableRowColumn>
      <TableRowColumn>{this.props.movie.year}</TableRowColumn>
      <TableRowColumn>{this.props.movie.rating}</TableRowColumn>
      <TableRowColumn>
          <button type='submit' onClick={this.onClick}>
            <FontIcon className="fa fa-times" />
        </button>
      </TableRowColumn>
      </TableRow>
    )
  }
}
