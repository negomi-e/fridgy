import React, { Component } from 'react'
import { Button } from 'react-bootstrap'


export default class BtnDeleteAll extends Component {
  deleteAll = (e) => {
    this.props.deleteAllThunk()
    this.props.setSmShow(false)
  }

  render() {
    return (
      <Button variant="danger" onClick={this.deleteAll}>Delete all!</Button>
    )
  }
}
