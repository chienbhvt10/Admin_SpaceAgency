import { Form, Select } from 'antd';
import React from 'react';
import './style.scss';
interface Iprops {
  label: string;
}
const FormDropdown = (props: Iprops) => {
  const themeOptions: any = [];
  return (
    
      <Form.Item>
        {props.label && <label htmlFor="app-input-field">{props.label}</label>}
        <Select placeholder="---All---">{themeOptions}</Select>
      </Form.Item>
    
  );
};

export default FormDropdown;
