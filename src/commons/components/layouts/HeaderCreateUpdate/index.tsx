import { Card } from 'antd';
import React from 'react';
import BaseButton from '../BaseButton';
import './style.scss';
interface IProps {
  title: React.ReactElement;
  children: React.ReactElement;
}
const HeaderCreateUpdate = (props: IProps) => {
  return (
    <div>
      <Card
        className="wrapper-header"
        bordered={false}
        {...props}
        extra={
          <div className="wrapper-button">
            <BaseButton
              text="Cancel"
              width={''}
              height={''}
              marginRight="5px"
              marginLeft="50px"
              backgroundColor="#6C757D"
            />
            <BaseButton
              text="Save"
              width={''}
              height={''}
              border="1px solid #007BFF"
              marginRight={''}
              backgroundColor="#007BFF"
              marginLeft={''}
            />
          </div>
        }
      >
        {props.children}
      </Card>
    </div>
  );
};

export default HeaderCreateUpdate;
