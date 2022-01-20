import { Form, FormItemProps, Select } from 'antd';
import React from 'react';
import './style.scss';
interface IProps {
  options: React.ReactNode[];
  formItem?: FormItemProps;
  colOffSet?: number | string;
  items?: any[];
}
const { Option } = Select;
const FormDropdown = (props: IProps) => {
  const { options, formItem, colOffSet, items } = props;
  return (
    <Form.Item {...formItem}>
      <Select placeholder="---All---">
        <Option>---All---</Option>
        {items?.map((i) => {
          return <Option key={i?.id}>{i?.title}</Option>;
        })}
      </Select>
    </Form.Item>
  );
};

export default FormDropdown;
