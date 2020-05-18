import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container'
import { Route, withRouter } from "react-router-dom"
import PrivateRoute from "./components/Common/PrivateRoute/PrivateRoute.js"

import Home from './components/Pages/Home/Home.jsx'
import ShoppingList from './components/Pages/ShoppingList/ShoppingList.jsx'
import AddFridgeItem from './components/Pages/AddFridgeItem/AddFridgeItem.jsx'
import RecipePage from './components/Pages/Recipe/RecipePage.jsx'

import Login from './components/Pages/Login/Login.jsx'
import Registeration from './components/Pages/Registration/Registration.jsx'
import Navigation from './components/Common/Nav/Navigation.jsx'
import { AlertSuccess, AlertError } from './components/Common/Push/Alerts.jsx'

function App(props) {
  return (
    <div className="App">

      <Container fluid={false}>
        {/* <AlertSuccess /> */}
        <AlertError />

        <Navigation />
        <PrivateRoute exact path="/">
          <Home history={props.history} />
        </PrivateRoute>
        <Route path="/registration">
          <Registeration history={props.history} />
        </Route>
        <Route path="/login">
          <Login history={props.history} />
        </Route>
        <PrivateRoute path="/shoppingList">
          <ShoppingList />
        </PrivateRoute>
        <Route path="/addFridgeItem">
          <AddFridgeItem />
        </Route>
        <Route path="/recipes/:label">
          <RecipePage history={props.history} />
        </Route>
      </Container>
    </div>
  );
}

export default withRouter(App)
