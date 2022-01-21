import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { actionDetailMaterials } from '../redux/actions';

export function useDetailMaterial() {
  const dispatch = useDispatch();
  const { dataMaterial: item, loading } = useSelector((state: RootState) => state.materials.detailMaterialState);
  const getDetailMaterial = useCallback((id: string) => {
    dispatch(actionDetailMaterials({ id }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    getDetailMaterial,
    item,
    loading,
  };
}
