import React, { Component } from 'react';
import SelectDate from '../../Pages/SelectDate'
import { InputGroup, FormControl, Form, Button, Modal, Collapse } from 'react-bootstrap';
import styles from '../../Pages/AddFridgeItem/AddFridgeItem.module.scss';
import { connect } from 'react-redux'
import { addProductThunk, updateProductThunk } from '../../../redux/Thunk/fridgeThunk'

// const now = new Date();
class ItemModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scanphoto: false,

      update: this.props.props.update,
      open: true,
      isSelectDateOpen: false,
      id: this.props.props.id,
      label: this.props.props.label,
      expiryDate: this.props.props.expiryDate,
      dayRemaining: this.props.props.dayRemaining,
      category: this.props.props.category,

      year: String(new Date(this.props.props.expiryDate).getFullYear()),
      month: String(new Date(this.props.props.expiryDate).getMonth() + 1),
      day: String(new Date(this.props.props.expiryDate).getDate()),
    }
  }

  //Modal window methods
  setOpen = () => { this.setState({ open: !this.state.open }) };
  setOpenCalendar = () => { this.setState({ isSelectDateOpen: !this.state.isSelectDateOpen }) };

  //PHOTO OPTION
  setScanPhoto = () => { this.setState({ scanphoto: !this.state.scanphoto }) };

  //Method date
  calcRemainingDay = () => {
    const timeDiff = Math.abs(new Date(this.state.year, this.state.month - 1, this.state.day) - new Date())
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    this.setState({
      dayRemaining: diffDays,
      expiryDate: new Date(this.state.year, this.state.month - 1, this.state.day)
    });
  }


  addItem = async () => {
    await this.calcRemainingDay()
    const product = {
      userId: this.props.userId,
      label: this.state.label,
      expiryDate: this.state.expiryDate,
      dayRemaining: this.state.dayRemaining,
      category: this.state.category,
      id: this.props.id,
    }

    if (product.label !== '') {
      this.props.addProductThunk(product)
    }
    this.setOpen()
  }

  updateItem = () => {
    const product = {
      userId: this.props.userId,
      label: this.state.label,
      expiryDate: this.state.expiryDate,
      dayRemaining: this.state.dayRemaining,
      category: this.state.category,
      id: this.state.id
    }
    if (product.label !== '') {
      this.props.updateProductThunk(product)
    }
    this.setOpen()
  }

  onChangeValue = event => {
    this.setState({ label: event.target.value })
  }

  changeExpireYear = event => {
    this.setState({ year: event.target.value });
  };

  changeExpireMonth = event => {
    this.setState({ month: event.target.value });
  };

  changeExpireDay = event => {
    this.setState({ day: event.target.value });
  };

  changeCategory = event => {
    this.setState({ category: event.target.value })
  };

  render() {

    return (
      <Modal show={this.state.open} onHide={this.setOpen} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Type data for item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Item
          <InputGroup size="lg">
            <FormControl required aria-label="Large" aria-describedby="inputGroup-sizing-sm" onChange={this.onChangeValue} value={this.state.label} />
          </InputGroup>
          <Form>
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label>Category</Form.Label>
              <Form.Control onChange={this.changeCategory} as="select" custom>
                <option>{this.state.category}</option>
                <option>Other</option>
                <option>Veg</option>
                <option>Fruit</option>
                <option>Meat</option>
                <option>Diary</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className={styles.expiryButton} ariant='outline-primary' onClick={this.setOpenCalendar} aria-controls="example-collapse-text" aria-expanded={this.state.isSelectDateOpen} type='submit' value='expireDate'>Expiry Date: {this.state.day}.{this.state.month}.{this.state.year}</Button>
          {this.state.update ?
            <Button className={styles.button} variant="primary" onClick={this.updateItem} type="submit" value='addItem'>Update item</Button> :
            <Button className={styles.button} variant="primary" onClick={this.addItem} type="submit" value='addItem'>Add item</Button>}

          <Collapse in={this.state.isSelectDateOpen}>
            <div id="example-collapse-text">
              <SelectDate
                state={String(this.state)}
                changeExpireYear={this.changeExpireYear}
                changeExpireMonth={this.changeExpireMonth}
                changeExpireDay={this.changeExpireDay}
              />
            </div>
          </Collapse>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default connect(
  (state) => ({
    userId: state.authReducer.userInfo.id
  }),
  { addProductThunk, updateProductThunk }
)(ItemModal)
