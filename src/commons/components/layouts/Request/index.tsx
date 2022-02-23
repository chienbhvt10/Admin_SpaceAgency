import React from 'react';
import EmptyLayout from '../Empty';

interface Props {
  children: React.ReactNode;
}

const RequestLayout = (props: Props) => {
  return <EmptyLayout>{props.children}</EmptyLayout>;
};

export default RequestLayout;
