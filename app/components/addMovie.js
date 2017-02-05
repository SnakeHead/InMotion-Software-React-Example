import React from 'react'
import { Row, Col } from 'react-grid-system'
import { Card } from 'material-ui'

export default class AddMovie extends React.Component {

  constructor() {
    super()
  }

  render() {
    return (
      <div style={{textAlign: 'left'}}>
        <input type='text' placeholder='Movie Title...'></input>
        <select>
          <option value="select" action>Genre</option>
          <option value="Action"action>Action</option>
          <option value="Action"action>Drama</option>
          <option value="Action"action>Comedy</option>
        </select>
        <input type='text' placeholder='Actors...'></input>
        <input type='text' placeholder='Year...'></input>
        <select>
          <option value="select" action>Rating</option>
          <option value="Action" action>G</option>
          <option value="Action" action>PG</option>
          <option value="Action" action>PG-13</option>
          <option value="Action" action>R</option>
        </select>
        <input type='submit' value='Add' />
      </div>
    )
  }
}
