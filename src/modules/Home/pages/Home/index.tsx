import HomeLayout from 'commons/components/layouts/Home';
import { setTitle } from 'helpers/dom';
import React from 'react';

function HomePage() {
  React.useEffect(() => {
    setTitle('ホーム');
  }, []);
  return (
    <HomeLayout>
      <div id="homePage">ホーム</div>
    </HomeLayout>
  );
}

export default HomePage;
