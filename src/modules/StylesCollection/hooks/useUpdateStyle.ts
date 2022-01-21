import { UpdateStyleVariables } from 'graphql/generated/graphql';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { actionUpdateStyle } from '../redux/actions';

export const useUpdateStyle = () => {
  const dispatch = useDispatch();
  const { dataStyle: updateDataStyle, loading } = useSelector((state: RootState) => state.styles.updateStyle);
  const updateStyle = React.useCallback((variables: UpdateStyleVariables) => {
    dispatch(actionUpdateStyle(variables));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    updateStyle,
    loading,
    updateDataStyle,
  };
};
