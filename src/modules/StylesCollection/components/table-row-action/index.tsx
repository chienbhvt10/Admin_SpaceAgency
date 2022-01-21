import { DeleteOutlined, EditOutlined, EllipsisOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Button, Popconfirm, Space } from 'antd';
import { IStyle } from 'graphql/generated/graphql';
import React from 'react';

interface IProps {
  record: any;
  title: string;
  onDelete: (record: IStyle) => () => void;
  onEdit: (record: IStyle) => () => void;
}

const TableRowAction = (props: IProps) => {
  const { onDelete, onEdit, record, title } = props;
  return (
    <Space size="small">
      <Button type="ghost" onClick={onEdit(record)} shape="circle" icon={<EditOutlined />} size="middle" />
      <Popconfirm
        title={title}
        cancelText="No"
        okText="Yes"
        placement="left"
        onConfirm={onDelete(record)}
        icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
      >
        <Button style={{ color: 'red' }} type="ghost" shape="circle" icon={<DeleteOutlined />} size="middle" />
      </Popconfirm>
      <Button type="ghost" shape="circle" icon={<EllipsisOutlined />} size="middle" />
    </Space>
  );
};

export default TableRowAction;
