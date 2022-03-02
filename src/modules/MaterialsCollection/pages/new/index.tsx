import { CommonPath } from 'commons/base-routes';
import MaterialCollectionLayout from 'commons/components/layouts/MaterialCollection';
import PageHeader from 'commons/components/layouts/PageHeader';
import { CreateMaterialsTypeInput, TypeForm } from 'commons/type';
import { CurrencyUnit } from 'graphql/generated/graphql';
import { setTitle } from 'helpers/dom';
import MaterialForm from 'modules/MaterialsCollection/components/UseForm';
import { useCreateMaterials } from 'modules/MaterialsCollection/hooks/useCreateMaterials';
import React from 'react';

const MaterialCreateNew = () => {
  const { createMaterials, loading } = useCreateMaterials();

  React.useEffect(() => {
    setTitle('カスタマイズの追加');
  }, []);

  const onFinish = (values: CreateMaterialsTypeInput) => {
    createMaterials({
      createMaterialInput: {
        title: values.name,
        materialTypes: [
          {
            title: values.nameStandard,
            code3d: values.codeStandard,
            price: {
              unit: CurrencyUnit.Jpy,
              value: values.priceStandard,
            },
            previewImageUrl: values.imagePreview,
          },
          {
            title: values.namePremium,
            code3d: values.codePremium,
            price: {
              unit: CurrencyUnit.Jpy,
              value: values.pricePremium,
            },
            previewImageUrl: values.imagePreview2,
          },
        ],
        style: {
          id: values.styleId || '',
        },
      },
    });
  };
  const routes = [
    {
      path: CommonPath.DEFAULT_PATH,
      breadcrumbName: 'Home',
    },
    {
      path: CommonPath.MATERIAL_COLLECTION,
      breadcrumbName: 'カスタマイズ一覧',
    },
    {
      path: CommonPath.MATERIAL_COLLECTION_NEW,
      breadcrumbName: 'カスタマイズの追加',
    },
  ];
  return (
    <div>
      <MaterialCollectionLayout>
        <PageHeader title="" breadcrumb={{ routes }} />
        <MaterialForm title="カスタマイズの追加" type={TypeForm.CREATE} loading={loading} onFinish={onFinish} />
      </MaterialCollectionLayout>
    </div>
  );
};

export default MaterialCreateNew;
