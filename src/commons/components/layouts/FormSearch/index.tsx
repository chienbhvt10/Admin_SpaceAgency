import React from 'react';
import BaseButton from 'commons/components/layouts/BaseButton';
import InputGroup from 'commons/components/layouts/InputGroup/index';
import './style.scss';
interface IProps {
  handleSearch: () => void;
  onChange: (e: any) => void;
  onReset?: () => void;
  value: string;
  disabled?: boolean;
}
export const FormSearch = (props: IProps) => {
  return (
    <div id="form-search">
      <InputGroup value={props.value} onChange={props.onChange} label="Keyword" placeholder="Type to search..." />
      <div className="wrapper-search">
        <BaseButton
          text="Reset"
          width={''}
          height={''}
          marginRight="5px"
          marginLeft="50px"
          disabled={props.disabled}
          backgroundColor="#6C757D"
          onClick={props.onReset}
        />
        <BaseButton
          text="Search"
          width={''}
          height={''}
          disabled={props.disabled}
          border="1px solid #007BFF"
          marginRight={''}
          backgroundColor="#007BFF"
          onClick={props.handleSearch}
          marginLeft={''}
        />
      </div>
    </div>
  );
};
