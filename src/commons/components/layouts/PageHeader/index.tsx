import { HomeOutlined } from '@ant-design/icons';
import { PageHeader as AntPageHeader } from 'antd';
import { Route } from 'antd/lib/breadcrumb/Breadcrumb';
import { setTitle } from 'helpers/dom';
import React, { ReactNode, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function PageHeader(props: any & { title: string; extra?: ReactNode[] }) {
  useEffect(() => {
    setTitle(props.title);
  }, [props.title]);

  const renderBreadcrumbItem = (route: Route, params: any, routes: Route[], paths: string[]) => {
    if (route.path === '/') {
      return (
        <Link to="/">
          <HomeOutlined style={{ padding: 5 }} /> Home
        </Link>
      );
    }
    if (routes[routes.length - 1].path === route.path) {
      return route.breadcrumbName;
    }
    return <Link to={route.path}>{route.breadcrumbName}</Link>;
  };

  const routes = props.breadcrumb?.routes || [];

  return (
    <AntPageHeader
      {...props}
      breadcrumb={{ routes, itemRender: renderBreadcrumbItem }}
      className="bg-white"
      extra={props.extra}
    />
  );
}
