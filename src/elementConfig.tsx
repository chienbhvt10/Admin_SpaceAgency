import 'bootstrap/dist/css/bootstrap.min.css';
import { setNavigate } from 'helpers/history';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useRoutes } from 'react-router-dom';
import { CommonPath } from './commons/base-routes';
import env from './env';
import { appStart } from './redux/actions';
import routes from './router';
import 'antd/dist/antd.css';

function ElementConfig() {
  const element = useRoutes(routes);
  const token = localStorage.getItem(env.tokenKey);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  React.useEffect(() => {
    setNavigate(navigate);
    dispatch(appStart());
    // eslint-disable-next-line
  }, []);
  React.useEffect(() => {
    if (token === null) {
      navigate(CommonPath.LOGIN_PATH);
    } else {
      navigate(CommonPath.DEFAULT_PATH);
    }
    // eslint-disable-next-line
  }, []);
  return <>{element}</>;
}

export default ElementConfig;
