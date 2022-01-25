import { DetailSimulationVariables } from 'graphql/generated/graphql';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { actionDetailSimulation } from '../redux/actions';

export function useDetailSimulation() {
  const dispatch = useDispatch();
  const { loading, dataSimulation } = useSelector((state: RootState) => state.simulations.detailSimulationState);
  const detailSimulation = useCallback((variables: DetailSimulationVariables) => {
    dispatch(actionDetailSimulation(variables));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    loading,
    dataSimulation,
    detailSimulation,
  };
}
