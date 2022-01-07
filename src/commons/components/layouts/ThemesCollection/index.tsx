import React from 'react';
import EmptyLayout from '../Empty';

interface IProps {
  children: React.ReactNode;
}
const ThemeCollectionLayout = (props: IProps) => {
  return <EmptyLayout>{props.children}</EmptyLayout>;
};

export default ThemeCollectionLayout;
