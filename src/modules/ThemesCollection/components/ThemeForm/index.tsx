import { Col, Form, Input, InputNumber, Row, Typography } from 'antd';
import { CommonPath } from 'commons/base-routes';
import UploadDragger from 'commons/components/layouts/Form-editor/UploadDragger';
import HeaderCreateUpdate from 'commons/components/layouts/HeaderCreateUpdate';
import { useUploadImages } from 'commons/hooks/useUploadImages/useUploadImages';
import { ThemeTypeInput, TypeForm } from 'commons/type';
import { ITheme } from 'graphql/generated/graphql';
import 'modules/ThemesCollection/style/style.scss';
import React from 'react';
import { useNavigate } from 'react-router';
const { TextArea } = Input;
const { Title } = Typography;

interface Props {
  title: string;
  loading: boolean;
  items?: ITheme;
  type: TypeForm;
  onCancel?(): void;
  onChange?(): void;
  onFinish?: (values: ThemeTypeInput) => void;
}
const requireRule = { required: true, message: 'この項目は必須です。' };

const ThemesForm = (props: Props) => {
  const { loading, type, items, onFinish, title } = props;
  const { uploadImages } = useUploadImages();
  const [form] = Form.useForm<ThemeTypeInput>();
  const [loadingInside, setLoadingInside] = React.useState<boolean>(false);
  const [loadingOutside, setLoadingOutside] = React.useState<boolean>(false);
  const [loadingDiagram, setLoadingDiagram] = React.useState<boolean>(false);

  const [objUrlImage, setObjUrlImage] = React.useState({
    insidePreviewUrl: '',
    outsidePreviewUrl: '',
    diagramImageUrl: '',
  });
  const navigate = useNavigate();

  React.useEffect(() => {
    if (items && type === TypeForm.UPDATE) {
      form.setFieldsValue({
        code: items.code3D || '',
        description: items.description || '',
        name: items?.title || '',
        nameEnglish: (items && items.themeCategories && items?.themeCategories[0]?.title) || '',
        order: '',
        price: items.price?.value || 0,
        insidePreviewUrl: items.themeImage?.insidePreviewUrl || '',
        outsidePreviewUrl: items.themeImage?.outsidePreviewUrl || '',
        diagramImageUrl: items?.themeImage?.diagramImage || '',
      });
      setObjUrlImage({
        insidePreviewUrl: items?.themeImage?.insidePreviewUrl || '',
        outsidePreviewUrl: items?.themeImage?.outsidePreviewUrl || '',
        diagramImageUrl: items?.themeImage?.diagramImage || '',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, form]);

  React.useEffect(() => {
    if (objUrlImage) {
      form.setFieldsValue({
        insidePreviewUrl: objUrlImage.insidePreviewUrl,
        outsidePreviewUrl: objUrlImage.outsidePreviewUrl,
        diagramImageUrl: objUrlImage.diagramImageUrl,
      });
    }
  }, [objUrlImage, form]);

  const onFinishFailed = () => {};

  const handleResetInsideUrl = () => {
    form.setFieldsValue({
      insidePreviewUrl: '',
    });
  };
  const handleResetOutsideUrl = () => {
    form.setFieldsValue({
      outsidePreviewUrl: '',
    });
  };
  const handleResetDiagramUrl = () => {
    form.setFieldsValue({
      diagramImageUrl: '',
    });
  };
  const handleChangeInside = async (info: any) => {
    setLoadingInside(true);
    const urlImage = (await uploadImages(info)) as string;
    setLoadingInside(false);
    if (urlImage) {
      setObjUrlImage({
        ...objUrlImage,
        insidePreviewUrl: urlImage,
      });
    }
  };

  const handleChangeOutside = async (info: any) => {
    setLoadingOutside(true);
    const urlImage = (await uploadImages(info)) as string;
    setLoadingOutside(false);
    if (urlImage) {
      setObjUrlImage({
        ...objUrlImage,
        outsidePreviewUrl: urlImage,
      });
    }
  };
  const handleChangeDiagram = async (info: any) => {
    setLoadingDiagram(true);
    const urlImage = (await uploadImages(info)) as string;
    setLoadingDiagram(false);
    if (urlImage) {
      setObjUrlImage({
        ...objUrlImage,
        diagramImageUrl: urlImage,
      });
    }
  };
  const onCancel = () => {
    navigate(CommonPath.THEME_COLLECTION);
  };
  return (
    <div>
      <div id="form-theme">
        <Form
          name="basic"
          initialValues={{
            ...items,
            price: 0,
          }}
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <HeaderCreateUpdate loading={loading} onCancel={onCancel} title={<Title level={2}>{title}</Title>}>
            <Row justify="center">
              <Col span={22}>
                <Form.Item
                  rules={[requireRule]}
                  labelCol={{ span: 4, style: { marginRight: 20 } }}
                  wrapperCol={{ span: 16 }}
                  className="name"
                  label="名称"
                  name="name"
                >
                  <Input placeholder="名称" />
                </Form.Item>
              </Col>
              <Col span={22}>
                <Form.Item
                  labelCol={{ span: 4, style: { marginRight: 20 } }}
                  wrapperCol={{ span: 16 }}
                  className=""
                  label="英語表記"
                  rules={[requireRule]}
                  name="nameEnglish"
                >
                  <Input placeholder="英語表記" />
                </Form.Item>
              </Col>
              <Col span={22}>
                <Form.Item
                  labelCol={{ span: 4, style: { marginRight: 20 } }}
                  wrapperCol={{ span: 16 }}
                  className=""
                  label="詳細"
                  name="description"
                >
                  <TextArea placeholder="詳細" rows={5} showCount maxLength={1000} />
                </Form.Item>
              </Col>
              <Col span={22}>
                <Form.Item
                  labelCol={{ span: 4, style: { marginRight: 20 } }}
                  wrapperCol={{ span: 8 }}
                  label="価格"
                  name="price"
                  rules={[requireRule]}
                >
                  <InputNumber style={{ width: '100%' }} min={0} />
                </Form.Item>
              </Col>
              <Col span={22}>
                <Form.Item
                  labelCol={{ span: 4, style: { marginRight: 20 } }}
                  wrapperCol={{ span: 8 }}
                  label="3Dコード"
                  name="code"
                >
                  <Input placeholder="コード" style={{ width: '100%' }} />
                </Form.Item>
              </Col>
              <Col span={22} style={{ marginBottom: '20px' }}>
                <Title level={4}>Image Upload</Title>
              </Col>
              <Col span={22} style={{ marginBottom: '20px' }}>
                <Row>
                  <Col span={8}>
                    <Row justify="center">
                      <Col span={22}>
                        <Form.Item
                          rules={[requireRule]}
                          labelCol={{ span: 24, style: { marginRight: 20 } }}
                          wrapperCol={{ span: 24 }}
                          label="内部プレビュー"
                          name="insidePreviewUrl"
                        >
                          <Input placeholder="内部プレビュー" disabled={true} />
                        </Form.Item>
                      </Col>
                      <Col span={22}>
                        <div style={{ height: '300px' }}>
                          <UploadDragger
                            loading={loadingInside}
                            handleChange={handleChangeInside}
                            imageUrl={objUrlImage.insidePreviewUrl}
                            resetToDefault={() => handleResetInsideUrl()}
                          />
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col span={8}>
                    <Row justify="center">
                      <Col span={22}>
                        <Form.Item
                          rules={[requireRule]}
                          labelCol={{ span: 24, style: { marginRight: 20 } }}
                          wrapperCol={{ span: 24 }}
                          label="外部プレビュー"
                          name="outsidePreviewUrl"
                        >
                          <Input placeholder="外部プレビュー" disabled={true} />
                        </Form.Item>
                      </Col>
                      <Col span={22}>
                        <div style={{ height: '300px' }}>
                          <UploadDragger
                            loading={loadingOutside}
                            handleChange={handleChangeOutside}
                            imageUrl={objUrlImage.outsidePreviewUrl}
                            resetToDefault={() => handleResetOutsideUrl()}
                          />
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col span={8}>
                    <Row justify="center">
                      <Col span={22}>
                        <Form.Item
                          rules={[requireRule]}
                          labelCol={{ span: 24, style: { marginRight: 20 } }}
                          wrapperCol={{ span: 24 }}
                          label="ハウスマップ"
                          name="diagramImageUrl"
                        >
                          <Input placeholder="ハウスマップ" disabled={true} />
                        </Form.Item>
                      </Col>
                      <Col span={22}>
                        <div style={{ height: '300px' }}>
                          <UploadDragger
                            loading={loadingDiagram}
                            handleChange={handleChangeDiagram}
                            imageUrl={objUrlImage.diagramImageUrl}
                            resetToDefault={() => handleResetDiagramUrl()}
                          />
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </HeaderCreateUpdate>
        </Form>
      </div>
    </div>
  );
};

export default ThemesForm;
