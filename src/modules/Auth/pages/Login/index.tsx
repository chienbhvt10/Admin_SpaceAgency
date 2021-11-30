import AuthLayout from 'commons/components/layouts/Auth';
import { setTitle } from 'helpers/dom';
import LoginForm from 'modules/Auth/pages/Login/components';
import React from 'react';
import { BaseLoading } from 'utils/loading/BaseLoading';

function LoginPage() {
  React.useEffect(() => {
    setTitle('Đăng Nhập');
  }, []);

  return (
    <AuthLayout>
      <LoginForm loading={false}></LoginForm>
      <BaseLoading />
    </AuthLayout>
  );
}

export default LoginPage;
