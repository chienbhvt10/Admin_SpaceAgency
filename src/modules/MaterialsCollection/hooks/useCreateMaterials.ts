import { CreateMaterialVariables } from 'graphql/generated/graphql';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreateMaterials } from '../redux/actions';
import { RootState } from 'redux/reducers';

export function useCreateMaterials() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.materials.createMaterialsState);
  const createMaterials = useCallback((variables: CreateMaterialVariables) => {
    dispatch(actionCreateMaterials(variables));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    createMaterials,
    loading,
  };
}
