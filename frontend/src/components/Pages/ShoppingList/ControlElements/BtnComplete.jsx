import React, { Component } from 'react'
import Complete from './Complete.png'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { completeProductSL_Thunk } from '../../../../redux/Thunk/shoppingListThunk.js.js'

class BtnComplete extends Component {
  CheckProduct = (e) => {
    e.preventDefault()
    this.props.completeProductSL_Thunk(this.props.id)
  }
  render() {
    return (
      <Button onClick={this.CheckProduct} variant="light">
        <img className="btn-img" src={Complete} />
      </Button>
    )
  }
}

export default connect(
  null,
  { completeProductSL_Thunk }
)(BtnComplete)
