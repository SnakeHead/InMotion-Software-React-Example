import React from 'react'
import {TableRow, TableRowColumn} from 'material-ui/Table'
import FontIcon from 'material-ui/FontIcon'
import {RaisedButton} from 'material-ui'
import helpers from '../utils/helpers'
import { Link } from 'react-router'

import {Table, Button, Glyphicon} from 'react-bootstrap/lib/'

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
      <tr>
        <td>
          <Link to={'/update/' + this.props.movie._id} > {this.props.movie.title} </Link>
        </td>
        <td>{this.props.movie.genre}</td>
        <td>{this.props.movie.actors}</td>
        <td>{this.props.movie.year}</td>
        <td>{this.props.movie.rating}</td>
        <td>
          <Button bsSize="xsmall" bsStyle="danger"><Glyphicon glyph="remove" onClick={this.onClick}/></Button>
      </td>
    </tr>
    )
  }
}
