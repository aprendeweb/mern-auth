import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import { Layout } from 'antd';
import Header from './components/Header';
const { Content } = Layout;

function App() {
  return (
    <div>
      <Header />
      <Content>
        <BrowserRouter>
          <Switch>
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </BrowserRouter>
      </Content>
    </div>
  );
}

export default App;
