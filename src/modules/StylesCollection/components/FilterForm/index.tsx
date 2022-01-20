import { Button, Col, Form, Input, Row, Select } from 'antd';
import BaseButton from 'commons/components/layouts/BaseButton';
import React from 'react';
const { Option } = Select;
interface Props {
  options?: any;
  handleSearch: (value: string) => () => void;
  onChange: (e: any) => void;
  onReset?: () => void;
  value: string;
}

const FilterForm = (props: Props) => {
  const { options, handleSearch, onChange, value, onReset } = props;
  return (
    <Form className="filter-form">
      <Row>
        <Col span={18}>
          <Form.Item labelCol={{ span: 4 }} label="Theme" name="theme">
            <Col span={12} offset={1}>
              <Select placeholder="---All---">{options}</Select>
            </Col>
          </Form.Item>
        </Col>
        <Col span={24}>
          <Row>
            <Col span={18}>
              <Form.Item labelCol={{ span: 4 }} label="Keyword" name="keyword">
                <Col offset={1}>
                  <Input value={value} onChange={onChange} placeholder="Type to search..." />
                </Col>
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
                      onClick={handleSearch(value)}
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
