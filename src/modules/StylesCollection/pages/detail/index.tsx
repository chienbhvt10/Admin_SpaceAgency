import { CommonPath } from 'commons/base-routes';
import PageHeader from 'commons/components/layouts/PageHeader';
import StyleCollectionLayout from 'commons/components/layouts/StylesCollection';
import { TypeForm } from 'commons/type';
import { setTitle } from 'helpers/dom';
import StyleCollectionDetailForm from 'modules/StylesCollection/components/StyleForm';
import { useStyleDetail } from 'modules/StylesCollection/hooks/useStyleDetail';
import { useUpdateUser } from 'modules/UserManagement/hooks/useUpdateUser';
import React from 'react';
import { useParams } from 'react-router';
interface Props {}

const StyleCollectionDetail = (props: Props) => {
  let { id } = useParams<'id'>();
  const { item } = useStyleDetail(id);
  const { loading: loadingUpdate } = useUpdateUser();

  React.useEffect(() => {
    setTitle('Style Collection Detail');
  }, []);
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
      path: CommonPath.USERS_MANAGEMENT_DETAIL,
      breadcrumbName: 'Style Collection Detail',
    },
  ];
  return (
    <StyleCollectionLayout>
      <PageHeader title="Detail User" breadcrumb={{ routes }} />
      <StyleCollectionDetailForm
        title="Update Style Collection"
        type={TypeForm.UPDATE}
        item={item}
        loading={loadingUpdate}
      />
    </StyleCollectionLayout>
  );
};

export default StyleCollectionDetail;
