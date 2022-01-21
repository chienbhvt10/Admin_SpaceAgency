import { Form, FormItemProps, Select } from 'antd';
import React from 'react';
import './style.scss';
interface IProps {
  options: React.ReactNode[];
  formItem?: FormItemProps;
  colOffSet?: number | string;
  items?: any[];
  loading?: boolean;
  onDropdownVisibleChange?: (open: boolean) => void;
}
const { Option } = Select;
const FormDropdown = (props: IProps) => {
  const { options, formItem, colOffSet, items, onDropdownVisibleChange, loading } = props;
  return (
    <Form.Item {...formItem}>
      <Select onDropdownVisibleChange={onDropdownVisibleChange} placeholder="---All---" loading={loading}>
        <Option key="">---All---</Option>
        {items?.map((i) => {
          return <Option key={i?.id}>{i?.title}</Option>;
        })}
      </Select>
    </Form.Item>
  );
};

export default FormDropdown;
