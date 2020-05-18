import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container'
import { Route, withRouter } from "react-router-dom"
import PrivateRoute from "./components/Common/PrivateRoute/PrivateRoute.js"

import Fridge from './components/Pages/Fridge/Fridge'
import ShoppingList from './components/Pages/ShoppingList/ShoppingList.jsx'
import AddFridgeItem from './components/Pages/AddFridgeItem/AddFridgeItem.jsx'
import RecipePage from './components/Pages/Recipe/RecipePage.jsx'

import Home from './components/Pages/Home/Home'
import Login from './components/Pages/Login/Login.jsx'
import Registeration from './components/Pages/Registration/Registration.jsx'
import Navigation from './components/Common/Nav/Navigation.jsx'

function App(props) {
  return (
    <div className="App">
      <Container fluid={false}>
        <Navigation />
        <Route>
          <Home exact path="/home" />
        </Route>
        <PrivateRoute exact path="/fridge">
          <Fridge history={props.history} />
        </PrivateRoute>
        <Route exact path="/registration">
          <Registeration history={props.history} />
        </Route>
        <Route exact path="/login">
          <Login history={props.history} />
        </Route>
        <PrivateRoute exact path="/shoppingList">
          <ShoppingList />
        </PrivateRoute>
        <PrivateRoute exact path="/addFridgeItem">
          <AddFridgeItem />
        </PrivateRoute>
        <PrivateRoute path="/recipes/:label">
          <RecipePage history={props.history} />
        </PrivateRoute>
      </Container>
    </div>
  );
}

export default withRouter(App)
