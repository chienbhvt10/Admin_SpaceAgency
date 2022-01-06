import { Layout, Menu } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import SubMenu from 'antd/lib/menu/SubMenu';
import { dataNav } from 'commons/type';
import { getNavigate } from 'helpers/history';
import { findDataNav } from 'helpers/string';
import React from 'react';
import { useLocation } from 'react-router-dom';
import HeaderLayout from '../header';
import RenderIcon from './component/renderIcon';
import { PieChartOutlined } from '@ant-design/icons';

import './nav.scss';
const { Sider } = Layout;
interface IProps {
  children: React.ReactNode;
}

function NavBar(props: IProps) {
  const [collapsed, setCollapsed] = React.useState<boolean>(false);
  const [keyNav, setKeyNav] = React.useState<string>('-1');
  const { pathname } = useLocation();

  React.useEffect(() => {
    if (pathname && pathname !== '/') {
      dataNav.map((i) => {
        i?.item?.map((ii) => {
          const path = pathname.indexOf(ii.router);
          if (path > -1) {
            const objNav = dataNav.find((i) => i.router === ii.router);
            setKeyNav(objNav?.key || '-1');
          } else {
            setKeyNav('1');
          }
        });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };
  const onSelect = ({ item, key, keyPath, selectedKeys, domEvent }: any) => {
    const itemNav = findDataNav(keyPath);
    console.log(itemNav);
    getNavigate(itemNav?.router || '');
  };
  return (
    <Layout className="layout-nav">
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        width={300}
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
          <Menu.Item key="-1" icon={<PieChartOutlined />}>
            Dashboard
          </Menu.Item>
          {dataNav.map((i) => {
            return (
              <SubMenu key={i.key} icon={<RenderIcon item={i} />} title={i.name}>
                {i?.item?.map((ii) => {
                  return <Menu.Item key={ii.key}>{ii.nameSub}</Menu.Item>;
                })}
              </SubMenu>
            );
          })}
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ minHeight: '100vh' }}>
        <HeaderLayout />
        <Content
          className="site-layout-background"
          style={{ margin: '24px 16px 0', overflow: 'initial', paddingLeft: 300 }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
}

export default NavBar;
