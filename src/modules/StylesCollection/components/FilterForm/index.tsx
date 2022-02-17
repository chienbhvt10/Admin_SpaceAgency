import { Col, Form, Row, Select } from 'antd';
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
  return (
    <Form className="filter-form">
      <Row justify="center">
        <Col span={22} style={{ marginLeft: '33px' }}>
          <Form.Item labelCol={{ span: 3 }} wrapperCol={{ span: 14 }} label="テーマ" name="themeId">
            <Select onDropdownVisibleChange={onDropdownVisibleChange} placeholder="---全部---" onSelect={onChangeTheme}>
              {themeOptions}
            </Select>
          </Form.Item>
        </Col>
        <Col span={22}>
          <FormSearch
            disabled={disabled}
            onReset={onReset}
            onChange={onChangeValue}
            value={value}
            handleSearch={handleSearch}
          />
        </Col>
      </Row>
    </Form>
  );
};

export default FilterForm;
