import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreateUser } from '../redux/actions';
import { RootState } from 'redux/reducers';
import { CreateCustomerVariables } from 'graphql/generated/graphql';

export function useCreateUser() {
  const dispatch = useDispatch();
  const { dataUser: createDataUser, loading } = useSelector((state: RootState) => state.users.createUser);
  const createUser = useCallback((variables: CreateCustomerVariables) => {
    dispatch(actionCreateUser(variables));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    createUser,
    createDataUser,
    loading,
  };
}
