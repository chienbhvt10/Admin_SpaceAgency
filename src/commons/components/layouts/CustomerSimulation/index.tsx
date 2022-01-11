import React from 'react';
import EmptyLayout from '../Empty';

interface Props {
  children: React.ReactNode;
}

const CustomerSimulationLayout = (props: Props) => {
  return <EmptyLayout>{props.children}</EmptyLayout>;
};

export default CustomerSimulationLayout;
