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
import { autoLoginFlow } from './modules/Auth/redux/actions/login';
import routes from './router';

function ElementConfig() {
  const element = useRoutes(routes);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  // const [cookies, setCookie, removeCookie] = useCookies([]);

  // React.useEffect(() => {
  //   if (pathname) {
  //     setCookie()
  //   }
  // },[pathname])

  React.useEffect(() => {
    dispatch(autoLoginFlow());
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    setNavigate(navigate);
    // eslint-disable-next-line
  }, []);
  React.useEffect(() => {}, []);
  return <>{element}</>;
}

export default ElementConfig;
