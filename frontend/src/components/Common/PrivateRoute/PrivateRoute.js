import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

function PrivateRoute({ children, isAuthenticated, email, ...rest }) {
  console.log(email)
  return (
    <Route {...rest} render={({ location }) =>
      isAuthenticated && email != ''
        ? (children)
        : (<Redirect to={{ pathname: "/login", state: { from: location } }} />)
    }
    />
  );
}

export default connect(
  (state) => ({ loginStatus: state.authReducer.loginStatus }),
  null
)(PrivateRoute);
