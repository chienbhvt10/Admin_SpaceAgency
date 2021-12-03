import HomeLayout from 'commons/components/layouts/Home';
import { setTitle } from 'helpers/dom';
import React from 'react';

function HomePage() {
  React.useEffect(() => {
    setTitle('Trang chu');
  }, []);
  return (
    <HomeLayout>
      <div id="homePage">Home</div>
    </HomeLayout>
  );
}

export default HomePage;
