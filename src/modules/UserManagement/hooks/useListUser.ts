import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers';
import { getAllUser } from '../redux/actions/list-user';

export const useListUser = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state: RootState) => state.user.listUserState);
  React.useEffect(() => {
    if (dispatch) {
      dispatch(getAllUser());
    }
  }, [dispatch]);
  return {
    items,
    loading,
  };
};
