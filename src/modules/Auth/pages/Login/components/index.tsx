import React from 'react';
import { Button, Form } from 'react-bootstrap';
import '../styles/login.scss';
function FormLogin(props: any) {
  const onLogin = () => {
    console.log('asnlcknakslckslnk');
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
                <Form.Control type="text" placeholder="Username" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
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
