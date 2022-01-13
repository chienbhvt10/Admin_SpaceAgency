import { Form, FormItemProps, Select } from 'antd';
import React from 'react';
import './style.scss';
interface Iprops {
  options: React.ReactNode[];
  formItem?: FormItemProps;
  colOffSet?: number | string;
}
const FormDropdown = (props: Iprops) => {
  const { options, formItem, colOffSet } = props;
  return (
    
      <Form.Item {...formItem}>
        <Select placeholder="---All---">{options}</Select>
      </Form.Item>
    
  );
};

export default FormDropdown;
