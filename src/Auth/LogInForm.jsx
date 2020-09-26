import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import AuthApi from "../api/AuthApi";
import AuthStore from "../api/AuthStore";
import jwt from 'jwt-decode';
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const LogInForm =  () => {
    let authService = new AuthApi();
    let user;
    const onFinish  = async values => {
    console.log('Success:', values);
    await authService.login(values);
    const token = AuthStore.getToken();
    user = jwt(token);
   // history.push(`/userpage/main/${user.nameid}`);
    //window.location.reload();
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      style = {{textAlign : "center", display : "inline-block", marginTop : "20px"}}
    >
      <Form.Item
        label="Username"
        name="email"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="rememberMe" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default LogInForm;