import { TypePagination } from 'commons/type';
import { FilterInput, GetListUsersVariables } from 'graphql/generated/graphql';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { actionUsers } from '../redux/actions';

export function useListUsers() {
  const dispatch = useDispatch();
  const { loading, dataUsers, pagination, where } = useSelector((state: RootState) => state.users.usersState);
  const variables: GetListUsersVariables = {
    pagination,
    where,
  };
  React.useEffect(() => {
    dispatch(actionUsers(variables));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const updatePaginationUser = (skip: number, limit: number) => {
    dispatch(
      actionUsers({
        pagination: { skip, limit },
        where: { ...where },
      }),
    );
  };
  const filterPaginationUser = (filter: FilterInput[]) => {
    dispatch(
      actionUsers({
        pagination: {
          limit: TypePagination.DEFAULT_LIMIT,
          skip: TypePagination.DEFAULT_SKIP,
        },
        where: {
          filter,
        },
      }),
    );
  };
  const skip = pagination.skip || 0;
  const limit = pagination.limit || 20;
  const paginationUser = {
    pageSize: pagination?.limit,
    current: skip / limit + 1,
    total: 200,
  };
  return {
    dataUsers,
    loading,
    paginationUser,
    updatePaginationUser,
    pagination,
    where,
    filterPaginationUser,
  };
}
