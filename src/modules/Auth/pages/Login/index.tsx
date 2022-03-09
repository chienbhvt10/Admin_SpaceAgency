import AuthLayout from 'commons/components/layouts/Auth';
import { setTitle } from 'helpers/dom';
import LoginForm from 'modules/Auth/pages/Login/components';
import React from 'react';

function LoginPage() {
  React.useEffect(() => {
    setTitle('ログイン');
  }, []);

  return (
    <AuthLayout>
      <LoginForm loading={false}></LoginForm>
    </AuthLayout>
  );
}

export default LoginPage;
