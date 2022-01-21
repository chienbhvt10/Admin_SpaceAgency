import { UpdateMaterialVariables } from 'graphql/generated/graphql';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { actionUpdateMaterial } from '../redux/actions';

export function useUpdateMaterial() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.materials.materialsState);
  const updateMaterial = useCallback((variables: UpdateMaterialVariables) => {
    dispatch(actionUpdateMaterial(variables));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    updateMaterial,
    loading,
  };
}
