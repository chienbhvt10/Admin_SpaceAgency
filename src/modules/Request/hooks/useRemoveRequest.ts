import { RemoveRequestVariables } from 'graphql/generated/graphql';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { actionRemoveRequest } from '../redux/actions';

export function useRemoveRequest() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.requests.removeRequest);
  const removeRequest = useCallback(
    (variables: RemoveRequestVariables) => {
      dispatch(actionRemoveRequest(variables));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
  return {
    loading,
    removeRequest,
  };
}
