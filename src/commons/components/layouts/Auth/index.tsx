import React from 'react';
export interface BaseLayoutProps {
  children: React.ReactNode;
}
const AuthLayout = (props: BaseLayoutProps) => {
  return <>{props.children}</>;
};
export default AuthLayout;
