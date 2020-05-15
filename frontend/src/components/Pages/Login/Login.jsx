import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import classes from './Login.module.scss'
import { changeInputLoginAC, changeInputPassAC } from '../../../redux/Actions/actions'
import { thunkLogin } from '../../../redux/Think/authThink'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class Login extends Component {
  componentDidUpdate() {
    if (this.props.loginStatus) {
      this.props.history.push('/')
    }
  }

  login = (e) => {
    e.preventDefault()
    //Refact Сделать валидацию
    const { inputLogin, inputPass } = this.props
    this.props.thunkLogin(inputLogin, inputPass)
  }

  changeLoginInput = (e) => {
    const login = e.target.value
    this.props.changeInputLoginAC(login)
  }

  changePassInput = (e) => {
    const pass = e.target.value
    this.props.changeInputPassAC(pass)
  }

  render() {
    const { inputLogin, inputPass, error } = this.props
    return (
      <section className='authPage'>
        <Form className={classes.form + ' formSend'} onSubmit={this.login}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control required value={inputLogin} onChange={this.changeLoginInput} type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control required value={inputPass} onChange={this.changePassInput} type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="primary" type="submit" >
            Submit
          </Button>
          <div>
            <NavLink activeClassName={classes.active} to="/registration">Registration</NavLink>
          </div>

          {
            <Form.Text className={`${error.status ? "red" : "hidden"} `}>error: {error.message}</Form.Text>
          }

        </Form>
      </section>

    )
  }
}

export default connect(
  (state) => ({
    loginStatus: state.authReducer.loginStatus,
    inputLogin: state.authReducer.inputLogin,
    inputPass: state.authReducer.inputPass,
    error: state.authReducer.error
  }),
  (dispatch) => ({
    thunkLogin: (login, pass) => dispatch(thunkLogin(login, pass)),
    changeInputLoginAC: (login) => dispatch(changeInputLoginAC(login)),
    changeInputPassAC: (pass) => dispatch(changeInputPassAC(pass)),
  })
)(Login)
