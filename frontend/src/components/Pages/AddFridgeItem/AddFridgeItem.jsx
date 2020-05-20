import React, { Component } from 'react';
import SelectDate from '../SelectDate';
import { InputGroup, FormControl, Form, Button, Modal, Collapse } from 'react-bootstrap';
import '../AddFridgeItem/AddFridgeItem.module.scss';
import { connect } from 'react-redux'
import { addProductThunk } from '../../../redux/Thunk/fridgeThunk'
import ItemModal from '../../../components/Common/Modal/ItemModal'

const now = new Date();
class AddFridgeItem extends Component {
  state = {
    update: false,
    open: false,
    isSelectDateOpen: false,

    label: '',
    expiryDate: now,
    dayRemaining: 0,
    category: 'Other',

    year: String(now.getFullYear()),
    month: String(now.getMonth() + 1),
    day: String(now.getDate()),
  }
  //Modal window methods
  setOpen = () => { this.setState({ open: !this.state.open }) };
  
  render() {
    console.log(this.props)
    return (
      <>
        <Button onClick={() => this.setOpen()}>Add item</Button>
        {this.state.open? <ItemModal props={this.state}/>: null}
      </>
    )
  }
}

export default connect(
  (state) => ({
    userId: state.authReducer.userInfo.id
  }),
)(AddFridgeItem)
