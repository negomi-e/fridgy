import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { deleteProductSL_Thunk } from '../../../../redux/Thunk/shoppingListThunk.js'


class BtnDelete extends Component {
  deleteProduct = (e) => {
    e.preventDefault()
    this.props.deleteProductSL_Thunk(this.props.id)
  }
  render() {
    return (
      <Button onClick={this.deleteProduct} variant="danger">Delete</Button>
    )
  }
}

export default connect(
  null,
  { deleteProductSL_Thunk }
)(BtnDelete)
