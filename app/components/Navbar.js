import React from 'react'
import { Link } from 'react-router'

import { AppBar, Drawer, MenuItem, FlatButton } from 'material-ui'


export default class Navbar extends React.Component {

  constructor() {
    super()
    this.state = {open: false}
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle() {
    this.setState({open: !this.state.open})
  }

  render() {
    return (
      <div>
        <Drawer open={this.state.open} >
          <Link to={'/'}>
            <MenuItem onClick={this.handleToggle}>Home</MenuItem>
          </Link>
          <Link to={'movies'}>
            <MenuItem onClick={this.handleToggle}>Movies</MenuItem>
          </Link>
        </Drawer>

        <AppBar
          title="InMotion Movie Collection"
          onLeftIconButtonTouchTap={this.handleToggle}
          iconElementRight={<FlatButton label="Login" href='#' />}
        />
      </div>
    );
  }
}
