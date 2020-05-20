import React, { Component } from 'react'

import { connect } from 'react-redux';
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
      {
        image: null,
      amount: 0.5
    }
      ]}>
        
    </ParallaxBanner>

    )
  }
}


export default connect()(TopBanner);