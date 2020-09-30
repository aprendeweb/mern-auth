import React, { Component } from 'react';
import { Row, Form, Input, Button, Divider } from 'antd';
import { Link } from 'react-router-dom';

export default class SignIn extends Component {
  render() {
    return (
      <div>
        <Divider orientation="center">Sign In form</Divider>
        <Row justify="center" style={{ padding: '5%' }}>
          <Form>
            <Form.Item label="Username">
              <Input />
            </Form.Item>
            <Form.Item label="Password">
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button type="primary">Sing In</Button>
            </Form.Item>
            <Link to="/signup">Create an account</Link>
          </Form>
        </Row>
      </div>
    );
  }
}
