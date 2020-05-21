import React, { Component } from 'react'

import { connect } from 'react-redux';
import { Parallax } from 'react-scroll-parallax';
import { Row, Col, Image } from 'react-bootstrap';
import whatimg from '../../../images/wedo-section.png'



class What extends Component {
  componentDidMount() {

  }

  render() {

    return (
      <Parallax className="what-banner"
      >
        <hr />
        <Row>
          <Col>
            <Image style={{borderRadius:'10px'}} src={whatimg} fluid />
          </Col>
          <Col className="what-text">
            <h3>WHAT DO WE DO</h3>
            <span>We believe we can reduce food waste, be more creative in what we cook and plan our purchases better. This is all possible through increasing our awareness of what we have in our fridges and cupboards before going shopping. By keeping an eye of what is in the fridge and what is about to expire, we can use our  food creatively. We aim to make it easier to finding suitable and applicable recipes to help you use up those ripe and ready to eat ingredients.
              </span>
          </Col>
        </Row>
        <hr />
      </Parallax>

    )
  }
}


export default connect()(What);