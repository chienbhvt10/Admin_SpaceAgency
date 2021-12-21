import { Layout, Menu } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { dataNav } from 'commons/type';
import { getNavigate } from 'helpers/history';
import { findDataNav } from 'helpers/string';
import React from 'react';
import { useLocation } from 'react-router-dom';
import HeaderLayout from '../header';
import RenderIcon from './component/renderIcon';
const { Sider } = Layout;
interface IProps {
  children: React.ReactNode;
}
function NavBar(props: IProps) {
  const [collapsed, setCollapsed] = React.useState<boolean>(false);
  const [keyNav, setKeyNav] = React.useState<string>('1');
  const { pathname } = useLocation();

  React.useEffect(() => {
    if (pathname) {
      const objNav = dataNav.find((item) => item.router === pathname);
      setKeyNav(objNav?.key || '1');
    }
  }, [pathname]);
  const onCollapse = () => {
    setCollapsed(!collapsed);
  };
  const onSelect = ({ item, key }: any) => {
    const itemNav = findDataNav(key);
    getNavigate(itemNav?.router || '');
  };
  return (
    <Layout>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          paddingTop: 64,
          left: 0,
        }}
      >
        <div className="logo" />
        <Menu theme="dark" selectedKeys={[`${keyNav}`]} mode="inline" onSelect={onSelect}>
          {dataNav.map((item) => {
            return (
              <Menu.Item key={item.key} icon={<RenderIcon item={item} />}>
                {item.name}
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ minHeight: '100vh' }}>
        <HeaderLayout />
        <Content
          className="site-layout-background"
          style={{ margin: '24px 16px 0', paddingLeft: 200, overflow: 'initial' }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
}

export default NavBar;
