import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionDefaultThemes, actionThemes } from '../redux/actions';
import { RootState } from 'redux/reducers';

export function useGetAllThemes() {
  const dispatch = useDispatch();
  const { dataThemes: dataAllThemes, loading } = useSelector((state: RootState) => state.themes.themesState);
  const getAllThemes = useCallback(() => {
    dispatch(
      actionThemes({
        pagination: {
          skip: 0,
          limit: 1000,
        },
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const defaultThemes = useCallback(() => {
    dispatch(actionDefaultThemes());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    getAllThemes,
    dataAllThemes,
    loading,
    defaultThemes,
  };
}
