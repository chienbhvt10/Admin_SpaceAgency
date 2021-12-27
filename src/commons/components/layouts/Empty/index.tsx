import React from 'react';
import { useDispatch } from 'react-redux';
import { appStart } from 'redux/actions';
import NavBar from './nav/index';
import './styles/empty.scss';
interface IProps {
  children: React.ReactNode;
}
function EmptyLayout(props: IProps) {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(appStart());
  }, []);
  return (
    <div id="emptyLayout">
      {/* <HeaderLayout /> */}
      <NavBar>{props.children}</NavBar>
    </div>
  );
}

export default EmptyLayout;
