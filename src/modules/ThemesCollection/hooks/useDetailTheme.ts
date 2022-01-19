import { GetDetailThemeVariables } from 'graphql/generated/graphql';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { actionDetailTheme } from '../redux/actions';

export function useDetailTheme() {
  const dispatch = useDispatch();
  const { loading, dataDetailTheme: items } = useSelector((state: RootState) => state.themes.detailState);
  const getDetailTheme = useCallback((variables: GetDetailThemeVariables) => {
    dispatch(actionDetailTheme(variables));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    loading,
    getDetailTheme,
    items,
  };
}
