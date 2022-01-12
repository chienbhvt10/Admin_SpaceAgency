import { CommonPath } from 'commons/base-routes';
import PageHeader from 'commons/components/layouts/PageHeader';
import ThemeCollectionLayout from 'commons/components/layouts/ThemesCollection';
import { setTitle } from 'helpers/dom';
import React from 'react';
import './style.scss';
import { FormSearch } from 'commons/components/layouts/FormSearch';
import TableThemes from './Table';
import { Button } from 'antd';
import { useNavigate } from 'react-router';
import { PlusOutlined } from '@ant-design/icons';
import { useListThemes } from 'modules/ThemesCollection/hooks/useListThemes';
import TableHeader from 'commons/components/layouts/TableHeader';

const ThemeCollectionPage = () => {
  const navigate = useNavigate();
  const { dataThemes, loading } = useListThemes();
  React.useEffect(() => {
    setTitle('Theme Collection');
  }, []);
  const handleAdd = () => {
    navigate(CommonPath.THEME_COLLECTION_NEW);
  };
  const onChange = () => {};
  const routes = [
    {
      path: CommonPath.DEFAULT_PATH,
      breadcrumbName: 'Home',
    },
    {
      path: CommonPath.THEME_COLLECTION,
      breadcrumbName: 'Themes Collection',
    },
  ];
  return (
    <ThemeCollectionLayout>
      <PageHeader title="" breadcrumb={{ routes }} />
      <TableHeader
        title="Theme Managenent"
        extra={
          <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>
            New Style
          </Button>
        }
      >
        <FormSearch />
        <TableThemes items={dataThemes} loading={loading} onChange={onChange} handleAdd={handleAdd} />
      </TableHeader>
    </ThemeCollectionLayout>
  );
};

export default ThemeCollectionPage;
