import React, { Component } from 'react';
import SelectDate from '../SelectDate';
import {
  Button,
} from 'react-bootstrap';
import styles from '../AddFridgeItem/AddFridgeItem.module.scss';
import { connect } from 'react-redux'

import ItemModal from '../../../components/Common/Modal/ItemModal'
import { AiFillCamera} from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

const now = new Date();
class AddFridgeItem extends Component {
  state = {
    update: false,
    open: false,
    isSelectDateOpen: false,

    label: '',
    expiryDate: now,
    dayRemaining: 0,
    category: '',

    year: String(now.getFullYear()),
    month: String(now.getMonth() + 1),
    day: String(now.getDate()),
  }
  //Modal window methods
  setOpen = () => { this.setState({ open: !this.state.open }) };
  
  render() {
    return (
      <>
        <Button className={styles.button} onClick={() => this.setOpen()}>Add item</Button>
        {this.state.open? <ItemModal props={this.state}/>: null}

        {/* <Button className={styles.button} onClick={() => this.setOpen()}>Add item</Button>
        {this.state.open? <ItemModal props={this.state}/>: null} */}
        <NavLink to={`/scanphotos`}>
            <AiFillCamera />
        </NavLink>
        
      </>
    );
  }
}

export default connect(
  (state) => ({
    userId: state.authReducer.userInfo.id
  }),
)(AddFridgeItem)
