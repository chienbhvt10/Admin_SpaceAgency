import { Form, FormProps, Row, Col, Select, Input, InputNumber, Typography, Upload } from 'antd';
import { Button } from 'antd/lib/radio';
import { TypeForm } from 'commons/type';
import React from 'react';
import { useDispatch } from 'react-redux';
import FormHeader from '../FormHeader';
import '../../styles/style-form.scss';
import { PlusOutlined } from '@ant-design/icons';
const { Option } = Select;
const { TextArea } = Input;
const { Title } = Typography;

interface Props {
  title: string;
  loading: boolean;
  item?: any;
  type: TypeForm;
  onCancle?(): void;
  onChange?(): void;
}

const requireRule = { required: true, message: 'This is required information!' };

const StyleCollectionForm = (props: Props) => {
  const { loading, type, item, onCancle, onChange, title } = props;
  const [form] = Form.useForm<any>();
  const dispatch = useDispatch();

  const onFinish = () => {
    console.log(form.getFieldsValue());
  };
  const onFinishFailed = () => {};
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
        <FormHeader title={<Title level={2}>{title}</Title>} loading={loading}>
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
                <Col offset={1}>
                  <Row>
                    <Col span={20}>
                      <Input />
                    </Col>
                    <Col span={4}>
                      <button>Preview</button>
                    </Col>
                  </Row>
                </Col>
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
                      <InputNumber style={{ width: '100%' }} />
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
                  <Form.Item labelCol={{ span: 4 }} label="Preview" name="preview" rules={[requireRule]}>
                    <Row>
                      <Col span={16}>
                        <Input />
                      </Col>
                      <Col span={8}>
                        <Upload name="image">
                          <button style={{ marginLeft: '10px' }}>ChooseImage</button>
                        </Upload>
                      </Col>
                    </Row>
                  </Form.Item>
                  <Form.Item
                    labelCol={{ span: 4 }}
                    className="image-name"
                    label="Name"
                    name="imageName"
                    rules={[requireRule]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <div style={{ marginLeft: '10px' }}>
                    <Upload name="image" listType="picture-card">
                      <div>
                        <PlusOutlined />
                        <div style={{ marginTop: 8 }}>Upload</div>
                      </div>
                    </Upload>
                  </div>
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
