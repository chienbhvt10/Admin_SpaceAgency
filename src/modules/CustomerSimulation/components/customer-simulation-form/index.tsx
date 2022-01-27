import { Col, Form, Input, Radio, Row } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import Title from 'antd/lib/typography/Title';
import { SimulationTypeInput, TypeForm } from 'commons/type';
import { ISimulation, RequestType } from 'graphql/generated/graphql';
import { formatPricePercent, formatRequestType, totalPrice } from 'helpers/string';
import FormHeader from 'modules/CustomerSimulation/components/form-header';
import React from 'react';
import StyleListTable from '../style-list-table';
interface Props {
  title: string;
  loading: boolean;
  item?: ISimulation;
  type: TypeForm;
  onCancel?(): void;
  onChange?(): void;
  onFinish?: (values: SimulationTypeInput) => void;
}

const requireRule = { required: true, message: 'This is required information!' };
const CustomerSimulationForm = (props: Props) => {
  const { item, loading, title, type, onCancel, onFinish } = props;
  const [form] = Form.useForm<SimulationTypeInput>();
  const taxRate = formatPricePercent(10);
  const [totPrice, setTotPrice] = React.useState<number>();

  // React.useEffect(() => {
  //   if (item) {
  //     form.setFieldsValue({
  //       content: formatRequestType(item.requests?.type || RequestType.SendDocument),
  //       name: item.requests?.requesterFullName || '',
  //       furigana: item.requests?.furigana || '',
  //       tel: item.requests?.phone || '',
  //       email: item.requests?.email || '',
  //       postCode: item.requests?.address || '',
  //       location: item.requests?.address || '',
  //       otherQuestion: item.requests?.content || '',
  //       ownerConstruction: item.requests?.hasLand ? '1' : '2',
  //     });
  //     setTotPrice(totalPrice(item.simulationComponent?.materialTypes || []));
  //   }
  // }, [form, item]);

  const onFinishFailed = () => {};

  return (
    <div id="customer-simulation-form">
      <Form name="basic" form={form} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
        <FormHeader title={<Title level={2}>{title}</Title>} loading={loading} onCancel={onCancel} type={type}>
          <Row justify="center" className="simulation-form-control">
            <Col className="simulation-contact" span={24}>
              <Title level={4}>Contact</Title>
            </Col>
            <Col span={22}>
              <Form.Item labelCol={{ span: 4, style: { marginRight: 15 } }} name="content" label="Content">
                <Radio.Group>
                  <Radio value="1">Request detail material</Radio>
                  <Radio value="2">Need interview architecture</Radio>
                  <Radio value="3">Other</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
            <Col span={22}>
              <Row>
                <Col span={12}>
                  <Form.Item
                    labelCol={{ span: 8, style: { marginRight: 15 } }}
                    className="name"
                    label="Name"
                    name="name"
                    rules={[requireRule]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    labelCol={{ span: 8, style: { marginRight: 15 } }}
                    label="Furigana"
                    name="furigana"
                    rules={[requireRule]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            <Col span={22}>
              <Row>
                <Col span={12}>
                  <Form.Item
                    labelCol={{ span: 8, style: { marginRight: 15 } }}
                    label="Tel"
                    name="tel"
                    rules={[requireRule]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    labelCol={{ span: 8, style: { marginRight: 15 } }}
                    label="Email"
                    name="email"
                    rules={[requireRule]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            <Col span={22}>
              <Row>
                <Col span={8}>
                  <Form.Item
                    labelCol={{ span: 12, style: { marginRight: 15 } }}
                    label="Address"
                    name="postCode"
                    rules={[requireRule]}
                  >
                    <Input placeholder="Post Code" />
                  </Form.Item>
                </Col>
                <Col span={16}>
                  <Form.Item
                    labelCol={{ span: 8, style: { marginRight: 15 } }}
                    label=""
                    name="location"
                    rules={[requireRule]}
                  >
                    <Input placeholder="Location" />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            <Col span={22}>
              <Form.Item
                labelCol={{ span: 4, style: { marginRight: 15 } }}
                name="ownerConstruction"
                label="Owner construction"
              >
                <Radio.Group>
                  <Radio value="1">Yes</Radio>
                  <Radio value="2">Not Yet</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
            <Col span={22}>
              <Form.Item
                labelCol={{ span: 4, style: { marginRight: 15 } }}
                label="Other Question"
                name="otherQuestion"
                rules={[requireRule]}
              >
                <TextArea rows={5} showCount maxLength={1000} />
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
                  <Title level={5}>{taxRate} x 5,000,000</Title>
                  <Title style={{ marginTop: 0 }} level={5}>
                    {totPrice}
                  </Title>
                </Col>
              </Row>
            </Col>
          </Row>
        </FormHeader>
      </Form>
    </div>
  );
};

export default CustomerSimulationForm;
