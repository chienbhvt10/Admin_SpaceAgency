import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { actionDetailRequest } from '../redux/actions';

export const useRequestDetail = () => {
  const dispatch = useDispatch();
  const { dataRequest: item, loading } = useSelector((state: RootState) => state.requests.detailRequest);

  const getDetailRequest = useCallback((id: string) => {
    dispatch(actionDetailRequest({ id }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    getDetailRequest,
    item,
    loading,
  };
};
