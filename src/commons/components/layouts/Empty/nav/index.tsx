import { PieChartOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React from 'react';
const { Sider } = Layout;
interface IProps {
  children: React.ReactNode;
}
function NavBar(props: IProps) {
  const onCollapse = () => {
    setCollapsed(!collapsed);
  };
  const [collapsed, setCollapsed] = React.useState<boolean>(false);
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Dashboard
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 18px 18px' }}>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
}

export default NavBar;
