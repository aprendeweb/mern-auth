import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './routers/PrivateRoutes';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import { isAuthorized, getToken } from './utils/auth';
import { Layout, notification } from 'antd';
import Header from './components/Header';
import { userActions } from './store/actions';
import { decode } from 'jsonwebtoken';
const { Content } = Layout;

class App extends Component {
  componentDidUpdate() {
    const {
      notification: { msg },
    } = this.props;

    const args = {
      message: 'Ooops',
      description: msg,
      duration: 0,
    };
    notification.open(args);
  }
  render() {
    const { signInSuccess } = this.props;
    if (isAuthorized()) {
      const token = getToken();
      const user = decode(token);
      signInSuccess(user);
    }
    return (
      <div>
        <Header />
        <Content>
          <Switch>
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
        </Content>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signInSuccess: (user) => dispatch(userActions.signInSuccess(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
