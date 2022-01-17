import { Col, Form, Input, Row } from 'antd';
import BaseButton from 'commons/components/layouts/BaseButton';
import React from 'react';

interface Props {}

const FormSearch = (props: Props) => {
  const onReset = () => {
    console.log('ok');
  };
  const handleSearch = () => {
    console.log('1');
  };
  return (
    <Col span={24}>
      <Row>
        <Col span={18}>
          <Form.Item labelCol={{ span: 5 }} label="Keyword" name="keyword">
            <Col offset={1}>
              <Input placeholder="Type to search..." />
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
                  onClick={handleSearch}
                />
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default FormSearch;
