import React, { Component } from 'react';
import SelectDate from '../SelectDate';
import { InputGroup, FormControl, Form, Button, Modal } from 'react-bootstrap';
import '../AddFridgeItem/AddFridgeItem.module.scss';

const now = new Date();

export default class extends Component {
  state = {
    open: false,
    // isSelectDateOpen: false,
    label: '',
    expiryDate: now,
    category: 'Other',
    dayRemaining: 0,
    year: String(now.getFullYear()),
    month: String(now.getMonth() + 1),
    day: String(now.getDate()),
  }
  //Refact - перенести запрос в reduxThunk
  setOpen = () => { this.setState({ open: !this.state.open }) }

  addItem = async () => {
    const timeDiff = Math.abs(new Date(this.state.year, this.state.month - 1, this.state.day) - now);
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    await this.setState({dayRemaining: diffDays, expiryDate: new Date(this.state.year, this.state.month - 1, this.state.day)});
    const item = {
      label: this.state.label,
      expiryDate: this.state.expiryDate,
      category: this.state.category,
      dayRemaining: this.state.dayRemaining,
    }
    console.log(timeDiff, diffDays, item);
    await fetch('/fridge/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(item)
    })
    this.setState({ open: !this.state.open });
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


  render() {
    return (
      <>
        <Button onClick={() => this.setOpen()}>Add item</Button>
        <Modal show={this.state.open} onHide={this.setOpen} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Type data for item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Item
            <InputGroup size="lg">
              <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" onChange={this.onChangeValue} value={this.state.label} />
            </InputGroup>
            <Form>
              <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Label>Category</Form.Label>
                <Form.Control as="select" custom>
                  <option>Other</option>
                  <option>Vegetables</option>
                  <option>Fruit</option>
                  <option>Meat</option>
                  <option>Diary</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='outline-primary' type='submit' value='expireDate'>{this.state.year}.{this.state.month}.{this.state.day}</Button>
            <Button variant="primary" onClick={this.addItem} type="submit" value='addItem'>Add item</Button>
            <SelectDate
              state={String(this.state)}
              changeExpireYear={this.changeExpireYear}
              changeExpireMonth={this.changeExpireMonth}
              changeExpireDay={this.changeExpireDay}
            />
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}
