import React from 'react';
import {  Input } from 'antd';
import './style.scss';
interface Iprops {
  label: string;
  placeholder: string;
}
export default function InputGroup(props: Iprops) {
  return (
    <div id="input-group">
      <div className="form_title">{props.label && <label htmlFor="app-input-field">{props.label}</label>}</div>
      <Input placeholder={props.placeholder} />
    </div>
  );
}
