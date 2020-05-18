import React, { Component } from 'react'

import { connect } from 'react-redux';


class What extends Component {
  componentDidMount() {

  }

  render() {

    return (
      <div >
        <h3>WHAT DO WE DO</h3>
        <p>We aim to help reduce food waste and help to be more conscious of the food in your fridge</p>
      </div>
    )
  }
}


export default connect()(What);