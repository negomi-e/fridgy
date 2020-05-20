import React, { Component } from 'react'

import { connect } from 'react-redux';
import { Parallax } from 'react-scroll-parallax';
import {Row, Col, Image} from 'react-bootstrap';
import whatimg from '../../../images/whatwedo.jpg'



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
    <Image src={whatimg} fluid />
    </Col>
    <Col className="what-text">
      <h3>WHAT DO WE DO</h3>
          <span>EXAMPLE TEXT: We believe ever small step you take to reduce your waste, can have a huge impact on your environment. It is about learning how to identify problems and finding their solutions. It is about respecting the points-of-view of others and discovering oneself in the process. We aim to enable parents and teachers to help children adapt to the changing world.</span>
          </Col>
  </Row>

    </Parallax>

    )
  }
}


export default connect()(What);