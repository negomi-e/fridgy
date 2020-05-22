import React, { Component } from 'react'

import { connect } from 'react-redux';


class OurApp extends Component {
  componentDidMount() {

  }

  render() {

    return (
      <div className="ourApp" id="inner_wrap">

        <div id="wrapper">
          <div className="phone view_1" id="phone_1">
<<<<<<< HEAD
            <iframe src="http://designhooks.com" id="frame_123" key="frame_1"></iframe>
=======
            <iframe src="http://fridgy-2020.herokuapp.com/" id="frame_1"></iframe>
>>>>>>> 437cf759965568371ca06728a6893827155d7663
          </div>
        </div>
      </div>
    )
  }
}


export default connect()(OurApp);
