import { Layout } from 'antd';
import { CommonPath } from 'commons/base-routes';
import env from 'env';
import { getNavigate } from 'helpers/history';
import React from 'react';

const { Header } = Layout;
const HeaderLayout = () => {
  const onLogout = () => {
    localStorage.removeItem(env.tokenKey);
    getNavigate(CommonPath.LOGIN_PATH);
  };
  return (
    <div id="headerPage">
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <h3 onClick={onLogout}>Logout</h3>
        </Header>
      </Layout>
    </div>
  );
};

export default HeaderLayout;
