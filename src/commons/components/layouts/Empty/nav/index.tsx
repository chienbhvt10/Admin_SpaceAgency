import { PieChartOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import SubMenu from 'antd/lib/menu/SubMenu';
import { DataNav, dataNav } from 'commons/type';
import { getNavigate } from 'helpers/history';
import { findDataNav } from 'helpers/string';
import { useGetAllStyles } from 'modules/StylesCollection/hooks/useGetAllStyles';
import { useGetAllThemes } from 'modules/ThemesCollection/hooks/useGetAllThemes';
import { useGetAllUser } from 'modules/UserManagement/hooks/useGetAllUser';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { actionResetFilter } from 'redux/actions';
import HeaderLayout from '../header';
import RenderIcon from './component/renderIcon';
import './nav.scss';
const { Sider } = Layout;
interface IProps {
  children: React.ReactNode;
}

function NavBar(props: IProps) {
  const [collapsed, setCollapsed] = React.useState<boolean>(false);
  const [keyNav, setKeyNav] = React.useState<string>();
  const [openKeys, setOpenKeys] = React.useState<string[]>(['menu_1', 'menu_2', 'menu_3']);
  const dispatch = useDispatch();

  const { defaultThemes } = useGetAllThemes();
  const { defaultStyles } = useGetAllStyles();
  const { defaultUser } = useGetAllUser();

  const { pathname } = useLocation();

  React.useEffect(() => {
    if (pathname && pathname !== '/') {
      dataNav.map((i) => {
        i?.item?.map((ii) => {
          if (ii.router === pathname) {
            setKeyNav(ii?.key);
          } else {
            const searchRouter = pathname.search(ii.router);
            if (searchRouter > -1) {
              setKeyNav(ii?.key);
            }
          }
        });
      });
    } else {
      setKeyNav('-1');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };
  const onSelect = ({ keyPath }: any) => {
    const itemNav = findDataNav(keyPath);
    getNavigate(itemNav?.router || '');
  };
  const onTitleClick = (i: DataNav) => () => {
    const arr = [...openKeys];
    arr.push(i.key);
    setOpenKeys(['menu_1', 'menu_2', 'menu_3']);
  };
  const onClickSubMenu = () => {
    dispatch(actionResetFilter());
    defaultThemes();
    defaultStyles();
    defaultUser();
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
        <Menu
          openKeys={openKeys}
          theme="dark"
          selectedKeys={[`${keyNav}`]}
          mode="inline"
          onClick={onSelect}
          expandIcon={<></>}
        >
          <Menu.Item key="-1" icon={<PieChartOutlined />} style={{ marginTop: 0 }}>
            ダッシュボード
          </Menu.Item>
          {dataNav.map((i) => {
            return (
              <SubMenu onTitleClick={onTitleClick(i)} key={i.key} icon={<RenderIcon item={i} />} title={i.name}>
                {i?.item?.map((ii) => {
                  return (
                    <Menu.Item onClick={onClickSubMenu} key={ii.key}>
                      {ii.nameSub}
                    </Menu.Item>
                  );
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
