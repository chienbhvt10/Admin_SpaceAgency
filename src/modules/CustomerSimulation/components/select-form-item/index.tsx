import { Col, ColProps, Form, FormItemProps, Select } from 'antd';
import React from 'react';

const { Option } = Select;
interface Props {
  options: React.ReactNode[];
  formItem?: FormItemProps;
  className?: string;
  colOffSet?: number | string;
}

const SelectFormItem = (props: Props) => {
  const { options, className, formItem, colOffSet } = props;
  return (
    <Form.Item {...formItem} className={className}>
      <Col offset={colOffSet}>
        <Select placeholder="---All---">{options}</Select>
      </Col>
    </Form.Item>
  );
};

export default SelectFormItem;
