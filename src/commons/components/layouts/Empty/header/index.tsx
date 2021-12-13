import { Dropdown, Layout, Menu } from 'antd';
import { CommonPath } from 'commons/base-routes';
import { NEXT_LOCALE } from 'commons/type';
import env from 'env';
import { getNavigate, setRedirectUrl } from 'helpers/history';
import { useCookies } from 'react-cookie';
import { useGetUser } from './hooks/useGetUser';
import { DownOutlined } from '@ant-design/icons';

const { Header } = Layout;
const HeaderLayout = () => {
  const [cookies] = useCookies([NEXT_LOCALE]);
  const { data } = useGetUser();
  const onLogout = () => {
    localStorage.removeItem(env.tokenKey);
    getNavigate(CommonPath.LOGIN_PATH);
    setRedirectUrl(cookies.NEXT_LOCALE);
  };
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a target="_blank" rel="noopener noreferrer">
          Profile
        </a>
      </Menu.Item>
      <Menu.Item key="1">
        <a target="_blank" rel="noopener noreferrer" onClick={onLogout}>
          Logout
        </a>
      </Menu.Item>
    </Menu>
  );
  return (
    <div id="headerPage">
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <Dropdown overlay={menu} trigger={['click']}>
            <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
              {data?.firstName} <DownOutlined />
            </a>
          </Dropdown>
        </Header>
      </Layout>
    </div>
  );
};

export default HeaderLayout;
