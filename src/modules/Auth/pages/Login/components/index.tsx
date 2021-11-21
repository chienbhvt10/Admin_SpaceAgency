import { LoginInput } from 'modules/Auth/redux/action-types';
import { login } from 'modules/Auth/redux/actions/login';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import '../styles/login.scss';
function FormLogin(props: any) {
  const [loginInput, setLoginInput] = React.useState<LoginInput>({
    password: '',
    username: '',
  });
  const dispatch = useDispatch();
  const onLogin = () => {
    dispatch(login(loginInput));
  };

  const onChangeUserName = (event: any) => {
    setLoginInput({
      ...loginInput,
      username: event.target.value,
    });
  };

  const onChangePassWork = (event: any) => {
    setLoginInput({
      ...loginInput,
      password: event.target.value,
    });
  };

  return (
    <div id="loginForm">
      <div className="loginForm__container">
        <h3 className="text-center mt-3">Login Form</h3>
        <div className="loginForm__container--form">
          <div>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Username" onChange={onChangeUserName} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={onChangePassWork} />
              </Form.Group>
              <Button onClick={onLogin} variant="danger">
                Login
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormLogin;
