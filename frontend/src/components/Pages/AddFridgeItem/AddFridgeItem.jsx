import React, { Component } from 'react';
// import SelectDate from '../SelectDate';
import { InputGroup, FormControl, Form, Button, Modal } from 'react-bootstrap';
import '../AddFridgeItem/AddFridgeItem.module.scss';

export default class extends Component {
  state = {
    open: false,
    label: '',
    expiryDate: new Date(),
    category: 'Other',
    dayRemaining: 1
  }

  setOpen = () => {this.setState({open: !this.state.open})}

  addItem = async () => {
    const item = {
      label: this.state.label,
      expiryDate: this.state.expiryDate,
      category: this.state.category,
      dayRemaining: this.state.dayRemaining,
    }
    await fetch('/fridge/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(item)
    })
    this.setState({open: !this.state.open});
  }

  onChangeValue = event => {
    this.setState({label: event.target.value})
  }

  render() {
    return (
      <>
        <Button onClick={() => this.setOpen()}>additem</Button>
        <Modal show={this.state.open} onHide={this.setOpen} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Type data for item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Item
            <InputGroup size="lg">
              {/* <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-lg">Item1</InputGroup.Text>
              </InputGroup.Prepend> */}
              <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" onChange={this.onChangeValue} value={this.state.label} />
            </InputGroup>
            
            <Form>
              <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Label>Category</Form.Label>
                <Form.Control as="select" custom>
                  <option>Other</option>
                  <option>Vegetables</option>
                  <option>Meat</option>
                  <option>Diary</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
          <Button variant='primary' type='submit' value='expireDate'>Not today?</Button>
          <Button variant="primary" onClick={this.addItem} type="submit" value='addItem'>Add item</Button>
        {/* <SelectDate /> */}
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}