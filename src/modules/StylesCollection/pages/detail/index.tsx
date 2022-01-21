import { CommonPath } from 'commons/base-routes';
import PageHeader from 'commons/components/layouts/PageHeader';
import StyleCollectionLayout from 'commons/components/layouts/StylesCollection';
import { TypeForm } from 'commons/type';
import { setTitle } from 'helpers/dom';
import StyleCollectionDetailForm from 'modules/StylesCollection/components/StyleForm';
import { useStyleDetail } from 'modules/StylesCollection/hooks/useStyleDetail';
import { useUpdateStyle } from 'modules/StylesCollection/hooks/useUpdateStyle';
import React from 'react';
import { useNavigate, useParams } from 'react-router';

const StyleCollectionDetail = () => {
  let { id } = useParams<'id'>();

  const { item, getDetailStyle } = useStyleDetail();
  const { loading: loadingUpdate } = useUpdateStyle();
  const navigate = useNavigate();
  React.useEffect(() => {
    if (id) {
      getDetailStyle(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  React.useEffect(() => {
    setTitle('Style Collection Detail');
  }, []);
  const onCancel = () => {
    navigate(CommonPath.STYLES_COLLECTION);
  };
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
      path: CommonPath.STYLES_COLLECTION_DETAIL,
      breadcrumbName: 'Style Collection Detail',
    },
  ];
  return (
    <StyleCollectionLayout>
      <PageHeader title="" breadcrumb={{ routes }} />
      <StyleCollectionDetailForm
        title="Update Style Collection"
        type={TypeForm.UPDATE}
        item={item}
        loading={loadingUpdate}
        onCancel={onCancel}
      />
    </StyleCollectionLayout>
  );
};

export default StyleCollectionDetail;
