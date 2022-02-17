import { CreateStyleVariables } from 'graphql/generated/graphql';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { actionCreateStyle } from '../redux/actions';

export const useCreateStyle = () => {
  const dispatch = useDispatch();
  const { dataStyle: createDataStyle, loading } = useSelector((state: RootState) => state.styles.createStyle);
  const createStyle = useCallback((variables: CreateStyleVariables) => {
    dispatch(actionCreateStyle(variables));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    createStyle,
    loading,
    createDataStyle,
  };
};
