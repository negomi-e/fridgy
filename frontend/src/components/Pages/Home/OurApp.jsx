import React, { Component } from 'react'

import { connect } from 'react-redux';
// import './OurApp.css'


class OurApp extends Component {
  componentDidMount() {

  }

  render() {

    return (
        <div id="inner_wrap">  

    <div id="wrapper">
    <div className="phone view_1" id="phone_1">
      <iframe src="http://designhooks.com" id="frame_1" title="frame"></iframe>
    </div>
    </div>
    </div>
    )
  }
}


export default connect()(OurApp);