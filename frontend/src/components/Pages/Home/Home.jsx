import React, { Component } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import {Container} from 'react-bootstrap'

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
        <Container>
        <Welcome />
        <What />
        <FactBanner />
        <Features />
        <OurApp/>
        <Who />
        </Container>
        
      </div>
      </ParallaxProvider>
    )
  }
}

export default connect()(Home);