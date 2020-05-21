import React, { Component } from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { completeProductSL_Thunk } from '../../../../redux/Thunk/shoppingListThunk.js'

class BtnComplete extends Component {
  CheckProduct = (e) => {
    e.preventDefault()
    this.props.completeProductSL_Thunk(this.props.id)
  }
  render() {
    return (
      <Button className="btnModal" onClick={this.CheckProduct} variant="light">
        <AiFillCheckCircle />
      </Button>
    )
  }
}

export default connect(
  null,
  { completeProductSL_Thunk }
)(BtnComplete)
