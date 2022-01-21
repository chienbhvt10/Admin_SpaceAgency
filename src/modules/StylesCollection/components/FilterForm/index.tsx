import { Button, Col, Form, Input, Row, Select } from 'antd';
import BaseButton from 'commons/components/layouts/BaseButton';
import { ITheme } from 'graphql/generated/graphql';
import React from 'react';
import { useGetAllThemes } from 'modules/ThemesCollection/hooks/useGetAllThemes';
import { useOptionTheme } from 'modules/StylesCollection/hooks/useOptionTheme';
const { Option } = Select;
interface Props {
  value: string;
  theme: string;
  onChangeTheme: (value: string) => void;
  onChangeValue: (e: any) => void;
  handleSearch: (value: string, theme: string) => () => void;
  onReset: () => void;
}
const FilterForm = (props: Props) => {
  const { value, onChangeValue, handleSearch, onReset, onChangeTheme, theme } = props;
  const { dataThemes } = useOptionTheme();
  const themeOptions = dataThemes.map((theme, index) => (
    <Option key={index} value={theme.id}>
      {theme.title}
    </Option>
  ));
  return (
    <Form className="filter-form">
      <Row>
        <Col span={18}>
          <Form.Item labelCol={{ span: 6 }} label="Theme" name="theme">
            <Select placeholder="---All---" onChange={onChangeTheme}>
              {themeOptions}
            </Select>
          </Form.Item>
        </Col>
        <Col span={24}>
          <Row>
            <Col span={18}>
              <Form.Item labelCol={{ span: 6 }} label="Keyword" name="keyword">
                <Input placeholder="Type to search..." value={value} onChange={onChangeValue} />
              </Form.Item>
            </Col>
            <Col span={5}>
              <Row justify="space-between">
                <Col span={12}>
                  <Row justify="space-around">
                    <BaseButton
                      text="Reset"
                      width={'90%'}
                      height={''}
                      marginRight=""
                      marginLeft=""
                      backgroundColor="#6C757D"
                      onClick={onReset}
                    />
                  </Row>
                </Col>
                <Col span={12}>
                  <Row justify="space-around">
                    <BaseButton
                      text="Search"
                      width={'90%'}
                      height={''}
                      border="1px solid #007BFF"
                      marginLeft={''}
                      marginRight={''}
                      backgroundColor="#007BFF"
                      onClick={handleSearch(value, theme)}
                    />
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  );
};

export default FilterForm;
