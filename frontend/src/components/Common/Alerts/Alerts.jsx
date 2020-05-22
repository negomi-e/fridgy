import React, { Component } from 'react'
import classes from './Alert.module.scss'
import okImg from './ok.png'
import errorImg from './error.png'

export class AlertSuccess extends Component {
  render() {
    return (
      <div className={classes.wrap}>
        <img src={okImg} alt="ok"/>
        <p>Success!</p>
      </div>
    )
  }
}

export class AlertError extends Component {
  render() {
    return (
      <div className={classes.wrap}>
        <img src={errorImg} alt="err"/>
        <p>Error!</p>
      </div>
    )
  }
}

