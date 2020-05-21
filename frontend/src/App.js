import React, { useEffect } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container'
import { Switch, Route, withRouter } from "react-router-dom"
import PrivateRoute from "./components/Common/PrivateRoute/PrivateRoute.js"
import { alertErrorAC, alertSuccesAC } from "./redux/Actions/actions"

import Fridge from './components/Pages/Fridge/Fridge'
import ShoppingList from './components/Pages/ShoppingList/ShoppingList.jsx'
import AddFridgeItem from './components/Pages/AddFridgeItem/AddFridgeItem.jsx'
import RecipePage from './components/Pages/Recipe/RecipePage.jsx'

import Home from './components/Pages/Home/Home'
import Login from './components/Pages/Login/Login.jsx'
import Registeration from './components/Pages/Registration/Registration.jsx'
import Navigation from './components/Common/Nav/Navigation.jsx'
import { AlertSuccess, AlertError } from './components/Common/Alerts/Alerts.jsx'
import { connect } from 'react-redux';


function App(props) {

  useEffect(() => {
    if (props.alertSuccess) {
      setTimeout(() => {
        props.alertSuccesAC()
      }, 2000)
    }
    if (props.alertError) {
      setTimeout(() => {
        props.alertErrorAC()
      }, 2000)
    }
  })

  return (
    <div className="App">
      <Navigation />
      

        {
          props.alertSuccess ? <AlertSuccess /> : null
        }
        {
          props.alertError ? <AlertError /> : null
        }

        <Switch>
          <Route path="/registration">
            <Registeration history={props.history} />
          </Route>
          <Route path="/login">
            <Login history={props.history} />
          </Route>
          <Route path="/home">
            <Home />
          </Route>

          <PrivateRoute exact path="/">
            <Fridge history={props.history} />
          </PrivateRoute>
          <PrivateRoute path="/shoppingList">
            <ShoppingList />
          </PrivateRoute>
          <PrivateRoute path="/addFridgeItem">
            <AddFridgeItem />
          </PrivateRoute>
          <PrivateRoute path="/recipes/:label">
            <RecipePage history={props.history} />
          </PrivateRoute>
        </Switch>
     
    </div>
  );
}

export default connect(
  (state) => ({
    alertSuccess: state.shoppingListReducer.successAlert,
    alertError: state.shoppingListReducer.errorAlert
  }),
  { alertSuccesAC, alertErrorAC }
)(withRouter(App))
