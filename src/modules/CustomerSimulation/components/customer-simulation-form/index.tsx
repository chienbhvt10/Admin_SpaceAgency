import { Col, Form, Input, Radio, Row, Select } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import Title from 'antd/lib/typography/Title';
import { TypeForm } from 'commons/type';
import FormHeader from 'modules/CustomerSimulation/components/form-header';
import React from 'react';
import { useDispatch } from 'react-redux';
import StyleListTable from '../style-list-table';
const { Option } = Select;
interface Props {
  title: string;
  loading: boolean;
  item?: any;
  type: TypeForm;
  onCancel?(): void;
  onChange?(): void;
}

const themeOptions: any = [];
for (let i = 0; i < 10; i++) {
  themeOptions.push(<Option key={i.toString(36) + i}>Theme {i}</Option>);
}
const designOptions: any = [];
for (let i = 0; i < 10; i++) {
  designOptions.push(<Option key={i.toString(36) + i}>Design {i}</Option>);
}

const requireRule = { required: true, message: 'This is required information!' };
const CustomerSimulationForm = (props: Props) => {
  const { item, loading, title, type, onCancel, onChange } = props;
  const [form] = Form.useForm<any>();
  const dispatch = useDispatch();

  React.useEffect(() => {});
  const onFinish = () => {
    console.log(form.getFieldsValue());
  };
  const onFinishFailed = () => {};

  return (
    <FormHeader title={<Title level={2}>{title}</Title>} loading={loading} onCancel={onCancel} type={type}>
      <div id="customer-simulation-form">
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
          <Row justify="center" className="simulation-form-control">
            <Col className="simulation-contact" span={24}>
              <Title level={4}>Contact</Title>
            </Col>
            <Col span={22}>
              <Form.Item labelCol={{ span: 4 }} name="content" label="Content">
                <Col offset={1}>
                  <Radio.Group>
                    <Radio value="1">Request detail material</Radio>
                    <Radio value="2">Need interview architecture</Radio>
                    <Radio value="3">Other</Radio>
                  </Radio.Group>
                </Col>
              </Form.Item>
            </Col>
            <Col span={22}>
              <Row>
                <Col span={12}>
                  <Form.Item labelCol={{ span: 8 }} className="name" label="Name" name="name" rules={[requireRule]}>
                    <Col offset={2}>
                      <Input />
                    </Col>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item labelCol={{ span: 8 }} label="Furigana" name="furigana" rules={[requireRule]}>
                    <Col offset={2}>
                      <Input />
                    </Col>
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            <Col span={22}>
              <Row>
                <Col span={12}>
                  <Form.Item labelCol={{ span: 8 }} label="Tel" name="tel" rules={[requireRule]}>
                    <Col offset={2}>
                      <Input />
                    </Col>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item labelCol={{ span: 8 }} label="Email" name="email" rules={[requireRule]}>
                    <Col offset={2}>
                      <Input />
                    </Col>
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            <Col span={22}>
              <Row>
                <Col span={8}>
                  <Form.Item labelCol={{ span: 12 }} label="Address" name="address" rules={[requireRule]}>
                    <Col offset={4}>
                      <Input placeholder="Post Code" />
                    </Col>
                  </Form.Item>
                </Col>
                <Col span={16}>
                  <Form.Item labelCol={{ span: 8 }} label="" name="address" rules={[requireRule]}>
                    <Col offset={1}>
                      <Input placeholder="Location" />
                    </Col>
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            <Col span={22}>
              <Form.Item labelCol={{ span: 4 }} name="owner-construction" label="Owner construction">
                <Col offset={1}>
                  <Radio.Group>
                    <Radio value="1">Yes</Radio>
                    <Radio value="2">Not Yet</Radio>
                  </Radio.Group>
                </Col>
              </Form.Item>
            </Col>
            <Col span={22}>
              <Form.Item labelCol={{ span: 4 }} label="Other Question" name="otherQuestion" rules={[requireRule]}>
                <Col offset={1}>
                  <TextArea rows={5} showCount maxLength={1000} />
                </Col>
              </Form.Item>
            </Col>
            <Col span={22}>
              <Form.Item labelCol={{ span: 4 }} label="Quotation List" name="quotationList">
                <StyleListTable colOffSet={1} />
              </Form.Item>
            </Col>
            <Col span={22}>
              <Row>
                <Col span={18}>
                  <Row justify="end">
                    <Title level={5}>Tax Rate</Title>
                  </Row>
                  <Row justify="end">
                    <Title level={5}>Total Price</Title>
                  </Row>
                </Col>
                <Col span={5} offset={1}>
                  <Title level={5}>10 x 5,000,000</Title>
                  <Title level={5}>5,500,000</Title>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </div>
    </FormHeader>
  );
};

export default CustomerSimulationForm;
