import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { UpdateTypeInput } from '../redux/action-types';
import { actionUpdateTheme } from '../redux/actions';

export function useUpdateThemes() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.themes.updateState);
  const updateTheme = useCallback((variables: UpdateTypeInput) => {
    dispatch(actionUpdateTheme(variables));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    loading,
    updateTheme,
  };
}
