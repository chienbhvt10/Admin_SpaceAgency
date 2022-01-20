import { getStyle } from './../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { useCallback } from 'react';

export const useStyleDetail = () => {
  const dispatch = useDispatch();
  const { dataStyle: item, loading } = useSelector((state: RootState) => state.styles.getStyleState);
  const getStyleDetail = useCallback((id: string) => {
    dispatch(getStyle({ id }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    getStyleDetail,
    item,
    loading,
  };
};
