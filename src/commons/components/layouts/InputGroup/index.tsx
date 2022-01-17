import React from 'react';
import { Input } from 'antd';
import './style.scss';
interface Iprops {
  label: string;
  placeholder: string;
  onChange: (e: any) => void;
  value: string;
}
export default function InputGroup(props: Iprops) {
  return (
    <div id="input-group">
      <div className="form_title">{props.label && <label htmlFor="app-input-field">{props.label}</label>}</div>
      <Input value={props.value} placeholder={props.placeholder} onChange={props.onChange} />
    </div>
  );
}
