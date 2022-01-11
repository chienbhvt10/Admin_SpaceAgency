import { Button, Col, Form, Input, Row, Select } from 'antd';
import React from 'react';
const { Option } = Select;
interface Props {
  options?: any;
}

const FilterForm = (props: Props) => {
  const { options } = props;
  return (
    <Form className="filter-form">
      <Row style={{ margin: '30px 0 0 30px' }}>
        <Col span={16}>
          <Form.Item labelCol={{ span: 4 }} label="Theme" name="theme">
            <Col span={16}>
              <Select placeholder="---All---">{options}</Select>
            </Col>
          </Form.Item>
        </Col>
        <Col span={16}>
          <Form.Item labelCol={{ span: 4 }} label="Keyword" name="keyword">
            <Input placeholder="Typing to search..." />
          </Form.Item>
        </Col>
        <Col span={3}>
          <Button size="middle" style={{ width: '80%', marginLeft: '10px', backgroundColor: 'gray', color: 'white' }}>
            Reset
          </Button>
        </Col>
        <Col span={3}>
          <Button style={{ width: '80%' }} type="primary">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default FilterForm;
