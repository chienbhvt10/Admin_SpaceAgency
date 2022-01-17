import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionDetailUser } from '../redux/actions';
import { RootState } from 'redux/reducers';

export function useDetailUser() {
  const dispatch = useDispatch();
  const { dataUser: item, loading } = useSelector((state: RootState) => state.users.detailUser);
  const getDetailUser = useCallback((id: string) => {
    dispatch(actionDetailUser({ id }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    getDetailUser,
    item,
    loading,
  };
}
