import React, { Component } from 'react'

import { connect } from 'react-redux';


class Home extends Component {
  componentDidMount() {

  }

  render() {

    return (
      <div>
        <h1>Welcome to Fridgy</h1>

        <p>We aim to help reduce food waste and help to be more conscious of the food in your fridge</p>

      </div>
    )
  }
}


export default connect()(Home);