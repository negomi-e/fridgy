import React, { Component } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'

import { connect } from 'react-redux';
import Welcome from './Welcome'
import What from './What'
import OurApp from './OurApp'
import Who from './Who'
import FactBanner from './FactBanner'
import Features from './Features'
import TopBanner from './TopBanner'



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
        <FactBanner />
        <Features />
        <OurApp/>
        <Who />
        
      </div>
      </ParallaxProvider>
    )
  }
}

export default connect()(Home);