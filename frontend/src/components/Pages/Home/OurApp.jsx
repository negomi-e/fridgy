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
            <iframe src="http://fridgy-2020.herokuapp.com/" id="frame_1"></iframe>
          </div>
        </div>
      </div>
    )
  }
}


export default connect()(OurApp);
