import { CommonPath } from 'commons/base-routes';
import PageHeader from 'commons/components/layouts/PageHeader';
import StyleCollectionLayout from 'commons/components/layouts/StylesCollection';
import { CreateStyleTypeInput, TypeForm } from 'commons/type';
import { CurrencyUnit } from 'graphql/generated/graphql';
import { setTitle } from 'helpers/dom';
import StyleCollectionDetailForm from 'modules/StylesCollection/components/StyleForm';
import { useStyleDetail } from 'modules/StylesCollection/hooks/useStyleDetail';
import { useUpdateStyle } from 'modules/StylesCollection/hooks/useUpdateStyle';
import React from 'react';
import { useNavigate, useParams } from 'react-router';

const StyleCollectionDetail = () => {
  let { id } = useParams<'id'>();
  const { item, getDetailStyle } = useStyleDetail();
  const navigate = useNavigate();
  const { updateStyle, loading } = useUpdateStyle();

  React.useEffect(() => {
    if (id) {
      getDetailStyle(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    setTitle('デザイン一覧更新');
  }, []);

  const onCancel = () => {
    navigate(CommonPath.STYLES_COLLECTION);
  };

  const onFinishUpdateStyle = (values: CreateStyleTypeInput) => {
    updateStyle({
      updateStyleInput: {
        id: item?.id || '',
        previewImageUrl: values.previewImageUrl || '',
        insideImage: values.insideImageUrl || '',
        outsideImage: values.outsideImageUrl || '',
        code3d: values?.code3d || '',
        description: values.description || '',
        price: {
          value: values.price || 0,
          unit: CurrencyUnit.Jpy,
        },
        theme: {
          id: values.themeId || '',
        },
        title: values.title || '',
      },
    });
  };

  return (
    <StyleCollectionLayout>
      <PageHeader title="" breadcrumb={{ routes }} />
      <StyleCollectionDetailForm
        title="デザイン一覧更新"
        onFinish={onFinishUpdateStyle}
        type={TypeForm.UPDATE}
        item={item}
        loading={loading}
        onCancel={onCancel}
      />
    </StyleCollectionLayout>
  );
};

export default StyleCollectionDetail;
const routes = [
  {
    path: CommonPath.DEFAULT_PATH,
    breadcrumbName: 'Home',
  },
  {
    path: CommonPath.STYLES_COLLECTION,
    breadcrumbName: 'デザイン一覧',
  },
  {
    path: CommonPath.STYLES_COLLECTION_DETAIL,
    breadcrumbName: 'デザイン一覧更新',
  },
];
