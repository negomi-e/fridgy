import React, { Component } from 'react'
import classes from './Alert.module.scss'
import okImg from './ok.png'
import errorImg from './error.png'

export class AlertSuccess extends Component {
  render() {
    return (
      <div className={classes.wrap}>
        <img src={okImg} alt="success"/>
        <p>Success!</p>
      </div>
    )
  }
}

export class AlertError extends Component {
  render() {
    return (
      <div className={classes.wrap}>
        <img src={errorImg} alt="error"/>
        <p>Error!</p>
      </div>
    )
  }
}
