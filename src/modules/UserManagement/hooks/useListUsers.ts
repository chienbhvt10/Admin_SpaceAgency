import { TypePagination } from 'commons/type';
import { FilterInput, GetListUsersVariables, PaginationInput, SortInput, SortValue } from 'graphql/generated/graphql';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { actionUsers } from '../redux/actions';

export function useListUsers() {
  const dispatch = useDispatch();
  const arrSortDefault: SortInput[] = [{ key: 'email', value: undefined }];
  const { loading, dataUsers, pagination, where, total } = useSelector((state: RootState) => state.users.usersState);
  const variables: GetListUsersVariables = {
    pagination,
    where,
  };
  React.useEffect(() => {
    dispatch(actionUsers(variables));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const updatePaginationAndSorterUser = (pagination: PaginationInput, sortInput: SortInput) => {
    const arrSort = [...(where?.sort?.length ? where?.sort : arrSortDefault)];
    if (sortInput && sortInput.value) {
      const sort = arrSort.map((i) => ({
        ...i,
        value: i.key === sortInput.key ? sortInput.value : undefined,
      }));
      dispatch(
        actionUsers({
          pagination,
          where: { ...where, sort },
        }),
      );
    } else {
      dispatch(
        actionUsers({
          pagination,
          where: { ...where, sort: [] },
        }),
      );
    }
  };
  const filterUser = (filter: FilterInput[]) => {
    dispatch(
      actionUsers({
        pagination: {
          limit: TypePagination.DEFAULT_LIMIT,
          skip: TypePagination.DEFAULT_SKIP,
        },
        where: {
          ...where,
          filter,
        },
      }),
    );
  };
  const skip = pagination.skip || 0;
  const limit = pagination.limit || 20;
  const paginationTable = {
    pageSize: pagination.limit || TypePagination.DEFAULT_LIMIT,
    current: skip / limit + 1,
    total: total || 0,
  };
  return {
    dataUsers,
    loading,
    pagination,
    where,
    paginationTable,
    updatePaginationAndSorterUser,
    filterUser,
  };
}
