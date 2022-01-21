import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { actionDetailStyle } from '../redux/actions';

export const useStyleDetail = () => {
  const dispatch = useDispatch();
  const { dataStyle: item, loading } = useSelector((state: RootState) => state.styles.detailStyle);

  const getDetailStyle = useCallback((id: string) => {
    dispatch(actionDetailStyle({ id }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    getDetailStyle,
    item,
    loading,
  };
};
