import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, InputNumber, Row, Select, Typography, Upload } from 'antd';
import BaseButton from 'commons/components/layouts/BaseButton';
import UploadDragger from 'commons/components/layouts/Form-editor/UploadDragger';
import { TypeForm } from 'commons/type';
import { CreateStyleInput, IStyle, UpdateStyleInput } from 'graphql/generated/graphql';
import { useCreateStyle } from 'modules/StylesCollection/hooks/useCreateStyle';
import { useOptionTheme } from 'modules/StylesCollection/hooks/useOptionTheme';
import { useUpdateStyle } from 'modules/StylesCollection/hooks/useUpdateStyle';
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
  item?: IStyle;
  type: TypeForm;
  onCancel?(): void;
  onChange?(): void;
}

const requireRule = { required: true, message: 'This is required information!' };

const StyleCollectionForm = (props: Props) => {
  const { loading, type, item, onCancel, onChange, title } = props;
  const { updateStyle } = useUpdateStyle();
  const { createStyle } = useCreateStyle();
  const [form] = Form.useForm<any>();
  const { dataThemes } = useOptionTheme();
  const themeOptions = dataThemes.map((theme) => <Option value={theme.id}>{theme.title}</Option>);
  const inputCreate: CreateStyleInput = {
    title: '',
    code3d: '',
    description: '',
    price: null,
    theme: null,
  };
  const [createInput, setCreateStyleInput] = React.useState<CreateStyleInput>(inputCreate);
  const [updateInput, setUpdateStyleInput] = React.useState<UpdateStyleInput>({
    id: '',
    title: '',
    code3d: '',
    description: '',
    price: null,
    theme: null,
  });
  React.useEffect(() => {
    if (item) {
      setUpdateStyleInput({
        id: item.id,
        code3d: item.code3d,
        description: item.description,
        price: item.price,
        theme: item.theme,
        title: item.title,
      });
    }
  }, [item]);
  React.useEffect(() => {
    if (item) {
      form.setFieldsValue(item);
    }
  }, [form, item]);

  const onFinish = (values: IStyle) => {
    if (type === TypeForm.UPDATE) {
      const updateStyleInput: UpdateStyleInput = {
        ...updateInput,
        code3d: values.code3d || '',
        description: values.description || '',
        price: values.price || undefined,
        title: values.title || '',
        theme: values.theme || undefined,
      };
      updateStyle({ updateStyleInput });
    }
    if (type === TypeForm.CREATE) {
      const createStyleInput: CreateStyleInput = {
        ...createInput,
        code3d: values.code3d || '',
        description: values.description || '',
        price: values.price || undefined,
        title: values.title || '',
        theme: values.theme || undefined,
      };
      createStyle({ createStyleInput });
    }
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
          <Row className="style-form-control">
            <Col span={22}>
              <Col span={16}>
                <Form.Item labelCol={{ span: 6 }} label="Theme" name="themeid">
                  <Select placeholder="---All---">{themeOptions}</Select>
                </Form.Item>
              </Col>
            </Col>
            <Col span={22}>
              <Form.Item labelCol={{ span: 4 }} label="Title" name="title" rules={[requireRule]}>
                <Input />
              </Form.Item>
            </Col>
            <Col span={22}>
              <Form.Item labelCol={{ span: 4 }} label="Description" name="description" rules={[requireRule]}>
                <TextArea rows={5} showCount maxLength={1000} />
              </Form.Item>
            </Col>
            <Col span={22}>
              <Row>
                <Col span={16}>
                  <Form.Item labelCol={{ span: 6 }} label="Code3D" name="code3d" rules={[requireRule]}>
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={4}>
                  <Button style={{ width: '100%' }} htmlType="button" type="primary" onClick={handlePreview}>
                    Preview
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col span={22} className="price-order-box">
              <Row>
                <Col span={12}>
                  <Form.Item labelCol={{ span: 8 }} label="Price" name="price">
                    <InputNumber style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Col span={20} offset={4}>
                    <Form.Item labelCol={{ span: 8 }} label="Order" name="order">
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
                  <Form.Item labelCol={{ span: 6 }} label="Name" name="imageName">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <UploadDragger />
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
