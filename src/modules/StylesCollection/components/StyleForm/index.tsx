import { Col, Form, Input, InputNumber, Row, Select, Typography } from 'antd';
import { CreateStyleTypeInput, TypeForm } from 'commons/type';
import { IStyle } from 'graphql/generated/graphql';
import { useGetAllThemes } from 'modules/ThemesCollection/hooks/useGetAllThemes';
import React from 'react';
import '../../styles/style-form.scss';
import FormHeader from '../FormHeader';
const { Option } = Select;
const { TextArea } = Input;
const { Title } = Typography;

interface Props {
  title: string;
  loading: boolean;
  item?: IStyle;
  type: TypeForm;
  onCancel?(): void;
  onChange?(): void;
  onFinish?: (values: CreateStyleTypeInput) => void;
}

const requireRule = { required: true, message: 'This is required information!' };

const StyleCollectionForm = (props: Props) => {
  const { loading, type, item, onCancel, title, onFinish } = props;
  const [form] = Form.useForm<CreateStyleTypeInput>();
  const { dataAllThemes, getAllThemes } = useGetAllThemes();

  React.useEffect(() => {
    getAllThemes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (item && type === TypeForm.UPDATE) {
      form.setFieldsValue({
        code3d: item.code3d || '',
        themeId: item.theme?.id,
        description: item.description || '',
        price: item.price?.value || 0,
        title: item.title || '',
      });
    }
  }, [type, form, item]);

  const onFinishFailed = () => {};

  const themeOptions = dataAllThemes.map((theme, index) => (
    <Option key={index} value={theme.id}>
      {theme.title}
    </Option>
  ));
  return (
    <div id="style-form">
      <Form name="basic" form={form} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
        <FormHeader title={<Title level={2}>{title}</Title>} loading={loading} onCancel={onCancel}>
          <Row className="style-form-control">
            <Col span={22}>
              <Col span={16}>
                <Form.Item labelCol={{ span: 6 }} label="テーマ" name="themeId" rules={[requireRule]}>
                  <Select placeholder="---全部---">{themeOptions}</Select>
                </Form.Item>
              </Col>
            </Col>
            <Col span={22}>
              <Form.Item labelCol={{ span: 4 }} label="Title" name="title" rules={[requireRule]}>
                <Input />
              </Form.Item>
            </Col>
            <Col span={22}>
              <Form.Item labelCol={{ span: 4 }} label="詳細" name="description">
                <TextArea rows={5} showCount maxLength={1000} />
              </Form.Item>
            </Col>
            <Col span={22}>
              <Row>
                <Col span={16}>
                  <Form.Item labelCol={{ span: 6 }} label="3Dコード" name="code3d">
                    <Input />
                  </Form.Item>
                </Col>
                {/* <Col span={4}>
                  <Button style={{ width: '100%' }} htmlType="button" type="primary" onClick={handlePreview}>
                    Preview
                  </Button>
                </Col> */}
              </Row>
            </Col>
            <Col span={22} className="price-order-box">
              <Row>
                <Col span={12}>
                  <Form.Item labelCol={{ span: 8 }} label="価格" name="price">
                    <InputNumber style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  {/* <Col span={20} offset={4}>
                    <Form.Item labelCol={{ span: 8 }} label="Order" name="order">
                      <InputNumber style={{ width: '100%' }} />
                    </Form.Item>
                  </Col> */}
                </Col>
              </Row>
            </Col>

            {/* <Col className="image-upload-title" span={24}>
              <Title level={3}>Image Upload</Title>
            </Col>
            <Col span={22}>
              <Row>
                <Col span={16}>
                  <Row>
                    <Col span={18}>
                      <Form.Item labelCol={{ span: 8 }} label="Preview" name="preview">
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={6}>
                      <Upload name="image">
                        <Button htmlType="button" type="primary">
                          Choose Images
                        </Button>
                      </Upload>
                    </Col>
                  </Row>
                  <Form.Item labelCol={{ span: 6 }} label="名称" name="imageName">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <UploadDragger />
                </Col>
              </Row>
            </Col> */}
          </Row>
        </FormHeader>
      </Form>
    </div>
  );
};

export default StyleCollectionForm;
