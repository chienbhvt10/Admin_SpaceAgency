import { Col, Form, Input, InputNumber, Row, Typography } from 'antd';
import { CommonPath } from 'commons/base-routes';
import BaseButton from 'commons/components/layouts/BaseButton';
import UploadDragger from 'commons/components/layouts/Form-editor/UploadDragger';
import HeaderCreateUpdate from 'commons/components/layouts/HeaderCreateUpdate';
import { CreateThemeTypeInput, TypeForm } from 'commons/type';
import { ITheme } from 'graphql/generated/graphql';
import 'modules/ThemesCollection/style/style.scss';
import React from 'react';
import { useNavigate } from 'react-router';
const { TextArea } = Input;
const { Title } = Typography;

interface Props {
  title: string;
  loading: boolean;
  items?: ITheme;
  type: TypeForm;
  onCancel?(): void;
  onChange?(): void;
  onFinish?: (values: CreateThemeTypeInput) => void;
}
const requireRule = { required: true, message: 'This is required information!' };

const ThemesForm = (props: Props) => {
  const { loading, type, items, onFinish, title } = props;
  const [form] = Form.useForm<CreateThemeTypeInput>();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (items && type === TypeForm.UPDATE) {
      form.setFieldsValue({
        code: items.code3D || '',
        description: items.description || '',
        name: items?.title || '',
        nameEnglish: (items && items.themeCategories && items?.themeCategories[0]?.title) || '',
        order: '',
        price: items.price?.value || 0,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, form]);
  const onFinishFailed = () => {};

  const onCancel = () => {
    navigate(CommonPath.THEME_COLLECTION);
  };
  return (
    <div>
      <div id="form-theme">
        <Form
          name="basic"
          initialValues={{
            ...items,
          }}
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <HeaderCreateUpdate loading={loading} onCancel={onCancel} title={<Title level={2}>{title}</Title>}>
            <Row justify="center">
              <Col span={22}>
                <Form.Item
                  rules={[requireRule]}
                  labelCol={{ span: 4, style: { marginRight: 20 } }}
                  className="name"
                  label="Name"
                  name="name"
                >
                  <Input placeholder="Name" />
                </Form.Item>
              </Col>
              <Col span={22}>
                <Form.Item
                  labelCol={{ span: 4, style: { marginRight: 20 } }}
                  className=""
                  label="Name English"
                  rules={[requireRule]}
                  name="nameEnglish"
                >
                  <Input placeholder="Name English" />
                </Form.Item>
              </Col>
              <Col span={22}>
                <Form.Item
                  labelCol={{ span: 4, style: { marginRight: 20 } }}
                  className=""
                  label="Description"
                  name="description"
                >
                  <TextArea placeholder="Description" rows={5} showCount maxLength={1000} />
                </Form.Item>
              </Col>
              {/* <Col span={22}>
                <Form.Item labelCol={{ span: 4, style: { marginRight: 20 } }} className="code" label="Code" name="code">
                  <Input style={{ width: 'calc(100% - 83px)' }} />
                </Form.Item>
              </Col> */}
              <Col span={22} className="price-order-box">
                <Row>
                  <Col span={12}>
                    <Form.Item labelCol={{ span: 8, style: { marginRight: 20 } }} label="Price" name="price">
                      <InputNumber placeholder="Price" style={{ width: '100%' }} />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item labelCol={{ span: 8, style: { marginRight: 20 } }} label="Code" name="code">
                      <Input placeholder="Code" style={{ width: '100%' }} />
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
              <Col span={22} style={{ marginBottom: '20px' }}>
                <Row>
                  <Col span={4}>
                    <Title level={4}>Image Upload</Title>
                  </Col>
                  <Col span={20}>
                    <BaseButton
                      text="Add Image"
                      height=""
                      width=""
                      marginLeft="20px"
                      marginRight=""
                      backgroundColor="#28A745"
                    />
                  </Col>
                </Row>
              </Col>
              <Col span={22} style={{ marginBottom: '20px' }}>
                <Row>
                  <Col span={16}>
                    <Row>
                      <Col span={18}>
                        <Form.Item
                          rules={[requireRule]}
                          labelCol={{ span: 8, style: { marginRight: 20 } }}
                          label="Inside Preview"
                          name="insidePreview"
                        >
                          <Input placeholder="Inside Preview" />
                        </Form.Item>
                      </Col>
                      <Col span={4}>
                        <BaseButton
                          text="Choose Image"
                          height=""
                          width=""
                          marginLeft=""
                          marginRight=""
                          backgroundColor="#17A2B8"
                        />
                      </Col>
                    </Row>
                    <Col span={24}>
                      <Form.Item
                        rules={[requireRule]}
                        labelCol={{ span: 6, style: { marginRight: 20 } }}
                        wrapperCol={{ span: 16 }}
                        label="Name"
                        name="insidePreviewName"
                      >
                        <Input placeholder="Inside Preview Name" />
                      </Form.Item>
                    </Col>
                  </Col>
                  <Col span={8} style={{ height: '300px' }}>
                    <UploadDragger />
                  </Col>
                </Row>
              </Col>
              <Col span={22} style={{ marginBottom: '20px' }}>
                <Row>
                  <Col span={16}>
                    <Row>
                      <Col span={18}>
                        <Form.Item
                          rules={[requireRule]}
                          labelCol={{ span: 8, style: { marginRight: 20 } }}
                          label="Outside Preview"
                          name="outsidePreview"
                        >
                          <Input placeholder="Outside Preview" />
                        </Form.Item>
                      </Col>
                      <Col span={4}>
                        <BaseButton
                          text="Choose Image"
                          height=""
                          width=""
                          marginLeft=""
                          marginRight=""
                          backgroundColor="#17A2B8"
                        />
                      </Col>
                    </Row>
                    <Col span={24}>
                      <Form.Item
                        rules={[requireRule]}
                        labelCol={{ span: 6, style: { marginRight: 20 } }}
                        wrapperCol={{ span: 16 }}
                        className="name"
                        label="Name"
                        name="outsidePreviewName"
                      >
                        <Input placeholder="Outside Preview Name" />
                      </Form.Item>
                    </Col>
                  </Col>
                  <Col span={8} style={{ height: '300px' }}>
                    <UploadDragger />
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

export default ThemesForm;
