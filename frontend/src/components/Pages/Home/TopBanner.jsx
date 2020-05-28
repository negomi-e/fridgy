import React, { Component } from 'react'
import { connect } from 'react-redux';

class TopBanner extends Component {
  render() {
    return (
      <div className='home__banner'>
      </div>
    )
  }
}

export default connect()(TopBanner);
