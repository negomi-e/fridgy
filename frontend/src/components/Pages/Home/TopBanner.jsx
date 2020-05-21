import React, { Component } from 'react'

import { connect } from 'react-redux';
import { Container } from 'react-bootstrap'
import { ParallaxBanner } from 'react-scroll-parallax';
import vegetables from '../../../../src/images/vegetables-main.jpg'


class TopBanner extends Component {
  componentDidMount() {

  }

  render() {

    return (
      <div className='home__banner'>
        
      </div>
      // <ParallaxBanner className="what-banner"
      //   layers={[
      //     {
      //       image: vegetables,
      //       amount: 0.6
      //     },
      //   ]}>

      // </ParallaxBanner>
    )
  }
}


export default connect()(TopBanner);
