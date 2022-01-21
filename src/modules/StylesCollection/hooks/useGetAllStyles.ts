import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { actionDefaultStyles, actionStyles } from '../redux/actions';

export function useGetAllStyles() {
  const dispatch = useDispatch();
  const { dataStyles: dataAllStyles, loading } = useSelector((state: RootState) => state.styles.stylesState);
  const getAllStyles = useCallback(() => {
    dispatch(
      actionStyles({
        pagination: {
          skip: 0,
          limit: 1000,
        },
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const defaultStyles = useCallback(() => {
    dispatch(actionDefaultStyles());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    getAllStyles,
    dataAllStyles,
    loading,
    defaultStyles,
  };
}
