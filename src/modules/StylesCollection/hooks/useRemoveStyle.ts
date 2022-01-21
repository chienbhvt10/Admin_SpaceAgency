import { RemoveStyleVariables, RemoveUserVariables } from 'graphql/generated/graphql';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { actionRemoveStyle } from '../redux/actions';

export function useRemoveStyle() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.styles.removeStyle);
  const removeStyle = useCallback(
    (variables: RemoveStyleVariables) => {
      dispatch(actionRemoveStyle(variables));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
  return {
    loading,
    removeStyle,
  };
}
