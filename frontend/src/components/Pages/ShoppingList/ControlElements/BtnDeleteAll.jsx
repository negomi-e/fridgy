import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { deleteAllAC } from '../../../../redux/Actions/actions'


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
