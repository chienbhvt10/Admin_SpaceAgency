import { RemoveThemeVariables } from 'graphql/generated/graphql';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { actionRemoveTheme } from '../redux/actions';

export function useRemoveTheme() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.themes.themesState);
  const removeTheme = useCallback(
    (variables: RemoveThemeVariables) => {
      dispatch(actionRemoveTheme(variables));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
  return {
    loading,
    removeTheme,
  };
}
