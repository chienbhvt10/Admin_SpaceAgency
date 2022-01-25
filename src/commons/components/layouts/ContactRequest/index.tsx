import React from 'react';
import EmptyLayout from '../Empty';

interface Props {
  children: React.ReactNode;
}

const ContactRequestLayout = (props: Props) => {
  return <EmptyLayout>{props.children}</EmptyLayout>;
};

export default ContactRequestLayout;
