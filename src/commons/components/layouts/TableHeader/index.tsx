import { Card } from 'antd';
import { CardProps } from 'antd/lib/card';
import React from 'react';
import './style.scss';

export default function TableHeader(props: CardProps) {
  return (
    <Card className="table-header-style" bordered={false} {...props}>
      {props.children}
    </Card>
  );
}
