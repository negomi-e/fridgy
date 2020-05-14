import React from 'react';
import './App.css';
import { Row, Col, Card, Button } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import { Route, Switch, withRouter } from "react-router-dom"
import PrivateRoute from "./components/Common/PrivateRoute/PrivateRoute.js"

import Home from './components/Pages/Home/Home.jsx'
import Login from './components/Pages/Login/Login.jsx'
import Registeration from './components/Pages/Registation/Registation.jsx'
import Navigation from './components/Common/Nav/Navigation.jsx'

function App() {
  return (
    <div className="App">
      <Container fluid={false}>

        <Navigation />

        {/* <Switch>
          <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute>
        </Switch> */}


        <Route path="/registration" render={() => <Registeration />} />
        <Route path="/login" render={() => <Login />} />

      </Container>
    </div>
  );
}

export default App;
