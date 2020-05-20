import React, { Component } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'

import { connect } from 'react-redux';
import Welcome from './Welcome'
import What from './What'
import Who from './Who'
import OurApp from './OurApp'

class Home extends Component {
  componentDidMount() {
  }

  render() {

    return (
      <ParallaxProvider>
      <div className="homepage">
      <div className="welcome-banner">
        <Welcome />
        </div>
      <div className="what-banner">
        <What />
      </div>
      <div className="ourApp">
        <OurApp />
      </div>
      <div className="who-banner">
        <Who />
      </div>
      </div>
      </ParallaxProvider>


    )
  }
}

export default connect()(Home);