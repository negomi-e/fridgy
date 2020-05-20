import React, { Component } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'

import { connect } from 'react-redux';
import Welcome from './Welcome'
import What from './What'
import Who from './Who'
import OurApp from './OurApp'
import TopBanner from './TopBanner'
import FactBanner from './FactBanner'

class Home extends Component {
  componentDidMount() {
  }

  render() {

    return (
      <ParallaxProvider>
      <div className="homepage">
        <TopBanner />
        <Welcome />
        <What />
        {/* <FactBanner /> */}
        <OurApp />
        <Who />
      </div>
      </ParallaxProvider>


    )
  }
}

export default connect()(Home);