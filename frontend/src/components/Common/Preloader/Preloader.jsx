import React, { Component } from 'react'
import load from './load.svg'

export default class Preloader extends Component {
  render() {
    return (
      <div className="preloaderWrap">
        <img  src={load} alt="loading..." />
      </div>
    )
  }
}
