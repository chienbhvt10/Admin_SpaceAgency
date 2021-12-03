import { Layout } from 'antd';
import { CommonPath } from 'commons/base-routes';
import { NEXT_LOCALE } from 'commons/type';
import env from 'env';
import { getNavigate, setRedirectUrl } from 'helpers/history';
import { useCookies } from 'react-cookie';

const { Header } = Layout;
const HeaderLayout = () => {
  const [cookies] = useCookies([NEXT_LOCALE]);
  const onLogout = () => {
    localStorage.removeItem(env.tokenKey);
    getNavigate(CommonPath.LOGIN_PATH);
    setRedirectUrl(cookies.NEXT_LOCALE);
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
