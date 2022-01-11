import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Col, Form, Input, InputNumber, Row, Select, Typography, Upload } from 'antd';
import { TypeForm } from 'commons/type';
import HeaderCreateUpdate from 'commons/components/layouts/HeaderCreateUpdate';
const { Option } = Select;
const { TextArea } = Input;
const { Title } = Typography;

const requireRule = { required: true, message: 'This is required information!' };
interface Props {
  title: string;
  loading: boolean;
  item?: any;
  type: TypeForm;
  onCancle?(): void;
  onChange?(): void;
}
const MaterialForm = (props: Props) => {
  const { loading, type, item, onCancle, onChange, title } = props;
  const [form] = Form.useForm<any>();

  const onFinish = () => {
    console.log(form.getFieldsValue());
  };
  const onFinishFailed = () => {};
  return (
    <div>
      <HeaderCreateUpdate title={<Title level={2}>{title}</Title>}>
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
                        <button style={{ backgroundColor: "#007BFF" }}>Preview</button>
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
              <Title level={3}>Type Collection</Title>
              </Col>
              <div className="wrapper-type" style={{ display:"flex", justifyContent:"space-around"}}>
              <Col span={10} style={{marginBottom: "50px"}}>
              <Row>
                <Col span={18}>
                  <Form.Item labelCol={{ span: 5 }} label="Inside Preview" name="preview" rules={[requireRule]}>
                    <Row >
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
              <Col span={10}>
              <Row>
                <Col span={18}>
                  <Form.Item labelCol={{ span: 5 }} label="Outside Preview" name="preview" rules={[requireRule]}>
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
              </div>
            
          </Row>
        </Form>
      </div>
      </HeaderCreateUpdate>
      
    </div>
  );
};

export default MaterialForm;
