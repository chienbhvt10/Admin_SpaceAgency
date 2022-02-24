import { Col, Form, Input, Radio, Row } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import Title from 'antd/lib/typography/Title';
import { SimulationTypeInput, TypeForm } from 'commons/type';
import { ISimulation } from 'graphql/generated/graphql';
import { formatPricePercent } from 'helpers/string';
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

const requireRule = { required: true, message: 'これは必須情報です。' };
const CustomerSimulationForm = (props: Props) => {
  const { item, loading, title, type, onCancel, onFinish } = props;
  const [form] = Form.useForm<SimulationTypeInput>();
  const taxRate = formatPricePercent(10);
  const [totalPrice, setTotPrice] = React.useState<number>();

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
              <Title level={4}>連絡</Title>
            </Col>
            <Col span={22}>
              <Form.Item labelCol={{ span: 4, style: { marginRight: 15 } }} name="content" label="コンテンツ">
                <Radio.Group>
                  <Radio value="1">詳細資料の請求</Radio>
                  <Radio value="2">インタビューアーキテクチャが必要です。</Radio>
                  <Radio value="3">その他</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
            <Col span={22}>
              <Row>
                <Col span={12}>
                  <Form.Item
                    labelCol={{ span: 8, style: { marginRight: 15 } }}
                    className="name"
                    label="名称"
                    name="name"
                    rules={[requireRule]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    labelCol={{ span: 8, style: { marginRight: 15 } }}
                    label="フリガナ"
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
                    label="電話番号"
                    name="tel"
                    rules={[requireRule]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    labelCol={{ span: 8, style: { marginRight: 15 } }}
                    label="メール"
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
                    label="郵便番号"
                    name="postCode"
                    rules={[requireRule]}
                  >
                    <Input placeholder="郵便番号" />
                  </Form.Item>
                </Col>
                <Col span={16}>
                  <Form.Item
                    labelCol={{ span: 8, style: { marginRight: 15 } }}
                    label=""
                    name="location"
                    rules={[requireRule]}
                  >
                    <Input placeholder="現在地" />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            <Col span={22}>
              <Form.Item
                labelCol={{ span: 4, style: { marginRight: 15 } }}
                name="ownerConstruction"
                label="現在土地はお持ちですか"
              >
                <Radio.Group>
                  <Radio value="yes">はい</Radio>
                  <Radio value="notYet">持っていない</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
            <Col span={22}>
              <Form.Item
                labelCol={{ span: 4, style: { marginRight: 15 } }}
                label="質問"
                name="otherQuestion"
                rules={[requireRule]}
              >
                <TextArea rows={5} showCount maxLength={1000} />
              </Form.Item>
            </Col>
            <Col span={22}>
              <Form.Item labelCol={{ span: 4 }} label="見積もり一覧" name="quotationList">
                <StyleListTable colOffSet={1} />
              </Form.Item>
            </Col>
            <Col span={22}>
              <Row>
                <Col span={18}>
                  <Row justify="end">
                    <Title level={5}>税率</Title>
                  </Row>
                  <Row justify="end">
                    <Title level={5}>合計</Title>
                  </Row>
                </Col>
                <Col span={5} offset={1}>
                  <Title level={5}>{taxRate} x 5,000,000</Title>
                  <Title style={{ marginTop: 0 }} level={5}>
                    {totalPrice}
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
