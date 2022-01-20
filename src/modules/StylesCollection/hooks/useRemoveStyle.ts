import { RemoveStyleVariables } from 'graphql/generated/graphql';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';

export const useRemoveStyle = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.styles.removeStyleState);
  const removeStyle = React.useCallback(
    (variables: RemoveStyleVariables) => {
      dispatch(removeStyle(variables));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
  return {
    loading,
    removeStyle,
  };
};
