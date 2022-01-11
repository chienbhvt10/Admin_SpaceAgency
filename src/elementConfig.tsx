/**
 * config component hỗ trợ router
 * các route khi được bọc bởi component này sẽ được kiểm tra đã đăng nhập chưa
 * nếu chưa đăng nhập sẽ đưa ra trang đăng nhập và lưu lại redirect url
 */
import { setNavigate } from 'helpers/history';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { useNavigate, useRoutes } from 'react-router-dom';
import routes from './router';
import { autoLoginFlow } from './modules/Auth/redux/actions/login';

function ElementConfig() {
  const element = useRoutes(routes);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (pathname) {
      dispatch(autoLoginFlow());
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
