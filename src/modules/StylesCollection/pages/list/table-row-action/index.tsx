import { Button, Popconfirm, Space } from 'antd';
import React from 'react';
import { DeleteOutlined, EditOutlined, QuestionCircleOutlined } from '@ant-design/icons';

interface IProps {
  record: any;
  title: string;
  onDelete: (record: any) => () => void;
  onEdit: (record: any) => () => void;
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
        <Button type="ghost" shape="circle" icon={<DeleteOutlined />} size="middle" />
      </Popconfirm>
    </Space>
  );
};

export default TableRowAction;
