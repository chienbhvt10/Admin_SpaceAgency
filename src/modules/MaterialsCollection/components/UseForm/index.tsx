import { Col, Form, Input, InputNumber, Row, Typography } from 'antd';
import { CommonPath } from 'commons/base-routes';
import UploadDragger from 'commons/components/layouts/Form-editor/UploadDragger';
import FormDropdown from 'commons/components/layouts/FormDropdown';
import HeaderCreateUpdate from 'commons/components/layouts/HeaderCreateUpdate';
import { useUploadImages } from 'commons/hooks/useUploadImages/useUploadImages';
import { CreateMaterialsTypeInput, TypeForm } from 'commons/type';
import { IMaterial, IStyle, ITheme } from 'graphql/generated/graphql';
import { useGetAllThemes } from 'modules/ThemesCollection/hooks/useGetAllThemes';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useGetAllStyles } from '../../../StylesCollection/hooks/useGetAllStyles';
import './style.scss';
const { TextArea } = Input;
const { Title } = Typography;

interface Props {
  title: string;
  loading: boolean;
  item?: IMaterial;
  type: TypeForm;
  onChange?(): void;
  onFinish?: (values: CreateMaterialsTypeInput) => void;
}
const requireRule = { required: true, message: 'この項目は必須です。' };

const MaterialForm = (props: Props) => {
  const { loading, item, title, onFinish, type } = props;
  const { uploadImages } = useUploadImages();
  const [loadingImage, setLoadingImage] = useState<boolean>(false);
  const [loadingImage2, setLoadingImage2] = useState<boolean>(false);
  const [visibleStyleDropdown, setVisibleStyleDropdown] = useState<boolean>(true);
  const [themeId, setThemeId] = React.useState<string>();
  const { dataAllThemes, getAllThemes, loading: loadingSelectTheme } = useGetAllThemes();
  const { dataAllStyles, getAllStyles, loading: loadingSelectStyle } = useGetAllStyles();
  const [dataFilterStyles, setDataFilterStyles] = React.useState<IStyle[]>([]);
  const [form] = Form.useForm<CreateMaterialsTypeInput>();
  const [objUrlImage, setObjUrlImage] = React.useState({
    previewUrl: '',
    previewUrl2: '',
  });
  const [updateMaterialInput, setUpdateMaterialInput] = React.useState<CreateMaterialsTypeInput>({
    codePremium: '',
    codeStandard: '',
    name: '',
    namePremium: '',
    nameStandard: '',
    pricePremium: 0,
    priceStandard: 0,
    styleId: undefined,
    themeId: undefined,
  });
  const navigate = useNavigate();

  React.useEffect(() => {
    getAllThemes();
    getAllStyles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (dataAllStyles) {
      if (themeId) {
        setVisibleStyleDropdown(false);
        const arrStyles = dataAllStyles?.filter((i) => i.theme?.id === themeId);
        if (arrStyles) {
          setDataFilterStyles(arrStyles);
        }
      } else {
        setDataFilterStyles(dataAllStyles || []);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [themeId, dataAllStyles]);

  React.useEffect(() => {
    if (item && item?.materialTypes) {
      setUpdateMaterialInput({
        ...updateMaterialInput,
        name: item.title || '',
        themeId: item.style?.theme?.id || undefined,
        styleId: item.style?.id || undefined,
        codePremium: (item && item.materialTypes && item?.materialTypes[0]?.code3d) || '',
        codeStandard: (item && item.materialTypes && item.materialTypes[1]?.code3d) || '',
        // description: (item && item.style?.description && item.style.description) || '',
        priceStandard: (item && item.materialTypes && item?.materialTypes[0]?.price?.value) || 0,
        pricePremium: (item && item.materialTypes && item?.materialTypes[1]?.price?.value) || 0,
        nameStandard: (item && item.materialTypes && item?.materialTypes[0]?.title) || '',
        namePremium: (item && item.materialTypes && item?.materialTypes[1]?.title) || '',
      });
      setThemeId(item.style?.theme?.id);
      setObjUrlImage({
        previewUrl: item?.materialTypes[0].materialImage?.previewImageUrl || '',
        previewUrl2: item?.materialTypes[1].materialImage?.previewImageUrl || '',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item]);

  React.useEffect(() => {
    if (form) {
      form.setFieldsValue(updateMaterialInput);
    }
  }, [form, updateMaterialInput]);

  React.useEffect(() => {
    if (objUrlImage) {
      form.setFieldsValue({
        imagePreview: objUrlImage.previewUrl,
        imagePreview2: objUrlImage.previewUrl2,
      });
    }
  }, [objUrlImage, form]);
  const onFinishFailed = () => {};
  const onCancel = () => {
    navigate(CommonPath.MATERIAL_COLLECTION);
  };

  const onSelectTheme = (value: string) => {
    if (value) {
      form.setFieldsValue({
        styleId: undefined,
      });
      setThemeId(value);
      setVisibleStyleDropdown(false);
    } else {
      setThemeId(undefined);
    }
  };

  const handleResetPreviewUrl = () => {
    form.setFieldsValue({
      imagePreview: '',
    });
  };
  const handleResetPreviewUrl2 = () => {
    form.setFieldsValue({
      imagePreview2: '',
    });
  };
  const handleChangePreviewUrl = async (info: any) => {
    setLoadingImage(true);
    const urlImage = (await uploadImages(info)) as string;
    setLoadingImage(false);
    setObjUrlImage({
      ...objUrlImage,
      previewUrl: urlImage,
    });
  };
  const handleChangePreviewUrl2 = async (info: any) => {
    setLoadingImage2(true);
    const urlImage = (await uploadImages(info)) as string;
    setLoadingImage2(false);
    setObjUrlImage({
      ...objUrlImage,
      previewUrl2: urlImage,
    });
  };
  return (
    <div>
      <div id="material-form">
        <Form
          name="basic"
          initialValues={{
            ...item,
          }}
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <HeaderCreateUpdate loading={loading} onCancel={onCancel} title={<Title level={2}>{title}</Title>}>
            <Row justify="center">
              <Col span={22}>
                <Row>
                  <Col span={11} style={{ marginLeft: '18px' }}>
                    <FormDropdown
                      formItem={{
                        label: 'タイプ',
                        name: 'themeId',
                        labelCol: { span: 6 },
                        wrapperCol: { span: 16, style: { marginLeft: '10px' } },
                        rules: [requireRule],
                      }}
                      onSelect={onSelectTheme}
                      loading={loadingSelectTheme}
                      items={dataAllThemes}
                      options={[]}
                    />
                  </Col>
                  <Col span={11} offset={1}>
                    <FormDropdown
                      formItem={{
                        label: 'デザイン',
                        name: 'styleId',
                        labelCol: { span: 6 },
                        wrapperCol: { span: 16, style: { marginLeft: '10px' } },
                        rules: [requireRule],
                      }}
                      disabled={visibleStyleDropdown}
                      loading={loadingSelectStyle}
                      items={dataFilterStyles}
                      options={[]}
                    />
                  </Col>
                </Row>
              </Col>
              <Col span={22}>
                <Form.Item
                  labelCol={{ span: 3, style: { marginRight: 20 } }}
                  wrapperCol={{ span: 19 }}
                  className="name"
                  label="名称"
                  name="name"
                >
                  <Input />
                </Form.Item>
              </Col>

              {/* <Col span={22}>
                <Form.Item
                  labelCol={{ span: 2, style: { marginRight: 20 } }}
                  wrapperCol={{ span: 20 }}
                  className=""
                  label="詳細"
                  name="description"
                >
                  <TextArea rows={5} showCount maxLength={1000} />
                </Form.Item>
              </Col> */}

              {/* <Col span={22} className="price-order-box">
                <Form.Item labelCol={{ span: 4, style: { marginRight: 20 } }} label="Order" name="order">
                  <InputNumber style={{ width: '100%', marginLeft: '6px' }} />
                </Form.Item>
              </Col> */}

              {/* <Col className="image-upload-title" span={24} style={{ marginBottom: '50px' }}>
                <Title level={3}>Type Collection</Title>
              </Col> */}
              <Col span={19} style={{ marginBottom: '50px', marginLeft: '40px' }}>
                <Row justify="center">
                  <Col span={11} style={{ marginLeft: 20 }}>
                    <Col span={22} offset={2}>
                      <Form.Item
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 23 }}
                        className="name"
                        label="スタンダード名"
                        name="nameStandard"
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={22} offset={2}>
                      <Form.Item
                        labelCol={{ span: 24, style: { marginRight: 20 } }}
                        wrapperCol={{ span: 23 }}
                        label="スタンダード価格"
                        name="priceStandard"
                        rules={[requireRule]}
                      >
                        <InputNumber style={{ width: '100%' }} min={0} />
                      </Form.Item>
                    </Col>
                    <Col span={22} offset={2}>
                      <Form.Item
                        labelCol={{ span: 24, style: { marginRight: 20 } }}
                        wrapperCol={{ span: 23 }}
                        className="code"
                        label="スタンダードコード"
                        name="codeStandard"
                      >
                        <Input />
                      </Form.Item>
                    </Col>

                    <Col span={22} offset={2}>
                      <Form.Item
                        labelCol={{ span: 24, style: { marginRight: 20 } }}
                        wrapperCol={{ span: 23 }}
                        label="画像プレビュー"
                        name="imagePreview"
                        rules={[requireRule]}
                      >
                        <Input disabled={true} />
                      </Form.Item>
                    </Col>
                    <Col span={21} offset={2}>
                      <div style={{ height: '300px' }}>
                        <UploadDragger
                          loading={loadingImage}
                          handleChange={handleChangePreviewUrl}
                          imageUrl={objUrlImage.previewUrl}
                          resetToDefault={() => handleResetPreviewUrl()}
                        />
                      </div>
                    </Col>
                  </Col>

                  <Col span={11}>
                    <Col span={22} offset={2}>
                      <Form.Item
                        labelCol={{ span: 24, style: { marginRight: 20 } }}
                        wrapperCol={{ span: 23 }}
                        className="name"
                        label="プレミアム名"
                        name="namePremium"
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={22} offset={2}>
                      <Form.Item
                        labelCol={{ span: 24, style: { marginRight: 20 } }}
                        wrapperCol={{ span: 23 }}
                        label="プレミアム価格"
                        name="pricePremium"
                        rules={[requireRule]}
                      >
                        <InputNumber style={{ width: '100%' }} min={0} />
                      </Form.Item>
                    </Col>
                    <Col span={22} offset={2}>
                      <Form.Item
                        labelCol={{ span: 24, style: { marginRight: 20 } }}
                        wrapperCol={{ span: 23 }}
                        className="code"
                        label="プレミアムコード"
                        name="codePremium"
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={22} offset={2}>
                      <Form.Item
                        labelCol={{ span: 24, style: { marginRight: 20 } }}
                        wrapperCol={{ span: 23 }}
                        label="画像プレビュー"
                        name="imagePreview2"
                        rules={[requireRule]}
                      >
                        <Input disabled={true} />
                      </Form.Item>
                    </Col>
                    <Col span={21} offset={2}>
                      <div style={{ height: '300px' }}>
                        <UploadDragger
                          loading={loadingImage2}
                          handleChange={handleChangePreviewUrl2}
                          imageUrl={objUrlImage.previewUrl2}
                          resetToDefault={() => handleResetPreviewUrl2()}
                        />
                      </div>
                    </Col>
                  </Col>
                </Row>
              </Col>
            </Row>
          </HeaderCreateUpdate>
        </Form>
      </div>
    </div>
  );
};

export default MaterialForm;
