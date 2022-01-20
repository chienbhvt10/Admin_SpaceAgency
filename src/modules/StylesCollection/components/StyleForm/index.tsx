import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, InputNumber, Row, Select, Typography, Upload } from 'antd';
import BaseButton from 'commons/components/layouts/BaseButton';
import { TypeForm } from 'commons/type';
import { IStyleFields } from 'graphql/generated/graphql';
import React from 'react';
import { useDispatch } from 'react-redux';
import '../../styles/style-form.scss';
import FormHeader from '../FormHeader';
const { Option } = Select;
const { TextArea } = Input;
const { Title } = Typography;

interface Props {
  title: string;
  loading: boolean;
  item?: IStyleFields;
  type: TypeForm;
  onCancel?(): void;
  onChange?(): void;
}

const requireRule = { required: true, message: 'This is required information!' };

const StyleCollectionForm = (props: Props) => {
  const { loading, type, item, onCancel, onChange, title } = props;
  const [form] = Form.useForm<any>();
  const dispatch = useDispatch();

  const onFinish = () => {
    console.log(form.getFieldsValue());
  };
  const onFinishFailed = () => {};
  const handlePreview = () => {};
  return (
    <div id="style-form">
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
        <FormHeader title={<Title level={2}>{title}</Title>} loading={loading} onCancel={onCancel}>
          <Row justify="center" className="style-form-control">
            <Col span={22}>
              <Col span={17}>
                <Form.Item labelCol={{ span: 6 }} className="theme" label="Theme" name="theme">
                  <Col offset={1}>
                    <Select placeholder="---All---">
                      <Option value="red">Red</Option>
                      <Option value="green">Green</Option>
                      <Option value="blue">Blue</Option>
                    </Select>
                  </Col>
                </Form.Item>
              </Col>
            </Col>
            <Col span={22}>
              <Form.Item labelCol={{ span: 4 }} className="name" label="Name" name="name" rules={[requireRule]}>
                <Col offset={1}>
                  <Input />
                </Col>
              </Form.Item>
            </Col>
            <Col span={22}>
              <Form.Item
                labelCol={{ span: 4 }}
                className="description"
                label="Description"
                name="description"
                rules={[requireRule]}
              >
                <Col offset={1}>
                  <TextArea rows={5} showCount maxLength={1000} />
                </Col>
              </Form.Item>
            </Col>
            <Col span={22}>
              <Form.Item labelCol={{ span: 4 }} className="code" label="Code" name="code" rules={[requireRule]}>
                <Row>
                  <Col span={20}>
                    <Col offset={1}>
                      <Input />
                    </Col>
                  </Col>
                  <Col span={4}>
                    <Button style={{ width: '100%' }} htmlType="button" type="primary" onClick={handlePreview}>
                      Preview
                    </Button>
                  </Col>
                </Row>
              </Form.Item>
            </Col>
            <Col span={22} className="price-order-box">
              <Row>
                <Col span={12}>
                  <Form.Item labelCol={{ span: 8 }} label="Price" name="price" rules={[requireRule]}>
                    <Col offset={2}>
                      <InputNumber style={{ width: '100%' }} />
                    </Col>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Col span={20} offset={4}>
                    <Form.Item labelCol={{ span: 8 }} label="Order" name="order" rules={[requireRule]}>
                      <Col offset={2}>
                        <InputNumber style={{ width: '100%' }} />
                      </Col>
                    </Form.Item>
                  </Col>
                </Col>
              </Row>
            </Col>

            <Col className="image-upload-title" span={24}>
              <Title level={3}>Image Upload</Title>
            </Col>
            <Col span={22}>
              <Row>
                <Col span={18}>
                  <Form.Item labelCol={{ span: 5 }} label="Preview" name="preview" rules={[requireRule]}>
                    <Col offset={1}>
                      <Row>
                        <Col span={16}>
                          <Input />
                        </Col>
                        <Col span={8}>
                          <Upload name="image">
                            <Button htmlType="button" type="primary">
                              Choose Images
                            </Button>
                          </Upload>
                        </Col>
                      </Row>
                    </Col>
                  </Form.Item>
                  <Form.Item
                    labelCol={{ span: 5 }}
                    className="image-name"
                    label="Name"
                    name="imageName"
                    rules={[requireRule]}
                  >
                    <Col offset={1}>
                      <Input />
                    </Col>
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Col offset={2}>
                    <Upload name="image" listType="picture-card">
                      <div>
                        <PlusOutlined />
                        <div style={{ marginTop: 8 }}>Upload</div>
                      </div>
                    </Upload>
                  </Col>
                </Col>
              </Row>
            </Col>
          </Row>
        </FormHeader>
      </Form>
    </div>
  );
};

export default StyleCollectionForm;
