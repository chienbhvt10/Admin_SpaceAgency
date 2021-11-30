import React from 'react';
import HeaderLayout from './header';
import './styles/empty.scss';
import NavBar from './nav/index';
interface IProps {
  children: React.ReactNode;
}
function EmptyLayout(props: IProps) {
  return (
    <div id="emptyLayout">
      <HeaderLayout />
      <NavBar>{props.children}</NavBar>
    </div>
  );
}

export default EmptyLayout;
