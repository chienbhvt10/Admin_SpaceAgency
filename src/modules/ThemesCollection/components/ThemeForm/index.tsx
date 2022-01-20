import { Button, Col, Form, Input, InputNumber, Row, Select, Typography } from 'antd';
import { CommonPath } from 'commons/base-routes';
import UploadDragger from 'commons/components/layouts/Form-editor/UploadDragger';
import HeaderCreateUpdate from 'commons/components/layouts/HeaderCreateUpdate';
import { TypeForm } from 'commons/type';
import { ITheme } from 'graphql/generated/graphql';
import 'modules/ThemesCollection/style/style.scss';
import React from 'react';
import { useNavigate } from 'react-router';
const { Option } = Select;
const { TextArea } = Input;
const { Title } = Typography;

interface Props {
  title: string;
  loading: boolean;
  items?: ITheme;
  type: TypeForm;
  onCancel?(): void;
  onChange?(): void;
}
const ThemesForm = (props: Props) => {
  const { loading, type, items, onChange, title } = props;
  const [form] = Form.useForm<ITheme>();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (items) {
      form.setFieldsValue({
        title: items.title,
        code3D: items.code3D,
        description: items.code3D,
      });
    }
  }, [items, form]);

  const onFinish = () => {
    console.log(form.getFieldsValue());
  };
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
           <HeaderCreateUpdate onCancel={onCancel} title={<Title level={2}>{title}</Title>}>
            <Row justify="center">
              <Col span={22}>
                <Form.Item labelCol={{ span: 4 }} className="name" label="Name" name="name">
                  <Col offset={1} span={24}>
                    <Input />
                  </Col>
                </Form.Item>
              </Col>
              <Col span={22}>
                <Form.Item labelCol={{ span: 4 }} className="" label="Name English" name="nameEnglish">
                  <Col offset={1} span={24}>
                    <Input />
                  </Col>
                </Form.Item>
              </Col>
              <Col span={22}>
                <Form.Item labelCol={{ span: 4 }} className="" label="Description" name="description">
                  <Col offset={1}>
                    <TextArea rows={5} showCount maxLength={1000} />
                  </Col>
                </Form.Item>
              </Col>
              <Col span={22}>
                <Form.Item labelCol={{ span: 4 }} className="code" label="Code" name="code">
                  <Col offset={1}>
                    <Input.Group compact>
                      <Input style={{ width: 'calc(100% - 83px)' }} />
                      <Button type="primary">Preview</Button>
                    </Input.Group>
                  </Col>
                </Form.Item>
              </Col>
              <Col span={22} className="price-order-box">
                <Row>
                  <Col span={12}>
                    <Form.Item labelCol={{ span: 8 }} label="Price" name="price">
                      <Col offset={2}>
                        <InputNumber style={{ width: '100%', marginLeft: '10PX' }} />
                      </Col>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item labelCol={{ span: 8 }} label="Order" name="order">
                      <Col offset={2}>
                        <InputNumber style={{ width: '100%' }} />
                      </Col>
                    </Form.Item>
                  </Col>
                </Row>
              </Col>

              <Col className="image-upload-title" span={24} style={{ marginBottom: '50px' }}>
                <Title level={3}>Image Upload</Title>
              </Col>
              <Col span={22} style={{ marginBottom: '50px' }}>
                <Form.Item labelCol={{ span: 4 }} className="image-name" label="Name" name="imageName">
                  <Col offset={1}>
                    <Input />
                  </Col>
                </Form.Item>
                <Form.Item labelCol={{ span: 4 }} label="Inside Preview" name="preview">
                  <Col offset={1}>
                    <Row>
                      <Col span={20}>
                        <Input />
                      </Col>
                      <Col span={3}>
                        <UploadDragger />
                      </Col>
                    </Row>
                    {/* <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture"
                        className="upload-list-inline"
                        name="image"
                      >
                        <Button icon={<UploadOutlined />}>Upload</Button>
                      </Upload> */}
                  </Col>
                </Form.Item>
              </Col>
              <Col span={22} style={{ marginBottom: '50px' }}>
                <Form.Item labelCol={{ span: 4 }} className="image-name" label="Name" name="imageName">
                  <Col offset={1}>
                    <Input />
                  </Col>
                </Form.Item>
                <Form.Item labelCol={{ span: 4 }} label="Outside Preview" name="preview">
                  <Col offset={1}>
                    <Row>
                      <Col span={20}>
                        <Input />
                      </Col>
                      <Col span={3}>
                        <UploadDragger />
                      </Col>
                    </Row>
                    {/* <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture"
                        className="upload-list-inline"
                        name="image"
                      >
                        <Button icon={<UploadOutlined />}>Upload</Button>
                      </Upload> */}
                  </Col>
                </Form.Item>
              </Col>
            </Row>
            </HeaderCreateUpdate>
          </Form>
        </div>
     
    </div>
  );
};

export default ThemesForm;
