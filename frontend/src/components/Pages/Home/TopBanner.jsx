import React, { Component } from 'react'

import { connect } from 'react-redux';
import {Container} from 'react-bootstrap'
import { ParallaxBanner } from 'react-scroll-parallax';
import vegetables from '../../../../src/images/vegetables-main.jpg'


class TopBanner extends Component {
  componentDidMount() {

  }

  render() {

    return (
      <ParallaxBanner className="what-banner"
      layers={[
        {
          image: vegetables,
        amount: 0.2
      },
      ]}>
        
    </ParallaxBanner>
    )
  }
}


export default connect()(TopBanner);