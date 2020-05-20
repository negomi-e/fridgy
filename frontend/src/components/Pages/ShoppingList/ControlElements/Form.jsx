import React, { Component } from 'react'
import { FormControl, InputGroup, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addProductSL_Thunk } from '../../../../redux/Thunk/shoppingListThunk'
import { changeInputSL_AC } from '../../../../redux/Actions/actions-sl'

class Form extends Component {

  addProduct = () => {
    const text = this.props.inputTextSL
    const userId = this.props.userId
    this.props.addProductSL_Thunk(text, userId)
  }

  updateInput = (e) => {
    e.preventDefault()
    const text = e.target.value
    this.props.changeInputSL_AC(text)
  }

  render() {
    return (
      <div>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Send product name"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={this.updateInput}
            value={this.props.inputTextSL}
          />
          <InputGroup.Append>
            <Button
              onClick={this.addProduct}>
              Add
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    inputTextSL: state.shoppingListReducer.inputTextSL,
    userId: state.authReducer.userInfo.id
  }),
  { changeInputSL_AC, addProductSL_Thunk }
)(Form)
