import { Button, Form, Input } from 'antd';
import { LoginUserInput } from 'graphql/generated/graphql';
import { login } from 'modules/Auth/redux/actions/login';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionLoading } from 'redux/actions';
import { RootState } from 'redux/reducers';
import '../styles/login.scss';

function FormLogin(props: any) {
  const dispatch = useDispatch();
  const stateLoading = useSelector((state: RootState) => state.loadingReducer.loading);

  const onFinish = (values: LoginUserInput) => {
    const loginInput: LoginUserInput = {
      email: values.email,
      password: values.password,
    };
    dispatch(actionLoading());
    dispatch(login(loginInput));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div id="loginForm">
      <div className="loginForm__container">
        <h3>Login</h3>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" loading={stateLoading}>
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default FormLogin;
