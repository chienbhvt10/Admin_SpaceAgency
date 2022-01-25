import { RemoveSimulationVariables } from 'graphql/generated/graphql';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { actionRemoveSimulation } from '../redux/actions';

export function useRemoveSimulation() {
  const dispatch = useDispatch();
  const removeSimulation = useCallback((variables: RemoveSimulationVariables) => {
    dispatch(actionRemoveSimulation(variables));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    removeSimulation,
  };
}
