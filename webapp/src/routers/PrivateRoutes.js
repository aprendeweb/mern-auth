import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoutes({ user, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      component={(props) =>
        user._id ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(PrivateRoutes);
