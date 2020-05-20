import React, { Component } from 'react'

import { connect } from 'react-redux';
import Welcome from './Welcome'
import What from './What'
import Who from './Who'

class Home extends Component {
  componentDidMount() {
  }

  render() {

    return (
      <div className="homepage">
      <Welcome />
      <What />
      <Who />
      </div>
    )
  }
}

export default connect()(Home);