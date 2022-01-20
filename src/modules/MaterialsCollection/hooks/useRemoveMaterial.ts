import { RemoveMaterialVariables } from 'graphql/generated/graphql';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { actionRemoveMaterial } from '../redux/actions';

export function useRemoveMaterial() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.materials.materialsState);
  const removeMaterial = useCallback(
    (variables: RemoveMaterialVariables) => {
      dispatch(actionRemoveMaterial(variables));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
  return {
    loading,
    removeMaterial,
  };
}
