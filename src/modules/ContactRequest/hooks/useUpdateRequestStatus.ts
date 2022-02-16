import { UpdateRequestStatusVariables } from 'graphql/generated/graphql';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { actionUpdateRequestStatus } from '../redux/actions';

export const useUpdateRequestStatus = () => {
  const dispatch = useDispatch();
  const { dataRequest: updateDataRequest, loading } = useSelector(
    (state: RootState) => state.requests.updateRequestStatus,
  );
  const updateRequestStatus = React.useCallback((variables: UpdateRequestStatusVariables) => {
    dispatch(actionUpdateRequestStatus(variables));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    updateRequestStatus,
    loading,
    updateDataRequest,
  };
};
