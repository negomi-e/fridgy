import React, { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import classes from './Registation.module.scss'
import { connect } from 'react-redux'
import { thunkRegistration } from '../../../redux/Thunk/authThunk'
import { changeInputAC } from '../../../redux/Actions/actions'

class Registation extends Component {

  componentDidUpdate() {
    if (this.props.loginStatus) {
      this.props.history.push('/')
    }
  }

  registration = (e) => {
    e.preventDefault()
    //Refact Сделать валидацию
    const { inputEmail, inputPass, inputFirstName, inputLastName } = this.props
    this.props.thunkRegistration(inputEmail, inputFirstName, inputLastName, inputPass)
  }

  changeInput = (e) => {
    const inputValue = e.target.value
    const inputName = e.target.name
    const formName = e.target.closest('form').name
    this.props.changeInputAC(formName, inputName, inputValue)
  }

  render() {
    const { error, inputEmail, inputPass, inputFirstName, inputLastName } = this.props
    return (
      <Container>

      <section className="authPage">

        <Form name="registrationForm" onSubmit={this.registration} className={classes.form + ' formSend'}>

          <legend>Registration</legend>

          <Form.Group controlId="formBasicEmail">
            <Form.Control value={inputEmail} onChange={this.changeInput} type="email" placeholder="Enter email" name="inputEmail" />

          </Form.Group>

          <Form.Group controlId="formBasicFirstName">
            <Form.Control value={inputFirstName} onChange={this.changeInput} type="text" placeholder="First name" name="inputFirstName" />

          </Form.Group>

          <Form.Group controlId="formBasicLasttName">
            <Form.Control value={inputLastName} onChange={this.changeInput} type="text" placeholder="Last name" name="inputLastName" />
          </Form.Group>


          <Form.Group controlId="formBasicPassword">
            <Form.Control value={inputPass} onChange={this.changeInput} type="password" placeholder="Password" name="inputPass" />
          </Form.Group>

          {/* <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}

          <Button variant="primary" type="submit">
            Submit
            </Button>
          {
            <Form.Text className={`${error.status ? "red" : "hidden"} `}>error: {error.message}</Form.Text>
          }

        </Form>

      </section>
      </Container>
    )
  }
}

export default connect(
  (state) => ({
    ...state.authReducer.registrationForm,
    loginStatus: state.authReducer.loginStatus,
    error: state.authReducer.error
  }),
  { changeInputAC, thunkRegistration }
)(Registation)
