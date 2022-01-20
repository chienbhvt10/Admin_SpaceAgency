import { Button } from 'antd';
import React from 'react';
interface IProps {
  width: string;
  height: string;
  text: string;
  marginRight: string;
  marginLeft: string;
  border?: string;
  backgroundColor?: string;
  onClick?(): void;
  type?: any;
  htmlType?: any;
  loading?: boolean;
}
function BaseButton(props: IProps) {
  const { width, height, border, marginRight, marginLeft, backgroundColor, onClick, type, htmlType, loading } = props;
  return (
    <Button
      type={type}
      htmlType={htmlType}
      loading={loading}
      onClick={onClick}
      style={{
        width,
        height,
        backgroundColor,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight,
        marginLeft,
        borderRadius: '4px',
        border,
        borderStyle: 'none',
        color: '#fff',
        padding: '6px 12px',
        cursor: 'pointer',
      }}
    >
      {props.text}
    </Button>
  );
}
export default BaseButton;
