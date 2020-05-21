import React, { Component } from 'react'
import { Nav, Navbar, Form, Button, FormControl } from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.scss";
import { logoutAC } from "../../../redux/Actions/actions"
import { connect } from "react-redux"


class Navigation extends Component {
  logout = (e) => {
    e.preventDefault()
    this.props.logoutAC()
  }

  render() {
    return (
      <Navbar expand="lg">
        <Navbar.Brand href="/home">Fridgy</Navbar.Brand>
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
                <a onClick={this.logout} >Logout</a>
                </>
                :
                <>
                <NavLink activeClassName={classes.active} to="/home"  exact >Home</NavLink>
                <NavLink activeClassName={classes.active} to="/login">Login</NavLink>
                </>
            }
          </Nav>
       
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
export default connect(
  (state) => ({ loginStatus: state.authReducer.loginStatus }),
  (dispatch) => ({ logoutAC: () => dispatch(logoutAC()) })
)(Navigation)
