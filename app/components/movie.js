import React from 'react'
import {TableRow, TableRowColumn} from 'material-ui/Table'
import FontIcon from 'material-ui/FontIcon'
import {RaisedButton} from 'material-ui'
import helpers from '../utils/helpers'
import { Link } from 'react-router'

export default class Movie extends React.Component {

  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.deleteMovie(this.props.movie._id);
  }

  render() {
    return (
      <TableRow>
      <TableRowColumn
        data={this.props.movie._id}
        selected={this.selected}
      >
      <Link to={'/update/' + this.props.movie._id} > {this.props.movie.title} </Link>
      </TableRowColumn>
      <TableRowColumn>{this.props.movie.genre}</TableRowColumn>
      <TableRowColumn>{this.props.movie.actors}</TableRowColumn>
      <TableRowColumn>{this.props.movie.year}</TableRowColumn>
      <TableRowColumn>{this.props.movie.rating}</TableRowColumn>
      <TableRowColumn>
        <button type='submit' onClick={this.onClick}>
          <FontIcon className="fa fa-times" style={{fontSize: '12px', color: 'red'}} />
        </button>
      </TableRowColumn>
      </TableRow>
    )
  }
}
