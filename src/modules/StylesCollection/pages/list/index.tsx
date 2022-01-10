import { CommonPath } from 'commons/base-routes';
import PageHeader from 'commons/components/layouts/PageHeader';
import StyleCollectionLayout from 'commons/components/layouts/StylesCollection';
import { setTitle } from 'helpers/dom';
import useListStyle from 'modules/StylesCollection/hooks/useListStyle';
import React from 'react';
import { useNavigate } from 'react-router';
import StyleCollectionTable from './Table';

const StyleCollectionPage = () => {
  const { items, loading } = useListStyle();
  const navigate = useNavigate();
  React.useEffect(() => {
    setTitle('Style Collection');
  }, []);
  const rowKey = (item: any) => `${item._id}`;
  const handleAdd = () => {
    navigate(CommonPath.STYLES_COLLECTION_NEW);
  };
  const onChange = () => {};
  const routes = [
    {
      path: CommonPath.DEFAULT_PATH,
      breadcrumbName: 'Home',
    },
    {
      path: CommonPath.THEME_COLLECTION,
      breadcrumbName: 'Style Collection',
    },
  ];
  return (
    <StyleCollectionLayout>
      <PageHeader title="" breadcrumb={{ routes }} />
      <StyleCollectionTable handleAdd={handleAdd} items={items} loading={loading} onChange={onChange} rowKey={rowKey} />
    </StyleCollectionLayout>
  );
};

export default StyleCollectionPage;
