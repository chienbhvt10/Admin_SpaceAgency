import { Button, Form, Input } from 'antd';
import { CreateAuthInput, LoginAdminVariables } from 'graphql/generated/graphql';
import { login } from 'modules/Auth/redux/actions/login';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionLoading } from 'redux/actions';
import { RootState } from 'redux/reducers';
import '../styles/login.scss';

function FormLogin(props: any) {
  const dispatch = useDispatch();
  const stateLoading = useSelector((state: RootState) => state.loadingReducer.loading);

  const onFinish = (values: CreateAuthInput) => {
    const loginInput: CreateAuthInput = {
      email: values.email,
      password: values.password,
    };
    const payload: LoginAdminVariables = {
      loginInput,
    };
    dispatch(actionLoading());
    dispatch(login(payload));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div id="loginForm">
      <div className="loginForm__container">
        <h3>ログイン</h3>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item label="Eメール" name="email" rules={[{ required: true, message: 'IDを入力して下さい。' }]}>
            <Input />
          </Form.Item>

          <Form.Item
            label="パスワード"
            name="password"
            rules={[{ required: true, message: 'パスワードを入力して下さい。' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" loading={stateLoading}>
              ログイン
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default FormLogin;
