import { Button } from 'antd';
import React from 'react';
import './styles/new.scss';
interface IProps {
  text: string;
  onNew: () => void;
}
function NewLayout(props: IProps) {
  return (
    <div id="newLayout">
      <Button type="primary" onClick={props.onNew}>
        {props.text}
      </Button>
    </div>
  );
}

export default NewLayout;
