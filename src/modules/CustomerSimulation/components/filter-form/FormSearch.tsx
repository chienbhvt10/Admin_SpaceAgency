import { Col, Form, Input, Row } from 'antd';
import BaseButton from 'commons/components/layouts/BaseButton';
import React from 'react';

interface Props {
  onReset: () => void;
  handleSearch: () => void;
  value: string;
  disabled: boolean;
  onChangeValue: (e: any) => void;
}

const FormSearch = (props: Props) => {
  const { onReset, handleSearch, value, disabled, onChangeValue } = props;

  return (
    <Col span={24}>
      <Row>
        <Col span={18}>
          <Form.Item labelCol={{ span: 5 }} label="Keyword" name="keyword">
            <Col offset={1}>
              <Input onChange={onChangeValue} placeholder="Type to search..." value={value} />
            </Col>
          </Form.Item>
        </Col>
        <Col span={5}>
          <Row justify="space-between">
            <Col span={12}>
              <Row justify="space-around">
                <BaseButton
                  text="Reset"
                  width={''}
                  disabled={disabled}
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
                  width={''}
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
