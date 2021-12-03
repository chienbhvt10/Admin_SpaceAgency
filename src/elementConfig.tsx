import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NEXT_LOCALE } from 'commons/type';
import { setNavigate } from 'helpers/history';
import React from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { useNavigate, useRoutes } from 'react-router-dom';
import { CommonPath } from './commons/base-routes';
import env from './env';
import { appStart } from './redux/actions';
import routes from './router';

function ElementConfig() {
  const element = useRoutes(routes);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const token = localStorage.getItem(env.tokenKey);
  const [cookies, setCookie] = useCookies([NEXT_LOCALE]);

  React.useEffect(() => {
    if (pathname) {
      setCookie(NEXT_LOCALE, pathname, { path: '/' });
    }
    // eslint-disable-next-line
  }, [pathname]);

  React.useEffect(() => {
    setNavigate(navigate);
    dispatch(appStart());
    // eslint-disable-next-line
  }, []);
  React.useEffect(() => {
    if (token === null) {
      navigate(CommonPath.LOGIN_PATH);
    } else {
      navigate(cookies.NEXT_LOCALE);
    }
    // eslint-disable-next-line
  }, [token]);
  React.useEffect(() => {}, []);
  return <>{element}</>;
}

export default ElementConfig;
