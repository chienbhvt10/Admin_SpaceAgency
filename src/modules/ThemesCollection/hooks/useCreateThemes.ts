import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { CreateTypeInput } from '../redux/action-types';
import { actionCreateTheme } from '../redux/actions/create-theme';

export const useCreateThemes = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.themes.createState);
  const createTheme = useCallback((variables: CreateTypeInput) => {
    dispatch(actionCreateTheme(variables));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    loading,
    createTheme,
  };
};
