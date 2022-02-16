import { DeleteOutlined, EditOutlined, QuestionCircleOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Button, Popconfirm, Space } from 'antd';
import React from 'react';

interface IProps {
  record: any;
  title: string;
  onDelete: (record: any) => () => void;
}

const TableRowAction = (props: IProps) => {
  const { onDelete, record, title } = props;
  return (
    <Space size="small">
      <Popconfirm
        title={title}
        cancelText="No"
        okText="Yes"
        placement="left"
        onConfirm={onDelete(record)}
        icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
      >
        <Button type="ghost" shape="circle" style={{ color: 'red' }} icon={<DeleteOutlined />} size="middle" />
      </Popconfirm>
      {/* <Button type="ghost" shape="circle" icon={<EllipsisOutlined />} size="middle" /> */}
    </Space>
  );
};

export default TableRowAction;
