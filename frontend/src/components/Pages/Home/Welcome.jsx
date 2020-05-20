import React, { Component } from 'react'

import { connect } from 'react-redux';

// import style from './IntroCopy.scss';
import { ParallaxBanner } from 'react-scroll-parallax';
import fridgeimage from '../../../../src/images/fridge-open.jpg'

class Welcome extends Component {
  componentDidMount() {

  }

  render() {

    return (
      
        <ParallaxBanner
    className="your-class"
    layers={[
        {
            image: {fridgeimage},
            amount: 0.4,
        },
        // {
        //     image: 'https://foo.com/bar.png',
        //     amount: 0.2,
        // },
    ]}
>
    <h1>Welcome to Fridgy</h1>
    <img src={fridgeimage} alt="fridge"/>
</ParallaxBanner>

    );


  }
}


export default connect()(Welcome);