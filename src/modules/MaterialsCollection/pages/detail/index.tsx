import { CommonPath } from 'commons/base-routes';
import MaterialCollectionLayout from 'commons/components/layouts/MaterialCollection';
import PageHeader from 'commons/components/layouts/PageHeader';
import { CreateMaterialsTypeInput, TypeForm } from 'commons/type';
import { CurrencyUnit, UpdateMaterialInput } from 'graphql/generated/graphql';
import { setTitle } from 'helpers/dom';
import MaterialForm from 'modules/MaterialsCollection/components/UseForm';
import { useDetailMaterial } from 'modules/MaterialsCollection/hooks/useDetailMaterial';
import { useUpdateMaterial } from 'modules/MaterialsCollection/hooks/useUpdateMaterial';
import React from 'react';
import { useParams } from 'react-router';

const MaterialUpdate = () => {
  let { id } = useParams<'id'>();
  const { getDetailMaterial, item } = useDetailMaterial();
  const { updateMaterial, loading } = useUpdateMaterial();
  React.useEffect(() => {
    setTitle('Update Material');
  }, []);
  React.useEffect(() => {
    if (id) {
      getDetailMaterial(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const onFinish = (values: CreateMaterialsTypeInput) => {
    const updateMaterialInput: UpdateMaterialInput = {
      id: item?.id || '',
      title: values.name || '',
      materialTypes: [
        {
          id: (item && item.materialTypes && item?.materialTypes[0]?.id) || '',
          code3d: values.codeStandard || '',
          price: {
            unit: CurrencyUnit.Jpy,
            value: values.priceStandard || 0,
          },
          title: values.nameStandard || '',
          material: {
            id: values.themeId,
          },
        },
        {
          id: (item && item.materialTypes && item?.materialTypes[1]?.id) || '',
          code3d: values.codePremium || '',
          price: {
            unit: CurrencyUnit.Jpy,
            value: values?.pricePremium || 0,
          },
          title: values.namePremium || '',
        },
      ],
      style: {
        id: values.styleId,
      },
    };
    updateMaterial({ updateMaterialInput });
  };
  const routes = [
    {
      path: CommonPath.DEFAULT_PATH,
      breadcrumbName: 'HOME',
    },
    {
      path: CommonPath.MATERIAL_COLLECTION,
      breadcrumbName: 'マテリアル一覧',
    },
    {
      path: CommonPath.MATERIAL_COLLECTION_DETAIL,
      breadcrumbName: 'Detail Material Collection',
    },
  ];
  return (
    <div>
      <MaterialCollectionLayout>
        <PageHeader title="" breadcrumb={{ routes }} />
        <MaterialForm
          onFinish={onFinish}
          item={item}
          title="Update Material Collection"
          type={TypeForm.UPDATE}
          loading={loading}
        />
      </MaterialCollectionLayout>
    </div>
  );
};

export default MaterialUpdate;
