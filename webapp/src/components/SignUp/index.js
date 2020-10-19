import React, { Component } from 'react';
import { Row, Form, Input, Button, Divider, Spin } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../../store/actions';
import { reduxForm, Field } from 'redux-form';

class SignUp extends Component {
  renderTextField({ input, label }) {
    return (
      <Form.Item label={label}>
        <Input {...input} />
      </Form.Item>
    );
  }

  renderTextPasswordField({ input, label }) {
    return (
      <Form.Item label={label}>
        <Input.Password {...input} />
      </Form.Item>
    );
  }

  submitForm(formValues) {
    this.props.signUpRequest(formValues);
  }
  render() {
    const { user } = this.props;
    return (
      <div>
        <Divider orientation="center">Sing Up form</Divider>
        <Row justify="center" style={{ padding: '5%' }}>
          <form onSubmit={this.props.handleSubmit(this.submitForm.bind(this))}>
            <Field
              name="username"
              label="Username"
              component={this.renderTextField}
            />
            <Field
              name="password"
              label="Password"
              component={this.renderTextPasswordField}
            />
            <Form.Item>
              {user && user.inPromise ? (
                <Spin spinning={user.inPromise || false} />
              ) : (
                <Button htmlType="submit" type="primary">
                  Sign Up
                </Button>
              )}
            </Form.Item>
            <Link to="/signin">I already have an account</Link>
          </form>
        </Row>
      </div>
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
    signUpRequest: (user) => dispatch(userActions.signUpRequest(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ form: 'signUp' })(SignUp));
