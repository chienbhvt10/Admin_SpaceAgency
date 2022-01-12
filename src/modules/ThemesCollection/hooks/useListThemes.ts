import { GetListThemesVariables } from 'graphql/generated/graphql';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { actionThemes } from '../redux/actions';

export const useListThemes = () => {
  const dispatch = useDispatch();
  const { loading, dataThemes, pagination } = useSelector((state: RootState) => state.themes.themesState);
  const variables: GetListThemesVariables = {
    pagination,
  };
  React.useEffect(() => {
    dispatch(actionThemes(variables));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    dataThemes,
    loading,
  };
};
