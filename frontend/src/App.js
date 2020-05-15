import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container'
import { Route, withRouter } from "react-router-dom"
import PrivateRoute from "./components/Common/PrivateRoute/PrivateRoute.js"

import Home from './components/Pages/Home/Home.jsx'
import Login from './components/Pages/Login/Login.jsx'
import Registeration from './components/Pages/Registration/Registration.jsx'
import Navigation from './components/Common/Nav/Navigation.jsx'

function App(props) {
  return (
    <div className="App">
      <Container fluid={false}>
        <Navigation />
        <PrivateRoute exact path="/">
          <Home />
        </PrivateRoute>
        <Route path="/registration">
          <Registeration history={props.history} />
        </Route>
        <Route path="/login">
          <Login history={props.history} />
        </Route>
      </Container>
    </div>
  );
}

export default withRouter(App)
