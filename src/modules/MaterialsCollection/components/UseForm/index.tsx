import React from 'react';
import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, InputNumber, Row, Select, Typography, Upload } from 'antd';
import { TypeForm } from 'commons/type';
import HeaderCreateUpdate from 'commons/components/layouts/HeaderCreateUpdate';
import FormDropdown from 'commons/components/layouts/FormDropdown';
import './style.scss';
import { CommonPath } from 'commons/base-routes';
import { useNavigate } from 'react-router';
import UploadDragger from 'commons/components/layouts/Form-editor/UploadDragger';
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
  const navigate = useNavigate();
  const onFinish = () => {
    console.log(form.getFieldsValue());
  };
  const onFinishFailed = () => {};
  const onCancel = () => {
    navigate(CommonPath.MATERIAL_COLLECTION);
  };
  return (
    <div>
      <HeaderCreateUpdate onCancel={onCancel} title={<Title level={2}>{title}</Title>}>
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
            <Row justify="center">
              <Col span={22}>
                <div className="dropdown-select">
                  <FormDropdown
                    formItem={{
                      label: 'Theme',
                      name: 'theme',
                      labelCol: { span: 4 },
                    }}
                    options={[]}
                  />
                  <FormDropdown
                    formItem={{
                      label: 'Design',
                      name: 'design',
                      labelCol: { span: 4 },
                    }}
                    options={[]}
                  />
                </div>
              </Col>
              <Col span={22}>
                <Form.Item labelCol={{ span: 4 }} className="name" label="Name" name="name">
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
              <Col span={22} className="price-order-box">
                <Row>
                  <Col span={12}>
                    <Form.Item labelCol={{ span: 8 }} label="Order" name="order">
                      <Col offset={2}>
                        <InputNumber style={{ width: '100%', marginLeft: '6px' }} />
                      </Col>
                    </Form.Item>
                  </Col>
                </Row>
              </Col>

              <Col className="image-upload-title" span={24} style={{ marginBottom: '50px' }}>
                <Title level={3}>Type Collection</Title>
              </Col>
              <Col span={22} style={{ marginBottom: '50px' }}>
                <Row>
                  <Col span={12}>
                    <Form.Item labelCol={{ span: 8 }} className="name" label="Name" name="name">
                      <Col offset={2}>
                        <Input style={{ width: '96%', marginLeft: '10px' }} />
                      </Col>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item labelCol={{ span: 8 }} className="name" label="Name" name="name">
                      <Col offset={2}>
                        <Input style={{ width: '96%' }} />
                      </Col>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item labelCol={{ span: 8 }} label="Price" name="price1">
                      <Col offset={2}>
                        <InputNumber style={{ width: '96%', marginLeft: '10px' }} />
                      </Col>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item labelCol={{ span: 8 }} label="Price" name="price2">
                      <Col offset={2}>
                        <InputNumber style={{ width: '96%' }} />
                      </Col>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item labelCol={{ span: 8 }} className="code" label="Code" name="code">
                      <Col offset={2}>
                        <Input.Group compact>
                          <Input style={{ width: 'calc(100% - 94px)', marginLeft: '10px' }} />
                          <Button type="primary">Preview</Button>
                        </Input.Group>
                      </Col>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item labelCol={{ span: 8 }} className="code" label="Code" name="code">
                      <Col offset={2}>
                        <Input.Group compact>
                          <Input style={{ width: 'calc(100% - 93px)' }} />
                          <Button type="primary">Preview</Button>
                        </Input.Group>
                      </Col>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item labelCol={{ span: 8 }} label="Image Preview" name="imagepreview">
                      <Col offset={2}>
                        <Row>
                          <Col span={17}>
                            <Input style={{ marginLeft: '10px', marginRight: '10px' }} />
                          </Col>
                          <Col span={6}>
                            <UploadDragger />
                          </Col>
                        </Row>
                        {/* <Upload
                          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                          listType="picture"
                          className="upload-list-inline"
                          name="image"
                        >
                        style={{ width: 'calc(100% - 111px)', marginLeft: '10px' }}
                          <Button icon={<UploadOutlined />}>Upload</Button>
                        </Upload> */}
                      </Col>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item labelCol={{ span: 8 }} label="Image Preview" name="imagepreview2">
                      <Col offset={2}>
                        <Row>
                          <Col span={17}>
                            <Input  style={{ width: '103%' }}/>
                          </Col>
                          <Col span={6}>
                            <UploadDragger />
                          </Col>
                        </Row>
                        {/* <Input style={{ width: 'calc(100% - 111px)' }} />
                        <Upload
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
                  <Col span={12}>
                    <Form.Item labelCol={{ span: 8 }} className="name" label="Name" name="nameimage1">
                      <Col offset={2}>
                        <Input style={{ width: '97%', marginLeft: '10px' }} />
                      </Col>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item labelCol={{ span: 8 }} className="name" label="Name" name="nameimage2">
                      <Col offset={2}>
                        <Input style={{ width: '97%' }} />
                      </Col>
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Form>
        </div>
      </HeaderCreateUpdate>
    </div>
  );
};

export default MaterialForm;
