import React, { Component } from 'react';
import { Row, Input, Button, Form, Divider } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
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
    console.log(formValues);
  }

  render() {
    return (
      <div>
        <Divider orientation="center">Sign In form</Divider>
        <Row justify="center" style={{ padding: '5%' }}>
          <form onSubmit={this.props.handleSubmit(this.submitForm)}>
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
              <Button htmlType="submit" type="primary">
                Sing In
              </Button>
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

export default connect(mapStateToProps)(reduxForm({ form: 'signIn' })(SignIn));
