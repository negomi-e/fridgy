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
            <iframe src="http://designhooks.com" id="frame_123" key="frame_1"></iframe>
          </div>
        </div>
      </div>
    )
  }
}


export default connect()(OurApp);
