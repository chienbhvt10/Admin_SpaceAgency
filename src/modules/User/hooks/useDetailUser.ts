import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailUser } from '../redux/actions';
import { RootState } from 'redux/reducers';

export const useDetailUser = (id?: string) => {
  const dispatch = useDispatch();
  const { loading, item } = useSelector((state: RootState) => state.user.getDetailUserState);
  React.useEffect(() => {
    if (dispatch && id) {
      dispatch(getDetailUser(id));
    }
  }, [dispatch, id]);
  return {
    loading,
    item,
  };
};
