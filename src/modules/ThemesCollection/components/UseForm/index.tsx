import React from 'react';
import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, InputNumber, Row, Select, Typography, Upload } from 'antd';
import { TypeForm } from 'commons/type';
import HeaderCreateUpdate from 'commons/components/layouts/HeaderCreateUpdate';
import { useNavigate } from 'react-router';
import { CommonPath } from 'commons/base-routes';
const { Option } = Select;
const { TextArea } = Input;
const { Title } = Typography;

interface Props {
  title: string;
  loading: boolean;
  item?: any;
  type: TypeForm;
  onCancel?(): void;
  onChange?(): void;
}
const ThemesForm = (props: Props) => {
  const { loading, type, item, onChange, title } = props;
  const [form] = Form.useForm<any>();
  const navigate = useNavigate();

  const onFinish = () => {
    console.log(form.getFieldsValue());
  };
  const onFinishFailed = () => { };
  
  const onCancel = () => {
    navigate(CommonPath.THEME_COLLECTION);
  }
  return (
    <div>
      <HeaderCreateUpdate onCancel={onCancel} title={<Title level={2}>{title}</Title>}>
        <div id="form-theme">
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
            <Row justify="center">
              <Col span={22}>
                <Form.Item labelCol={{ span: 4 }} className="name" label="Name" name="name">
                  <Col offset={1} span={24}>
                    <Input />
                  </Col>
                </Form.Item>
              </Col>
              <Col span={22}>
                <Form.Item labelCol={{ span: 4 }} className="" label="Name English" name="mameenglish">
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
                    <Input style={{ width: 'calc(100% - 101px)' }} />
                    <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture"
                        className="upload-list-inline"
                        name="image"
                      >
                        <Button icon={<UploadOutlined />}>Upload</Button>
                      </Upload>
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
                    <Input style={{ width: 'calc(100% - 101px)' }} />
                    <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture"
                        className="upload-list-inline"
                        name="image"
                      >
                        <Button icon={<UploadOutlined />}>Upload</Button>
                      </Upload>
                    </Col>  
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </HeaderCreateUpdate>
    </div>
  );
};

export default ThemesForm;
