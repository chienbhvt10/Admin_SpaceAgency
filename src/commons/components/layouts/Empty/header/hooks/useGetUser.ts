import { getUser } from 'modules/User/redux/actions';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';

export const useGetUser = () => {
  const { loading, data } = useSelector((state: RootState) => state.user.userState);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getUser());
  }, []);
  return {
    loading,
    data,
  };
};
