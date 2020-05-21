import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { deleteProductSL_Thunk } from '../../../../redux/Thunk/shoppingListThunk.js'
import { IoIosListBox, IoIosTrash } from "react-icons/io";


class BtnDelete extends Component {
  deleteProduct = (e) => {
    e.preventDefault()
    this.props.deleteProductSL_Thunk(this.props.id)
  }
  render() {
    return (
      <a href="#" onClick={this.deleteProduct} variant="light"><IoIosTrash /></a>
    )
  }
}

export default connect(
  null,
  { deleteProductSL_Thunk }
)(BtnDelete)
