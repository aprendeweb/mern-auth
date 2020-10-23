import React, { Component } from 'react';
import { Row, Input, Button, Form, Divider, Spin } from 'antd';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../../store/actions';
import { reduxForm, Field } from 'redux-form';

class SignIn extends Component {
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
    this.props.signInRequest(formValues);
  }

  render() {
    const { user } = this.props;
    if (user._id) return <Redirect to="dashboard" />;
    return (
      <div>
        <Divider orientation="center">Sign In form</Divider>
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
                  Sing In
                </Button>
              )}
            </Form.Item>

            <Link to="/signup">Create an account</Link>
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
    signInRequest: (user) => dispatch(userActions.signInRequest(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ form: 'signIn' })(SignIn));
