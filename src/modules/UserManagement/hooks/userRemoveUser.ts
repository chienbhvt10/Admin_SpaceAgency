import { RemoveUserVariables } from 'graphql/generated/graphql';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { actionRemoveUser } from '../redux/actions';

export function useRemoveUser() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.users.removeUser);
  const removeUser = useCallback(
    (variables: RemoveUserVariables) => {
      dispatch(actionRemoveUser(variables));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
  return {
    loading,
    removeUser,
  };
}
