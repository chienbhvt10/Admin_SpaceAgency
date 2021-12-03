import UserLayout from 'commons/components/layouts/User';
import { setTitle } from 'helpers/dom';
import React from 'react';

const UserPage = () => {
  React.useEffect(() => {
    setTitle('User');
  }, []);
  return (
    <UserLayout>
      <div>UserLayout</div>
    </UserLayout>
  );
};

export default UserPage;
