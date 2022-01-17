import { UpdateUserVariables } from 'graphql/generated/graphql';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { actionUpdateUser } from '../redux/actions/update-user';

export function useUpdateUser() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.users.usersState);
  const updateUser = useCallback((variables: UpdateUserVariables) => {
    dispatch(actionUpdateUser(variables));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    updateUser,
    loading,
  };
}
