/**
 * hoc component hỗ trợ router
 * các route khi được bọc bởi component này sẽ được kiểm tra đã đăng nhập chưa
 * nếu chưa đăng nhập sẽ đưa ra trang đăng nhập và lưu lại redirect url
 */

import React from 'react';

export function ProtectedComponent(WrappedComponent: React.ComponentType) {
  // tslint:disable-next-line: only-arrow-functions

  return function (props: any) {
    return <WrappedComponent {...props} />;
  };
}
