import React from 'react';
import EmptyLayout from '../Empty';

type Props = {
  children: React.ReactNode;
};

const BusinessCustomerLayout = (props: Props) => {
  return <EmptyLayout>{props.children}</EmptyLayout>;
};

export default BusinessCustomerLayout;
