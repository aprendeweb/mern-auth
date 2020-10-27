import React, { Component } from 'react';
import { PageHeader, Row, Col, Button } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { userActions } from '../../store/actions';

class Header extends Component {
  render() {
    const { user } = this.props;

    const logOut = () => {
      localStorage.removeItem('token');
      this.props.logOut();
    };

    return (
      <PageHeader>
        <Row justify="space-around">
          <Col>
            <h2>Login System</h2>
          </Col>
          <Col>
            {user._id ? (
              <Button onClick={logOut}>Logout</Button>
            ) : (
              <Button>
                <Link to="/signin">Login</Link>
              </Button>
            )}
          </Col>
        </Row>
      </PageHeader>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(userActions.logOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
