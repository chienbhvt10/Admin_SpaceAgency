import { Button, Col, Form, Input, InputNumber, Row, Select, Typography, Upload } from 'antd';
import UploadDragger from 'commons/components/layouts/Form-editor/UploadDragger';
import { useUploadImages } from 'commons/hooks/useUploadImages/useUploadImages';
import { CreateStyleTypeInput, TypeForm } from 'commons/type';
import { IStyle } from 'graphql/generated/graphql';
import { cutStringUrl } from 'helpers/string';
import { useGetAllThemes } from 'modules/ThemesCollection/hooks/useGetAllThemes';
import React, { useState } from 'react';
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

const requireRule = { required: true, message: 'この項目は必須です。' };

const StyleCollectionForm = (props: Props) => {
  const { loading, type, item, onCancel, title, onFinish } = props;
  const [form] = Form.useForm<CreateStyleTypeInput>();
  const { dataAllThemes, getAllThemes } = useGetAllThemes();
  const { uploadImages, loading: loadingImage } = useUploadImages();
  const [previewImageUrl, setPreviewImageUrl] = useState('');

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
        previewImageUrl: item.styleImage?.previewImageUrl,
      });
      setPreviewImageUrl(item?.styleImage?.previewImageUrl || '');
    }
  }, [type, form, item]);

  React.useEffect(() => {
    if (previewImageUrl) {
      form.setFieldsValue({
        previewImageUrl,
      });
    }
  }, [previewImageUrl, form]);
  const onFinishFailed = () => {};

  const themeOptions = dataAllThemes.map((theme, index) => (
    <Option key={index} value={theme.id}>
      {theme.title}
    </Option>
  ));

  const handleChangePreviewUrl = async (info: any) => {
    const urlImage = (await uploadImages(info)) as string;
    setPreviewImageUrl(urlImage);
  };
  const handleResetPreviewUrl = () => {
    form.setFieldsValue({
      previewImageUrl: '',
    });
  };
  return (
    <div id="style-form">
      <Form
        name="basic"
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        initialValues={{
          ...item,
          price: 0,
        }}
      >
        <FormHeader title={<Title level={2}>{title}</Title>} loading={loading} onCancel={onCancel}>
          <Row className="style-form-control">
            <Col span={22}>
              <Col span={16}>
                <Form.Item
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 18 }}
                  label="タイプ"
                  name="themeId"
                  rules={[requireRule]}
                >
                  <Select placeholder="---全部---">{themeOptions}</Select>
                </Form.Item>
              </Col>
            </Col>
            <Col span={22}>
              <Form.Item labelCol={{ span: 4 }} label="タイトル" name="title" rules={[requireRule]}>
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
                  <Form.Item labelCol={{ span: 6 }} label="3Dコード" name="code3d" rules={[requireRule]}>
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
                  <Form.Item labelCol={{ span: 8 }} label="価格" name="price" rules={[requireRule]}>
                    <InputNumber style={{ width: '100%' }} min={0} />
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

            <Col className="image-upload-title" span={24}>
              <Title level={3}>画像アップロード</Title>
            </Col>
            <Col span={22}>
              <Col span={14}>
                <Col span={24}>
                  <Form.Item
                    labelCol={{ span: 7 }}
                    wrapperCol={{ span: 16 }}
                    label="画像プレビュー"
                    name="previewImageUrl"
                    rules={[requireRule]}
                  >
                    <Input disabled={true} />
                  </Form.Item>
                </Col>
                <Col span={16} offset={7}>
                  <div style={{ height: '300px' }}>
                    <UploadDragger
                      loading={loadingImage}
                      handleChange={handleChangePreviewUrl}
                      imageUrl={previewImageUrl}
                      resetToDefault={() => handleResetPreviewUrl()}
                    />
                  </div>
                </Col>
              </Col>
            </Col>
          </Row>
        </FormHeader>
      </Form>
    </div>
  );
};

export default StyleCollectionForm;
