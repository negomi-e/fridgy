import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

function PrivateRoute({ children, loginStatus, email, ...rest }) {
  return (
    <Route {...rest} render={({ location }) =>
      loginStatus && email != ''
        ? (children)
        : (<Redirect to={{ pathname: "/home", state: { from: location } }} />)
    }
    />
  );
}

export default connect(
  (state) => ({
    loginStatus: state.authReducer.loginStatus,
    email: state.authReducer.userInfo.email
  }),
  null
)(PrivateRoute);
