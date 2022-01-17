import { PaginationConfig } from 'antd/lib/pagination';
import { GetListUsersVariables } from 'graphql/generated/graphql';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { actionUsers } from '../redux/actions';

export function useListUsers() {
  const dispatch = useDispatch();
  const { loading, dataUsers, pagination } = useSelector((state: RootState) => state.users.usersState);
  const variables: GetListUsersVariables = {
    pagination,
  };
  React.useEffect(() => {
    dispatch(actionUsers(variables));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const updatePaginationUser = (skip: number, limit: number) => {
    dispatch(
      actionUsers({
        pagination: { skip, limit },
      }),
    );
  };
  const skip = pagination.skip || 0;
  const limit = pagination.limit || 20;
  const paginationUser = {
    pageSize: pagination?.limit,
    current: skip / limit + 1,
    total: 20,
  };
  return {
    dataUsers,
    loading,
    paginationUser,
    updatePaginationUser,
    pagination,
  };
}
