import { GetListThemesVariables } from 'graphql/generated/graphql';
import { useListThemes } from 'modules/ThemesCollection/hooks/useListThemes';
import { actionThemes } from 'modules/ThemesCollection/redux/actions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';

export const useOptionTheme = () => {
  const dispatch = useDispatch();
  const { loading, pagination, where, dataThemes } = useSelector((state: RootState) => state.themes.themesState);

  const variables: GetListThemesVariables = {
    pagination,
    where,
  };
  useEffect(() => {
    dispatch(actionThemes(variables));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    loading,
    dataThemes,
  };
};
