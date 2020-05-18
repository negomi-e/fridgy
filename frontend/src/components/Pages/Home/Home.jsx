import React, { Component } from 'react'

import { connect } from 'react-redux';

import FrontParallax from './FrontParallax'

class Home extends Component {
  componentDidMount() {
  }

  render() {

    return (
      <>
      <FrontParallax />
      
      </>
    )
  }
}

export default connect()(Home);