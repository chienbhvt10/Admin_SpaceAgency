import React from 'react';
import BaseButton from 'commons/components/layouts/BaseButton';
import InputGroup from 'commons/components/layouts/InputGroup/index';
import { Form, Input, Button, Select } from 'antd';
import './style.scss';
export const FormSearch = () => {
  const onReset = () => {
    console.log('ok');
  };
  const handleSearch = () => {
    console.log('1');
  };
  return (
    <div id="form-search">
      <InputGroup label="Keyword" placeholder="Type to search..." />
      <div className="wrapper-search">
        <BaseButton
          text="Reset"
          width={''}
          height={''}
          marginRight="5px"
          marginLeft="50px"
          backgroundColor="#6C757D"
          onClick={onReset}
        />
        <BaseButton
          text="Search"
          width={''}
          height={''}
          border="1px solid #007BFF"
          marginRight={''}
          backgroundColor="#007BFF"
          onClick={handleSearch}
          marginLeft={''}
        />
      </div>
    </div>
  );
};
