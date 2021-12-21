/**
 * config component hỗ trợ router
 * các route khi được bọc bởi component này sẽ được kiểm tra đã đăng nhập chưa
 * nếu chưa đăng nhập sẽ đưa ra trang đăng nhập và lưu lại redirect url
 */
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NEXT_LOCALE } from 'commons/type';
import { setNavigate } from 'helpers/history';
import { autoLoginFlow } from 'modules/Auth/redux/actions';
import React from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { useNavigate, useRoutes } from 'react-router-dom';
import routes from './router';

function ElementConfig() {
  const element = useRoutes(routes);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [cookies, setCookie] = useCookies([NEXT_LOCALE]);

  React.useEffect(() => {
    if (pathname) {
      setCookie(NEXT_LOCALE, pathname, { path: '/' });
    }
    // eslint-disable-next-line
  }, [pathname]);

  React.useEffect(() => {
    setNavigate(navigate);
    // eslint-disable-next-line
  }, []);
  React.useEffect(() => {}, []);
  return <>{element}</>;
}

export default ElementConfig;
