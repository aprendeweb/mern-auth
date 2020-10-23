import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './routers/PrivateRoutes';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import { isAuthorized, getToken } from './utils/auth';
import { Layout } from 'antd';
import Header from './components/Header';
import { userActions } from './store/actions';
import { decode } from 'jsonwebtoken';
const { Content } = Layout;

function App({ signInSuccess }) {
  if (isAuthorized()) {
    const token = getToken();
    const user = decode(token);
    console.log(user);
    signInSuccess(user);
  }
  return (
    <div>
      <Header />
      <Content>
        <BrowserRouter>
          <Switch>
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
        </BrowserRouter>
      </Content>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    signInSuccess: (user) => dispatch(userActions.signInSuccess(user)),
  };
};

export default connect(null, mapDispatchToProps)(App);
