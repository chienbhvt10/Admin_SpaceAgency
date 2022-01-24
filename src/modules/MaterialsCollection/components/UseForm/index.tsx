import { Col, Form, Input, InputNumber, Row, Typography } from 'antd';
import { CommonPath } from 'commons/base-routes';
import UploadDragger from 'commons/components/layouts/Form-editor/UploadDragger';
import FormDropdown from 'commons/components/layouts/FormDropdown';
import HeaderCreateUpdate from 'commons/components/layouts/HeaderCreateUpdate';
import { CreateMaterialsTypeInput, TypeForm } from 'commons/type';
import { IMaterial, IStyle, ITheme } from 'graphql/generated/graphql';
import { useGetAllThemes } from 'modules/ThemesCollection/hooks/useGetAllThemes';
import React from 'react';
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
const MaterialForm = (props: Props) => {
  const { loading, item, title, onFinish, type } = props;
  const [themeId, setThemeId] = React.useState<string>();
  const [styleId, setStyleId] = React.useState<string>();
  const { dataAllThemes, getAllThemes, loading: loadingSelectTheme } = useGetAllThemes();
  const { dataAllStyles, getAllStyles, loading: loadingSelectStyle } = useGetAllStyles();
  const [dataFilterThemes, setDataFilterThemes] = React.useState<ITheme[]>([]);
  const [dataFilterStyles, setDataFilterStyles] = React.useState<IStyle[]>([]);
  const [form] = Form.useForm<CreateMaterialsTypeInput>();
  const [updateMaterialInput, setUpdateMaterialInput] = React.useState<CreateMaterialsTypeInput>({
    codePremium: '',
    codeStandard: '',
    name: '',
    namePremium: '',
    nameStandard: '',
    pricePremium: 0,
    priceStandard: 0,
    styleId: '',
    themeId: '',
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
    if (dataAllThemes) {
      if (styleId) {
        const findTheme = dataFilterStyles.find((f) => f.id === styleId);
        const arrThemes = dataAllThemes.filter((i) => i.id === findTheme?.theme?.id);
        if (arrThemes) {
          setDataFilterThemes(arrThemes);
        }
      } else {
        setDataFilterThemes(dataAllThemes);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [styleId, dataAllThemes]);

  React.useEffect(() => {
    if (item) {
      setUpdateMaterialInput({
        ...updateMaterialInput,
        name: item.title || '',
        themeId: item.style?.theme?.id || '',
        styleId: item.style?.id || '',
        codePremium: (item && item.materialTypes && item?.materialTypes[0]?.code3d) || '',
        codeStandard: (item && item.materialTypes && item.materialTypes[0]?.code3d) || '',
        priceStandard: (item && item.materialTypes && item?.materialTypes[0]?.price?.value) || 0,
        pricePremium: (item && item.materialTypes && item?.materialTypes[1]?.price?.value) || 0,
        nameStandard: (item && item.materialTypes && item?.materialTypes[0]?.title) || '',
        namePremium: (item && item.materialTypes && item?.materialTypes[1]?.title) || '',
      });
      setThemeId(item.style?.theme?.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item]);

  React.useEffect(() => {
    if (form) {
      form.setFieldsValue(updateMaterialInput);
    }
  }, [form, updateMaterialInput]);

  const onFinishFailed = () => {};
  const onCancel = () => {
    navigate(CommonPath.MATERIAL_COLLECTION);
  };

  const onSelectTheme = (value: string) => {
    if (value) {
      setThemeId(value);
    } else {
      setThemeId(undefined);
    }
  };

  const onSelectStyle = (value: string) => {
    if (value) {
      setStyleId(value);
    } else {
      setStyleId(undefined);
    }
  };
  return (
    <div>
      <div id="material-form">
        <Form
          name="basic"
          initialValues={{
            ...updateMaterialInput,
          }}
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <HeaderCreateUpdate loading={loading} onCancel={onCancel} title={<Title level={2}>{title}</Title>}>
            <Row justify="center">
              <Col span={22}>
                <div className="dropdown-select">
                  <FormDropdown
                    formItem={{
                      label: 'Theme',
                      name: 'themeId',
                      labelCol: { span: 4 },
                    }}
                    onSelect={onSelectTheme}
                    loading={loadingSelectTheme}
                    items={dataFilterThemes}
                    options={[]}
                  />
                  <FormDropdown
                    formItem={{
                      label: 'Design',
                      name: 'styleId',
                      labelCol: { span: 4 },
                    }}
                    onSelect={onSelectStyle}
                    loading={loadingSelectStyle}
                    items={dataFilterStyles}
                    options={[]}
                  />
                </div>
              </Col>
              <Col span={22}>
                <Form.Item labelCol={{ span: 4, style: { marginRight: 20 } }} className="name" label="Name" name="name">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={22}>
                <Form.Item
                  labelCol={{ span: 4, style: { marginRight: 20 } }}
                  className=""
                  label="Description"
                  name="description"
                >
                  <TextArea rows={5} showCount maxLength={1000} />
                </Form.Item>
              </Col>
              {/* <Col span={22} className="price-order-box">
                <Form.Item labelCol={{ span: 4, style: { marginRight: 20 } }} label="Order" name="order">
                  <InputNumber style={{ width: '100%', marginLeft: '6px' }} />
                </Form.Item>
              </Col> */}

              {/* <Col className="image-upload-title" span={24} style={{ marginBottom: '50px' }}>
                <Title level={3}>Type Collection</Title>
              </Col> */}
              <Col span={22} style={{ marginBottom: '50px' }}>
                <Row>
                  <Col span={12}>
                    <Form.Item
                      labelCol={{ span: 4, style: { marginRight: 20 } }}
                      className="name"
                      label="Name"
                      name="nameStandard"
                    >
                      <Input style={{ width: '96%', marginLeft: '10px' }} />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      labelCol={{ span: 4, style: { marginRight: 20 } }}
                      className="name"
                      label="Name"
                      name="namePremium"
                    >
                      <Input style={{ width: '96%' }} />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item labelCol={{ span: 4, style: { marginRight: 20 } }} label="Price" name="priceStandard">
                      <InputNumber style={{ width: '96%', marginLeft: '10px' }} />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item labelCol={{ span: 4, style: { marginRight: 20 } }} label="Price" name="pricePremium">
                      <InputNumber style={{ width: '96%' }} />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      labelCol={{ span: 4, style: { marginRight: 20 } }}
                      className="code"
                      label="Code"
                      name="codeStandard"
                    >
                      <Input style={{ width: 'calc(100% - 94px)', marginLeft: '10px' }} />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      labelCol={{ span: 4, style: { marginRight: 20 } }}
                      className="code"
                      label="Code"
                      name="codePremium"
                    >
                      <Input style={{ width: 'calc(100% - 93px)' }} />
                    </Form.Item>
                  </Col>
                  {/* <Col span={12}>
                    <Form.Item
                      labelCol={{ span: 4, style: { marginRight: 20 } }}
                      label="Image Preview"
                      name="imagePreview"
                    >
                      <Col offset={2}>
                        <Row>
                          <Col span={17}>
                            <Input style={{ marginLeft: '10px', marginRight: '10px' }} />
                          </Col>
                          <Col span={6}>
                            <UploadDragger />
                          </Col>
                        </Row>
                      </Col>
                    </Form.Item>
                  </Col> */}
                  {/* <Col span={12}>
                    <Form.Item
                      labelCol={{ span: 4, style: { marginRight: 20 } }}
                      label="Image Preview"
                      name="imagePreview2"
                    >
                      <Col offset={2}>
                        <Row>
                          <Col span={17}>
                            <Input style={{ width: '103%' }} />
                          </Col>
                          <Col span={6}>
                            <UploadDragger />
                          </Col>
                        </Row>
                      </Col>
                    </Form.Item>
                  </Col> */}
                  {/* <Col span={12}>
                    <Form.Item
                      labelCol={{ span: 4, style: { marginRight: 20 } }}
                      className="name"
                      label="Name"
                      name="nameImage1"
                    >
                      <Input style={{ width: '97%', marginLeft: '10px' }} />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      labelCol={{ span: 4, style: { marginRight: 20 } }}
                      className="name"
                      label="Name"
                      name="nameImage2"
                    >
                      <Input style={{ width: '97%' }} />
                    </Form.Item>
                  </Col> */}
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
