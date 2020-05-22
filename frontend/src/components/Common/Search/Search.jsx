import React, { Component } from 'react'
import { FormControl,} from 'react-bootstrap'
import { searchAC } from '../../../redux//Actions/fridge-actions'
import { connect } from 'react-redux'

class Search extends Component {

  state = {
    inputSearch: '',
  }

  Search = (e) => {
    this.props.searchAC(e.target.value)
  }

  render() {
    return (
      <div>

        <FormControl onChange={this.Search} type="text" placeholder="Search" className="mr-sm-2" />

      </div>
    )
  }
}

export default connect(
  (state) => { },
  { searchAC }
)(Search)
