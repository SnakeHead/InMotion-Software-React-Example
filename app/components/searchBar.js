import React, {Component} from 'react'
import { FontIcon, Card, TextField } from 'material-ui'
import { Row, Col } from 'react-grid-system'

export default class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = { searchTerm: '' }
  }

  onInputChange(searchTerm) {
    this.setState({ searchTerm });
    this.props.onSearchTermChanged(searchTerm);
    console.log(searchTerm);
  }

  render () {
    return (
      <div className="search-bar" style={{paddingTop: '24px'}}>
        <TextField hintText="Search movies..."
          value={ this.state.searchTerm }
          onChange={ (event) => this.onInputChange( event.target.value) }
        />
      </div>
    );
  }
}
