import { Typography } from 'antd';
import { CommonPath } from 'commons/base-routes';
import PageHeader from 'commons/components/layouts/PageHeader';
import StyleCollectionLayout from 'commons/components/layouts/StylesCollection';
import { TypeForm } from 'commons/type';
import { setTitle } from 'helpers/dom';
import CreateStyleForm from 'modules/StylesCollection/components/StyleForm';
import { useCreateUser } from 'modules/UserManagement/hooks/useCreateUser';
import React from 'react';
const { Title } = Typography;
const NewStyleCollection = () => {
  const { loading } = useCreateUser();
  React.useEffect(() => {
    setTitle('Create Style');
  });
  const routes = [
    {
      path: CommonPath.DEFAULT_PATH,
      breadcrumbName: 'Home',
    },
    {
      path: CommonPath.STYLES_COLLECTION,
      breadcrumbName: 'Style Collection',
    },
    {
      path: CommonPath.STYLES_COLLECTION_NEW,
      breadcrumbName: 'Create Style Collection',
    },
  ];
  return (
    <StyleCollectionLayout>
      <PageHeader title="" breadcrumb={{ routes }} />
      <CreateStyleForm title="Create Style Collection" type={TypeForm.CREATE} loading={loading} />
    </StyleCollectionLayout>
  );
};

export default NewStyleCollection;
