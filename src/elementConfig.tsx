import { useRoutes } from 'react-router-dom';
import routes from './router';
import env from './env';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { CommonPath } from './commons/base-routes';
import 'bootstrap/dist/css/bootstrap.min.css';

function ElementConfig() {
  const element = useRoutes(routes);
  const token = localStorage.getItem(env.tokenKey);
  const navigate = useNavigate();
  React.useEffect(() => {
    if (token) {
      navigate(CommonPath.LOGIN_PATH);
    } else {
      navigate(CommonPath.DEFAULT_PATH);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <>{element}</>;
}

export default ElementConfig;
