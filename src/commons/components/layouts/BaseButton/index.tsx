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
}
function BaseButton(props: IProps) {
  const { width, height, border, marginRight, marginLeft, backgroundColor, onClick } = props;
  return (
    <button
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
      onClick={onClick}
    >
      {props.text}
    </button>
  );
}
export default BaseButton;
