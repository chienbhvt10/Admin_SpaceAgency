import { Col, Form, Input, Row, Select } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import BaseButton from 'commons/components/layouts/BaseButton';
import { FormSearch } from 'commons/components/layouts/FormSearch';
import { useGetAllThemes } from 'modules/ThemesCollection/hooks/useGetAllThemes';
import React from 'react';
const { Option } = Select;
interface Props {
  value: string;
  themeId: string;
  onChangeTheme: (value: any) => void;
  onChangeValue: (e: any) => void;
  handleSearch: () => void;
  onReset: () => void;
  disabled?: boolean;
}
const FilterForm = (props: Props) => {
  const [form] = useForm();
  const { value, onChangeValue, handleSearch, onReset, onChangeTheme, disabled } = props;
  const { getAllThemes, dataAllThemes } = useGetAllThemes();

  const themeOptions = dataAllThemes.map((theme, index) => (
    <Option key={index} value={theme.id}>
      {theme.title}
    </Option>
  ));

  const onDropdownVisibleChange = (open: boolean) => {
    if (open) {
      getAllThemes();
    }
  };
  React.useEffect(() => {
    if (!props.value) {
      form.setFieldsValue({
        search: '',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.value]);

  const resetFields = () => {
    form.setFieldsValue({ themeId: undefined, search: '' });
    onReset && onReset();
  };
  return (
    <Form className="filter-form" form={form}>
      <Row justify="center">
        <Col span={22} style={{ marginLeft: '33px' }}>
          <Form.Item labelCol={{ span: 3 }} wrapperCol={{ span: 14 }} label="タイプ" name="themeId">
            <Select onDropdownVisibleChange={onDropdownVisibleChange} placeholder="---全部---" onSelect={onChangeTheme}>
              {themeOptions}
            </Select>
          </Form.Item>
        </Col>
        <Col span={22}>
          <Col span={24} style={{ marginLeft: '20px' }}>
            <Row>
              <Col span={18}>
                <Form.Item label="キーワード" labelCol={{ span: 4 }} wrapperCol={{ span: 19 }} name="search">
                  <Input onChange={onChangeValue} placeholder="キーワードを入力してください。" />
                </Form.Item>
              </Col>
              <Col span={4} style={{ display: 'flex' }}>
                <BaseButton
                  text="リセット"
                  disabled={disabled}
                  backgroundColor={disabled ? '#C0C0C0' : '#6C757D'}
                  onClick={resetFields}
                  marginLeft={'10px'}
                />
                <BaseButton
                  text="検索"
                  disabled={disabled}
                  border="1px solid #007BFF"
                  backgroundColor={disabled ? '#C0C0C0' : '#007BFF'}
                  onClick={handleSearch}
                  marginLeft={'10px'}
                />
              </Col>
            </Row>
          </Col>
        </Col>
      </Row>
    </Form>
  );
};

export default FilterForm;
