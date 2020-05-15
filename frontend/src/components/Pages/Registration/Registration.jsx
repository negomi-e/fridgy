import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import classes from './Registation.module.scss'

export default class Registation extends Component {
  render() {
    return (
      <section className="authPage">

        <Form className={classes.form + ' formSend'}>

          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />

          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Control type="text" placeholder="First name" />

          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Last name" />
          </Form.Group>


          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
            </Button>
          <Form.Text className="text-muted">
            Errors text.
             </Form.Text>
        </Form>

      </section>
    )
  }
}
