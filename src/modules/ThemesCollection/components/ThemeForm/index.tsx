import { Col, Form, Input, InputNumber, Row, Typography } from 'antd';
import { CommonPath } from 'commons/base-routes';
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
                  <Input />
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
              <Col span={22}>
                <Form.Item labelCol={{ span: 4, style: { marginRight: 20 } }} className="code" label="Code" name="code">
                  <Input style={{ width: 'calc(100% - 83px)' }} />
                </Form.Item>
              </Col>
              <Col span={22} className="price-order-box">
                <Row>
                  <Col span={12}>
                    <Form.Item labelCol={{ span: 8, style: { marginRight: 20 } }} label="Price" name="price">
                      <InputNumber style={{ width: '100%', marginLeft: '10PX' }} />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item labelCol={{ span: 8, style: { marginRight: 20 } }} label="Order" name="order">
                      <InputNumber style={{ width: '100%' }} />
                    </Form.Item>
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
