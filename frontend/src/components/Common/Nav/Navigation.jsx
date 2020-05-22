import React, { Component } from 'react'
import { Nav, Navbar, Form, Button, FormControl, Container } from 'react-bootstrap'
import { NavLink, Link } from "react-router-dom";
import classes from "./Navigation.module.scss";
import { logoutAC } from "../../../redux/Actions/actions"
import { connect } from "react-redux"
import logoImg from '../../../images/logo.png'

class Navigation extends Component {
  logout = (e) => {
    e.preventDefault()
    this.props.logoutAC()
  }

  render() {
    return (
      <Navbar expand="lg">

        <Container>
          <Navbar.Brand href="/home">
            <img src={logoImg} alt="logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={classes.NavBarWrap + " mr-auto"}>
              {
                this.props.loginStatus
                  ?
                  <>
                    <NavLink activeClassName={classes.active} to="/" exact >My Fridge</NavLink>
                    <NavLink className="nav_link" activeClassName={classes.active} to="/shoppingList">My Shopping List</NavLink>
                    <NavLink className="nav_link" activeClassName={classes.active} to="/recipes/:id">Recipe</NavLink>
                    <Link onClick={this.logout} >Logout</Link>
                  </>
                  :
                  <>
                    <NavLink activeClassName={classes.active} to="/home" exact >Home</NavLink>
                    <NavLink activeClassName={classes.active} to="/login">Login</NavLink>
                    <NavLink activeClassName={classes.active} to="/registration">Register</NavLink>
                  </>
              }
            </Nav>
          </Navbar.Collapse>

        </Container>


      </Navbar>
    )
  }
}
export default connect(
  (state) => ({ loginStatus: state.authReducer.loginStatus }),
  (dispatch) => ({ logoutAC: () => dispatch(logoutAC()) })
)(Navigation)
